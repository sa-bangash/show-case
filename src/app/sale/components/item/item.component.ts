import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sale } from '../../store/sale.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() data: Sale;
  @Output() onBuy = new EventEmitter<Sale>();
  constructor() {}

  ngOnInit(): void {}

  onBuyClick() {
    this.onBuy.next(this.data);
  }
}
