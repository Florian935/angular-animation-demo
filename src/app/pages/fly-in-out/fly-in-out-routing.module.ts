import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlyInOutComponent } from './fly-in-out.component';

const routes: Routes = [{ path: '', component: FlyInOutComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FlyInOutRoutingModule {}
