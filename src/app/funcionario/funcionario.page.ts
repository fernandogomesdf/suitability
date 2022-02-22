import { AppService, VerboHttp } from './../app.service';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.page.html',
  styleUrls: ['./funcionario.page.scss'],
})
export class FuncionarioPage implements OnInit {

  @ViewChild('dt', { static: true }) dataTable: Table;

  cols: any[];
  entidades: any[];
  entidade: any;
  totalRecords: number;
  loading: boolean;
  display: boolean;
  tituloDialog;

  constructor(private appService: AppService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'email', header: 'E-mail' },
      { field: 'cpf', header: 'CPF' },
      { field: 'acoes', header: 'Ações' }
    ];
    this.entidade = { gerar: ['true'] };
  }

  loadValoresLazy(event: LazyLoadEvent) {
    this.carregarDados(event);
  }

  novo() {
    this.display = true;
    this.ngOnInit();
  }

  salvar() {
    if (this.entidade.id) {
      this.appService.request('/funcionario/alterar', this.entidade, VerboHttp.POST).subscribe(data => {
        this.fecharEAtualizar();
        this.appService.msgSucesso('Registro alterado com sucesso!');
      });
    } else {
      this.appService.request('/funcionario/inserir', this.entidade, VerboHttp.POST).subscribe(data => {
        this.fecharEAtualizar();
        this.appService.msgSucesso('Registro incluído com sucesso!');
      });
    }
  }

  cancelar() {
    this.display = false;
  }

  selecionaEditar(item) {
    this.entidade = Object.assign({}, item);
    this.display = true;
  }

  carregarDados(event: LazyLoadEvent) {
    this.loading = true;
    this.appService.request('/funcionario/buscar', event, VerboHttp.POST).subscribe(data => {
      this.entidades = data;
      this.totalRecords = data.totalRecords;
      this.loading = false;
    });
  }

  confirmaExcluir(item) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.appService.requestGet('/funcionario/excluir/' + item.id).subscribe(data => {
          if (data.deletedCount > 0) {
            this.appService.msgSucesso('Registro excluído com sucesso!');
            this.dataTable.reset();
          }
        });
      },
      reject: () => {
      }
    });
  }

  private fecharEAtualizar() {
    this.ngOnInit();
    this.dataTable.reset();
    this.display = false;
  }
}
