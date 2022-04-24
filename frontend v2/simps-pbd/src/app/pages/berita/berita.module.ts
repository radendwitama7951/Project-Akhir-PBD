import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeritaPageRoutingModule } from './berita-routing.module';

import { BeritaPage } from './berita.page';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { appEntityMetadata } from 'src/app/store/data/app-entity.config';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BeritaPageRoutingModule],
  declarations: [BeritaPage],
})
export class BeritaPageModule {}
