import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvComponent } from './csv/csv.component';
import { DescriptionComponent } from './description/description.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: '', component: MessageComponent },
  { path: 'csv', component: CsvComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'message/:id', component: DescriptionComponent },
  { path: '**', component: MessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
