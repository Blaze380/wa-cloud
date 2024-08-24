import { PayloadMessagesBase } from "./PayloadMessagesBase";
import { InteractiveType } from "../../enums";

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

type Product_item = {
    product_retailer_id: string;
}

type Section = {
    title: string;
    product_items: Product_item[];
}

type Action = {
    catalog_id: string;
    sections: Section[];
}

type Interactive = {
    type: InteractiveType;
    header?: Header;
    body: Body;
    footer?: Footer;
    action: Action;
}

export type MultiProductMessage = { interactive: Interactive; } & PayloadMessagesBase;