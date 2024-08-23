import { MediaType, MessageSourceType } from "../../enums";
import { WebhookNotificationBase } from "./WebhookNotificationBase";

type Referral = {
    source_url: string;
    source_id: string;
    source_type: MessageSourceType;
    headline: string;
    body: string;
    media_type: MediaType;
    image_url: string;
    video_url: string;
    thumbnail_url: string;
}

type Text = {
    body: string
}
type Message = {
    referral: Referral;
    text: Text;

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