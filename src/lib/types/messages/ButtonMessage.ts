import { PayloadMessagesBase, ReplyPayloadMessagesBase } from "./PayloadMessagesBase";
import { InteractiveButtonType, InteractiveType } from "../../enums/customTypes";

type Body = {
    text: string;
}

export type Reply = {
    id: string;
    title: string;
}

export type Button = {
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

/**
 * @category Message Type
 */
export type ButtonMessage = {
    interactive: Interactive;
} & PayloadMessagesBase;

/**
 * @category Reply Message Type
 */
export type ReplyButtonMessage = {
    interactive: Interactive;
} & ReplyPayloadMessagesBase;



