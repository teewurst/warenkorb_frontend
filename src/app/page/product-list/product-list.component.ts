import { Component } from '@angular/core';
import {ProductBundlesService} from '../../service/product-bundles.service';
import {Observable} from 'rxjs';
import {Product} from '../../model/product.model';
import {ProductListService} from '../../service/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  public productList$: Observable<{ [keys: string]: Product }>;
  constructor(productListService: ProductListService) {
    this.productList$ = productListService.observable$()
  }

  protected readonly Object = Object;
}
