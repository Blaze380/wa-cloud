import { PayloadMessagesBase, ReplyPayloadMessagesBase } from '@/types/messages/PayloadMessagesBase'
interface Text {
    preview_url?: boolean;
    body: string;
}
export type TextMessage = {
    text: Text;
} & PayloadMessagesBase;

export type ReplyTextMessage = {
    text: Text;
} & ReplyPayloadMessagesBase;





