
/**
 * Type of Interactive  messages
 */
export const interactiveType = {
    button: "button",
    list: "list",
    product: "product",
    product_list: "product_list",
    catalog_message: "catalog_message"
} as const;
export type InteractiveType = (typeof interactiveType)[keyof typeof interactiveType];

/**
 * Type of Interactive button  messages
 */
export const interactiveButtonType = {
    reply: "reply",
} as const;
export type InteractiveButtonType = (typeof interactiveButtonType)[keyof typeof interactiveButtonType];


/**
 * Type of Adress
 */
export const addressType = {
    home: "HOME",
    work: "WORK"
} as const;
export type AddressType = (typeof addressType)[keyof typeof addressType];

/**
 * Type of Message status
 */
export const messageStatus = {
    sent: "sent",
    delivered: "delivered",
    read: "read",
    failed: "failed",
    deleted: "deleted",
    captured: "captured",
    pending: "pending",

} as const;
export type MessageStatus = (typeof messageStatus)[keyof typeof messageStatus];


/**
 * Type of message. It can be text or interactive for now
 */
export const messageType = {
    text: "text",
    interactive: "interactive",
    reaction: "reaction",
    image: "image",
    audio: "audio",
    document: "document",
    sticker: "sticker",
    video: "video",
    contacts: "contacts",
    location: "location",
    template: "template",
    unknown: "unknown",
    unsupported: "unsupported",
    order: "order",
} as const;

export type MessageType = (typeof messageType)[keyof typeof messageType];


/**
 * Messaging product
 */
export const messagingProduct = {
    whatsapp: "whatsapp"
} as const;
export type MessagingProduct = (typeof messagingProduct)[keyof typeof messagingProduct];

/**
 * Recipient Type
 */
export const recipientType = {
    individual: "individual",
} as const;
export type RecipientType = (typeof recipientType)[keyof typeof recipientType];


export const componentType = {
    body: "body",
    header: "header"
} as const;
export type ComponentType = (typeof componentType)[keyof typeof componentType];


export const parameterType = {
    text: "text",
    currency: "currency",
    date_time: "date_time",
    image: "image", //For media template
    action: "action",
    button: "button"
} as const;
export type ParameterType = (typeof parameterType)[keyof typeof parameterType];

export const componentSubType = {
    catalog: "CATALOG",
} as const;
export type ComponentSubType = (typeof componentSubType)[keyof typeof componentSubType];

export const policyType = {
    deterministic: "deterministic"
} as const;
export type PolicyType = (typeof policyType)[keyof typeof policyType];


const objectType = {
    whatsapp_business_account: "whatsapp_business_account",
} as const;
export type ObjectType = (typeof objectType)[keyof typeof objectType];

const fieldType = {
    messages: "messages",
} as const;
export type FieldType = (typeof fieldType)[keyof typeof fieldType];

export const mimeType = {
    image_jpeg: "image/jpeg",
    image_webp: "image/webp",
} as const;
export type MimeType = (typeof mimeType)[keyof typeof mimeType];

export const messageSourceType = {
    advertisement: "AD",
    post: "POST",
} as const;
export type MessageSourceType = (typeof messageSourceType)[keyof typeof messageSourceType];


export const mediaType = {
    image: "IMAGE",
    video: "VIDEO",
} as const;
export type MediaType = (typeof mediaType)[keyof typeof mediaType];

export const statusConversationType = {
    user_initiated: "user_initiated",
    business_initiated: "business_initiated",
    referral_conversion: "referral_conversion",
} as const;
export type StatusConversationType = (typeof statusConversationType)[keyof typeof statusConversationType];


export const pricingModel = {
    cbp: "CBP",
} as const;
export type PricingModel = (typeof pricingModel)[keyof typeof pricingModel];


export const statusType = {
    payment: "payment",
} as const;
export type StatusType = (typeof statusType)[keyof typeof statusType];


export const errorType = {
    OAuthException: "OAuthException",
} as const;

export type ErrorType = (typeof errorType)[keyof typeof errorType];