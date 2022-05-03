import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KencanDetailPage } from './kencan-detail.page';

const routes: Routes = [
  {
    path: '',
    component: KencanDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KencanDetailPageRoutingModule {}
