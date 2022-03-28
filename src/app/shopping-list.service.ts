import { Injectable } from '@angular/core';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  list: Array<Product> = [{name:"Apple", cuantity:2}, {name:"Pear", cuantity:3}]

  constructor() { 
  }

  getProduct(): Array<Product>{
    return this.list
  }
}
