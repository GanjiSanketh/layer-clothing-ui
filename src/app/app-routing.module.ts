import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'layer',
        pathMatch: 'full'
    },
    {
        path: 'layer',
        loadChildren: () =>
            import('./layer/layer.module').then(m => m.LayerModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
