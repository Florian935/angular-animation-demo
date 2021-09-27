import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusSliderRoutingModule } from './status-slider-routing.module';
import { StatusSliderComponent } from './status-slider.component';


@NgModule({
  declarations: [
    StatusSliderComponent
  ],
  imports: [
    CommonModule,
    StatusSliderRoutingModule
  ]
})
export class StatusSliderModule { }
