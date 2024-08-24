import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase";

type Audio = {
    id?: string;
    link?: string;
}
/**
 * @category Message Type
 */
export type AudioMessage = {
    audio: Audio;
} & PayloadMessagesBase;
/**
 * @category Reply Message Type
 */
export type ReplyAudioMessage = {
    audio: Audio;
} & ReplyPayloadMessagesBase;