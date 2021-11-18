import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { SaleRoutingModule } from './sale-routing.module';
import { ItemListContainerComponent } from './containers/item-list-container/item-list-container.component';
import { ItemComponent } from './components/item/item.component';
import { ShareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CheckoutContainerComponent } from './containers/checkout-container/checkout-container.component';

@NgModule({
  declarations: [
    SaleComponent,
    ItemListContainerComponent,
    ItemComponent,
    CartComponent,
    CartItemComponent,
    CheckoutContainerComponent,
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SaleModule {}
