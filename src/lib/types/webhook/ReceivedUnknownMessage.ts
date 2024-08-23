import { WebhookNotificationBase } from "./WebhookNotificationBase";

type Error = {
    code: number;
    details: string;
    title: string;
}

type Message = {
    error: Error[];
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

export type ReceivedUnknownMessage = WebhookNotificationBase & {
    entry: Entry[];
};