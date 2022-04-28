import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeritaPageRoutingModule } from './berita-routing.module';

import { BeritaPage } from './berita.page';
import { NewsCardComponentModule } from './features/news-card/news-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeritaPageRoutingModule,
    NewsCardComponentModule,
  ],
  declarations: [BeritaPage],
})
export class BeritaPageModule {}
