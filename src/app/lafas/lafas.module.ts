import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LafasPageRoutingModule } from './lafas-routing.module';

import { LafasPage } from './lafas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LafasPageRoutingModule
  ],
  declarations: [LafasPage]
})
export class LafasPageModule {}
