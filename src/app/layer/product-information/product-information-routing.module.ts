import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInformationComponent } from './product-information.component';

const routes: Routes = [
  {
    path: '',
    component: ProductInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductInformationRoutingModule { }
