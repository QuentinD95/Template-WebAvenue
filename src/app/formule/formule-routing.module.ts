import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulePage } from './formule.page';

const routes: Routes = [
  {
    path: '',
    component: FormulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulePageRoutingModule {}
