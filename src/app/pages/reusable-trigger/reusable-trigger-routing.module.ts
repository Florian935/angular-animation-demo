import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReusableTriggerComponent } from './reusable-trigger.component';

const routes: Routes = [{ path: '', component: ReusableTriggerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReusableTriggerRoutingModule {}
