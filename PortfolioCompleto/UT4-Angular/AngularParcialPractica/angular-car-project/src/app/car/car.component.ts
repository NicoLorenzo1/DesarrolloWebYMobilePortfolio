import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CarsService } from '../cars.service';
import { CarInterface } from '../car-interface';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car!: CarInterface;
}
