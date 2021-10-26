import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductComponent } from './create-product/create-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'create',
        component: CreateProductComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
