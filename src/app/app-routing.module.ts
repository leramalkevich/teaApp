import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './components/pages/main/main.component';
import {ProductCardsComponent} from './components/pages/product-cards/product-cards.component';
import {ProductPageComponent} from './components/pages/product-page/product-page.component';
import {OrderComponent} from './components/pages/order/order.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'catalogue', component: ProductCardsComponent},
  {path: 'catalogue/:id', component: ProductPageComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
