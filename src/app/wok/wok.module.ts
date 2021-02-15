import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WokPageRoutingModule } from './wok-routing.module';

import { WokPage } from './wok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WokPageRoutingModule
  ],
  declarations: [WokPage]
})
export class WokPageModule {}
