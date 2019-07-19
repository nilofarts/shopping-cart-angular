import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    LoginComponent
  ]
})
export class ShoppingCartModule { }
