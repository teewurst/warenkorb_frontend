import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less']
})
export class PriceComponent {
  @Input()
  public percentageDiscount: number = 0;
  @Input()
  public absoluteDiscount: number = 0;
  @Input()
  public additionalDiscount: number = 0;
  @Input()
  public total: number = 0;
  @Input()
  public reducedTotal: number = 0;

}
