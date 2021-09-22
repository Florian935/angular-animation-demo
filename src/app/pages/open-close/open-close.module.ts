import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenCloseRoutingModule } from './open-close-routing.module';
import { OpenCloseComponent } from './open-close.component';


@NgModule({
  declarations: [
    OpenCloseComponent
  ],
  imports: [
    CommonModule,
    OpenCloseRoutingModule
  ]
})
export class OpenCloseModule { }
