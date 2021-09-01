import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardModule } from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';


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
    AccordionModule
  ],
  declarations: [SuitabilityPage]
})
export class SuitabilityPageModule { }
