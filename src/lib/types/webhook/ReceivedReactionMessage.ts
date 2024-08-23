import { WebhookNotificationBase } from "./WebhookNotificationBase";

type Reaction = {
    emoji: string;
    message_id: string;
}
type Message = {
    reaction: Reaction;
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

export type ReceivedReactionMessage = WebhookNotificationBase & {
    entry: Entry[];
};