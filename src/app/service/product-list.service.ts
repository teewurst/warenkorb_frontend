import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {Product, productList} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  /**
   * Mimics behavior of loading data async
   *
   * @private
   */
  private productList$: BehaviorSubject<{[key: string]: Product}> = new BehaviorSubject<{[key: string]: Product}>(productList);
  constructor() { }

  public observable$(): Observable<{[key: string]: Product}> {
    return this.productList$.asObservable();
  }
}
