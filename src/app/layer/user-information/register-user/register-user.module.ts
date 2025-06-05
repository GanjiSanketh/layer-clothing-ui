import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterUserRoutingModule } from './register-user-routing.module';
import { RegisterUserComponent } from './register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterUserModule { }
