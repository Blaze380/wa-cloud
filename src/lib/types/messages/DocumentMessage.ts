import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase";

type Document = {
    id?: string;
    link?: string;
    caption: string;
    filename?: string;
}
export type DocumentMessage = {
    document: Document;
} & PayloadMessagesBase;
export type ReplyDocumentMessage = {
    document: Document;
} & ReplyPayloadMessagesBase;