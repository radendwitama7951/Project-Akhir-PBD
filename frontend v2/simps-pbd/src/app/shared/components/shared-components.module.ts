import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AppHeaderComponent],
  imports: [CommonModule, RouterModule, IonicModule],
  exports: [AppHeaderComponent],
})
export class SharedComponentsModule {}
