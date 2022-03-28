import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product
  @Output() delete = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(): void{
    this.delete.emit(this.product)
  }
}
