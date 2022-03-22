import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { AppService, VerboHttp } from '../app.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

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
      { field: 'telefone', header: 'CPF' },
      { field: 'consultor', header: 'Telefone' },
      { field: 'acoes', header: 'Ações' }
    ];
    this.entidade = {};
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
      this.appService.request('/cliente/alterar', this.entidade, VerboHttp.POST).subscribe(data => {
        this.fecharEAtualizar();
        this.appService.msgSucesso('Registro alterado com sucesso!');
      });
    } else {
      this.appService.request('/cliente/inserir', this.entidade, VerboHttp.POST).subscribe(data => {
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
    this.appService.request('/usuario/buscar-clientes', event, VerboHttp.POST).subscribe(data => {
      this.entidades = data;
      this.totalRecords = data.totalRecords;
      this.loading = false;
    });
  }

  confirmaExcluir(item) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.appService.requestGet('/cliente/excluir/' + item.id).subscribe(data => {
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
