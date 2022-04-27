import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { IonicModule } from '@ionic/angular';
import { MatDialogModule } from '@angular/material/dialog';

import { PasanganTableComponent } from './pasangan-table.component';

@NgModule({
  declarations: [PasanganTableComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
  ],
  exports: [PasanganTableComponent],
})
export class PasanganTableModule {}
