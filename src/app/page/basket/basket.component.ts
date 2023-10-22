import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasketService} from '../../service/basket.service';
import {emptyOrderItem} from '../../model/order-item.model';
import {Basket} from '../../model/basket.model';
import {ProductListService} from '../../service/product-list.service';
import {Product} from '../../model/product.model';
import {Observable, Subscription} from 'rxjs';
import {MessageService} from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {UpsellingComponent} from './upselling/upselling.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit, OnDestroy {
  private productList$: Observable<{ [keys: string]: Product }>;
  private subscriptions: Subscription[] = [];
  private products: {[keys: string]: Product} = {};

  ref: DynamicDialogRef | undefined;

  protected readonly Object = Object;
  protected readonly emptyOrderItem = emptyOrderItem;

  constructor(
      public basketService: BasketService,
      private messageService: MessageService,
      private dialogService: DialogService,
      productListService: ProductListService) {
    this.productList$ = productListService.observable$();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.productList$.subscribe((products: {[keys: string]: Product}) => {this.products = products}));
  }


  public order(basket: Basket) {
    let suggestedProducts = this.getUpsellingProducts(basket);
    if (suggestedProducts.length > 0) {
      this.ref = this.dialogService.open(UpsellingComponent, {
        header: 'Das könnte dich interessieren',
        width: '70%',
        height: '80%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        data: {
          suggestedProducts: suggestedProducts
        },
      });

      this.subscriptions.push(this.ref.onClose.subscribe((order: string | undefined) => {
        if (order === 'order') {
          this.orderSuccess();
        }
      }));
    } else {
      this.orderSuccess();
    }
  }

  private orderSuccess() {
    this.messageService.add(
        { severity: 'success', summary: 'Bestellstrecke starten', detail: 'Jetzt wird der "Basket" in eine "Order" transformiert und der Sale abgehandelt.' }
    );
  }

  // should be extracted into service
  private getUpsellingProducts(basket: Basket): Product[] {
    let upsellingProducts: Product[] = [];
    for (let productId of basket.itemsOrder) {
      if (this.products[productId]?.relatedProducts.length ?? 0 > 0) {
        for (let relatedProductsId of this.products[productId].relatedProducts) {
          if (!basket.itemsOrder.includes(relatedProductsId)) {
            upsellingProducts.push(this.products[relatedProductsId]);
          }
        }
      }
    }

    // Max 2 suggestions
    upsellingProducts.length = (upsellingProducts.length > 2) ? 2 : upsellingProducts.length;
    return upsellingProducts;
  }
}
