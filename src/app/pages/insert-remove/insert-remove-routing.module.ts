import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertRemoveComponent } from './insert-remove.component';

const routes: Routes = [{ path: '', component: InsertRemoveComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InsertRemoveRoutingModule {}
