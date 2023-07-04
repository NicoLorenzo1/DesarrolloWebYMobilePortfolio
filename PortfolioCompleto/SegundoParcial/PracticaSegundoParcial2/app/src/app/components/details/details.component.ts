import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  product?: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductService) {
    this.route.params.subscribe({
      next: (params) => {
        this.productsService.getProduct(params['id']).subscribe({
          next: (product) => {
            this.product = product;
          }
        })
      }
    })

  }

  ngOnInit() {

  }

}
