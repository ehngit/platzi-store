
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';
import { environment } from './../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   /* Llamada a un nuestro API para llenar los servicio */

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    /** Salir a http y returnar una lista de datos, saber a que url debemos acceder */
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product){
    return this.http.post<Product>(`${environment.url_api}/products/`, product);
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

}
