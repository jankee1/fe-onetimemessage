import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadMessageComponent } from './read-message.component';



@NgModule({
  declarations: [
    ReadMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  exports: [
    ReadMessageComponent
  ],
})
export class ReadMessageModule { }
