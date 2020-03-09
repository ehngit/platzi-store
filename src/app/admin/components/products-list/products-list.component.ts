import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe( (products) => {
      console.log(products);
      this.products = products;
    });
  }

  editProduct(id: string){

  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe((respuesta) => {
      console.log(respuesta);
      this.fetchProducts();
    });
  }

}