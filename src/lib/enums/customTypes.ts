
/**
 * A const type for interactive messages such Lists,buttons, products, etc.
 *
 * @example
 * In case of List message.
 * ```typescript
 * const message: ListMessage = {
 *       messaging_product: MESSAGE_PRODUCT.whatsapp,
 *       interactive: {
 *           type: INTERACTIVE_TYPE.list,
 *       },
 *       recipient_type: RECIPIENT_TYPE.individual,
 *       type: MESSAGE_TYPE.interactive,
 *   }
 * ```
 *
 * @example
 * In case of Button message
 * ```typescript
 *  const message: ButtonMessage = {
 *       type: MESSAGE_TYPE.interactive,
 *       interactive: {
 *           type: INTERACTIVE_TYPE.button,
 *           body: {
 *               text: bodyText,
 *           },
 *           action: {
 *               buttons: buttons
 *           },
 *       },
 *   }
 * ```
 * @see {@link WaCloudMessages#sendListMessage} - For List interactive messages
 * @see {@link WaCloudMessages#sendButtonMessage} - For Button interactive messages
 */
export const INTERACTIVE_TYPE = {
    button: "button",
    list: "list",
    product: "product",
    product_list: "product_list",
    catalog_message: "catalog_message"
} as const;
export type InteractiveType = (typeof INTERACTIVE_TYPE)[keyof typeof INTERACTIVE_TYPE];

/**
 * Type of Interactive button  messages
 */
export const INTERACTIVE_BUTTON_TYPE = {
    reply: "reply",
} as const;
export type InteractiveButtonType = (typeof INTERACTIVE_BUTTON_TYPE)[keyof typeof INTERACTIVE_BUTTON_TYPE];


/**
 * A const type for contacts such, address type, phone number type, etc.
 * @see {@link WaCloudMessages#sendContactMessage} - For Contact messages
 */
export const ADDRESS_TYPE = {
    home: "HOME",
    work: "WORK"
} as const;
export type AddressType = (typeof ADDRESS_TYPE)[keyof typeof ADDRESS_TYPE];

/**
 * A const type for message status
 * @example
 * To set a message as read
 * ```typescript
 *  const message: MarkedAsRead = {
 *       message_id: messageId,
 *       status: MESSAGE_STATUS.read,
 *   }
 * ```
 * @see {@link WaCloudMessages#sendMarkAsRead} - For Mark as read a  message
 */
export const MESSAGE_STATUS = {
    sent: "sent",
    delivered: "delivered",
    read: "read",
    failed: "failed",
    deleted: "deleted",
    captured: "captured",
    pending: "pending",

} as const;
export type MessageStatus = (typeof MESSAGE_STATUS)[keyof typeof MESSAGE_STATUS];


/**
 * Type of message. It can be text or interactive for now
 * @example
* ```typescript
 * const message: TextMessage = {
*           type: MESSAGE_TYPE.text,
*           text: {
*               body: text,
*           }
*       }
* ```
 */
