import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faUniversity,
  IconDefinition,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { Sale } from '../../store/sale.model';
const COLOR = ['#2D4050', '#A94763', '#B8B75B'];
const ICONS = [faComments, faUniversity];
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() data: Sale;
  @Output() onBuy = new EventEmitter<Sale>();
  color: string;
  selectIcon: IconDefinition;
  constructor() {}

  ngOnInit(): void {
    this.color = COLOR[Math.floor(Math.random() * COLOR.length)];
    this.selectIcon = ICONS[Math.floor(Math.random() * ICONS.length)];
  }

  onBuyClick() {
    this.onBuy.next(this.data);
  }
}
