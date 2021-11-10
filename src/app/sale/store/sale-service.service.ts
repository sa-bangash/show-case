import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { SaleFilter } from '../sale-filter.enum';
import { Sale } from './sale.model';
@Injectable({
  providedIn: 'root',
})
export class SaleServiceService {
  constructor() {}

  fetchItem(filter: SaleFilter): Observable<Sale[]> {
    if (filter === SaleFilter.forSale) {
      return this.fetchForSale();
    } else if (filter === SaleFilter.sold) {
      return this.fetchSold();
    }
    return this.fetchAll();
  }

  private fetchForSale(): Observable<Sale[]> {
    return of(SaleServiceService.forSale).pipe(take(1));
  }

  private fetchSold(): Observable<Sale[]> {
    return of(SaleServiceService.sold).pipe(take(1));
  }
  private fetchAll() {
    return of([...SaleServiceService.forSale, ...SaleServiceService.sold]);
  }
}

export namespace SaleServiceService {
  export const forSale = [
    {
      id: 1,
      name: 'Unique Unicorn',
      price: 15,
      owner: 'Jacob',
    },
    {
      id: 2,
      name: 'Unique Unicorn',
      price: 115,
      owner: 'Jacob',
    },
    {
      id: 3,
      name: 'Unique Unicorn',
      price: 315,
      owner: 'John',
    },
  ];

  export const sold = [
    {
      id: 1,
      name: 'Unique Unicorn',
      owner: 'Jacob',
    },
    {
      id: 2,
      name: 'Unique Unicorn',
      owner: 'Jacob',
    },
    {
      id: 3,
      name: 'Unique Unicorn',
      owner: 'John',
    },
    {
      id: 4,
      name: 'Unique Unicorn 2',
      owner: 'John 2',
    },
    {
      id: 5,
      name: 'Unique Unicorn 5',
      owner: 'John 5',
    },
  ];
}
