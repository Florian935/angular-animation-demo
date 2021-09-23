import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyInOutRoutingModule } from './fly-in-out-routing.module';
import { FlyInOutComponent } from './fly-in-out.component';


@NgModule({
  declarations: [
    FlyInOutComponent
  ],
  imports: [
    CommonModule,
    FlyInOutRoutingModule
  ]
})
export class FlyInOutModule { }
