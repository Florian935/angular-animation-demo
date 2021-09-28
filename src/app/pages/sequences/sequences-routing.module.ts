import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SequencesComponent } from './sequences.component';

const routes: Routes = [
    {
        path: '',
        component: SequencesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SequencesRoutingModule {}
