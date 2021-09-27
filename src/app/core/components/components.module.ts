import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [FooterComponent,NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
