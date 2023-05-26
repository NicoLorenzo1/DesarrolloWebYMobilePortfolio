import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponentComponent } from './car-component/car-component.component';
import { ZoomCarComponent } from './zoom-car/zoom-car.component';
import { HomeComponent } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponentComponent,
    ZoomCarComponent,
    HomeComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
