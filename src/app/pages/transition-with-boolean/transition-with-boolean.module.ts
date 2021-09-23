import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitionWithBooleanRoutingModule } from './transition-with-boolean-routing.module';
import { TransitionWithBooleanComponent } from './transition-with-boolean.component';


@NgModule({
  declarations: [
    TransitionWithBooleanComponent
  ],
  imports: [
    CommonModule,
    TransitionWithBooleanRoutingModule
  ]
})
export class TransitionWithBooleanModule { }
