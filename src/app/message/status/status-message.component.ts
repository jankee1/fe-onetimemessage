import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusModel } from './status.model';
import { MessageResponse } from '../../model/message-response';


@Component({
  selector: 'status-message',
  templateUrl: './status-message.component.html',
  styleUrl: './status-message.component.css'
})
export class StatusMessageComponent {

  @Input() status: StatusModel;
  @Output() statusUpdateEvent = new EventEmitter<StatusModel>();

  sendAnotherMessage(): void {
    this.statusUpdateEvent.emit({
      isLoading: false,
      responseObjects: []
    })
  }

  showLoader(): boolean {
    return this.status.isLoading && !this.status.responseObjects?.length;
  }

  getUrl(id: string): string {
    return `http://localhost:4000/message/${id}`;
  }

  getEmailNotification(response: MessageResponse): string {
    if(response?.emailRecipient ) {
      return response.emailSentSuccessfully ? 'Email sent' : 'Email has not been sent';
    }
    return 'Email has not been set';
  }
}
