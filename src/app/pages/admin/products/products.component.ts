import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/core/services/admin.service';
export interface Producto {
  nombre: string;
  descripcion: string;
  categoria: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, AfterViewInit {
  productos$: Observable<any[]>;
  displayedColumns: string[] = [
    'nombre',
    'descripcion',
    'categoria',
    'Opciones',
  ];
  dataSource: MatTableDataSource<Producto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService) {}
  ngAfterViewInit(): void {
    this.adminService.getProducts().subscribe((resp) => {
      console.log('resp', resp);

      this.dataSource = new MatTableDataSource(resp);
      console.log(this.dataSource);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
