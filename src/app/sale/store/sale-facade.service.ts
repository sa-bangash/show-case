import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { SaleFilter } from '../sale-filter.enum';
import { SaleServiceService } from './sale-service.service';
import { Sale } from './sale.model';

@Injectable({
  providedIn: 'root',
})
export class SaleFacadeService {
  private itemsSource = new BehaviorSubject<Sale[]>([]);
  public items$ = this.itemsSource.asObservable();
  private filterSource = new BehaviorSubject<SaleFilter>(null);
  public filter$ = this.filterSource.asObservable();
  private destory$ = new Subject();
  private cartItemsSource = new BehaviorSubject<Sale[]>([]);

  public total$ = this.cartItemsSource.pipe(
    map((items) => {
      if (Array.isArray(items)) {
        return items.reduce((acc, item) => {
          return acc + item.price;
        }, 0);
      }
      return 0;
    })
  );
  public cartItems$ = this.cartItemsSource.asObservable();
  constructor(private service: SaleServiceService, private router: Router) {
    this.filter$.pipe(takeUntil(this.destory$)).subscribe(() => {
      this.fetchItem();
    });
  }

  fetchItem() {
    this.filter$
      .pipe(
        switchMap((filter) => {
          return this.service.fetchItem(filter);
        })
      )
      .subscribe((list) => {
        this.itemsSource.next(list);
      });
  }

  onAddItem(item: Sale) {
    this.service.onAddItem(item).subscribe(() => {
      this.navigateToList();
    });
  }

  onBuy() {
    this.navigateToList();
  }
  setFilter(filter: SaleFilter) {
    this.filterSource.next(filter);
  }

  navigateToList() {
    this.router.navigate(['collection']);
  }

  addToCart(newItem: Sale) {
    const prevItem = this.cartItemsSource.value;
    this.cartItemsSource.next([...prevItem, newItem]);
  }

  navigateToCheckout() {
    this.router.navigate(['checkout']);
  }
  destory() {
    this.destory$.next();
    this.destory$.complete();
  }
}
