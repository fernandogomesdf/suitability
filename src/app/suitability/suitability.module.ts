import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuitabilityPageRoutingModule } from './suitability-routing.module';

import { SuitabilityPage } from './suitability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuitabilityPageRoutingModule
  ],
  declarations: [SuitabilityPage]
})
export class SuitabilityPageModule {}
