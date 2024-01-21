import { ApiService } from '../api.service';
import { Message } from '../model/message';
import { MessageResponse } from '../model/message-response';
import { StatusModel } from './status/status.model';
export abstract class AbstractCreationMessageComponent {
    isLoading = false;
    responseObjects: MessageResponse[] = [];
    showStatus = false;
    constructor(
        protected readonly apiservice: ApiService
    ) {}
    sendMessages(messages: Message[]): void {
        this.isLoading = true;
        this.apiservice.sendMessages(messages).subscribe(responseObjects => {
          this.responseObjects = responseObjects;

          this.isLoading = false;
        })
    }

    onStatusUpdate(status: StatusModel): void {
        this.showStatus = false;
        this.isLoading = status.isLoading;
        this.responseObjects = status.responseObjects;
      }
    
    getStatus(): StatusModel {
        return {
          isLoading: this.isLoading,
          responseObjects: this.responseObjects
        }
    }
}