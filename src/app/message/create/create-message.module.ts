import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateMessageComponent } from './create-message.component';



@NgModule({
  declarations: [
    CreateMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateMessageComponent
  ],
})
export class CreateMessageModule { }
