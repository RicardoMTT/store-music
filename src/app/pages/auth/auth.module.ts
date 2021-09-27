import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { EllipsisModule } from 'ngx-ellipsis';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, EllipsisModule],
})
export class AuthModule {}
