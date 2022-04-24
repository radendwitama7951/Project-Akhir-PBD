import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { LineChartPengeluaranComponent } from './line-chart-pengeluaran.component';

@NgModule({
  declarations: [LineChartPengeluaranComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [LineChartPengeluaranComponent],
})
export class LineChartPengeluaranModule {}
