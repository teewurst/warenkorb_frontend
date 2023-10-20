import { Injectable } from '@angular/core';
import {Basket, emptyBasket} from '../model/basket.model';
import {ProductBundle, productBundles} from '../model/product-bundle.model';
import {Product} from '../model/product.model';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {ProductListService} from './product-list.service';
import {ProductBundlesService} from './product-bundles.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private products: {[keys: string]: Product} = {};
  private productBundles: ProductBundle[] = [];

  private basket: Basket = emptyBasket;

  private basket$: BehaviorSubject<Basket> = new BehaviorSubject<Basket>(emptyBasket);

  constructor(private productListService: ProductListService, private productBundleService: ProductBundlesService) {
    productListService.observable$().subscribe((products: {[keys: string]: Product}) => {
      this.products = products;
      // theoretically there has to be a change here, maybe some products are not available anymore
    })
    productBundleService.observable$().subscribe((productBundles: ProductBundle[]) => {
      this.productBundles = productBundles;
      // theoretically there has to be a change here, changes in the product bundle may change basket values
    })
  }

  public observable$(): Observable<Basket> {
    return this.basket$.asObservable();
  }

  public addProduct(product: Product, amount: number): void {
      if (typeof this.basket.orderItems[product.uid] == 'undefined') {
        this.basket.orderItems[product.uid] = {
          amount: amount,
          additionalAbsoluteDiscount: 0,
          productId: product.uid,
        };
      } else {
        this.basket.orderItems[product.uid].amount += amount;
      }

      this.recalculateBasket();
  }

  public removeOrderItem(product: Product, amount: number): void {
    if (typeof this.basket.orderItems[product.uid] == 'undefined') {
      return;
    }
    this.basket.orderItems[product.uid].amount -= amount;
    if (this.basket.orderItems[product.uid].amount < 1) {
      // maybe it would be better to not instantly delete a basket entry
      delete this.basket.orderItems[product.uid];
    }

    this.recalculateBasket();
  }

  private recalculateBasket(): void {
    let newBasket: Basket = Object.assign({}, this.basket);

    // normally ths would be done by a state machine + store like NGRX, and each behavior would be represented with its own service
    newBasket = this.updateBundles(newBasket);
    newBasket = this.updatePrices(newBasket);

    this.basket$.next(newBasket);
  }

  private updateBundles(newBasket: Basket): Basket {
    for (let productBundle of this.productBundles) {
      if (typeof newBasket.orderItems[productBundle.sourceProduct] == "undefined" || typeof newBasket.orderItems[productBundle.targetProduct] == "undefined") {
        continue;
      }
      newBasket.orderItems[productBundle.targetProduct].additionalAbsoluteDiscount = productBundle.absolutDiscount;
    }
    return newBasket;
  }

  private updatePrices(newBasket: Basket): Basket {
    let total: number = 0;
    let absolutDiscount: number = 0;
    for(let orderItem of Object.values(this.basket.orderItems)) {
      total += (orderItem.amount * this.products[orderItem.productId].price);
      absolutDiscount += orderItem.amount * this.products[orderItem.productId].price * this.products[orderItem.productId].percentageDiscount
          + orderItem.additionalAbsoluteDiscount
    }

    newBasket.reducedTotal = total - absolutDiscount;
    newBasket.total = total;
    newBasket.absolutDiscount = absolutDiscount;
    newBasket.percentageDiscount = (absolutDiscount / total) || 0;

    return newBasket;
  }
}
