import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacarComponent } from './mantan.component';

@NgModule({
  declarations: [PacarComponent],
  imports: [CommonModule, PacarTableModule],
  exports: [PacarComponent],
})
export class PacarModule {}
