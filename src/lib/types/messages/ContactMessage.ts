import { AddressType } from "../../enums/customTypes";
import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase";

export type Address = {
    street?: string;
    city: string;
    state?: string;
    zip?: string;
    country: string;
    country_code: string;
    type: AddressType;
}


export type Email = {
    email: string;
    type: AddressType;
}

export type Name = {
    formatted_name: string;
    first_name?: string;
    last_name?: string;
    middle_name?: string;
    suffix?: string;
    prefix?: string;
}

export type Org = {
    company: string;
    department?: string;
    title?: string;
}

export type Phone = {
    phone: string;
    wa_id?: string;
    type: AddressType;
}

export type Url = {
    url: string;
    type?: AddressType;
}

export type Contact = {
    addresses?: Address[];
    birthday?: string;
    emails?: Email[];
    name: Name;
    org?: Org;
    phones?: Phone[];
    urls?: Url[];
}

export type ContactMessage = { contacts: Contact[]; } & PayloadMessagesBase;
export type ReplyContactMessage = { contacts: Contact[]; } & ReplyPayloadMessagesBase;
