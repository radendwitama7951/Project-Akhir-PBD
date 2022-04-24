import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacarComponent } from './mantan.component';
import { PacarTableModule } from './features/mantan-table/mantan-table.module';

@NgModule({
  declarations: [PacarComponent],
  imports: [CommonModule, PacarTableModule],
  exports: [PacarComponent],
})
export class PacarModule {}
