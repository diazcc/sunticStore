import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-products-cart',
  templateUrl: './list-products-cart.component.html',
  styleUrls: ['./list-products-cart.component.scss']
})
export class ListProductsCartComponent {
  @Output() deleteProductEmitter = new EventEmitter<string>();

  @Input() classCart = "";
  @Input() totalPrice = 0;
  @Input()  dataCartProduct = [
    {
      urlImg : "/assets/img/logo.webp",
      price : ""
    }
  ]
  @Input() deleteProduct(id : any){//se emite el prodcuto seleccionado para poder utilizarlo en el padre
    this.deleteProductEmitter.emit(id);

  }
}
