import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomerServiceService } from './customer-service.service';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerFacadeService {
  private itemsSource = new BehaviorSubject<Customer[]>([]);
  public items$ = this.itemsSource.asObservable();
  private filterSource = new BehaviorSubject<string>(null);
  public filter$ = this.filterSource.asObservable();
  constructor(
    private service: CustomerServiceService,
    private router: Router
  ) {}

  fetchItem() {
    this.filter$
      .pipe(
        switchMap((filter) => {
          return this.service.fetchCustomers(filter);
        })
      )
      .subscribe((list) => {
        this.itemsSource.next(list);
      });
  }

  onAddItem(item: Customer) {
    this.service.onAddItem(item).subscribe(() => {
      this.navigateToList();
    });
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
}
