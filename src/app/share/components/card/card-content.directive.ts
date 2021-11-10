import { Directive } from '@angular/core';

@Directive({
  selector: '[app-card-content],app-card-content',
  host: {
    class: 'card-content',
  },
})
export class CardContentDirective {
  constructor() {}
}
