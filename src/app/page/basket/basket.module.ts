import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { UpsellingComponent } from './upselling/upselling.component';



@NgModule({
  declarations: [
    BasketComponent,
    OrderItemComponent,
    UpsellingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasketModule { }
