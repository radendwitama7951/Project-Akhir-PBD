import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantanComponent } from './mantan.component';
import { MantanTableModule } from './features/mantan-table/mantan-table.module';
import { PasanganTableModule } from '../shared/pasangan-table/pasangan-table.module';
import { PasanganAddFormTriggerModule } from '../shared/pasangan-add-form-trigger/pasangan-add-form-trigger.module';

@NgModule({
  declarations: [MantanComponent],
  imports: [
    CommonModule,
    MantanTableModule,
    PasanganTableModule,
    PasanganAddFormTriggerModule,
  ],
  exports: [MantanComponent],
})
export class MantanModule {}
