import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SaleFilter } from '../sale-filter.enum';
import { SaleServiceService } from './sale-service.service';
import { Sale } from './sale.model';

@Injectable({
  providedIn: 'root',
})
export class SaleFacadeService {
  private itemsSource = new BehaviorSubject<Sale[]>([]);
  public items$ = this.itemsSource.asObservable();
  constructor(private service: SaleServiceService) {}

  fetchItem(filter: SaleFilter) {
    this.service.fetchItem(filter).subscribe((list) => {
      this.itemsSource.next(list);
    });
  }
}
