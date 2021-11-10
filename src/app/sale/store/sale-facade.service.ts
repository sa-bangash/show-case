import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
  constructor(private service: SaleServiceService, private router: Router) {}

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

  onBuy(item: Sale) {
    this.service.onBuy(item).subscribe(() => {
      this.fetchItem();
    });
  }
  setFilter(filter: SaleFilter) {
    this.filterSource.next(filter);
  }

  navigateToList() {
    this.router.navigate(['collection']);
  }
}
