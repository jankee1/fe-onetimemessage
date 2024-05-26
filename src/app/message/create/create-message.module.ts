import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateMessageComponent } from './create-message.component';
import { StatusMessageModule } from "../status/status-message.module";
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    declarations: [
        CreateMessageComponent
    ],
    exports: [
        CreateMessageComponent
    ],
    imports: [
        DropdownModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        CommonModule,
        ReactiveFormsModule,
        StatusMessageModule,
        NgSelectModule, 
        FormsModule
    ]
})
export class CreateMessageModule { }
