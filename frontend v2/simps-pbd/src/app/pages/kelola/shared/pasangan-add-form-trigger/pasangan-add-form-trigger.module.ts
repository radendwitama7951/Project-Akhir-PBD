import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasanganAddFormTriggerComponent } from './pasangan-add-form-trigger.component';
import { IonicModule } from '@ionic/angular';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PasanganAddFormTriggerComponent],
  imports: [CommonModule, IonicModule, MatDialogModule],
  exports: [PasanganAddFormTriggerComponent],
})
export class PasanganAddFormTriggerModule {}
