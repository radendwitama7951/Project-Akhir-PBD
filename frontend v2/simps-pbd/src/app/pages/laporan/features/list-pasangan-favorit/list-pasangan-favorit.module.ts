import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPasanganFavoritComponent } from './list-pasangan-favorit.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [ListPasanganFavoritComponent],
  exports: [ListPasanganFavoritComponent]
})
export class ListPasanganFavoritComponentModule {}
