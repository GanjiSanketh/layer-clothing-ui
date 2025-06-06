import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-information/user-information.module').then(m => m.UserInformationModule),
  },
  {
    path: 'product-information',
    loadChildren: () =>
      import('./product-information/product-information.module').then(m => m.ProductInformationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayerRoutingModule { }
