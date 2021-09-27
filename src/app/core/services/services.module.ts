import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { AuthService } from './auth.service';
import { AuthApi } from './auth.api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ProductsService,
    AuthService,
    AuthApi
  ]
})
export class ServicesModule { }
