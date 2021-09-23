import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncrementDecrementStaggerComponent } from './increment-decrement-stagger.component';

const routes: Routes = [
    {
        path: '',
        component: IncrementDecrementStaggerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IncrementDecrementStaggerRoutingModule {}
