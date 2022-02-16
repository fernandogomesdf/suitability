import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'desktop' },
    { title: 'Suitability', url: '/suitability', icon: 'reader' },
    { title: 'Clientes', url: '/cliente', icon: 'person' },
    { title: 'Configurações', url: '/configuracao', icon: 'settings' },
    { title: 'Sair', url: '/login', icon: 'power', logout: true },
  ];

  constructor() { }

  clicou(index) {
    const item = this.appPages[index];
    if (item.logout) {
      sessionStorage.clear();
    }
  }
}
