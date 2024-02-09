import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mon-annonce/:idAnnonce',
    loadChildren: () => import('./pages/mon-annonce/mon-annonce.module').then( m => m.MonAnnoncePageModule)
  },
  {
    path: 'mini-annonce',
    loadChildren: () => import('./pages/mini-annonce/mini-annonce.module').then( m => m.MiniAnnoncePageModule)
  },
  {
    path: 'ajouter-voiture',
    loadChildren: () => import('./pages/ajouter-voiture/ajouter-voiture.module').then( m => m.AjouterVoiturePageModule)
  },
  {
    path: 'ajouter-annonce',
    loadChildren: () => import('./pages/ajouter-annonce/ajouter-annonce.module').then( m => m.AjouterAnnoncePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
