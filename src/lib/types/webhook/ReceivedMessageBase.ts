import { MessageType } from "../../enums/customTypes";
import { WebhookNotificationBase } from "./WebhookNotificationBase";



type Profile = {
    name: string;
}

type Contact = {
    profile: Profile;
    wa_id: string;
}



type Message = {
    from: string;
    id: string;
    timestamp: string;
    type: MessageType;
}

type Value = {
    contacts: Contact[];
    messages: Message[];
}

type Change = {
    value: Value;
}

type Entry = {
    changes: Change[];
}

export type ReceivedMessageBase = WebhookNotificationBase & { entry: Entry[]; };