import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    CardModule,
    PanelModule,
    InputTextModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule { }
