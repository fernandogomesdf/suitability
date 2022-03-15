import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { HeaderModule } from './../header/header.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IonicModule } from '@ionic/angular';

import { FuncionarioPageRoutingModule } from './funcionario-routing.module';

import { FuncionarioPage } from './funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionarioPageRoutingModule,
    HeaderModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    CardModule,
    CheckboxModule,
    InputMaskModule,
    ConfirmDialogModule
  ],
  declarations: [FuncionarioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FuncionarioPageModule { }
