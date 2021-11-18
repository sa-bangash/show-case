import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../store/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() data: Product;
  @Output() onBuy = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}

  onBuyClick() {
    this.onBuy.next(this.data);
  }
}
