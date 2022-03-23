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
      this.appService.request('/usuario/alterar-cliente', this.entidade, VerboHttp.PATCH).subscribe(data => {
        this.fecharEAtualizar();
        this.appService.msgSucesso('Registro alterado com sucesso!');
      });
    } else {
      this.appService.request('/usuario/inserir-cliente', this.entidade, VerboHttp.PUT).subscribe(data => {
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
        this.appService.request('/usuario/excluir', item.id, VerboHttp.DELETE).subscribe(data => {
          if (data.id) {
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
