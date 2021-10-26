import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Category {
  _id: string;
  id: string;
  nombre: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
}

export interface DiscoDTO {
  nombre: string;
  precio: number;
  descripcion: string;
  categoria: string;
}
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3001/categorias');
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/productos');
  }

  createProduct(request: DiscoDTO) {
    return this.http.post('http://localhost:3001/productos', request);
  }
}
