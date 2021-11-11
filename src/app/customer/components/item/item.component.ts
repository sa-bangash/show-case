import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faUniversity,
  IconDefinition,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { Customer } from '../../store/customer.model';
const COLOR = ['#2D4050', '#A94763', '#B8B75B'];
const ICONS = [faComments, faUniversity];
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() data: Customer;

  color: string;
  selectIcon: IconDefinition;
  constructor() {}

  ngOnInit(): void {
    this.color = COLOR[Math.floor(Math.random() * COLOR.length)];
    this.selectIcon = ICONS[Math.floor(Math.random() * ICONS.length)];
  }
}
