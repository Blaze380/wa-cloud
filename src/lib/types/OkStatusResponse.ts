import { MessagingProduct } from "../enums"
export type OkStatusResponse = {
    messaging_product: MessagingProduct;
    contacts: Contact[];
    messages: Message[];
}

type Contact = {
    input: string;
    wa_id: string;
}

type Message = {
    id: string;
}

