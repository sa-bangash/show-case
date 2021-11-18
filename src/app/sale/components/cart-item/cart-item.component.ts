import { Component, Input, OnInit } from '@angular/core';
import { Sale } from '../../store/sale.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input()
  item: Sale;

  @Input()
  idx: number;
  constructor() {}

  ngOnInit(): void {}
}
