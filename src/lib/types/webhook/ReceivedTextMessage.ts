import { MessageType } from "../../enums";
import { WebhookNotificationBase } from "./WebhookNotificationBase";


type Text = {
    body: string;
}
type Identity = {
    acknowledged: boolean;
    created_timestamp: number;
    hash: string;
}
type Message = {
    type: MessageType;
    text: Text;
    identity?: Identity;
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

export type ReceivedTextMessage = WebhookNotificationBase & {
    entry: Entry[];
};