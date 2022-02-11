import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formulario: any = {};

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  cadastrar() {
    if (!this.formulario.nomeEmpresa) {
      this.appService.msgWarn('O nome da empresa é necessário.');
    }
  }

}
