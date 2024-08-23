import { MimeType } from "../../enums";
import { WebhookNotificationBase } from "./WebhookNotificationBase";

type Sticker = {
    id: string;
    animated: boolean;
    mime_type: MimeType;
    sha256: string;
}
type Message = {
    sticker: Sticker;
}

type Value = {
    messages: Message[];
}

type Change = {
    value: Value;
}

type Entry = {
    changes: Change[];
}

export type ReceivedStickerMessage = WebhookNotificationBase & {
    entry: Entry[];
};