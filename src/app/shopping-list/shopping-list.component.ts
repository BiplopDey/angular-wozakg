import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  list!: Array<Product>
  product!: Product 
  
  constructor(private service: ShoppingListService) { 
  }

  ngOnInit(): void {
    this.product = {name:"",cuantity:1}
    this.list = this.service.getProduct();
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
    this.product = productToEdit
  }

}
