import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableAnimationRoutingModule } from './reusable-animation-routing.module';
import { ReusableAnimationComponent } from './reusable-animation.component';


@NgModule({
  declarations: [
    ReusableAnimationComponent
  ],
  imports: [
    CommonModule,
    ReusableAnimationRoutingModule
  ]
})
export class ReusableAnimationModule { }
