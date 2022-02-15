import { HeaderComponent } from './../header/header.component';
import { AppService } from './../app.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    CardModule,
    PanelModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule
  ],
  declarations: [CadastroPage, HeaderComponent],
  providers: [MessageService, AppService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastroPageModule { }
