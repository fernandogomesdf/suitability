import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulario: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() { }

  cadastro() {
    this.router.navigate(['/cadastro']);
  }

}
