import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterVoiturePage } from './ajouter-voiture.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterVoiturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterVoiturePageRoutingModule {}
