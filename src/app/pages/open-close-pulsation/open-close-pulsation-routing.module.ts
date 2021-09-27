import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenClosePulsationComponent } from './open-close-pulsation.component';

const routes: Routes = [{ path: '', component: OpenClosePulsationComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OpenClosePulsationRoutingModule {}
