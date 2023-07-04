import { Component } from '@angular/core';
import { PruductServiceService } from '../pruduct-service.service';
import { ProductInterface } from '../product-interface';
@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent {

  listProducts : Array<ProductInterface> = []
  constructor(productService : PruductServiceService){ //Creo instancia de carService para poder usar los metodos
    productService.getListService().then(listOfService=> {this.listProducts = listOfService});
  }
}
