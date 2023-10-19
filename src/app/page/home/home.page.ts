import { Component, HostListener } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  count = 0 ;
  classCart = "hidde";
  openCart = ()=>{
    this.setCart();
  }
  allProducts : any = [];
  shoppingCart : any = [];
  clickAddProduct = ()=>{
  }
  constructor(
    private productServices : ProductService
  ){}

  ngOnInit(){
    this.productServices.getProducts().subscribe(async(response:any)=>{
      response.map((value:any)=>{
        const product = {
          id : value.id,
          urlImg : value.image,
          name : value.title,
          price : value.price
        }
        this.allProducts.push(product);
      });
    });
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.id === 'outsideCart') {
      this.classCart= "hidde";
    }
  }


  getSelectedProduct (id : any){
    this.shoppingCart.push(id);

    console.log(this.shoppingCart);
    this.count = this.shoppingCart.length

  }

  setCart(){
    this.classCart = "show";

  }

}
