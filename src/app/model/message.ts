export class Message {
    
    messageBody: string;
    order?: number;
    emailRecipient?: string;
    id?: string;
    emailSentSuccessfully?: boolean;
    
    constructor(messageBody: string, emailRecipient?: string, order?: number, id?:  string, emailSentSuccessfully?: boolean) {
        this.messageBody = messageBody;

        if(emailRecipient) {
            this.emailRecipient = emailRecipient;
        }
        if(order) {
            this.order = order;
        }
        if(id) {
            this.id = id;
        }
        if(emailSentSuccessfully) {
            this.emailSentSuccessfully = emailSentSuccessfully;
        }
    }
}