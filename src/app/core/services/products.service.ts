import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public productsPublic = this.products$.asObservable();

  constructor(private http: HttpClient) {
    console.log('constructor auth');
  }

  getProducts() {
    this.http
      .get('http://localhost:3001/productos')
      .pipe(tap((val: any) => this.products$.next(val)))
      .subscribe();
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/categorias');
  }

  getProduct(productId) {
    return this.http
      .get<any[]>(`http://localhost:3001/productos/${productId}`)
      .pipe(tap((product) => console.log('product', product)));
  }
  getProductsByCategory(idCategory) {
    if (idCategory == null || idCategory == undefined) {
      return this.http
        .get('http://localhost:3001/productos')
        .pipe(tap((val: any) => this.products$.next(val)))
        .subscribe();
    }
    let params = new HttpParams().set('categoria', idCategory);

    return this.http
      .get<any[]>('http://localhost:3001/productosByCategory', { params })
      .pipe(tap((val) => this.products$.next(val)))
      .subscribe();
  }
}
