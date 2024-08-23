import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase";
import { InteractiveButtonType, InteractiveType } from "./enums";

type Body = {
    text: string;
}

type Reply = {
    id: string;
    title: string;
}

type Button = {
    type: InteractiveButtonType;
    reply: Reply;
}



type Action = {
    buttons: Button[];
}

type Interactive = {
    type: InteractiveType;
    body: Body;
    action: Action;
}


export type ButtonMessage = {
    interactive: Interactive;
} & PayloadMessagesBase;

export type ReplyButtonMessage = {
    interactive: Interactive;
} & ReplyPayloadMessagesBase;



