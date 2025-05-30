import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductInformationRoutingModule } from './product-information-routing.module';
import { ProductInformationComponent } from './product-information.component';


@NgModule({
  declarations: [ProductInformationComponent],
  imports: [
    CommonModule,
    ProductInformationRoutingModule
  ]
})
export class ProductInformationModule { }
