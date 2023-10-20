import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product, productList} from '../model/product.model';
import {ProductBundle, productBundles} from '../model/product-bundle.model';

@Injectable({
  providedIn: 'root'
})
export class ProductBundlesService {

  /**
   * Mimics behavior of loading data async
   *
   * @private
   */
  private productBundles$: BehaviorSubject<ProductBundle[]> = new BehaviorSubject<ProductBundle[]>(productBundles);
  constructor() { }

  public observable$(): Observable<ProductBundle[]> {
    return this.productBundles$.asObservable();
  }
}
