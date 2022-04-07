import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SeriesComponent } from './components/series/series.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

const routes: Routes = [

  {path: 'inicio',component:InicioComponent},
  {path: 'tarjetas',component:TarjetasComponent},
  {path:'series',component:SeriesComponent},
  {path:'galeria',component:GaleriaComponent},
  {path:'**',pathMatch:'full',redirectTo:'inicio'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
