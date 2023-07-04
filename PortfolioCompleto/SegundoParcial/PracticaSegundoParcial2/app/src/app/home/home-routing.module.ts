import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homecomponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: Homecomponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
