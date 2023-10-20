import { Component, HostListener } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  //Variables de componentes
  totalPrice = 0;
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

  //ciclo incial
  ngOnInit(){
    //se llama el servicio para obtener todos los productos
    this.productServices.getProducts().subscribe(async(response:any)=>{
      response.map((value:any)=>{
        //se reestructura los datos conforme a la necesidad y estructura de la variable json que va a recibir
        const product = {
          id : value.id,
          urlImg : value.image,
          name : value.title,
          price : value.price
        }
        this.allProducts.push(product); // se añade el producto a un array para obtener un listado organizado con todos los datos
      });
    });
  }


  @HostListener('document:click', ['$event']) // Animacion para cierre del ShoppingCart o Carrito de compras
  handleClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.id === 'outsideCart') {
      this.classCart= "hidde";
    }
  }


  getSelectedProduct (id : any){//se obtiene el producto cuando se clickea "Añadir al carrito"
    this.shoppingCart.push(id);//se añade al array shoppingCart
    this.count = this.shoppingCart.length//se obtiene la cantidad de elementos seleccionado del carrito
    this.getTotalPriceCart(); //se llama la funcion para actualizar el precio total de todos los productos seleccionados
  }


  setCart(){//funcion abrir carrito de compras
    this.classCart = "show";
  }

  deleteProduct(product :any){//Se obtiene la posicion seleccionada en el carrito de compras y se elimina el producto del array shoppingCart
    console.log(product);
    this.shoppingCart.splice(product, 1);//se elimina del shoppingCart
    this.count = this.shoppingCart.length //se actualiza el total de productos seleccionados
    this.getTotalPriceCart();
  }


  getTotalPriceCart(){//funcion para obtener el total del carrito de compras
    let total = 0;
    this.shoppingCart.map((value:any)=>{
      console.log(value.price);
      total = total +value.price;
      console.log(total);
    })
    this.totalPrice = total;
  }
}
