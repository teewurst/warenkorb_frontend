import { Component } from '@angular/core';
import {BasketService} from '../../service/basket.service';
import {emptyOrderItem} from '../../model/order-item.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent {

  constructor(public basketService: BasketService) {
  }


  protected readonly Object = Object;
  protected readonly emptyOrderItem = emptyOrderItem;
}
