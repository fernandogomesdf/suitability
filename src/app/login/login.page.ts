import { Component, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulario: any = {};
  faBookmark = faBookmark;

  constructor() { }

  ngOnInit() {
  }

  login() { }

  cadastro() { }

}
