import { Component } from '@angular/core';
import { CarInterface } from './car-interface';
import { CarsService } from './cars.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: Array<CarInterface> = [];
  title = 'angular-car-project';
  constructor(private carService: CarsService) {
    {
      this.carService.getCars().subscribe(    //devuelve un observale y lo convertimos a array
        (data: Array<CarInterface>) => {
          this.cars = data;
        }
      );
    }
  }
}
