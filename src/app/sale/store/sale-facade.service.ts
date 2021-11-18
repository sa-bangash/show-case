import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaleServiceService } from './sale-service.service';
import { Product } from './product.model';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class SaleFacadeService {
  private itemsSource = new BehaviorSubject<Product[]>([]);
  public items$ = this.itemsSource.asObservable();
  private destory$ = new Subject();
  private cartItemsSource = new BehaviorSubject<Cart[]>([]);
  public cartItems$ = this.cartItemsSource.asObservable();

  public total$ = this.cartItemsSource.pipe(
    map((items) => {
      if (Array.isArray(items)) {
        return items.reduce((acc, item) => {
          return (acc + item.price) * item.quantity;
        }, 0);
      }
      return 0;
    })
  );
  constructor(private service: SaleServiceService, private router: Router) {}

  fetchItem() {
    this.service.fetchItem().subscribe((list) => {
      this.itemsSource.next(list);
    });
  }

  onBuy() {
    this.navigateToList();
  }

  navigateToList() {
    this.router.navigate(['collection']);
  }

  addToCart(newItem: Product) {
    const items = this.cartItemsSource.value;
    const found = items.findIndex((i) => i.id === newItem.id);
    if (found > -1) {
      const item = items[found];
      items[found] = {
        ...item,
        quantity: item.quantity + 1,
      };
    } else {
      items.push({
        ...newItem,
        quantity: 1,
      });
    }
    this.cartItemsSource.next(items);
  }

  navigateToCheckout() {
    this.router.navigate(['checkout']);
  }
  destory() {
    this.destory$.next();
    this.destory$.complete();
  }
}
