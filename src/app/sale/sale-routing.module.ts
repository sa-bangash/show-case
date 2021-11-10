import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleComponent } from './sale.component';
import { ItemListContainerComponent } from './containers/item-list-container/item-list-container.component';
import { CreateItemFormComponent } from './components/create-item-form/create-item-form.component';

const routes: Routes = [
  {
    path: '',
    component: SaleComponent,
    children: [
      {
        path: '',
        component: ItemListContainerComponent,
      },
      {
        path: 'card',
        component: CreateItemFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
