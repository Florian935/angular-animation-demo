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
        path: 'increment-decrement-stagger',
        loadChildren: () =>
            import(
                './pages/increment-decrement-stagger/increment-decrement-stagger.module'
            ).then((m) => m.IncrementDecrementStaggerModule),
    },
    {
        path: 'transition-with-boolean',
        loadChildren: () =>
            import(
                './pages/transition-with-boolean/transition-with-boolean.module'
            ).then((m) => m.TransitionWithBooleanModule),
    },
    {
        path: 'status-slider',
        loadChildren: () =>
            import('./pages/status-slider/status-slider.module').then(
                (m) => m.StatusSliderModule
            ),
    },
    {
        path: 'open-close-pulsation',
        loadChildren: () =>
            import(
                './pages/open-close-pulsation/open-close-pulsation.module'
            ).then((m) => m.OpenClosePulsationModule),
    },
    {
        path: 'groups',
        loadChildren: () =>
            import('./pages/groups/groups.module').then((m) => m.GroupsModule),
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
