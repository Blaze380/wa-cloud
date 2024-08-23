import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase";

type Sticker = {
    id?: string;
    link?: string;
}
export type StickerMessage = {
    sticker: Sticker;
} & PayloadMessagesBase;
export type ReplyStickerMessage = {
    sticker: Sticker;
} & ReplyPayloadMessagesBase;