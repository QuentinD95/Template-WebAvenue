import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'carte',
    loadChildren: () => import('./carte/carte.module').then( m => m.CartePageModule)
  },
  {
    path: 'formule',
    loadChildren: () => import('./formule/formule.module').then( m => m.FormulePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'entrees',
    loadChildren: () => import('./entrees/entrees.module').then( m => m.EntreesPageModule)
  },
  {
    path: 'dessert',
    loadChildren: () => import('./dessert/dessert.module').then( m => m.DessertPageModule)
  },
  {
    path: 'pizza',
    loadChildren: () => import('./pizza/pizza.module').then( m => m.PizzaPageModule)
  },
  {
    path: 'wok',
    loadChildren: () => import('./wok/wok.module').then( m => m.WokPageModule)
  },
  {
    path: 'lafas',
    loadChildren: () => import('./lafas/lafas.module').then( m => m.LafasPageModule)
  },
  {
    path: 'burger',
    loadChildren: () => import('./burger/burger.module').then( m => m.BurgerPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'inscriptiondone',
    loadChildren: () => import('./inscriptiondone/inscriptiondone.module').then( m => m.InscriptiondonePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
