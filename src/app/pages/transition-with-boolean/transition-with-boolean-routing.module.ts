import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransitionWithBooleanComponent } from './transition-with-boolean.component';

const routes: Routes = [
    { path: '', component: TransitionWithBooleanComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TransitionWithBooleanRoutingModule {}
