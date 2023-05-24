import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  {
    path:'',
      children:[
        {path:'index',component: LoginComponent},
        {path:'buscador',component: BuscadorComponent},
        {path:'**',redirectTo:'index'}
      ]  
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class LineaRoutingModule { }
