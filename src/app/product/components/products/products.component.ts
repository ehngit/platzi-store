import { Component, OnInit } from '@angular/core';

import { Product } from './../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    /* Por defecto devuelve un Observable y tenemos que suscbrimirnos que usar una promersa */
    this.productsService.getAllProducts().subscribe( (products) => {
      //console.log(products);
      this.products = products;
    });
  }
}
