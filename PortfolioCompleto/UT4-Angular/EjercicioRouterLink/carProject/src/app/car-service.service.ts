import { Injectable } from '@angular/core';
import { CarInterface } from './car-interface';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  listOfCars : CarInterface[] = [];

  constructor() {

  this.listOfCars = [
    {
      imageURL: "https://i.autos.com.ar/fotos/2010/0626/Chevrolet-Corsa-CLASSIC-16-BAS-201006260116480.jpg",
      model: "Chevrolet corsa",
      description: "Excelente estado",
      type: "Auto"
    },
    {
      imageURL: "https://i.autos.com.ar/fotos/2010/0626/Chevrolet-Corsa-CLASSIC-16-BAS-201006260116480.jpg",
      model: "Chevrolet corsa",
      description: "Excelente estado",
      type: "Auto"
    },
    {
      imageURL: "https://i.autos.com.ar/fotos/2010/0626/Chevrolet-Corsa-CLASSIC-16-BAS-201006260116480.jpg",
      model: "Chevrolet corsa",
      description: "Excelente estado",
      type: "Auto"
    },
    {
      imageURL: "https://i.autos.com.ar/fotos/2010/0626/Chevrolet-Corsa-CLASSIC-16-BAS-201006260116480.jpg",
      model: "Chevrolet corsa",
      description: "Excelente estado",
      type: "Auto"
    },
    {
      imageURL: "https://i.autos.com.ar/fotos/2010/0626/Chevrolet-Corsa-CLASSIC-16-BAS-201006260116480.jpg",
      model: "Chevrolet corsa",
      description: "Excelente estado",
      type: "Auto"
    },
    {
      imageURL: "https://i.autos.com.ar/fotos/2010/0626/Chevrolet-Corsa-CLASSIC-16-BAS-201006260116480.jpg",
      model: "Chevrolet corsa",
      description: "Excelente estado",
      type: "Auto"
    }
  ]

   }

  getListCarDad(){ //Para obtener la lista de autos que seteo el componente padre
    return this.listOfCars;
  };
  //async getCars():Promise<CardInterface[]>{return this.cars};

}
