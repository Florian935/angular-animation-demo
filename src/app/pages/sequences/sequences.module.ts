import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SequencesRoutingModule } from './sequences-routing.module';
import { SequencesComponent } from './sequences.component';


@NgModule({
  declarations: [
    SequencesComponent
  ],
  imports: [
    CommonModule,
    SequencesRoutingModule
  ]
})
export class SequencesModule { }
