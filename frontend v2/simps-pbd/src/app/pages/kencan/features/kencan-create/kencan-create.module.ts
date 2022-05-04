import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

import { KencanCreatePageRoutingModule } from './kencan-create-routing.module';
import { KencanCreatePage } from './kencan-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    KencanCreatePageRoutingModule,
  ],
  declarations: [KencanCreatePage],
})
export class KencanCreatePageModule {}
