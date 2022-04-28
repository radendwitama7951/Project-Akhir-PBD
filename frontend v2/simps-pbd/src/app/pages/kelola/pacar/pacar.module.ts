import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasanganTableModule } from '../shared/pasangan-table/pasangan-table.module';
import { PacarComponent } from './pacar.component';
import { PasanganAddFormTriggerModule } from '../shared/pasangan-add-form-trigger/pasangan-add-form-trigger.module';

@NgModule({
  declarations: [PacarComponent],
  imports: [CommonModule, PasanganTableModule, PasanganAddFormTriggerModule],
  exports: [PacarComponent],
})
export class PacarModule {}
