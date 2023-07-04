import { Component } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Business } from '../interfaces/Business';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  businessList: Business[] = [];

  constructor(private productsService: ProductService) {
    this.productsService.getAllBusiness().subscribe({
      next: (res) => {
        this.businessList = res;
      }
    })
  }

  newBusiness() {
    const business: Business = { businessName: "NuevaEmpresa", web: "nuevaEmpresaWeb.com.uy", workers: 3 };
    this.productsService.postNewBusiness(business).subscribe({
      next: (res) => {
        this.businessList = this.businessList;
      }
    }
    )
  }

  removeBusiness(business: Business) {
    this.productsService.removeBusiness(business).subscribe({
      next: (res) => {
        this.businessList = this.businessList;
      }
    }
    )
  }
}
