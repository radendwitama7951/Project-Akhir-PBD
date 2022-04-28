import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantanComponent } from './mantan.component';
import { PasanganTableModule } from '../shared/pasangan-table/pasangan-table.module';
import { PasanganAddFormTriggerModule } from '../shared/pasangan-add-form-trigger/pasangan-add-form-trigger.module';

@NgModule({
  declarations: [MantanComponent],
  imports: [
    CommonModule,
    PasanganTableModule,
    PasanganAddFormTriggerModule,
  ],
  exports: [MantanComponent],
})
export class MantanModule {}
