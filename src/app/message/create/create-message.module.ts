import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateMessageComponent } from './create-message.component';
import { StatusMessageModule } from "../status/status-message.module";

@NgModule({
    declarations: [
        CreateMessageComponent
    ],
    exports: [
        CreateMessageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        CommonModule,
        ReactiveFormsModule,
        StatusMessageModule
    ]
})
export class CreateMessageModule { }
