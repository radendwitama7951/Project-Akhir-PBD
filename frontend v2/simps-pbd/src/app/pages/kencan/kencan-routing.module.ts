import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KencanPage } from './kencan.page';

const routes: Routes = [
  {
    path: '',
    component: KencanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KencanPageRoutingModule {}
