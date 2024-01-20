import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusMessageComponent } from './status-message.component';



@NgModule({
  declarations: [
    StatusMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  exports: [
    StatusMessageComponent
  ],
})
export class StatusMessageModule { }
