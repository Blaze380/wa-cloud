import { MessageStatus } from "./enums";

export type MarkedAsRead = {
    messaging_product: string
    status: MessageStatus;
    message_id: string;
}



