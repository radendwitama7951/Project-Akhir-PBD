import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { IonicModule } from '@ionic/angular';

import { KalenderPageRoutingModule } from './kalender-routing.module';

import { KalenderPage } from './kalender.page';
import { UtilsService } from 'src/app/core/services/utils.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalenderPageRoutingModule,
    CalendarModule,
  ],
  declarations: [KalenderPage],
})
export class KalenderPageModule {}
