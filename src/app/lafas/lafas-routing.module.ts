import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LafasPage } from './lafas.page';

const routes: Routes = [
  {
    path: '',
    component: LafasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LafasPageRoutingModule {}
