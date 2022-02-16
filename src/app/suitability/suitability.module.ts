import { HeaderModule } from './../header/header.module';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


import { SuitabilityPageRoutingModule } from './suitability-routing.module';

import { SuitabilityPage } from './suitability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitabilityPageRoutingModule,
    CardModule,
    TabViewModule,
    AccordionModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    HeaderModule
  ],
  declarations: [SuitabilityPage]
})
export class SuitabilityPageModule { }
