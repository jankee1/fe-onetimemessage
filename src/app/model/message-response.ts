export class MessageResponse {
    
    order?: number;
    id?: string;
    emailSentSuccessfully?: boolean;
    
    constructor(order?: number, id?:  string, emailSentSuccessfully?: boolean) {
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