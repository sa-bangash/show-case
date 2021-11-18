import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../store/cart.model';
import { Product } from '../../store/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input()
  items: Cart[] = [];

  @Input()
  total: number;

  constructor() {}

  ngOnInit(): void {}
}
