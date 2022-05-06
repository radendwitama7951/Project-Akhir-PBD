import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartPasanganKencanComponent } from './pie-chart-pasangan-kencan.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [PieChartPasanganKencanComponent],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [PieChartPasanganKencanComponent]
})
export class PieChartPasanganKencanModule { }
