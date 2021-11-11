import { EventEmitter, OnDestroy } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.scss'],
})
export class CustomerFilterComponent implements OnInit, OnDestroy {
  @Output()
  onChangeAction = new EventEmitter<string>();

  search$ = new BehaviorSubject<string>('');
  destroy$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.search$
      .pipe(takeUntil(this.destroy$), debounceTime(500), distinctUntilChanged())
      .subscribe((action) => {
        this.onChangeAction.emit(action);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
