import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleComponent } from './sale.component';
import { ItemListContainerComponent } from './containers/item-list-container/item-list-container.component';
import { CreateItemFormComponent } from './components/create-item-form/create-item-form.component';
import { CreateCollectableContainerComponent } from './containers/create-collectable-container/create-collectable-container.component';
import { CheckoutContainerComponent } from './containers/checkout-container/checkout-container.component';

const routes: Routes = [
  {
    path: '',
    component: SaleComponent,
    children: [
      {
        path: 'collection',
        component: ItemListContainerComponent,
      },
      {
        path: 'card',
        component: CreateCollectableContainerComponent,
      },
      {
        path: 'checkout',
        component: CheckoutContainerComponent,
      },
      {
        path: '',
        redirectTo: 'collection',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
