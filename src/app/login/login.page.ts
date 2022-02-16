import { AppService, VerboHttp } from './../app.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulario: any = {};

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
  }

  login() {
    this.appService.request('/usuario/login', this.formulario, VerboHttp.POST).subscribe(result => {
      if (result.token) {
        sessionStorage.setItem('token', result.token);
        sessionStorage.setItem('nome', result.usuario.nome);
        let rotaRequerida = sessionStorage.getItem('rotarequerida');
        if (rotaRequerida) {
          rotaRequerida = '/' + rotaRequerida.replace(/,/g, '/');
          this.router.navigate([rotaRequerida]);
        } else {
          this.router.navigate(['/dashboard']);
        }
        sessionStorage.removeItem('rotarequerida');
      }
    });
  }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }

}
