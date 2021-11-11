import { Directive } from '@angular/core';

@Directive({
  selector: '[app-card-image], app-card-image',
  host: { class: 'card-image' },
})
export class CardImageDirective {
  constructor() {}
}
