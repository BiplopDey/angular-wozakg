import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  list!: Array<Product>
  productToAdd: Product = {name:"",cuantity:1}
  constructor() { 
  }

  ngOnInit(): void {
    this.list = [{name:"Apple", cuantity:2}, {name:"Pear", cuantity:3}]
  }

  add(): void {
    this.list = [this.productToAdd, ...this.list]
    this.productToAdd = {name:"",cuantity:1}
  }
}
