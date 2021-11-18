import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root',
})
export class SaleServiceService {
  constructor() {}

  fetchItem(): Observable<Product[]> {
    return this.fetchProducts();
  }

  private fetchProducts(): Observable<Product[]> {
    return of(SaleServiceService.products).pipe(take(1));
  }
}

export namespace SaleServiceService {
  export let products: Product[] = [
    {
      id: 1,
      name: 'Coffe',
      price: 15,
      imgUrl: './assets/images/image-2.png',
    },
    {
      id: 2,
      name: 'Bread',
      price: 115,
      imgUrl: './assets/images/image-5.png',
    },
    {
      id: 3,
      name: 'Juice',
      price: 315,
      imgUrl: './assets/images/image-4.png',
    },
  ];
}
