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
      this.product = this.productService.getProduct(id);
      console.log(this.product);
    });
  }

}
