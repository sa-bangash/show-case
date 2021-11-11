import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardImageDirective } from './card-image.directive';
import { CardTitleDirective } from './card-title.directive';
import { CardContentDirective } from './card-content.directive';
import { CardSubTitleDirective } from './card-sub-title.directive';
import { CardHeaderComponent } from './card-header/card-header.component';
const exportComponents = [
  CardComponent,
  CardImageDirective,
  CardTitleDirective,
  CardContentDirective,
  CardHeaderComponent,
  CardSubTitleDirective,
];

@NgModule({
  declarations: [...exportComponents],
  exports: [...exportComponents],
  imports: [CommonModule],
})
export class CardModule {}
