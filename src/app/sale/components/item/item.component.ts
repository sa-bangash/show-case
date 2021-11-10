import { Component, Input, OnInit } from '@angular/core';
import { Sale } from '../../store/sale.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() data: Sale;
  constructor() {}

  ngOnInit(): void {}
}
