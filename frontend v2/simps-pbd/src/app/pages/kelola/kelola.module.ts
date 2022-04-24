import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatTabsModule } from '@angular/material/tabs';

import { KelolaPageRoutingModule } from './kelola-routing.module';
import { KelolaPage } from './kelola.page';
import { MantanModule } from './mantan/mantan.module';
import { PacarModule } from './pacar/pacar.module';
import { SelingkuhanModule } from './selingkuhan/selingkuhan.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KelolaPageRoutingModule,
    MatTabsModule,
    MantanModule,
    PacarModule,
    SelingkuhanModule,
  ],
  declarations: [KelolaPage],
})
export class KelolaPageModule {}
