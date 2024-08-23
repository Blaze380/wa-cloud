import { WebhookNotificationBase } from "./WebhookNotificationBase";

type Location = {
    latitude: string;
    longitude: string;
    name: string;
    address: string;
}

type Message = {
    location: Location;
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

export type ReceivedLocationMessage = WebhookNotificationBase & {
    entry: Entry[];
};