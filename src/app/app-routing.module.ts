import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'open-close',
        loadChildren: () =>
            import('./pages/open-close/open-close.module').then(
                (m) => m.OpenCloseModule
            ),
    },
    {
        path: 'fly-in-out',
        loadChildren: () =>
            import('./pages/fly-in-out/fly-in-out.module').then(
                (m) => m.FlyInOutModule
            ),
    },
    {
        path: 'insert-remove',
        loadChildren: () =>
            import('./pages/insert-remove/insert-remove.module').then(
                (m) => m.InsertRemoveModule
            ),
    },
    {
        path: '',
        redirectTo: 'open-close',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'open-close',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
