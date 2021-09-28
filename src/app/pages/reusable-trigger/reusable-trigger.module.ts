import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableTriggerRoutingModule } from './reusable-trigger-routing.module';
import { ReusableTriggerComponent } from './reusable-trigger.component';


@NgModule({
  declarations: [
    ReusableTriggerComponent
  ],
  imports: [
    CommonModule,
    ReusableTriggerRoutingModule
  ]
})
export class ReusableTriggerModule { }
