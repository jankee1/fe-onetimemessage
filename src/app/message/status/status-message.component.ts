import { Component, Input } from '@angular/core';
import { MessageResponse } from '../../model/message-response';


@Component({
  selector: 'status-message',
  templateUrl: './status-message.component.html',
  styleUrl: './status-message.component.css'
})
export class StatusMessageComponent {

  @Input() isLoading = false;
  @Input() responseObject: MessageResponse[] = [];

  constructor() {}

  sendAnotherMessage(): void {
    this.responseObject = [];
    this.isLoading = false;
  }
}
