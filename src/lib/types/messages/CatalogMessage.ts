import { PayloadMessagesBase } from "./PayloadMessagesBase";
import { InteractiveType } from "./enums";

type Body = {
    text: string;
}

type Parameter = {
    thumbnail_product_retailer_id: string;
}

type Action = {
    name: string;
    parameters: Parameter;
}

type Footer = {
    text: string;
}

type Interactive = {
    type: InteractiveType;
    body: Body;
    action: Action;
    footer?: Footer;
}

export type CatalogMessage = { interactive: Interactive; } & PayloadMessagesBase;