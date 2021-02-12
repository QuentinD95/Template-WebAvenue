import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulePageRoutingModule } from './formule-routing.module';

import { FormulePage } from './formule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulePageRoutingModule
  ],
  declarations: [FormulePage]
})
export class FormulePageModule {}
