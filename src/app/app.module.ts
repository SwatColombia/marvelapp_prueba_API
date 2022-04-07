import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';


import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { SeriesComponent } from './components/series/series.component';
import { GaleriaComponent } from './components/galeria/galeria.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    TarjetasComponent,
    SeriesComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [



  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
