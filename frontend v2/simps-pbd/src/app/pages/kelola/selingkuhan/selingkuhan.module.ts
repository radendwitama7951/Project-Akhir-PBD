import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelingkuhanTableModule } from './features/selingkuhan-table/selingkuhan-table.module';
import { SelingkuhanComponent } from './selingkuhan.component';
import { PasanganTableModule } from '../shared/pasangan-table/pasangan-table.module';

@NgModule({
  declarations: [SelingkuhanComponent],
  imports: [CommonModule, SelingkuhanTableModule, PasanganTableModule],
  exports: [SelingkuhanComponent],
})
export class SelingkuhanModule {}
