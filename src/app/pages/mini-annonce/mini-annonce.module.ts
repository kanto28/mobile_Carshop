import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MiniAnnoncePageRoutingModule } from './mini-annonce-routing.module';

import { MiniAnnoncePage } from './mini-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    ScrollingModule,
    MiniAnnoncePageRoutingModule
  ],
  declarations: [MiniAnnoncePage]
})
export class MiniAnnoncePageModule {}
