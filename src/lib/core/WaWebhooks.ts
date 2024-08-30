import { MESSAGE_TYPE } from "../enums/customTypes";
import { MessageContext } from "../types/webhook/context/MessageContext";
import { ReceivedContactMessage, ReceivedImageMessage, ReceivedLocationMessage, ReceivedOrderMessage, ReceivedReactionMessage, ReceivedTextMessage, WebhookNotificationBase, ReceivedStickerMessage, ReceivedUnknownMessage, ReceivedProductEnquiryMessage } from "../types/webhook/index";

export class WaWebhooks {

    /**
     *
     * @param body
     * @returns
     */
    public static getTextMessage (body: any): ReceivedTextMessage {
        if (!this.isTextMessage(body)) throw new Error("This object is not a ReceivedTextMessage type");
        return body as ReceivedTextMessage;
    }
    public static getImageMessage (body: any): ReceivedImageMessage {
        if (!this.isImageMessage(body)) throw new Error("This object is not a ReceivedImageMessage type");
        return body as ReceivedImageMessage;
    }
    public static getContactMessage (body: any): ReceivedContactMessage {
        if (!this.isContactMessage(body)) throw new Error("This object is not a ReceivedContactMessage type");
        return body as ReceivedContactMessage;
    }
    public static getLocationMessage (body: any): ReceivedLocationMessage {
        if (!this.isLocationMessage(body)) throw new Error("This object is not a ReceivedLocationMessage type");
        return body as ReceivedLocationMessage;
    }
    public static getOrderMessage (body: any): ReceivedOrderMessage {
        if (!this.isOrderMessage(body)) throw new Error("This object is not a ReceivedOrderMessage type");
        return body as ReceivedOrderMessage;
    }
    public static getReactionMessage (body: any): ReceivedReactionMessage {
        if (!this.isReactionMessage(body)) throw new Error("This object is not a ReceivedReactionMessage type");
        return body as ReceivedReactionMessage;
    }
    public static getStickerMessage (body: any): ReceivedStickerMessage {
        if (!this.isStickerMessage(body)) throw new Error("This object is not a ReceivedStickerMessage type");
        return body as ReceivedStickerMessage;
    }
    public static getUnknownMessage (body: any): ReceivedUnknownMessage {
        if (!this.isUnknownMessage(body)) throw new Error("This object is not a ReceivedUnknownMessage type");
        return body as ReceivedUnknownMessage;
    }

    public static getTextMessageContext (body: any): MessageContext {
        const textData: ReceivedTextMessage = this.getTextMessage(body);
        const data: MessageContext = this.getCommonMessagesData(body);
        data.message.text = textData.entry[0].changes[0].value.messages[0].text;
        return data;
    }
    public static getContactMessageContext (body: any): MessageContext {
        const textData: ReceivedContactMessage = this.getContactMessage(body);
        const data: MessageContext = this.getCommonMessagesData(body);
        data.message.contact = textData.entry[0].changes[0].value.messages[0].contacts;
        return data;
    }
    public static getImageMessageContext (body: any): MessageContext {
        const textData: ReceivedImageMessage = this.getImageMessage(body);
        const data: MessageContext = this.getCommonMessagesData(body);
        data.message.image = textData.entry[0].changes[0].value.messages[0].image;
        return data;
    }
    public static getLocationMessageContext (body: any): MessageContext {
        const textData: ReceivedLocationMessage = this.getLocationMessage(body);
        const data: MessageContext = this.getCommonMessagesData(body);
        data.message.location = textData.entry[0].changes[0].value.messages[0].location;
        return data;
    }
    public static getOrderMessageContext (body: any): MessageContext {
        const textData: ReceivedOrderMessage = this.getOrderMessage(body);
        const data: MessageContext = this.getCommonMessagesData(body);
        data.message.order = textData.entry[0].changes[0].value.messages[0].order;
        return data;
    }
    public static getReactionMessageContext (body: any): MessageContext {
        const textData: ReceivedReactionMessage = this.getReactionMessage(body);
        const data: MessageContext = this.getCommonMessagesData(body);
        data.message.reaction = textData.entry[0].changes[0].value.messages[0].reaction;
        return data;
    }
    public static getUnknownMessageContext (body: any): MessageContext {
        const textData: ReceivedUnknownMessage = this.getUnknownMessage(body);
        const data: MessageContext = this.getCommonMessagesData(body);
        data.message.error = textData.entry[0].changes[0].value.messages[0].error;
        return data;
    }
    public static getStickerMessageContext (body: any): MessageContext {
        const textData: ReceivedStickerMessage = this.getStickerMessage(body);
        const data: MessageContext = this.getCommonMessagesData(body);
        data.message.sticker = textData.entry[0].changes[0].value.messages[0].sticker;
        return data;
    }

    private static isMessage (body: any): boolean {
        if (body.entry[0])
            if (body.entry[0].changes[0])
                if (body.entry[0].changes[0].value)
                    if (body.entry[0].changes[0].value.messages[0]) return true;
        return false;
    }
    public static isTextMessage (body: any): body is ReceivedTextMessage {
        if (!this.isMessage(body)) return false;
        if (body.entry[0].changes[0].value.messages[0].type = MESSAGE_TYPE.text) return true;
        return false;
    }
    public static isImageMessage (body: any): body is ReceivedImageMessage {
        if (!this.isMessage(body)) return false;
        if (body.entry[0].changes[0].value.messages[0].type = MESSAGE_TYPE.image) return true;
        return false;
    }
    public static isContactMessage (body: any): body is ReceivedContactMessage {
        if (!this.isMessage(body)) return false;
        if (body.entry[0].changes[0].value.messages[0].type = MESSAGE_TYPE.contacts) return true;
        return false;
    }
    public static isLocationMessage (body: any): body is ReceivedLocationMessage {
        if (!this.isMessage(body)) return false;
        if (body.entry[0].changes[0].value.messages[0].type = MESSAGE_TYPE.location) return true;
        return false;
    }
    public static isOrderMessage (body: any): body is ReceivedOrderMessage {
        if (!this.isMessage(body)) return false;
        if (body.entry[0].changes[0].value.messages[0].type = MESSAGE_TYPE.order) return true;
        return false;
    }
    public static isReactionMessage (body: any): body is ReceivedReactionMessage {
        if (!this.isMessage(body)) return false;
        if (body.entry[0].changes[0].value.messages[0].type = MESSAGE_TYPE.reaction) return true;
        return false;
    }
    public static isStickerMessage (body: any): body is ReceivedStickerMessage {
        if (!this.isMessage(body)) return false;
        if (body.entry[0].changes[0].value.messages[0].type = MESSAGE_TYPE.sticker) return true;
        return false;
    }
    public static isUnknownMessage (body: any): body is ReceivedUnknownMessage {
        if (!this.isMessage(body)) return false;
        if (body.entry[0].changes[0].value.messages[0].type = MESSAGE_TYPE.unknown) return true;
        return false;
    }
    private static getCommonMessagesData (body: any): MessageContext {
        const data: MessageContext = {
            profile: {
                name: body.entry[0].changes[0].value.contacts[0].profile.name,
                phoneNumber: body.entry[0].changes[0].value.messages[0].from,
                wa_id: body.entry[0].changes[0].value.contacts[0].wa_id,
            },
            message: {
                id: body.entry[0].changes[0].value.messages[0].id,
                timestamp: body.entry[0].changes[0].value.messages[0].timestamp,
                type: body.entry[0].changes[0].value.messages[0].type,
            }
        }
        return data;
    }
}