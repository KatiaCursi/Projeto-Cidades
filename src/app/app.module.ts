import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabelaCidadesComponent } from './tabela-cidades/tabela-cidades.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioCidadesComponent } from './formulario-cidades/formulario-cidades.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaCidadesComponent,
    FormularioCidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
