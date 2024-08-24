import { PayloadMessagesBase } from "./PayloadMessagesBase";
import { ComponentSubType, ComponentType, ParameterType, PolicyType } from "../../enums";

type Language = {
    code: string;
    policy?: PolicyType;
}
type Image = {
    link: string;
}
export type Parameter = {
    type: ParameterType;
    text?: string;
    currency?: Currency;
    date_time?: DateTime;
    action?: Action;
    image?: Image;
}
type Action = {
    thumbnail_product_retailer_id: string;
}
export type DateTime = {
    fallback_value: string;
    day_of_week: number;
    year: number;
    month: number;
    day_of_month: number;
    hour: number;
    minute: number;
    calendar: string;
}
export type Currency = {
    fallback_value: string;
    code: string;
    amount_1000: number;
}


type Component = {
    type: ComponentType;
    parameters: Parameter[];
    sub_type?: ComponentSubType;
    index?: number;
}

type Template = {
    name: string;
    language: Language;
    components: Component[];
}

export type TemplateMessage = {
    template: Template;
} & PayloadMessagesBase;