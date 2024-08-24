import { PayloadMessagesBase } from "./PayloadMessagesBase";
import { InteractiveType } from "../../enums";

type Body = {
    text: string;
}

type Footer = {
    text: string;
}

type Action = {
    catalog_id: string;
    product_retailer_id: string;
}

type Interactive = {
    type: InteractiveType;
    body: Body;
    footer?: Footer;
    action: Action;
}


export type SingleProductMessage = { interactive: Interactive; } & PayloadMessagesBase;