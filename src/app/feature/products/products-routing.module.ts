import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductCardsComponent} from './product-cards/product-cards.component';
import {ProductPageComponent} from './product-page/product-page.component';

const routes: Routes = [
  {path:'', component: ProductCardsComponent},
  {path:':id', component:ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
