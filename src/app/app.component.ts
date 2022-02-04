import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Suitability', url: '/suitability', icon: 'business' },
    { title: 'Clientes', url: '/folder/Outbox', icon: 'person' },
    { title: 'Configura��es', url: '/folder/Config', icon: 'settings' },
    { title: 'Sair', url: '/folder/Spam', icon: 'power' },
  ];

  constructor() {}
}
