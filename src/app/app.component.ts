/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'desktop' },
    { title: 'Suitability', url: '/suitability', icon: 'reader' },
    { title: 'Clientes', url: '/cliente', icon: 'person' },
    { title: 'Consultores', url: '/funcionario', icon: 'id-card' },
    { title: 'Configurações', url: '/configuracao', icon: 'settings' },
    { title: 'Sair', url: '/login', icon: 'power', logout: true },
  ];

  constructor(private config: PrimeNGConfig) { }
  ngOnInit(): void {
    this.config.setTranslation({
      startsWith: 'Começa com',
      contains: 'Contém',
      notContains: 'Não contem',
      endsWith: 'Termina com',
      equals: 'Igual',
      notEquals: 'Não igual',
      noFilter: 'Sem filtro',
      lt: 'Menos que',
      lte: 'Menor ou igual a',
      gt: 'Maior que',
      gte: 'Great then or equals',
      is: 'É',
      isNot: 'Não é',
      before: 'Antes',
      after: 'Depois',
      clear: 'Limpar',
      apply: 'Aplicar',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Add Rule',
      removeRule: 'Remove Rule',
      accept: 'Sim',
      reject: 'Não',
      choose: 'Escolher',
      upload: 'Upload',
      cancel: 'Cancelar',
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      today: 'Hoje',
      weekHeader: 'Wk',
      weak: 'Weak',
      medium: 'Média',
      strong: 'Forte',
      passwordPrompt: 'Enter a password',
      emptyMessage: 'Nada encontrado',
      emptyFilterMessage: 'Nenhum resultado encontrado'
    });
  }

  clicou(index) {
    const item = this.appPages[index];
    if (item.logout) {
      sessionStorage.clear();
    }
  }
}
