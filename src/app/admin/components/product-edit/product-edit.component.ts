import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from '../../../utils/validators';

import { ProductsService } from '../../../core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe( (product) => {
        this.form.patchValue(product);
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidator.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  updateProduct(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe( (editProduct) => {
        console.log(editProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField() {
    return this.form.get('price');
  }

}
