import { MessagingProduct } from "../enums/customTypes"
/**
 * @category Responses/types
 * @type {OkStatusResponse}
 * @type OkStatusResponse
 * Can be used to type the Ok status response object of sent messages
 * @example
 * This example ilustrates the response template
 * ```json
 *   {
 *        "messaging_product": "whatsapp",
 *        "contacts": [
 *            {
 *                "input": "<RECIPIENT_PHONE_NUMBER>",
 *                "wa_id": "<RECIPIENT_PHONE_NUMBER>"
 *            }
 *        ],
 *        "messages": [
 *            {
 *                "id": "<MESSAGE_ID>"
 *            }
 *        ]
 *     }
 * ```
 * @example
 * A response would be like this:
 * ```json
 *   {
 *        "messaging_product": "whatsapp",
 *        "contacts": [
 *            {
 *                "input": "258861234567",
 *                "wa_id": "258861234567"
 *            }
 *        ],
 *        "messages": [
 *            {
 *                "id": "wamid.HBgMMjU4ODYwODAQyMDI0FQIAERgSODsadadFQjFCNTY2NzY3OTZCMTkO5AA=="
 *            }
 *        ]
 *     }
 * ```
 */
export type OkStatusResponse = {
    /**
     * @example mugabe
     */
    messaging_product: MessagingProduct;
    contacts: Contact[];
    messages: Message[];
}

export type Contact = {
    input: string;
    wa_id: string;
}

export type Message = {
    id: string;
}

