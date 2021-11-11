import { EventEmitter, OnDestroy } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SaleFilter } from '../../sale-filter.enum';

@Component({
  selector: 'app-sale-filter',
  templateUrl: './sale-filter.component.html',
  styleUrls: ['./sale-filter.component.scss'],
})
export class SaleFilterComponent implements OnInit, OnDestroy {
  @Output()
  onChangeAction = new EventEmitter<string>();

  search$ = new BehaviorSubject<string>('');
  destroy$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.search$.pipe(takeUntil(this.destroy$)).subscribe((action) => {
      this.onChangeAction.emit(action);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
