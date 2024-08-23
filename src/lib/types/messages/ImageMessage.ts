import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase";

type Image = {
    id?: string;
    link?: string;
}
export type ImageMessage = {
    image: Image;
} & PayloadMessagesBase;

export type ReplyImageMessage = {
    image: Image;
} & ReplyPayloadMessagesBase;
