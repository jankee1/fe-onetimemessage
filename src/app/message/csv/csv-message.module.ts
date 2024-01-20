import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvMessageComponent } from './csv-message.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CsvMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CsvMessageComponent
  ]
})
export class CsvMessageModule { }
