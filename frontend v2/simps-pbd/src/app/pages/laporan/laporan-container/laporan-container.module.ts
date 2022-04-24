import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporanContainerPage } from './laporan-container.page';
import { LineChartPengeluaranModule } from '../features/line-chart-pengeluaran/line-chart-pengeluaran.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LineChartPengeluaranModule],
  declarations: [LaporanContainerPage],
  exports: [LaporanContainerPage],
})
export class LaporanContainerPageModule {}
