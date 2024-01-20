import { ApiService } from '../api.service';
import { Message } from '../model/message';
import { MessageResponse } from '../model/message-response';
export abstract class AbstractCreationMessageComponent {
    isLoading = false;
    responseObjects: MessageResponse[] = [];
    constructor(
        protected readonly apiservice: ApiService
    ) {}
    sendMessages(messages: Message[]): void {
        this.isLoading = true;
        this.apiservice.sendMessages(messages).subscribe(responseObjects => {
          this.responseObjects = responseObjects;
          console.log(responseObjects)
          this.isLoading = false;
        })
    }
    sendAnotherMessage(): void {
        this.responseObjects = [];
        this.isLoading = false;
    }
}