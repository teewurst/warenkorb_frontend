import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasketService} from '../../service/basket.service';
import {map, Observable, Subscription} from 'rxjs';
import {Basket} from '../../model/basket.model';
import {MenuItem} from 'primeng/api';
import {ROUTE_BASKET, ROUTE_PRODUCTS} from '../../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  protected readonly ROUTE_BASKET = ROUTE_BASKET;

  public mainMenuItems: MenuItem[] = [];
  public helpMenuItems: MenuItem[] = [];
  public userMenuItems: MenuItem[] = [];

  public basketCount$: Observable<number>;
  constructor(basketService: BasketService) {
    this.basketCount$ = basketService.observable$().pipe(
      map<Basket, number>((basket:Basket): number => (Object.values(basket.orderItems).length || 0))
    );
  }

  ngOnInit(): void {

    this.mainMenuItems = [
      {
        label: 'Product List',
        routerLink: ROUTE_PRODUCTS
      },
    ];

    this.helpMenuItems = [
      {
        label: 'Help/Contact'
      },
      {
        label: 'Impressum'
      }
    ];

    this.userMenuItems = [
      {
        label: 'Login'
      },
      {
        label: 'Track Order'
      },
    ];
  }
}
