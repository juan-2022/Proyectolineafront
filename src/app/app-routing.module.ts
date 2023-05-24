import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'principal',
    loadChildren:()=>import('./modules/linea/linea.module').then(m=>m.LineaModule),
  },
  {
    path:'**',
    redirectTo:'principal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
