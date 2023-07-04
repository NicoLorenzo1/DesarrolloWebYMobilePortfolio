import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomCarComponent } from './zoom-car/zoom-car.component';
import { HomeComponent } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [{path: "zoomCar/:imageURL/:model/:description/:type", component: ZoomCarComponent}, {path: "", component:HomeComponent}, {path: "prueba", component:PruebaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