export const MESSAGE_TYPE = {
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

export type MessageType = (typeof MESSAGE_TYPE)[keyof typeof MESSAGE_TYPE];


/**
 * Message Product
 * @example
* ```typescript
 * const message: TextMessage = {
 *          messaging_product: MESSAGE_PRODUCT.whatsapp,
* ```
 */
export const MESSAGE_PRODUCT = {
    whatsapp: "whatsapp"
} as const;
export type MessagingProduct = (typeof MESSAGE_PRODUCT)[keyof typeof MESSAGE_PRODUCT];

/**
 * Recipient Type
 */
export const RECIPIENT_TYPE = {
    individual: "individual",
} as const;
export type RecipientType = (typeof RECIPIENT_TYPE)[keyof typeof RECIPIENT_TYPE];

/**
 * Type for indicating a component type, a template message only has two components and both are optional: Header and Body. The two receive an array of parameters.
 * @example
 * ```typescript
 *  const message: TemplateMessage = {
 *           type: MESSAGE_TYPE.template,
 *           template: {
 *               name: templateName,
 *               components: [
 *                   {
 *                       type: COMPONENT_TYPE.body,
 *                       parameters: [
 *
 *                       ],
 *                   }
 *
 *               ]
 *           },
 *       }
 * ```
 *
 * @see {@link WaCloudMessages#sendTemplateMessageWithComponents} - For template message with Components
 */
export const COMPONENT_TYPE = {
    body: "body",
    header: "header"
} as const;
export type ComponentType = (typeof COMPONENT_TYPE)[keyof typeof COMPONENT_TYPE];


/**
 * Type for indicating a parameter type is for each component of a template message
 * @see {@link WaCloudMessages#sendTemplateMessageWithComponents} - For template message with Components
 */
export const PARAMETER_TYPE = {
    text: "text",
    currency: "currency",
    date_time: "date_time",
    image: "image", //For media template
    action: "action",
    button: "button"
} as const;
export type ParameterType = (typeof PARAMETER_TYPE)[keyof typeof PARAMETER_TYPE];

export const COMPONENT_SUB_TYPE = {
    catalog: "CATALOG",
} as const;
export type ComponentSubType = (typeof COMPONENT_SUB_TYPE)[keyof typeof COMPONENT_SUB_TYPE];

export const POLICY_TYPE = {
    deterministic: "deterministic"
} as const;
export type PolicyType = (typeof POLICY_TYPE)[keyof typeof POLICY_TYPE];


const OBJECT_TYPE = {
    whatsapp_business_account: "whatsapp_business_account",
} as const;
export type ObjectType = (typeof OBJECT_TYPE)[keyof typeof OBJECT_TYPE];

const FIELD_TYPE = {
    messages: "messages",
} as const;
export type FieldType = (typeof FIELD_TYPE)[keyof typeof FIELD_TYPE];

/**
 * Type for indicating all media types supported by whatsapp
 */
export const MIME_TYPE = {
    audio: {
        aac: "audio/aac",
        mp3: "audio/mp3",
        mpeg: "audio/mpeg",
        amr: "audio/amr",
        ogg: "audio/ogg",
        opus: "audio/opus",
    },
    application: {
        powerpoint: "application/vnd.ms-powerpoint",
        msword: "application/msword",
        officeDocumentPresentation: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        spreadSheet: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        pdf: "application/pdf",
        excel: "application/vnd.ms-excel"
    },
    text: {
        plain: "text/plain"
    },
    image: {
        jpeg: "image/jpeg",
        webp: "image/webp",
        png: "image/png",

    },
    video: {
        mp4: "video/mp4",
        _3gpp: "video/3gpp"
    },
} as const;
export type MimeType = (typeof MIME_TYPE)[keyof typeof MIME_TYPE];
/**
 * Type for indicating which source the user used to start a conversation, it can BE a post or an advertisement
 */
export const MESSAGE_SOURCE_TYPE = {
    advertisement: "AD",
    post: "POST",
} as const;
export type MessageSourceType = (typeof MESSAGE_SOURCE_TYPE)[keyof typeof MESSAGE_SOURCE_TYPE];

/**
 * Type for indicating which media  the user saw to start a conversation
 */
export const MEDIA_TYPE = {
    image: "IMAGE",
    video: "VIDEO",
} as const;
export type MediaType = (typeof MEDIA_TYPE)[keyof typeof MEDIA_TYPE];

/**
 * Type for indicating who started the conversation
 */
export const STATUS_CONVERSATION_TYPE = {
    user_initiated: "user_initiated",
    business_initiated: "business_initiated",
    referral_conversion: "referral_conversion",
} as const;
export type StatusConversationType = (typeof STATUS_CONVERSATION_TYPE)[keyof typeof STATUS_CONVERSATION_TYPE];


export const PRICING_MODEL = {
    cbp: "CBP",
} as const;
export type PricingModel = (typeof PRICING_MODEL)[keyof typeof PRICING_MODEL];


export const STATUS_TYPE = {
    payment: "payment",
} as const;
export type StatusType = (typeof STATUS_TYPE)[keyof typeof STATUS_TYPE];


export const ERROR_TYPE = {
    OAuthException: "OAuthException",
} as const;

export type ErrorType = (typeof ERROR_TYPE)[keyof typeof ERROR_TYPE];