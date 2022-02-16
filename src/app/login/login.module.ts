import { HeaderModule } from './../header/header.module';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    CardModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    HeaderModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {
}
