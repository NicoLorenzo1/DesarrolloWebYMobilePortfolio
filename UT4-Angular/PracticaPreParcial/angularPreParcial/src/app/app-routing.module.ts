import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeachComponent } from './beach/beach.component';
import { PruebaComponentComponent } from './prueba-component/prueba-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [{ path: "prueba", component: PruebaComponentComponent }, {path: "", component: HomeComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
