import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptiondonePageRoutingModule } from './inscriptiondone-routing.module';

import { InscriptiondonePage } from './inscriptiondone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptiondonePageRoutingModule
  ],
  declarations: [InscriptiondonePage]
})
export class InscriptiondonePageModule {}
