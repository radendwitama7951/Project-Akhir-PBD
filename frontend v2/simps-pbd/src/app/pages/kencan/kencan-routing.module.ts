import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KencanPage } from './kencan.page';

const routes: Routes = [
  {
    path: '',
    component: KencanPage,
  },
  {
    path: 'create-kencan/:pasanganId',
    loadChildren: () =>
      import('./features/kencan-create/kencan-create.module').then(
        (m) => m.KencanCreatePageModule
      ),
  },
  {
    path: ':kencanId',
    loadChildren: () =>
      import('./features/kencan-detail-page/kencan-detail.module').then(
        (m) => m.KencanDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KencanPageRoutingModule {}
