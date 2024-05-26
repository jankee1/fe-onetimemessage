import { City, MessageResponse } from ".";

export class MessageModel extends MessageResponse {
    
    messageBody: string;
    meetingDate: Date;
    meetingPlace: City
    
    constructor(messageBody: string, emailRecipient?: string, order?: number) {
        super(order, emailRecipient);
        this.messageBody = messageBody;
    }
}