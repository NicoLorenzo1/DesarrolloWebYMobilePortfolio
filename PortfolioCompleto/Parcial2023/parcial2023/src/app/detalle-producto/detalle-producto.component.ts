import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PruductServiceService } from '../pruduct-service.service';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  imageURL: string | null = "";
  name: string | null = "";
  cost: string | null = "";
  stock: string | null = "";

  constructor(private route: ActivatedRoute, private productService: PruductServiceService) {

  }
  product: any;

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = this.productService.getProductById(productId);
    }
    this.imageURL = this.product.imageURL;
    this.name = this.product.name;
    this.cost = this.product.cost;
    this.stock = this.product.stock;
  }
}