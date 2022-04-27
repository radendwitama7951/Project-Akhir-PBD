import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { KencanTableComponent } from './kencan-table.component';
import { MatSortModule } from '@angular/material/sort';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [KencanTableComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [KencanTableComponent],
})
export class KencanTableModule {}
