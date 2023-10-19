import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductService } from 'src/app/services/product.service';



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers:[
    ProductService
  ]
})
export class HomeModule {




}
