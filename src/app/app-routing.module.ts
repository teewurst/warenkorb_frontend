import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ProductListComponent} from './page/product-list/product-list.component';
import {PageNotFoundComponent} from './page/page-not-found/page-not-found.component';
import {BasketComponent} from './page/basket/basket.component';

const products = 'products';
const basket = 'basket';
export const ROUTE_PRODUCTS = '/products'
export const ROUTE_BASKET = '/basket'

const routes: Routes = [
  {
    path: products,
    component: ProductListComponent,
  },
  {
    path: '',
    redirectTo: products,
    pathMatch: 'full'
  },
  {
    path: basket,
    component: BasketComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
