import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacarTableModule } from './features/pacar-table/pacar-table.module';
import { PasanganTableModule } from '../shared/pasangan-table/pasangan-table.module';
import { PacarComponent } from './pacar.component';

@NgModule({
  declarations: [PacarComponent],
  imports: [CommonModule, PacarTableModule, PasanganTableModule],
  exports: [PacarComponent],
})
export class PacarModule {}
