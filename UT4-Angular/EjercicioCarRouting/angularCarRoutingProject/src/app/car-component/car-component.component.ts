import { Component } from '@angular/core';
import { CarInterface } from '../car-interface';
import { CarServiceService } from '../car-service.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent {
  @Input() car!: CarInterface;

  listOfCars: Array<CarInterface> = [];

  constructor(carService: CarServiceService) {
    this.listOfCars = carService.getListOfCar();
  }

}
