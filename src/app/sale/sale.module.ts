import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { SaleRoutingModule } from './sale-routing.module';
import { ItemListContainerComponent } from './containers/item-list-container/item-list-container.component';
import { ItemComponent } from './components/item/item.component';
import { CreateItemFormComponent } from './components/create-item-form/create-item-form.component';
import { ShareModule } from '../share/share.module';
import { SaleFilterComponent } from './components/sale-filter/sale-filter.component';

@NgModule({
  declarations: [
    SaleComponent,
    ItemListContainerComponent,
    ItemComponent,
    CreateItemFormComponent,
    SaleFilterComponent,
  ],
  imports: [CommonModule, SaleRoutingModule, ShareModule],
})
export class SaleModule {}
