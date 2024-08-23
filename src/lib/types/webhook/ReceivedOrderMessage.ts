import { WebhookNotificationBase } from "./WebhookNotificationBase";



type Product_item = {
    product_retailer_id: string;
    quantity: string;
    item_price: string;
    currency: string;
}

type Order = {
    catalog_id: string;
    product_items: Product_item[];
    text: string;
}



type Context = {
    from: string;
    id: string;
}
type Message = {
    context?: Context;
    order: Order;

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

export type ReceivedOrderMessage = WebhookNotificationBase & { entry: Entry[]; };