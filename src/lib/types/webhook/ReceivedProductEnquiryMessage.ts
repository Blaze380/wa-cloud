import { WebhookNotificationBase } from "./WebhookNotificationBase";


export type Referred_product = {
    catalog_id: string;
    product_retailer_id: string;
}

export type Context = {
    from: string;
    id: string;
    referred_product: Referred_product;
}


type Message = {
    context: Context;
}

type Value = {
    messages: Message[];
}

type Change = {
    value: Value;
}

type Entry = {
    changes: Change[];
}

export type ReceivedProductEnquiryMessage = WebhookNotificationBase & { entry: Entry[]; };