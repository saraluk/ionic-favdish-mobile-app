import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'new-dish',
    loadChildren: () => import('./new-dish/new-dish.module').then( m => m.NewDishPageModule)
  },
  {
    path: 'dish-detail',
    loadChildren: () => import('./dish-detail/dish-detail.module').then( m => m.DishDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
