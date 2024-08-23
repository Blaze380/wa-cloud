import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase";

type Audio = {
    id?: string;
    link?: string;
}
export type AudioMessage = {
    audio: Audio;
} & PayloadMessagesBase;
export type ReplyAudioMessage = {
    audio: Audio;
} & ReplyPayloadMessagesBase;