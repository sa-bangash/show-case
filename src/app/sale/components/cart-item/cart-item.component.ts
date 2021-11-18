import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../store/cart.model';
import { Product } from '../../store/product.model';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input()
  item: Cart;

  @Input()
  idx: number;
  constructor() {}

  ngOnInit(): void {}
}
