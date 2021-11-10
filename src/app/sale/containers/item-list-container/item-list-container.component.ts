import { Component, OnInit } from '@angular/core';
import { SaleFilter } from '../../sale-filter.enum';
import { SaleFacadeService } from '../../store/sale-facade.service';

@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
  styleUrls: ['./item-list-container.component.scss'],
})
export class ItemListContainerComponent implements OnInit {
  itemList$ = this.facade.items$;
  constructor(private facade: SaleFacadeService) {}

  ngOnInit(): void {}
  onFilterChange(filter: SaleFilter) {
    this.facade.fetchItem(filter);
  }
}
