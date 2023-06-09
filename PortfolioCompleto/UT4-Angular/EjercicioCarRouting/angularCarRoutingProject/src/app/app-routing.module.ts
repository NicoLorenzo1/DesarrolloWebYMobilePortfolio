import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ZoomImageComponent } from './zoom-image/zoom-image.component';

const routes: Routes = [{ path: "", component: HomeComponentComponent }, { path: "zoomCar/:imageURL/:model/:description/:type", component: ZoomImageComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
