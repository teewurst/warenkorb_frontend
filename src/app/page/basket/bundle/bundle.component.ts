import {Component, Input} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Product} from '../../../model/product.model';
import {ProductListService} from '../../../service/product-list.service';
import {emptyOrderItem} from '../../../model/order-item.model';
import {BasketService} from '../../../service/basket.service';
import {emptyProductBundle, ProductBundle} from '../../../model/product-bundle.model';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.less']
})
export class BundleComponent {
  @Input()
  public productBundle: ProductBundle = emptyProductBundle;

  public myProduct$: Observable<Product>;

  constructor(productListService: ProductListService, public basketService: BasketService) {
    this.myProduct$ = productListService.observable$().pipe(
        map((productList: {[keys: string]: Product}): Product => productList[this.productBundle.targetProduct])
    );
  }

  protected readonly emptyOrderItem = emptyOrderItem;
}
