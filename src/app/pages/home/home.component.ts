import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isSelected;
  idSelected;
  products$: Observable<any[]>;
  categories$: Observable<any[]>;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.isSelected = true;
    this.productsService.getProducts();
  }

  ngOnInit() {
    this.products$ = this.productsService.productsPublic;
    this.categories$ = this.productsService.getCategories();
  }

  selectCategory(category) {
    if (category != null || category != undefined) {
      this.isSelected = false;
      this.idSelected = category;
    } else {
      this.isSelected = true;
      this.idSelected = null;
    }
    this.productsService.getProductsByCategory(category);
  }

  seeDetails(productId) {
    this.router.navigate(['/product-details', productId]);
  }
  addToCart(productId) {}
}
