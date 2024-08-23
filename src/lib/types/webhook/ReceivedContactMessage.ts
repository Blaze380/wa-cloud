import { AddressType } from "../../enums";
import { WebhookNotificationBase } from "./WebhookNotificationBase";

type Address = {
    city: string;
    country: string;
    country_code: string;
    state: string;
    street: string;
    type: AddressType;
    zip: string;
}

type Name = {
    formatted_name: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    suffix: string;
    prefix: string;
}

type Org = {
    company: string;
    department: string;
    title: string;
}

type Phone = {
    phone: string;
    wa_id: string;
    type: AddressType;
}

type Url = {
    url: string;
    type: AddressType;
}

type Contact = {
    addresses: Address[];
    birthday: string;
    emails: Email[];
    name: Name;
    org: Org;
    phones: Phone[];
    urls: Url[];
}
type Email = {
    email: string;
    type: AddressType;
}

type Message = {
    contacts: Contact[];
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

export type ReceivedContactMessage = WebhookNotificationBase & {
    entry: Entry[];
};