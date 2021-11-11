import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { ItemListContainerComponent } from './containers/item-list-container/item-list-container.component';
import { ItemComponent } from './components/item/item.component';
import { CreateItemFormComponent } from './components/create-item-form/create-item-form.component';
import { CardModule } from '../share/components/card/card.module';
import { CustomerFilterComponent } from './components/customer-filter/customer-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerContainerComponent } from './containers/create-customer-container/create-customer-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomerComponent } from './customer.component';
import { NgxsModule } from '@ngxs/store';
import { CustomerState } from './store/customer.store';

@NgModule({
  declarations: [
    CustomerComponent,
    ItemListContainerComponent,
    ItemComponent,
    CreateItemFormComponent,
    CustomerFilterComponent,
    CreateCustomerContainerComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgxsModule.forFeature([CustomerState]),
  ],
})
export class CustomerModule {}
