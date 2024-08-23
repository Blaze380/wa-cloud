import { MessageType, MessagingProduct, RecipientType } from "../../enums"
export type PayloadMessagesBase = {
    messaging_product: MessagingProduct;
    recipient_type: RecipientType;
    to: string;
    type: MessageType;

}

export type ReplyPayloadMessagesBase = {
    context: Context;
} & PayloadMessagesBase;

type Context = {
    message_id: string;
}



