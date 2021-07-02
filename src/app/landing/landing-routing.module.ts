import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandComponent } from './pages/land/land.component';
import { ListComponent } from './pages/list/list.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'land', component : LandComponent},
      {path: 'register', component : RegisterComponent},
      {path: 'list', component : ListComponent},
      {path: '**', redirectTo : 'land'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
