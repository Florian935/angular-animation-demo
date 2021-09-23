import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncrementDecrementStaggerRoutingModule } from './increment-decrement-stagger-routing.module';
import { IncrementDecrementStaggerComponent } from './increment-decrement-stagger.component';


@NgModule({
  declarations: [
    IncrementDecrementStaggerComponent
  ],
  imports: [
    CommonModule,
    IncrementDecrementStaggerRoutingModule
  ]
})
export class IncrementDecrementStaggerModule { }
