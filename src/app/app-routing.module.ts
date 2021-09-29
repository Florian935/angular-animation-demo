import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomeModule),
        data: { animation: 'HomePage' },
    },
    {
        path: 'about',
        loadChildren: () =>
            import('./pages/about/about.module').then((m) => m.AboutModule),
        data: { animation: 'AboutPage' },
    },
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
        data: { animation: 'FilterPage' },
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
        path: 'sequences',
        loadChildren: () =>
            import('./pages/sequences/sequences.module').then(
                (m) => m.SequencesModule
            ),
    },
    {
        path: 'reusable-animation',
        loadChildren: () =>
            import('./pages/reusable-animation/reusable-animation.module').then(
                (m) => m.ReusableAnimationModule
            ),
    },
    {
        path: 'reusable-trigger',
        loadChildren: () =>
            import('./pages/reusable-trigger/reusable-trigger.module').then(
                (m) => m.ReusableTriggerModule
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
