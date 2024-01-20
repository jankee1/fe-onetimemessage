export interface MessageModel {
    id?: string;
    messageBody: string;
    emailRecipient?: string;
    emailSentSuccessfully?: boolean;
}