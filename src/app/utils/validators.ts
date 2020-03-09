import { AbstractControl } from '@angular/forms';

export class MyValidator {

  static isPriceValid(control: AbstractControl){
    const value = control.value;
    console.log(value);
    if (value > 1000) {
      return { price_valid: true};
    }
    return null; /* No hubo error */
  }

}
