import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Customer } from './customer.model';
@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  constructor() {}

  fetchCustomers(filter: string): Observable<Customer[]> {
    let customers = CustomerServiceService.customers.filter(
      (item) => item.name.toLowerCase().search(filter.toLowerCase()) > -1
    );

    return of(customers).pipe(take(1));
  }

  onAddItem(value: Customer): Observable<any> {
    const item = {
      ...value,
      id: CustomerServiceService.customers.length + 1,
    };
    return new Observable((observer) => {
      CustomerServiceService.customers.push(item);
      observer.next();
    }).pipe(take(1));
  }
}

export namespace CustomerServiceService {
  export let customers: Customer[] = [
    {
      id: 1,
      companyName: 'Green store',
      name: 'john show',
      address: '123 main str, phildelphia',
      email: 'some@company.com',
    },
  ];
}
