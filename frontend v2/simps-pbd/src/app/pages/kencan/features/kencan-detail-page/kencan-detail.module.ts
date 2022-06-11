import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

import { KencanDetailPageRoutingModule } from './kencan-detail-routing.module';
import { PasanganService } from 'src/app/core/services/pasangan.service';
import { KencanDetailPage } from './kencan-detail.page';
import { StepOneFormComponent } from './components/step-one-form/step-one-form.component';
import { StepTwoFormComponent } from './components/step-two-form/step-two-form.component';
import { StepThreeFormComponent } from './components/step-three-form/step-three-form.component';
import { StepFourFormComponent } from './components/step-four-form/step-four-form.component';
import { StepFiveFormComponent } from './components/step-five-form/step-five-form.component';

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
    KencanDetailPageRoutingModule,
  ],
  declarations: [
    KencanDetailPage,
    StepOneFormComponent,
    StepTwoFormComponent,
    StepOneFormComponent,
    StepThreeFormComponent,
    StepFourFormComponent,
    StepFiveFormComponent,
  ],
})
export class KencanDetailPageModule {
  constructor(private _pasanganService: PasanganService) {
    this._pasanganService.load();
  }
}
