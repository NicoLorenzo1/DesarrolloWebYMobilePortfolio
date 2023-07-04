import { Component } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Product } from "../interfaces/product";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class Homecomponent {

  products: Product[] = [];

  constructor(private productsService: ProductService) {
    this.productsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
      }
    })
  }

}
