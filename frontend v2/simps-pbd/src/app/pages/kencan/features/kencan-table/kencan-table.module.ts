import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { KencanTableComponent } from './kencan-table.component';

@NgModule({
  declarations: [KencanTableComponent],
  imports: [
    CommonModule,
    RouterModule,
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
