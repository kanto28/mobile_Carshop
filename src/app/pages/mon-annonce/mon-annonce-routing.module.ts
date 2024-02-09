import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonAnnoncePage } from './mon-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: MonAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonAnnoncePageRoutingModule {}
