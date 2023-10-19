import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Output() dataCartEmitter = new EventEmitter<string>();
  dataCart : any = [];
  @Input() dataProduct = {
    id : "",
    urlImg : "/assets/img/logo.webp",
    name : "empty",
    price : 0
  }

  @Input() addToCart (product:any){
    this.dataCartEmitter.emit(product);
  }

}
