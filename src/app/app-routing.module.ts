import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'product-details/:id',

        loadChildren: () =>
          import('./pages/product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
