import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonAnnoncePageRoutingModule } from './mon-annonce-routing.module';

import { MonAnnoncePage } from './mon-annonce.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonAnnoncePageRoutingModule
  ],
  declarations: [MonAnnoncePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonAnnoncePageModule {}
