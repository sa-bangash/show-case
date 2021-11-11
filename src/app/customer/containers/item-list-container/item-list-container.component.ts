import { Component, OnInit } from '@angular/core';
import { CustomerFacadeService } from '../../store/customer-facade.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
  styleUrls: ['./item-list-container.component.scss'],
})
export class ItemListContainerComponent implements OnInit {
  itemList$ = this.facade.items$;
  faPlusIcon = faPlus;
  constructor(private facade: CustomerFacadeService) {}

  ngOnInit(): void {}

  onFilterChange(filter: string) {
    this.facade.setFilter(filter);
    this.facade.fetchItem();
  }

  onAddCustomer() {
    this.facade.navigateToCreateForm();
  }
  gotoEditCustomer(id) {
    this.facade.navigateToEditForm(id);
  }
}
