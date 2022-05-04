import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KencanCreatePage } from './kencan-create.page';

const routes: Routes = [
  {
    path: '',
    component: KencanCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KencanCreatePageRoutingModule {}
