import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'listado', component : ListadoComponent},
      {path: '**', redirectTo : 'listado'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRoutingModule { }
