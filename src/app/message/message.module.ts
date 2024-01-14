import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MessageComponent
  ],
})
export class MessageModule { }
