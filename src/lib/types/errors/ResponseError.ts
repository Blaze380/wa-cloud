import { ErrorType, MessagingProduct } from '../../enums/customTypes';
export type ResponseError = {
    error: Error;
}


type Error_data = {
    messaging_product?: MessagingProduct;
    details?: string;
}

type Error = {
    message: string;
    type: ErrorType | string;
    code: number;
    error_data?: Error_data;
    error_subcode?: number;
    fbtrace_id: string;
}
