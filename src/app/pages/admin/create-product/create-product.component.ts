import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import {
  AdminService,
  Category,
  DiscoDTO,
} from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductComponent implements OnInit {
  selectedCategory: number = null;
  categories$: Observable<Category[]>;
  diskForm: FormGroup;
  durationInSeconds = 5;
  filePath;
  imagenURL;
  public selectedFile: File;
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) {
    this.diskForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: [null, [Validators.required]],
      img: [''],
      filename: [''],
    });
    this.categories$ = this.adminService.getCategories();
  }

  ngOnInit(): void {}
  createDisk() {
    const { name, price, description, category } = this.diskForm.value;
    console.log(name, price, description, category);
    const requestDTO: DiscoDTO = {
      nombre: name,
      precio: price,
      descripcion: description,
      categoria: category,
    };
    this.adminService.createProduct(requestDTO).subscribe(
      (resp) => {
        console.log('resp', resp);
        this._snackBar.openFromComponent(PizzaPartyComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  chooseFile(event) {
    this.selectedFile = event.target.files;
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  imagePreview(e) {
    const file = (e.target as HTMLInputElement).files[0];
    this.diskForm.patchValue({
      img: file,
    });
    this.diskForm.get('img').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-pizza-party"> Producto creado!!! 🍕 </span>`,
  styles: [
    `
      .example-pizza-party {
        color: hotpink;
      }
    `,
  ],
})
export class PizzaPartyComponent {}
