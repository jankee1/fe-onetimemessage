import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from './message/message.module';
import { DescriptionModule } from './description/description.module';
import { CsvModule } from './csv/csv.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BrowserAnimationsModule,
    MessageModule,
    DescriptionModule,
    CsvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
