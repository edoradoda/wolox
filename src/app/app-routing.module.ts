import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {Auth2Guard} from './auth2.guard';

const routes: Routes = [
 
  {
    path: 'listado',
    // canActivate: [Auth2Guard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./listado/listado.module').then(m => m.ListadoModule)
  },
  {
    path: 'land',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: '**',
    redirectTo: 'land'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
