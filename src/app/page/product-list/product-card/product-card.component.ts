import {Component, Input, OnInit} from '@angular/core';
import {emptyProduct, Product} from '../../../model/product.model';
import {BasketService} from '../../../service/basket.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit{
  @Input()
  public product: Product = emptyProduct;

  public addToBasketForm: FormGroup = new FormGroup<{amount: FormControl<{name: string, code: number} | null>, product: FormControl<Product|null>}>({
    amount: new FormControl<{name: string, code: number}>({ name: '1', code: 1 }),
    product: new FormControl<Product>(this.product)
  });

  public amountOptions: {name: string, code: number}[] = [
    { name: '1', code: 1 },
    { name: '2', code: 2 },
    { name: '3', code: 3 },
    { name: '4', code: 4 },
  ];

  constructor(private basketService: BasketService) {
  }

  public ngOnInit(): void {
    this.addToBasketForm.controls['product'].setValue(this.product);
  }

  public orderProduct(): void {
    this.basketService.addProduct(
      this.addToBasketForm.controls['product'].value,
      this.addToBasketForm.controls['amount'].value.code
    );
  }
}
