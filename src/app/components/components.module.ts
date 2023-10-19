import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ListProductsCartComponent } from './list-products-cart/list-products-cart.component';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    CardProductComponent,
    ListProductsCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShoppingCartComponent,
    CardProductComponent,
    ListProductsCartComponent
  ]
})
export class ComponentsModule { }
