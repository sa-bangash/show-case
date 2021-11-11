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

  fetchCustomerByid(id: number): Observable<Customer> {
    return of(CustomerServiceService.customers.find((i) => i.id === +id)).pipe(
      take(1)
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const customers = CustomerServiceService.customers.map((cust) => {
      if (cust.id === customer.id) {
        return customer;
      }
      return cust;
    });
    CustomerServiceService.customers = customers;
    return of(customer).pipe(take(1));
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
