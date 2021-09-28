import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReusableAnimationComponent } from './reusable-animation.component';

const routes: Routes = [{ path: '', component: ReusableAnimationComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReusableAnimationRoutingModule {}
