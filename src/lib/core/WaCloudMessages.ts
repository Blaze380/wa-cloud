import axios, { AxiosInstance, AxiosResponse } from "axios";
import { WaCloudCredentials } from "./WaCloudCredentials";
import { ReplyTextMessage, TextMessage } from "@/types/messages/TextMessage";
import { messageType, messagingProduct, recipientType } from "../enums";
import { OkStatusResponse } from "../types/OkStatusResponse";
export class WaCloudMessages {
    private readonly waCredentials: WaCloudCredentials;
    private readonly api: AxiosInstance;
    private readonly messagesEndpoint: string;

    constructor (waCloudCredentials: WaCloudCredentials) {
        this.waCredentials = waCloudCredentials;
        this.messagesEndpoint = `${ this.waCredentials.baseUrl }/${ this.waCredentials.phoneNumberId }/messages`;
        this.api = axios.create({
            baseURL: this.messagesEndpoint,
            headers: {
                Authorization: `Bearer ${ this.waCredentials.accessToken }`,
                "Content-Type": "application/json"
            }
        });
    }

    public async sendTextMessage (text: string, to: number, previewUrl: boolean = false): Promise<OkStatusResponse> {
        const textMessage: TextMessage = {
            messaging_product: messagingProduct.whatsapp,
            recipient_type: recipientType.individual,
            type: messageType.text,
            to: to.toString(),
            text: {
                body: text,
                preview_url: previewUrl
            }

        }
        const response: AxiosResponse<any, any> = await this.api.post("", textMessage);
        const data: OkStatusResponse = await response.data;
        return data;
    }
    public async replyTextMessage (text: string, to: number, messageId: string, previewUrl: boolean = false): Promise<OkStatusResponse> {
        const textMessage: ReplyTextMessage = {
            messaging_product: messagingProduct.whatsapp,
            recipient_type: recipientType.individual,
            type: messageType.text,
            context: {
                message_id: messageId,
            },
            to: to.toString(),
            text: {
                body: text,
                preview_url: previewUrl
            }

        }
        const response: AxiosResponse<any, any> = await this.api.post("", textMessage);
        const data: OkStatusResponse = await response.data;
        return data;
    }
}