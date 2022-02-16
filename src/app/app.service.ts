/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, Output, EventEmitter } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { map, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable()
export class AppService {

  @Output() blockEmitter = new EventEmitter();

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.messageService.clear();
      }
    });
  }

  getServerHostPort() {
    let serverHostPort = location.protocol + '//localhost:8080/suitability';
    if ('4200' !== location.port) { // local
      serverHostPort = location.protocol + '//' + location.hostname + ':' + location.port + '/agendador';
    }
    return serverHostPort;
  }

  msgInfo(detail) {
    this.msg('info', 'Informação', detail);
  }

  msgWarn(detail) {
    this.msg('warn', 'Alerta', detail);
  }

  msgErro(detail) {
    this.msg('error', 'Erro', detail);
  }

  msgSucesso(detail) {
    this.msg('success', 'Sucesso', detail);
  }

  tratarErro(err) {
    try {
      if (err.status && err.status === 401) {
        this.router.navigate(['/login']);
      } else {
        if (err.error.type === 'error') {
          this.msgErro('Não foi possí­vel conectar no servidor.');
        } else {
          const resposta = err.error;
          if (resposta.message) {
            if (resposta.status === 500 || err.status === 500) {
              this.msgErro(resposta.message);
            } else {
              this.msgWarn(resposta.message);
            }
            if (resposta.exception) {
              console.log(resposta.exception);
            }
          } else {
            if (resposta.exception) {
              this.msgErro(resposta.exception);
            }
          }
        }
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  requestGet(url: string): Observable<any> {
    return this.request(url, null, VerboHttp.GET);
  }

  request(url: string, data: any, verbo: VerboHttp): Observable<any> {
    const token = sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };

    let response$;
    if (verbo === VerboHttp.GET) {
      response$ = this.getMethodoHttp(verbo)(this.getServerHostPort() + url, httpOptions).pipe(
        map(response => {
          try {
            return response;
          }
          catch (error) { return response; }
        }),
        share()
      );
    } else {
      response$ = this.getMethodoHttp(verbo)(this.getServerHostPort() + url, data, httpOptions).pipe(
        map(response => {
          try {
            return response;
          }
          catch (error) { return response; }
        }),
        share()
      );
    }
    return response$;
  }

  private msg(severity, summary, detail) {
    this.messageService.add({ severity, summary, detail });
  }

  private getMethodoHttp(verbo: VerboHttp) {
    switch (verbo) {
      case VerboHttp.PUT:
        return this.http.put;
      case VerboHttp.GET:
        return this.http.get;
      case VerboHttp.POST:
        return this.http.post;
      case VerboHttp.PATCH:
        return this.http.patch;
      case VerboHttp.DELETE:
        return this.http.delete;
      default:
        break;
    }
  }
}

export enum VerboHttp {
  PUT,
  GET,
  POST,
  PATCH,
  DELETE
}
