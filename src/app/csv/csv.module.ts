import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvComponent } from './csv.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CsvComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CsvComponent
  ]
})
export class CsvModule { }
