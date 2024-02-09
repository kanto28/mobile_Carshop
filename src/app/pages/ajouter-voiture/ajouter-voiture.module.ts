import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterVoiturePageRoutingModule } from './ajouter-voiture-routing.module';

import { AjouterVoiturePage } from './ajouter-voiture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterVoiturePageRoutingModule
  ],
  declarations: [AjouterVoiturePage]
})
export class AjouterVoiturePageModule {}
