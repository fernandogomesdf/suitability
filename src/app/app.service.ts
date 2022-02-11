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
    let serverHostPort = location.protocol + '//localhost:8080/agendador';
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
        this.router.navigate(['/publico/login']);
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

  requestPost(url: string, data: any): Observable<any> {
    const token = sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };

    const response$ = this.http.post(this.getServerHostPort() + url, data, httpOptions).pipe(
      map(response => {
        try {
          return response;
        }
        catch (error) { return response; }
      }),
      share()
    );
    return response$;
  }

  requestGetNaoBloqueante(url: string): Observable<any> {
    return this.requestGetPrivado(url, false, false);
  }

  requestGetExterno(url: string): Observable<any> {
    return this.requestGetPrivado(url, true, true);
  }

  requestGet(url: string): Observable<any> {
    return this.requestGetPrivado(url, true, false);
  }

  private requestGetPrivado(url: string, bloqueante: boolean, externo: boolean): Observable<any> {
    this.blockEmitter.emit({
      value: bloqueante
    });

    const token = sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    const response$ = this.http.get((externo ? '' : this.getServerHostPort()) + url, httpOptions).pipe(
      map(response => {
        try {
          return response;
        } catch (error) {
          return response;
        }
      }),
      share()
    );
    return response$;
  }

  private msg(severity, summary, detail) {
    this.messageService.add({ severity, summary, detail });
  }


}
