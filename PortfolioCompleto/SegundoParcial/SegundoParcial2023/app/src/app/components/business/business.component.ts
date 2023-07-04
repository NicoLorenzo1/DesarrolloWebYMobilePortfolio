import { Component, Input, OnInit } from '@angular/core';
import { Business } from "../../interfaces/Business";
import { ProductService } from 'src/app/services/product.service';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class ProductCardComponent {

  @Input() business!: Business;

  constructor(private productsService: ProductService, private homeComponent: HomeComponent) { }

  removeBusiness(business: Business) {
    if (business.workers == 0) {
      this.productsService.removeBusiness(business).subscribe({
        next: (res) => {
        }
      })
    }
    else {
      alert("No puedes eliminar esta empresa!;")
    }

  }
}
