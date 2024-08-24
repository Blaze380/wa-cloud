import { FieldType, MessagingProduct, ObjectType } from "../../enums/customTypes";


type Metadata = {
    display_phone_number: string;
    phone_number_id: string;
}


type Value = {
    messaging_product: MessagingProduct;
    metadata: Metadata;
}

type Change = {
    value: Value;
    field: FieldType;
}

type Entry = {
    id: string;
    changes: Change[];
}

export type WebhookNotificationBase = {
    object: ObjectType;
    entry: Entry[];
}