import { MessageResponse } from "./message-response";

export class Message extends MessageResponse {
    
    messageBody: string;
    emailRecipient?: string;
    
    constructor(messageBody: string, emailRecipient?: string, order?: number) {
        super(order);
        this.messageBody = messageBody;

        if(emailRecipient) {
            this.emailRecipient = emailRecipient;
        }
    }
}