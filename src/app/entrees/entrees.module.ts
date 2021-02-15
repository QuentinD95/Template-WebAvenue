import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntreesPageRoutingModule } from './entrees-routing.module';

import { EntreesPage } from './entrees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntreesPageRoutingModule
  ],
  declarations: [EntreesPage]
})
export class EntreesPageModule {}
