import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl + "product")
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.apiUrl + "product/" + id)
  }
}
