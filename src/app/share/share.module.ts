import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardImageDirective } from './components/card/card-image.directive';
import { CardTitleDirective } from './components/card/card-title.directive';
import { CardContentDirective } from './components/card/card-content.directive';
import { CardSubTitleDirective } from './components/card/card-sub-title.directive';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
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
export class ShareModule {}
