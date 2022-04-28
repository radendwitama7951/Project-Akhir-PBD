import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelingkuhanTableModule } from './features/selingkuhan-table/selingkuhan-table.module';
import { SelingkuhanComponent } from './selingkuhan.component';
import { PasanganTableModule } from '../shared/pasangan-table/pasangan-table.module';
import { PasanganAddFormModule } from '../shared/pasangan-add-form/pasangan-add-form.module';
import { IonicModule } from '@ionic/angular';
import { PasanganAddFormTriggerModule } from '../shared/pasangan-add-form-trigger/pasangan-add-form-trigger.module';

@NgModule({
  declarations: [SelingkuhanComponent],
  imports: [
    CommonModule,
    IonicModule,
    SelingkuhanTableModule,
    PasanganTableModule,
    PasanganAddFormTriggerModule,
  ],
  exports: [SelingkuhanComponent],
})
export class SelingkuhanModule {}
