import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporanPageRoutingModule } from './laporan-routing.module';

import { LaporanPage } from './laporan.page';
import { LaporanContainerPageModule } from './laporan-container/laporan-container.module';
import { LineChartPengeluaranModule } from './features/line-chart-pengeluaran/line-chart-pengeluaran.module';
import { NgChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { LaporanResolverService } from './services/laporan-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    LaporanPageRoutingModule,
    LaporanContainerPageModule,
    LineChartPengeluaranModule,
    NgChartsModule,
  ],
  declarations: [LaporanPage],
  providers: [LaporanResolverService],
})
export class LaporanPageModule {}
