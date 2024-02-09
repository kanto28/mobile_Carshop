import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiniAnnoncePage } from './mini-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: MiniAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiniAnnoncePageRoutingModule {}
