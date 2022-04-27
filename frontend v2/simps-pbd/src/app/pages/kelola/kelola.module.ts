import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';

import { KelolaPageRoutingModule } from './kelola-routing.module';
import { KelolaPage } from './kelola.page';
import { MantanModule } from './mantan/mantan.module';
import { PacarModule } from './pacar/pacar.module';
import { SelingkuhanModule } from './selingkuhan/selingkuhan.module';
import { PasanganDetailFormModule } from './shared/pasangan-detail-form/pasangan-detail-form.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    IonicModule,
    KelolaPageRoutingModule,
    PasanganDetailFormModule,
    MatDialogModule,
    MatTabsModule,
    MantanModule,
    PacarModule,
    SelingkuhanModule,
  ],
  declarations: [KelolaPage],
})
export class KelolaPageModule {}
