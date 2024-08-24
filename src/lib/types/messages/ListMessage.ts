import { PayloadMessagesBase, ReplyPayloadMessagesBase } from './PayloadMessagesBase'
import { InteractiveType } from '../../enums';


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

type SectionRow = {
    id: string;
    title: string;
    description?: string;
}

export type Section = {
    title: string;
    rows: SectionRow[];
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