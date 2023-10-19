import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-products-cart',
  templateUrl: './list-products-cart.component.html',
  styleUrls: ['./list-products-cart.component.scss']
})
export class ListProductsCartComponent {
  @Input() classCart = "";
  @Input()  dataCartProduct = [
    {
      urlImg : "/assets/img/logo.webp",
      price : ""
    }
  ]
  @Input() deleteProduct(){

  }
}
