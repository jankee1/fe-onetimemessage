import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvMessageComponent } from './csv-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusMessageModule } from "../status/status-message.module";



@NgModule({
    declarations: [
        CsvMessageComponent
    ],
    exports: [
        CsvMessageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StatusMessageModule
    ]
})
export class CsvMessageModule { }
