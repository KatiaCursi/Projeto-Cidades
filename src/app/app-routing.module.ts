import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaCidadesComponent } from './tabela-cidades/tabela-cidades.component';
import { FormularioCidadesComponent } from './formulario-cidades/formulario-cidades.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path:"cidades",component:TabelaCidadesComponent},
   {path:"cidades/:id", component: FormularioCidadesComponent},
   {path:"cidade", component: FormularioCidadesComponent},
   {path:"home", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
