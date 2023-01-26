import { Directive } from '@angular/core';
import { Product } from './product-list/product-list.component';

@Directive({
  selector: '[appCategoryFilter]'
})
export class CategoryFilterDirective {

  constructor() { }

  apply(list: Product[], category: string) {
    return list.filter(item => item.category === category);
  }
}
