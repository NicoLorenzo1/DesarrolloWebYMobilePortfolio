import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CarInterface } from '../car-interface';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent {

  @Input() carArray: CarInterface[] = [];
  
  constructor(private carService: CarServiceService){
    this.carArray = carService.getListCarDad();
  }
}
