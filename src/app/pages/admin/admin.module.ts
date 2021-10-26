import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { NavComponent } from './nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatButtonModule } from '@angular/material/button';
import { ProductsComponent } from './products/products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AdminComponent,
    CreateProductComponent,
    NavComponent,
    DashboardComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
  ],
})
export class AdminModule {}
