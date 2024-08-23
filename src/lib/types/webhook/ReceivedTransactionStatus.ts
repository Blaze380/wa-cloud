import { WebhookNotificationBase } from "./WebhookNotificationBase";


type Payment = {
    reference_id: string;
}
type Status = {
    payment: Payment;
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

export type ReceivedTransactionStatus = { entry: Entry[]; } & WebhookNotificationBase;