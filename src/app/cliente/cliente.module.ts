import { HeaderModule } from './../header/header.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import { ClientePage } from './cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePageRoutingModule,
    HeaderModule
  ],
  declarations: [ClientePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientePageModule { }
