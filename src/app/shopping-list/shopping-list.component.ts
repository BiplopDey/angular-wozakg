import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  list!: Array<Product>
  product!: Product 
  
  constructor() { 
  }

  ngOnInit(): void {
    this.product = {name:"",cuantity:1}
    this.list = [{name:"Apple", cuantity:2}, {name:"Pear", cuantity:3}]
  }

  add(): void {
    this.list = [this.product, ...this.list]
    this.product = {name:"",cuantity:1}
  }

  onDelete(productToDelete : Product): void{
    this.list = this.list.filter(prod  => prod !== productToDelete)
  }
}
