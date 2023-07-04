import { Injectable } from '@angular/core';
import { ProductInterface } from './product-interface';
@Injectable({
  providedIn: 'root'
})
export class PruductServiceService {

  listOfService: Array<ProductInterface> = []
  constructor() {

    this.listOfService = [
      {
        imageURL: "https://jumboargentina.vtexassets.com/arquivos/ids/209822/Fideo-Molto-Guiseros-Fideos-Guisero-Molto-500-Gr-1-46224.jpg?v=636383732923400000",
        name: "fideos molto",
        cost: "40",
        stock: "17",
        id: "1"
      }, {
        imageURL: "https://geant.vteximg.com.br/arquivos/ids/207767-1000-1000/730108.jpg?v=636421090823000000",
        name: "fideos adria",
        cost: "40",
        stock: "17",
        id: "2"
      }, {
        imageURL: "https://jumboargentina.vtexassets.com/arquivos/ids/209822/Fideo-Molto-Guiseros-Fideos-Guisero-Molto-500-Gr-1-46224.jpg?v=636383732923400000",
        name: "fideos",
        cost: "40",
        stock: "17",
        id: "3"
      }, {
        imageURL: "https://jumboargentina.vtexassets.com/arquivos/ids/209822/Fideo-Molto-Guiseros-Fideos-Guisero-Molto-500-Gr-1-46224.jpg?v=636383732923400000",
        name: "fideos molto",
        cost: "40",
        stock: "17",
        id: "4"
      }, {
        imageURL: "https://familybox.store/wp-content/uploads/2022/05/pringles__crema-y-cebolla-300x300.jpg",
        name: "pringles",
        cost: "40",
        stock: "17",
        id: "5"
      },
      {
        imageURL: "https://familybox.store/wp-content/uploads/2022/05/pringles__crema-y-cebolla-300x300.jpg",
        name: "pringles ",
        cost: "40",
        stock: "17",
        id: "6"
      }
    ]
  }
  async getListService(): Promise<ProductInterface[]> {
    return this.listOfService
  };

  getProductById(id: string) {
    return this.listOfService.find(product => product.id === id);
  }
}
