import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { MatTabsModule } from '@angular/material/tabs';

import { KelolaPageRoutingModule } from './kelola-routing.module';
import { KelolaPage } from './kelola.page';
import { MantanModule } from './mantan/mantan.module';
import { PacarModule } from './pacar/pacar.module';
import { SelingkuhanModule } from './selingkuhan/selingkuhan.module';
import { PasanganDetailFormModule } from './shared/pasangan-detail-form/pasangan-detail-form.module';
import { PasanganAddFormModule } from './shared/pasangan-add-form/pasangan-add-form.module';
import { PasanganAddFormTriggerModule } from './shared/pasangan-add-form-trigger/pasangan-add-form-trigger.module';
import { PasanganService } from 'src/app/core/services/pasangan.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    KelolaPageRoutingModule,
    PasanganDetailFormModule,
    MatTabsModule,
    MantanModule,
    PacarModule,
    SelingkuhanModule,
    PasanganAddFormModule,
    PasanganAddFormTriggerModule,
  ],
  declarations: [KelolaPage],
})
export class KelolaPageModule {
  constructor(private _pasanganService: PasanganService) {
    this._pasanganService.load();
  }
}
