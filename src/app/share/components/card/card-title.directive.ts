import { Directive } from '@angular/core';

@Directive({
  selector: '[app-card-title],app-card-title',
  host: {
    class: 'card-title',
  },
})
export class CardTitleDirective {
  constructor() {}
}
