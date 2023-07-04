import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Business } from '../interfaces/Business';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAllBusiness() {
    return this.http.get<Business[]>(this.apiUrl + "bussines")
  }

  getBusiness(businessName: string) {
    return this.http.get<Business>(this.apiUrl + "business/" + businessName)
  }

  postNewBusiness(business: Business) {
    return this.http.post<Business>(this.apiUrl + "business/post", business);
  }
  removeBusiness(business: Business) {
    const options = {
      body: business
    };
    return this.http.delete<Business>(this.apiUrl + "business/delete", options);
  }
}
