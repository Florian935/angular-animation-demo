import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertRemoveRoutingModule } from './insert-remove-routing.module';
import { InsertRemoveComponent } from './insert-remove.component';


@NgModule({
  declarations: [
    InsertRemoveComponent
  ],
  imports: [
    CommonModule,
    InsertRemoveRoutingModule
  ]
})
export class InsertRemoveModule { }
