import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Main/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Index', component: InicioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
