import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KelolaPage } from './kelola.page';

const routes: Routes = [
  {
    path: '',
    component: KelolaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KelolaPageRoutingModule {}
