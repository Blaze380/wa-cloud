import { MESSAGE_TYPE } from "../enums/customTypes";
import { MessageContext } from "../types/webhook/context/MessageContext";
import { ReceivedContactMessage, ReceivedTextMessage, WebhookNotificationBase } from "../types/webhook/index";

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

    public static getTextMessageContext (body: any): MessageContext {
        if (!this.isTextMessage(body)) throw new Error("This object is not a ReceivedTextMessage type");
        const textData: ReceivedTextMessage = body as ReceivedTextMessage;
        const data: MessageContext = this.getCommonMessagesData(body);
        data.message.text = textData.entry[0].changes[0].value.messages[0].text;
        return data;
    }
    public static isTextMessage (body: any): body is ReceivedTextMessage {
        if (body.entry[0])
            if (body.entry[0].changes[0])
                if (body.entry[0].changes[0].value)
                    if (body.entry[0].changes[0].value.messages[0])
                        if (body.entry[0].changes[0].value.messages[0].type = MESSAGE_TYPE.text) return true;
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