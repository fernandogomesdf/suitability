import { ToastModule } from 'primeng/toast';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    IonicModule,
    ToastModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
