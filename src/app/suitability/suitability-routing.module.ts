import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuitabilityPage } from './suitability.page';

const routes: Routes = [
  {
    path: '',
    component: SuitabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuitabilityPageRoutingModule {}
