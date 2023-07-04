import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Business } from 'src/app/interfaces/Business';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  business?: Business;


  constructor(private route: ActivatedRoute, private productsService: ProductService) {
    this.route.params.subscribe({
      next: (params) => {
        this.productsService.getBusiness(params['businessName']).subscribe({
          next: (business) => {
            this.business = business;
          }
        });
      }
    });
  }
  ngOnInit() {

  }

}
