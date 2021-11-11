import { Directive } from '@angular/core';

@Directive({
  selector: '[app-card-sub-title],app-card-sub-title',
  host: {
    class: 'card-sub-title',
  },
})
export class CardSubTitleDirective {
  constructor() {}
}
