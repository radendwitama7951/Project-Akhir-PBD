import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { KencanPageRoutingModule } from './kencan-routing.module';
import { KencanPage } from './kencan.page';
import { KencanTableComponent } from './features/kencan-table/kencan-table.component';
import { KencanTableModule } from './features/kencan-table/kencan-table.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KencanPageRoutingModule,
    KencanTableModule,
  ],
  declarations: [KencanPage],
})
export class KencanPageModule {}
