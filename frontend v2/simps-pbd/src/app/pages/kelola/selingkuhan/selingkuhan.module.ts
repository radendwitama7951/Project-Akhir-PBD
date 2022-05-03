import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelingkuhanComponent } from './selingkuhan.component';
import { PasanganTableModule } from '../shared/pasangan-table/pasangan-table.module';
import { IonicModule } from '@ionic/angular';
import { PasanganAddFormTriggerModule } from '../shared/pasangan-add-form-trigger/pasangan-add-form-trigger.module';

@NgModule({
  declarations: [SelingkuhanComponent],
  imports: [
    CommonModule,
    IonicModule,
    PasanganTableModule,
    PasanganAddFormTriggerModule,
  ],
  exports: [SelingkuhanComponent],
})
export class SelingkuhanModule {}
