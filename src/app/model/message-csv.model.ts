export interface MessageCsvModel {
    Order?: string;
    'Email recepient'?: string;
    Message: string
}



type ObligatoryColumnsType = keyof MessageCsvModel;
export const MESSAGE_CSV_OBLIGATORY_COLUMNS: ObligatoryColumnsType[] = [... Object.keys({
    Message: ""
}) as unknown as ObligatoryColumnsType[]];

type OptionalColumnsType = keyof MessageCsvModel;
export const MESSAGE_CSV_OPTIONAL_COLUMNS: OptionalColumnsType[] = [... Object.keys({
    // Order: '',
    'Email recepient': ''
}) as unknown as ObligatoryColumnsType[]];

type EmailColumnType = keyof MessageCsvModel;
export const MESSAGE_CSV_EMAIL_COLUMN: EmailColumnType = [... Object.keys({
    'Email recepient': ""
}) as unknown as ObligatoryColumnsType[]][0];