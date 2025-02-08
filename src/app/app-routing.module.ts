import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './feature/main/main.component';
import {ProductCardsComponent} from './feature/products/product-cards/product-cards.component';
import {ProductPageComponent} from './feature/products/product-page/product-page.component';
import {OrderComponent} from './feature/order/order.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('./feature/main/main.module').then(m => m.MainModule)},
      {path: 'order', loadChildren: () => import('./feature/order/order.module').then(m => m.OrderModule)},
      {path: 'catalogue', loadChildren: () => import('./feature/products/products.module').then(m => m.ProductsModule)}
    ]
  },
  {path:'**', redirectTo:''}

  // {path:'', component: MainComponent},
  // {path:'catalogue', component: ProductCardsComponent},
  // {path: 'catalogue/:id', component: ProductPageComponent},
  // {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
