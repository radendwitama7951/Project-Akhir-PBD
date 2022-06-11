import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilsPageRoutingModule } from './utils-routing.module';

import { UtilsPage } from './utils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilsPageRoutingModule
  ],
  declarations: [UtilsPage]
})
export class UtilsPageModule {}
