import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register-user/register-user.module').then(m => m.RegisterUserModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-user/login-user.module').then(m => m.LoginUserModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInformationRoutingModule { }
