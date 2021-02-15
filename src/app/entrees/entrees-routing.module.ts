import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntreesPage } from './entrees.page';

const routes: Routes = [
  {
    path: '',
    component: EntreesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntreesPageRoutingModule {}
