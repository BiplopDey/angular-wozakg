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

  save(): void {
    if(!this.isValidProduct(this.product)){
      return
    }

    if(this.listContainsProduct(this.product)){
      this.update(this.product)
      this.product = {name:"", cuantity:1}
      return
    }

    this.list = [this.product, ...this.list]
    this.product = {name:"", cuantity:1}
  }

  isValidProduct(prod: Product){
    return this.product.name.length > 0 && this.product.cuantity > 0 
  }

  onDelete(productToDelete : Product): void{
    this.list = this.list.filter(prod  => prod !== productToDelete)
  }

  listContainsProduct(prod : Product): boolean{
    return this.list.filter(prod => prod.name === this.product.name).length > 0;
  }

  update(productToUpdate : Product): void{
    this.list = this.list.map(prod => prod.name === productToUpdate.name ? productToUpdate : prod)
  }

  onEdit(productToEdit : Product): void{
    console.log(productToEdit)
    this.product = productToEdit
  }

}
