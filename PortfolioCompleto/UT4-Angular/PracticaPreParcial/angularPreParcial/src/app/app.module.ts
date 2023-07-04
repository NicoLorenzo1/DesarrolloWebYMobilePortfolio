import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeachComponent } from './beach/beach.component';
import { BeachContainerComponent } from './beach-container/beach-container.component';
import { PruebaComponentComponent } from './prueba-component/prueba-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BeachComponent,
    BeachContainerComponent,
    PruebaComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
