import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase";

type Video = {
    id?: string;
    link?: string;
    caption: string;
}
export type VideoMessage = {
    video: Video;
} & PayloadMessagesBase;
export type ReplyVideoMessage = {
    video: Video;
} & ReplyPayloadMessagesBase;