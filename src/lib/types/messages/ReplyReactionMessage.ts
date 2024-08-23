import { PayloadMessagesBase } from "./PayloadMessagesBase";

interface Reaction {
    message_id: string;
    emoji: string;
}

export type ReplyReactionMessage = {
    reaction: Reaction;
} & PayloadMessagesBase;