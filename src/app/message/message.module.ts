import { NgModule } from '@angular/core';
import { CreateMessageModule } from './create/create-message.module';
import { ReadMessageModule } from './read/read-message.module';
import { CsvMessageModule } from './csv/csv-message.module';

@NgModule({
  exports: [
    CreateMessageModule,
    ReadMessageModule,
    CsvMessageModule
  ],
})
export class MessageModule { }
