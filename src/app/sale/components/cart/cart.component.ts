import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sale } from '../../store/sale.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input()
  items: Sale[] = [];

  @Input()
  total: number;

  constructor() {}

  ngOnInit(): void {}
}
