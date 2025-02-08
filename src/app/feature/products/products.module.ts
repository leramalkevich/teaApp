import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductCardsComponent} from './product-cards/product-cards.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ProductCardsComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
