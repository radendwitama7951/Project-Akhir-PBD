import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilsPage } from './utils.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'kalender',
    pathMatch: 'full',
  },
  {
    path: 'kalender',
    loadChildren: () =>
      import('./kalender/kalender.module').then((m) => m.KalenderPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilsPageRoutingModule {}
