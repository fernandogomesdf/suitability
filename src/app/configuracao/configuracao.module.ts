import { HeaderModule } from './../header/header.module';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracaoPageRoutingModule } from './configuracao-routing.module';

import { ConfiguracaoPage } from './configuracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracaoPageRoutingModule,
    HeaderModule
  ],
  declarations: [ConfiguracaoPage]
})
export class ConfiguracaoPageModule { }
