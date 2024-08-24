import { MimeType } from "../../enums/customTypes";
import { WebhookNotificationBase } from "./WebhookNotificationBase";

type Image = {
    caption: string;
    mime_type: MimeType;
    sha256: string;
    id: string;
}
type Message = {
    image: Image;
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

export type ReceivedImageMessage = WebhookNotificationBase & {
    entry: Entry[];
};