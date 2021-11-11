import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomerServiceService } from './customer-service.service';
import { CustomerActions } from './customer.action';
import { Customer } from './customer.model';
import { CustomerState } from './customer.store';

@Injectable({
  providedIn: 'root',
})
export class CustomerFacadeService {
  public selectedCustomer$ = this.store.select(CustomerState.selectCustomer);
  public items$ = this.store.select(CustomerState.customers);
  private filterSource = new BehaviorSubject<string>(null);
  constructor(
    private service: CustomerServiceService,
    private router: Router,
    private store: Store
  ) {}

  fetchItem() {
    this.store.dispatch(new CustomerActions.FetchAll(this.filterSource.value));
  }

  onAddItem(item: Customer) {
    this.store.dispatch(new CustomerActions.Add(item)).subscribe(() => {
      this.navigateToList();
    });
  }

  fetchCustomerByid(id: number) {
    this.store.dispatch(new CustomerActions.SelectCustomerById(id));
  }

  updateCustomer(customer: Customer) {
    this.store.dispatch(new CustomerActions.Edit(customer)).subscribe(() => {
      this.navigateToList();
    });
  }

  clearCustomerSelect() {
    this.store.dispatch(new CustomerActions.ClearSelectCustomer());
  }
  setFilter(filter: string) {
    this.filterSource.next(filter);
  }

  navigateToList() {
    this.router.navigate(['customers']);
  }

  navigateToCreateForm() {
    this.router.navigate(['create']);
  }

  navigateToEditForm(id) {
    this.router.navigate(['edit', id]);
  }
}
