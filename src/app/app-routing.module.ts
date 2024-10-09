import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaCidadesComponent } from './tabela-cidades/tabela-cidades.component';
import { FormularioCidadesComponent } from './formulario-cidades/formulario-cidades.component';

const routes: Routes = [
  {path: "", redirectTo:"/cidades", pathMatch:"full"},
  {path:"cidades",component:TabelaCidadesComponent},
   {path:"cidades/:id", component: FormularioCidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
