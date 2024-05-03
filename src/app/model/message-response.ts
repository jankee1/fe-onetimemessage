export class MessageResponse {
    
    order?: number;
    id?: string;
    emailSentSuccessfully?: boolean;
    emailRecipient?: string;
    
    constructor(order?: number, emailRecipient?: string, id?:  string, emailSentSuccessfully?: boolean) {
        if(order) {
            this.order = order;
        }
        if(id) {
            this.id = id;
        }
        if(emailSentSuccessfully) {
            this.emailSentSuccessfully = emailSentSuccessfully;
        }
        if(emailRecipient) {
            this.emailRecipient = emailRecipient;
        }
    }
}