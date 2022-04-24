import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantanComponent } from './mantan.component';
import { MantanTableModule } from './features/mantan-table/mantan-table.module';
import { PasanganTableModule } from '../shared/pasangan-table/pasangan-table.module';

@NgModule({
  declarations: [MantanComponent],
  imports: [CommonModule, MantanTableModule, PasanganTableModule],
  exports: [MantanComponent],
})
export class MantanModule {}
