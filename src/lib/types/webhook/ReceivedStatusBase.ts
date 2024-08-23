import { WebhookNotificationBase } from "./WebhookNotificationBase";



type Status = {
    id: string;
    status: string;
    timestamp: string;
    recipient_id: string;
}

type Value = {
    statuses: Status[];
}

type Change = {
    value: Value;
}

type Entry = {
    changes: Change[];
}

export type ReceivedStatusBase = { entry: Entry[]; } & WebhookNotificationBase;
export type ReceivedUpdateNotificationsStatus = ReceivedStatusBase;