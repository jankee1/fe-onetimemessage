import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvMessageComponent } from './message/csv/csv-message.component';
import { DescriptionComponent } from './description/description.component';
import { CreateMessageComponent } from './message/create/create-message.component';
import { ReadMessageComponent } from './message/read/read-message.component';


const routes: Routes = [
  { path: '', component: CreateMessageComponent },
  { path: 'csv', component: CsvMessageComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'message/:id', component: ReadMessageComponent },
  { path: '**', component: CreateMessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
