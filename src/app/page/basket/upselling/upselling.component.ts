import { Component } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Product} from '../../../model/product.model';

@Component({
  selector: 'app-upselling',
  templateUrl: './upselling.component.html',
  styleUrls: ['./upselling.component.less']
})
export class UpsellingComponent {

  upsellingProducts: Product[] = [];
  constructor(public ref: DynamicDialogRef, configData: DynamicDialogConfig) {
    this.upsellingProducts = configData.data['suggestedProducts'] ?? [];
  }

  protected readonly Object = Object;
}
