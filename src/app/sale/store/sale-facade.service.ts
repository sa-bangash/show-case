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

  public total$ = this.cartItemsSource.pipe(map(this.total));
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
      items[found] = this.calculatePerItem({
        ...item,
        quantity: item.quantity + 1,
      });
    } else {
      items.push(
        this.calculatePerItem({
          ...newItem,
          quantity: 1,
        })
      );
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

  private calculatePerItem(cartItem: Cart): Cart {
    const discountAmount = (cartItem.price / 100) * (cartItem.discount || 0);
    const taxAmount = ((cartItem.price - discountAmount) / 100) * cartItem.tax;
    const totalPrice = cartItem.price - discountAmount + taxAmount;
    return {
      ...cartItem,
      totalPrice,
    };
  }
  private total(items: Cart[]) {
    return items.reduce((acc, item) => {
      return item.totalPrice * item.quantity + acc;
    }, 0);
  }
}
