import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ItemListContainerComponent } from './containers/item-list-container/item-list-container.component';
import { CreateItemFormComponent } from './components/create-item-form/create-item-form.component';
import { CreateCustomerContainerComponent } from './containers/create-customer-container/create-customer-container.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'customers',
        component: ItemListContainerComponent,
      },
      {
        path: 'create',
        component: CreateCustomerContainerComponent,
      },
      {
        path: 'edit/:id',
        component: CreateCustomerContainerComponent,
      },
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
