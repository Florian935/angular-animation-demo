import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenClosePulsationRoutingModule } from './open-close-pulsation-routing.module';
import { OpenClosePulsationComponent } from './open-close-pulsation.component';


@NgModule({
  declarations: [
    OpenClosePulsationComponent
  ],
  imports: [
    CommonModule,
    OpenClosePulsationRoutingModule
  ]
})
export class OpenClosePulsationModule { }
