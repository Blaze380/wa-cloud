import { PayloadMessagesBase, ReplyPayloadMessagesBase } from './PayloadMessagesBase'
import { InteractiveType } from './enums';

type Context = {
    message_id: string;
}

type Header = {
    type: string;
    text: string;
}

type Body = {
    text: string;
}

type Footer = {
    text: string;
}

type Row = {
    id: string;
    title: string;
    description?: string;
}

type Section = {
    title: string;
    rows: Row[];
}

type Action = {
    button: string;
    sections: Section[];
}

type Interactive = {
    type: InteractiveType;
    header?: Header;
    body: Body;
    footer?: Footer;
    action: Action;
}

export type ListMessage = {
    interactive: Interactive;
} & PayloadMessagesBase

export type ReplyListMessage = {
    interactive: Interactive;
} & ReplyPayloadMessagesBase;