import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporanContainerPage } from './laporan-container.page';
import { LineChartPengeluaranModule } from '../features/line-chart-pengeluaran/line-chart-pengeluaran.module';
import { UserCardComponentModule } from '../features/user-card/user-card.module';
import { PieChartPasanganKencanModule } from '../features/pie-chart-pasangan-kencan/pie-chart-pasangan-kencan.module';
import { ListPasanganFavoritComponentModule } from '../features/list-pasangan-favorit/list-pasangan-favorit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineChartPengeluaranModule,
    PieChartPasanganKencanModule,
    UserCardComponentModule,
    ListPasanganFavoritComponentModule,
  ],
  declarations: [LaporanContainerPage],
  exports: [LaporanContainerPage],
})
export class LaporanContainerPageModule {}
