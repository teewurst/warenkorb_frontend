import {Component, Input} from '@angular/core';
import {emptyOrderItem, OrderItem} from '../../../model/order-item.model';
import {BasketService} from '../../../service/basket.service';
import {combineLatest, filter, map, Observable} from 'rxjs';
import {emptyProduct, Product} from '../../../model/product.model';
import {ProductListService} from '../../../service/product-list.service';
import {ProductBundlesService} from '../../../service/product-bundles.service';
import {ProductBundle} from '../../../model/product-bundle.model';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.less']
})
export class OrderItemComponent {
  @Input()
  public orderItem: OrderItem = emptyOrderItem;

  public myProduct$: Observable<Product>;
  public myProductBundles$: Observable<ProductBundle[]>;

  constructor(
      public confirmationService: ConfirmationService,
      public basketService: BasketService,
      productService: ProductListService,
      productBundleService: ProductBundlesService
  ) {
    this.myProduct$ = productService.observable$().pipe(
        map((productList: {[keys: string]: Product}) => productList[this.orderItem.productId] || emptyProduct)
    );
    this.myProductBundles$ = productBundleService.observable$().pipe(
        map((productBundles: ProductBundle[]) => productBundles.filter((productBundle: ProductBundle) => this.orderItem.productId == productBundle.sourceProduct))
    );
  }

  public confirm($event: MouseEvent, product: Product, amount: number) {
    this.confirmationService.confirm({
      target: $event.target as EventTarget,
      message: 'Wollen sie ' + product.name + ' wirklich entfernen?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.basketService.removeOrderItem(product, amount);
      },
      reject: () => {}
    });
  }
}
