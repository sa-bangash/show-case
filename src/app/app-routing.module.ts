import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'collection',
    loadChildren: () => import('./sale/sale.module').then((m) => m.SaleModule),
  },
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
