import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WokPage } from './wok.page';

const routes: Routes = [
  {
    path: '',
    component: WokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WokPageRoutingModule {}
