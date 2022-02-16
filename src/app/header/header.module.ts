import { CommonModule } from '@angular/common';
import { JwtHelperService, JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { LoginGuard } from './../guards/login.guard';
import { ToastModule } from 'primeng/toast';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    IonicModule,
    ToastModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [LoginGuard]
})
export class HeaderModule { }
