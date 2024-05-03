import { MessageResponse } from ".";

export class Message extends MessageResponse {
    
    messageBody: string;
    meetingDate: Date;
    meetingPlace: string
    
    constructor(messageBody: string, emailRecipient?: string, order?: number) {
        super(order, emailRecipient);
        this.messageBody = messageBody;
    }
}