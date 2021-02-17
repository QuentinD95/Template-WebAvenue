import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptiondonePage } from './inscriptiondone.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptiondonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptiondonePageRoutingModule {}
