import { AddressType, MediaType, MessageSourceType, MessageType, MimeType } from "../../../enums/index";
export type MessageContext = {
    profile: Profile;
    message: Message;
}
type Profile = {
    name: string;
    wa_id: string;
    phoneNumber: string;
}

type Message = {
    id: string;
    type: MessageType;
    text?: Text;
    sticker?: Sticker;
    contact?: Contact[];
    image?: Image;
    location?: Location;
    order?: Order;
    referred_product?: Referred_product;
    reaction?: Reaction;
    referral?: Referral;
    error?: Error[];
    timestamp: string;
}
type Referral = {
    source_url?: string;
    source_id?: string;
    source_type: MessageSourceType;
    headline?: string;
    body?: string;
    media_type?: MediaType;
    image_url?: string;
    video_url?: string;
    thumbnail_url?: string;
}
type Error = {
    code: number;
    details: string;
    title: string;
}
type Reaction = {
    emoji: string;
    message_id: string;
}
type Referred_product = {
    catalog_id: string;
    product_retailer_id: string;
}
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

type Location = {
    latitude: string;
    longitude: string;
    name: string;
    address: string;
}
type Text = {
    body: string;
}
type Image = {
    caption: string;
    mime_type: MimeType;
    id: string;
}
type Sticker = {
    id: string;
    animated: boolean;
    mime_type: MimeType;
}

type Address = {
    city: string;
    country: string;
    country_code: string;
    state: string;
    street: string;
    type: AddressType;
    zip: string;
}

type Name = {
    formatted_name: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    suffix: string;
    prefix: string;
}

type Org = {
    company: string;
    department: string;
    title: string;
}

type Phone = {
    phone: string;
    wa_id: string;
    type: AddressType;
}

type Url = {
    url: string;
    type: AddressType;
}

type Contact = {
    addresses: Address[];
    birthday: string;
    emails: Email[];
    name: Name;
    org: Org;
    phones: Phone[];
    urls: Url[];
}
type Email = {
    email: string;
    type: AddressType;
}
