import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase"

export type Location = {
    latitude: string;
    longitude: string;
    name: string;
    address: string;
}

export type LocationMessage = { location: Location } & PayloadMessagesBase;
export type ReplyLocationMessage = { location: Location } & ReplyPayloadMessagesBase;