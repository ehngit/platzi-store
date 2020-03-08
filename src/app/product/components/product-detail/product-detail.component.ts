import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
/* Busamos nuestro servicio */
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    /*Me suscribo a ese cambio,array function*/
    this.router.params.subscribe( (params: Params) => {
      const id = params.id;
      console.log(id);
      //this.product = this.productService.getProduct(id);
      this.fetchProduct(id);
      console.log(this.product);
    });
  }

  fetchProduct(id: string){
    this.productService.getProduct(id).subscribe(( product ) => {
      console.log(product);
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.png',
      price: 3000,
      description: 'Nuevo Artículo'
    };
    this.productService.createProduct(newProduct)
    .subscribe( (product) => {
      console.log(product);
    });
  }
}
