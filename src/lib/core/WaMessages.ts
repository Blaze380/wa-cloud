import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { WaCredentials } from "./WaCredentials";
import { AudioMessage, ButtonMessage, ContactMessage, DocumentMessage, ImageMessage, ListMessage, LocationMessage, MarkedAsRead, ReplyAudioMessage, ReplyDocumentMessage, ReplyImageMessage, ReplyReactionMessage, ReplyStickerMessage, ReplyTextMessage, ReplyVideoMessage, StickerMessage, TemplateMessage, TextMessage, VideoMessage } from "@/types/messages";
import { OkStatusResponse } from "@/types/OkStatusResponse";
import { OAuthException } from "../exceptions";
import { MESSAGE_TYPE, MESSAGE_PRODUCT, RECIPIENT_TYPE, COMPONENT_TYPE, INTERACTIVE_TYPE, MESSAGE_STATUS, MessageStatus, ADDRESS_TYPE, PARAMETER_TYPE } from "../enums";
import { Contact, ReplyContactMessage } from "@/types/messages/ContactMessage";
import { Location, ReplyLocationMessage } from "@/types/messages/LocationMessage";
import { Parameter } from "@/types/messages/TemplateMessage";
import { ReplyListMessage, Section } from "@/types/messages/ListMessage";
import { Button, ReplyButtonMessage } from "@/types/messages/ButtonMessage";


/**
 * @class
 * This class is used send messages of all types such Text,video,image,buttons,list and many more including reply messages
 * @see {@link WaCredentials} - How to create the credentials class
 * @example
 *  To get started sending messages, you have to create the class with credentials
 * ```typescript
 *  import {WaCredentials,WaCloudMessages} from "blaze380/wa-cloud";
 *
 *  const waCredentials:WaCredentials= new WaCredentials(12345567890,"accessToken",1234555555,124478479823,"v20.0");
 *  const wa:WaCloudMessages = new WaCloudMessages(waCredentials);
 *  const sendMessage=async():Promise<void>=>{
 *      const response = await wa.sendTextMessage("Hello, World!","258851234567");
 *      console.log("Response:\n",response);
 * }
 * sendMessage();
 * ```
 *@category Messages Methods
 *
 */
export class WaMessages {
    private readonly waCredentials: WaCredentials;
    private readonly api: AxiosInstance;
    private readonly messagesEndpoint: string;

    /**
     *@hideconstructor
     * @param WaCredentials
     */
    constructor (WaCredentials: WaCredentials) {
        if (!WaCredentials) throw new Error("This Object is null");
        this.waCredentials = WaCredentials;
        this.messagesEndpoint = `${ this.waCredentials.baseUrl }/${ this.waCredentials.phoneNumberId }/messages`;
        this.api = axios.create({
            baseURL: this.messagesEndpoint,
            headers: {
                Authorization: `Bearer ${ this.waCredentials.accessToken }`,
                "Content-Type": "application/json"
            }
        });
    }

    /**
    * Sends a text message
    * @param text - the message
    * @param to - Destination user, the phone number  must be together with the country code
    * @param previewUrl - set true if you want to send a text message with link
    *
    * @throws {OAuthException} - If one of the parameters value is incorrect
    * @group Messages

    * @returns {OkStatusResponse} - Whatsapp Ok status response
    * @see {@link OkStatusResponse} - A whatsapp response type
    * @example
    *  Let's suppose that you're texting to someone that lives in mozambique,
    *  their code is 258 and phone number length is 9...
    * ```typescript
    * wa.sendTextMessage("Hello, World!","258851234567");
    * ```
    * @example
    * If you want to send a link message, you can set the `previewUrl` to `true`.
    * ```typescript
    * wa.sendTextMessage("Hello, World!","258851234567",true);
    * ```
    * @example
    * Some Wrong type or incomplete values will throw an Exception
     * ```typescript
     * wa.sendTextMessage(null,"125");
     * ```
     *
     */
    public async sendTextMessage (text: string, to: string, previewUrl: boolean = false): Promise<OkStatusResponse> {
        const message: TextMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            recipient_type: RECIPIENT_TYPE.individual,
            type: MESSAGE_TYPE.text,
            to: to,
            text: {
                body: text,
                preview_url: previewUrl
            }

        }
        return await this.postData(message);
    }
    /**
     * Sends a Reply text message
     * @see {WaCloudMessages.sendTemplateMessage}  for more details
     * @param text - the message
     * @param to - Destination user, the phone number  must be together with the country code
     * @example
     * To reply a message
     * ```typescript
     * wa.sendTextMessageReply("Hello, World!","258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN");
     * ```
     *@param messageId - Id of the message to be replied
     * @param previewUrl - set true if you want to send a text message with link
     * @throws {OAuthException} - If one of the parameters value is incorrect
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @group  Reply Messages
     *
     */
    public async sendTextMessageReply (text: string, to: string, messageId: string, previewUrl: boolean = false): Promise<OkStatusResponse> {
        const message: ReplyTextMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            recipient_type: RECIPIENT_TYPE.individual,
            type: MESSAGE_TYPE.text,
            context: {
                message_id: messageId,
            },
            to: to,
            text: {
                body: text,
                preview_url: previewUrl
            }

        }

        return await this.postData(message);
    }

    /**
     * @alpha
     *  Sends Reaction message reply
     * @param messageId - Id of the message to be replied
     * @param to - recipient phone number
     * @param emoji - emoji string or object string
     * @example
     *  ```typescript
     * wa.sendReactionMessageReply("wamid.jknjnJNNUHmUNUnu","258851234567","😀");
     * ```
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @group  Reply Messages
     */
    public async sendReactionMessageReply (messageId: string, to: string, emoji: string): Promise<OkStatusResponse> {
        const message: ReplyReactionMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            reaction: {
                message_id: messageId,
                emoji: emoji,
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.reaction,

        }
        return await this.postData(message);
    }

    /**
     * @alpha
     *  Send Image message
     * @remarks
     * You can't send Image message using both image Id and link, it will throw an Error
     * @param to - recipient phone number
     * @param id - id of the image
     * @param link -  link of the image
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @example
     * Sending image message with Id
     * ```typescript
     * wa.sendImageMessage("258851234567","214425665");
     * ```
     * @example
     * Sending image message with link
     * ```typescript
     * wa.sendImageMessage("258851234567",undefined,"github.com/johndoe/profile-photo.png");
     * ```
     * @group Messages
     */
    public async sendImageMessage (to: string, id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) {
            throw new Error("You can't send an image message using both id and link.");
        }
        const message: ImageMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            image: {
                id: id,
                link: link,
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.image,
        }
        return await this.postData(message);
    }

    /**
     *
     * Send image message reply
     * @remarks
     * You can't send image message using both image Id and link, it will throw an Error
     * @param to - recipient phone number
     * @param messageId - Id of the message to be replied
     * @param id - id of the image
     * @param link -  link of the image
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     *
     * * @example
     * Sending image message reply with Id
     * ```typescript
     * wa.sendImageMessage("258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN","214425665");
     * ```
     * @example
     * Sending image message reply with link
     * ```typescript
     * wa.sendImageMessage("258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN",undefined,"github.com/johndoe/profile-photo.png");
     * ```
     *
     * @group  Reply Messages
     */
    public async sendImageMessageReply (to: string, messageId: string, id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) {
            throw new Error("You can't send an image message using both id and link.");
        }
        const message: ReplyImageMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            context: {
                message_id: messageId,
            },
            image: {
                id: id,
                link: link,
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.image,
        }
        return await this.postData(message);
    }
    /**
     * Send Audio message
     * @remarks
     * You can't send Audio message using both audio Id and link, it will throw an Error
     * @param to - recipient phone number
     * @param id - id of the Audio
     * @param link -  link of the Audio
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     *  * @example
     * Sending audio message with Id
     * ```typescript
     * wa.sendAudioMessage("258851234567","214425665");
     * ```
     * @example
     * Sending audio message with link
     * ```typescript
     * wa.sendAudioMessage("258851234567",undefined,"github.com/johndoe/audio.mp3");
     * ```
     * @group Messages
     */
    public async sendAudioMessage (to: string, id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) throw new Error("You can't send an audio message using both id and link.");
        const message: AudioMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            audio: {
                id: id,
                link: link,
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.audio,
        }
        return await this.postData(message);
    }
    /**
     * Send Audio message
     * @remarks
     * You can't send Audio message using both audio Id and link, it will throw an Error
     * @param to - recipient phone number
     * @param messageId - Id of the message to be replied
     * @param id - id of the audio
     * @param link -  link of the audio
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @group  Reply Messages
     * @example
     * Sending audio message with Id
     * ```typescript
     * wa.sendAudioMessageReply("258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN","214425665");
     * ```
     * @example
     * Sending audio message with link
     * ```typescript
     * wa.sendAudioMessageReply("258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN",undefined,"github.com/johndoe/audio.mp3");
     * ```
     */
    public async sendAudioMessageReply (to: string, messageId: string, id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) throw new Error("You can't send an audio message using both id and link.");
        const message: ReplyAudioMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            context: {
                message_id: messageId,
            },
            audio: {
                id: id,
                link: link,
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.audio,
        }
        return await this.postData(message);
    }
    /**
     * Send document message
     * @remarks
     * You can't send doument message using both doument Id and link, it will throw an Error
     * @param to - recipient phone number
     * @param caption - Caption for the document
     * @param fileName - filename, if it's not provided the file will be named as untlitled
     * @param id - id of the document
     * @param link -  link of the document
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @group Messages
     * @example
     * Sending document message with Id
     * ```typescript
     * wa.sendDocumentMessage("258851234567","214425665");
     * ```
     * @example
     * Sending document message with link
     * ```typescript
     * wa.sendDocumentMessage("258851234567",undefined,"github.com/johndoe/audio.pdf");
     * ```
     */
    public async sendDocumentMessage (to: string, caption?: string, fileName: string = "", id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) throw new Error("You can't send an document message using both id and link.");
        const message: DocumentMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            document: {
                id: id,
                link: link,
                caption: caption,
                filename: fileName
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.document,
        }
        return await this.postData(message);
    }
    /**
    * Sends document message reply
    * @remarks
    * You can't send document message using both document Id and link, it will throw an Error
    * @param messageId  -  Id of the message to be replied
    * @param to - recipient phone number
    * @param caption - Caption for the document
    * @param fileName - filename, if it's not provided the file will be named as untlitled
    * @param id - id of the document
    * @param link -  link of the document
    * @returns {OkStatusResponse} - Whatsapp Ok status response
    * @group  Reply Messages
    * @example
    * Sending document message with Id
    * ```typescript
    * wa.sendDocumentMessageReply("258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN","214425665");
    * ```
    * @example
    * Sending document message with link
    * ```typescript
    * wa.sendDocumentMessageReply("258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN",undefined,"github.com/johndoe/audio.pdf");
    * ```
    */
    public async sendDocumentMessageReply (to: string, messageId: string, caption?: string, fileName?: string, id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) throw new Error("You can't send an document message using both id and link.");
        const message: ReplyDocumentMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            context: {
                message_id: messageId,
            },
            document: {
                id: id,
                link: link,
                caption: caption,
                filename: fileName
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.document,
        }
        return await this.postData(message);
    }
    /**
    * Send sticker message
    * @remarks
    * You can't send sticker message using both sticker Id and link, it will throw an Error
    * @param to - recipient phone number
    * @param id - id of the sticker
    * @param link -  link of the sticker
    * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @example
    * Sending sticker message with Id
    * ```typescript
    * wa.sendStickerMessage("258851234567","214425665");
    * ```
    * @example
    * Sending sticker message with link
    * ```typescript
    * wa.sendStickerMessage("258851234567",undefined,"github.com/johndoe/audio.webp");
    * ```
    * @group Messages
    */
    public async sendStickerMessage (to: string, id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) throw new Error("You can't send an sticker message using both id and link.");
        const message: StickerMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            sticker: {
                id: id,
                link: link,
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.sticker,
        }
        return await this.postData(message);
    }
    /**
    * Send sticker message
    * @remarks
    * You can't send sticker message using both sticker Id and link, it will throw an Error
    * @param to - recipient phone number
    * @param messageId - Id of the message to be replied
    * @param id - id of the sticker
    * @param link -  link of the sticker
    * @returns {OkStatusResponse} - Whatsapp Ok status response
    * @example
    * Sending sticker reply message with Id
    * ```typescript
    * wa.sendStickerMessageReply("258851234567","214425665");
    * ```
    * @example
    * Sending sticker reply message with link
    * ```typescript
    * wa.sendStickerMessageReply("258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN",undefined,"github.com/johndoe/audio.webp");
    * ```
    * @group  Reply Messages
    */

    public async sendStickerMessageReply (to: string, messageId: string, id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) throw new Error("You can't send an sticker message using both id and link.");
        const message: ReplyStickerMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            context: {
                message_id: messageId,
            },
            sticker: {
                id: id,
                link: link,
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.sticker,
        }
        return await this.postData(message);
    }
    /**
      * Send video message
    * @remarks
    * You can't send video message using both video Id and link, it will throw an Error
     * @param to - recipient phone number
     * @param caption - Caption for the video
     * @param id - id of the video
     * @param link -  link of the video
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @example
     * Sending video message with Id
     * ```typescript
     * wa.sendVideoMessage("258851234567","John Doe video",214425665");
     * ```
     * @example
     * Sending video message with link
     * ```typescript
     * wa.sendVideoMessage("258851234567","John Doe video",undefined,"github.com/johndoe/audio.webp");
     * ```
     * @group Messages
     */
    public async sendVideoMessage (to: string, caption: string, id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) throw new Error("You can't send an video message using both id and link.");
        const message: VideoMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            video: {
                id: id,
                link: link,
                caption: caption,
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.video,
        }
        return await this.postData(message);
    }
    /**
     * Send video message
     * @remarks
     * You can't send video message using both video Id and link, it will throw an Error
     * @param to - recipient phone number
     * @param messageId - Id of the message to be replied
     * @param caption - Caption for the video
     * @param id - id of the video
     * @param link -  link of the video
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @group  Reply Messages
     * @example
     * Sending video reply message with Id
     * ```typescript
     * wa.sendVideoMessage("258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN","John Doe video",214425665");
     * ```
     * @example
     * Sending video reply message with link
     * ```typescript
     * wa.sendVideoMessage("258851234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN","John Doe video",undefined,"github.com/johndoe/audio.webp");
     * ```
     */
    public async sendVideoMessageReply (to: string, messageId: string, caption: string, id?: string, link?: string): Promise<OkStatusResponse> {
        if (id && link) throw new Error("You can't send an video message using both id and link.");
        const message: ReplyVideoMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            context: {
                message_id: messageId,
            },
            video: {
                id: id,
                link: link,
                caption: caption,
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.video,
        }
        return await this.postData(message);
    }

    /**
      * Sends contact message
     * @remarks
     * NOTE: In the `contact` object, with exception of `name` sub-object, are optional, you can send a contact message with only name
     * @param to - recipient phone number
     * @param contacts - List of contacts
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @example
     *
     * ```typescript
     * wa.sendContactMessage("258861234567", [
     *    {
     *      name: {
     *          formatted_name: "John Doe",
     *      },
     *      addresses: [
     *          {
     *              city: "Maputo",
     *              country: "Mozambique",
     *              country_code: "mz",
     *              type: ADDRESS_TYPE.home,
     *          }
     *      ],
     *      birthday: "08-13-2024",
     *      emails: [
     *          {
     *              email: "johndoe@example.com",
     *              type: ADDRESS_TYPE.home,
     *          }
     *      ],
     *      phones: [
     *          {
     *              phone: "258 861 234 567",
     *              type: ADDRESS_TYPE.home,
     *          },
     *      ],
     *      urls: [
     *          {
     *              url: "johndoe.john.me",
     *              type: ADDRESS_TYPE.home
     *          }]
     *  }
     * ```
     * @group Messages
     */
    public async sendContactMessage (to: string, contacts: Contact[]): Promise<OkStatusResponse> {

        const message: ContactMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            contacts: contacts,
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.contacts,
        }
        return await this.postData(message);
    }

    /**
       * Sends contact reply message
     * @remarks
     * NOTE: In the `contact` object, with exception of `name` sub-object, are optional, you can send a contact message with only name
     * @param to - recipient phone number
     * @param contacts - List of contacts
     * @param messageId - Id of the message to be replied
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @group  Reply Messages
     * @example
     *
     * ```typescript
     * wa.sendContactMessageReply("258861234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN", [
     *    {
     *      name: {
     *          formatted_name: "John Doe",
     *      },
     *      addresses: [
     *          {
     *              city: "Maputo",
     *              country: "Mozambique",
     *              country_code: "mz",
     *              type: ADDRESS_TYPE.home,
     *          }
     *      ],
     *      birthday: "09-13-2024",
     *      emails: [
     *          {
     *              email: "johndoe@example.com",
     *              type: ADDRESS_TYPE.home,
     *          }
     *      ],
     *      phones: [
     *          {
     *              phone: "258 861 234 567",
     *              type: ADDRESS_TYPE.home,
     *          },
     *      ],
     *      urls: [
     *          {
     *              url: "johndoe.john.me",
     *              type: ADDRESS_TYPE.home
     *          }]
     *  }
     * ```
     */
    public async sendContactMessageReply (to: string, messageId: string, contacts: Contact[]): Promise<OkStatusResponse> {
        const message: ReplyContactMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            context: {
                message_id: messageId,
            },
            contacts: contacts,
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.contacts,
        }
        return await this.postData(message);
    }
    /**
     * Sends A location message
     * @param to - recipient phone number
     * @param location - a location object
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @example
     * ```typescript
     * this.sendLocationMessage("258861234567", {
     *       address: "John Doe's House",
     *       latitude: "1242336.7444",
     *       longitude: "1242336.7444",
     *       name: "Idk men",
     *   });
     * ```
     * @group Messages
     */
    public async sendLocationMessage (to: string, location: Location): Promise<OkStatusResponse> {

        const message: LocationMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            location: location,
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.location,
        }
        return await this.postData(message);
    }
    /**
      * Sends A location reply message
     * @param to - recipient phone number
     * @param messageId - Id of the message to be replied
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @group  Reply Messages
     * @example
     * ```typescript
     * this.sendLocationMessageReply("258861234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN", {
     *       address: "John Doe's House",
     *       latitude: "1242336.7444",
     *       longitude: "1242336.7444",
     *       name: "Idk men",
     *   });
     * ```
     */
    public async sendLocationMessageReply (to: string, messageId: string, location: Location): Promise<OkStatusResponse> {
        const message: ReplyLocationMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            context: {
                message_id: messageId
            },
            location: location,
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.location,
        }
        return await this.postData(message);
    }
    /**
     *
     * @param to - recipient phone number
     * @param templateName
     * @param templateLanguage
     * @param bodyParameters
     * @param headerParameters
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @example
     * In Case to Send Template with Date and time components.
     * ```typescript
     * wa.sendTemplateMessageWithComponents("258861234567", "hello_world", "en_us", [
     *       {
     *           type: PARAMETER_TYPE.date_time,
     *           date_time: {
     *               fallback_value: "February 25, 1977",
     *               calendar: "GREGORIAN",
     *               day_of_month: 13,
     *               day_of_week: 3,
     *               hour: 23,
     *               minute: 59,
     *               month: 9,
     *               year: 2024
*
     *           }
     *       }
     *   ]);
     * ```
     * @example
     * In Case of sending a template message with currency
     * ```typescript
     *  wa.sendTemplateMessageWithComponents("258861234567", "hello_world", "en_us", [
     *       {
     *           type: PARAMETER_TYPE.currency,
     *           currency: {
     *               fallback_value: "100.99 MZN",
     *               code: "MZN",
     *               amount_1000: 10099,
     *           }
     *       }
     *   ]);
     * ```
     * @example
     * In Case of sending a template message with additional text
     * ```typescript
     * wa.sendTemplateMessageWithComponents("258861234567", "hello_world", "en_us", [
     *       {
     *           type: PARAMETER_TYPE.text,
     *           text:"Some Text Here"
     *       }
     *   ]);
     * ```
     * @example
     * You can Also increment with image in the optional header parameters
     * ```typescript
     * wa.sendTemplateMessageWithComponents("258861234567", "hello_world", "en_us", [
     *       {
     *           type: PARAMETER_TYPE.text,
     *           text: "Some Text Here"
     *       }
     *   ],
     *       [
     *           {
     *               type: PARAMETER_TYPE.image,
     *               image: {
     *                   link: "https://johndoe.com/profile-photo.jpg"
     *               }
     *           }
     *       ]);
     * ```
     * @group Messages
     */
    public async sendTemplateMessageWithComponents (to: string,
        templateName: string,
        templateLanguage: string,
        bodyParameters: Parameter[],
        headerParameters?: Parameter[],
    ): Promise<OkStatusResponse> {
        const message: TemplateMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            template: {
                name: templateName,
                language: {
                    code: templateLanguage,
                },
                components: [
                    {
                        parameters: bodyParameters,
                        type: COMPONENT_TYPE.body,

                    }

                ]
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.template,
        }

        if (headerParameters) message.template.components[1] = { type: COMPONENT_TYPE.header, parameters: headerParameters };
        return await this.postData(message);
    }
    /**
      * Sends a Single-Option  List message
     * @param to - recipient phone number
     * @param headerText - The title, apears bolded in the message
     * @param bodyText - The body
     * @param footerText - The footer, apears with a grey style color
     * @param buttonText - the text button
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @example
     * ```typescript
     * wa.sendListMessage("258861234567", "Header Title", "Hello, World!", "By John doe Company - footer", "Select an Option", [
     *       {
     *           title: "First Option Section",
     *           rows: [
     *               {
     *                   id: "Row unique id",
     *                   title: "first option of first section",
     *                   description: "This is the first option",
     *               }
     *               {
     *                   id: "Row unique id second",
     *                   title: "second option of first section",
     *                   description: "This is the second option",
     *               }
     *           ]
     *       }
     *   ]);
     * ```
     * @group Messages
     */
    public async sendListMessage (
        to: string,
        headerText: string = "",
        bodyText: string = "",
        footerText: string = "",
        buttonText: string = "",
        sections: Section[]
    ): Promise<OkStatusResponse> {

        const message: ListMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            interactive: {
                type: INTERACTIVE_TYPE.list,
                header: {
                    type: "",
                    text: headerText,
                },
                body: {
                    text: bodyText,
                },
                footer: {
                    text: footerText,
                },
                action: {
                    button: buttonText,
                    sections: sections
                },
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.interactive,
        }
        return await this.postData(message);
    }

    /**
     * Sends a Single-Option  List reply message
     * @param to - recipient phone number
     * @param messageId - Id of the message to be replied
     * @param headerText - The title, apears bolded in the message
     * @param bodyText - The body
     * @param footerText - The footer, apears with a grey style color
     * @param buttonText - the text button
     * @param sections
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @group  Reply Messages
     * @example
     * ```typescript
     * wa.sendListMessageReply("258861234567","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN", "Header Title", "Hello, World!", "By John doe Company - footer", "Select an Option", [
     *       {
     *           title: "First Option Section",
     *           rows: [
     *               {
     *                   id: "Row unique id",
     *                   title: "first option of first section",
     *                   description: "This is the first option",
     *               }
     *               {
     *                   id: "Row unique id second",
     *                   title: "second option of first section",
     *                   description: "This is the second option",
     *               }
     *           ]
     *       }
     *   ]);
     * ```
     */
    public async sendListMessageReply (
        to: string,
        messageId: string,
        headerText: string = "",
        bodyText: string = "",
        footerText: string = "",
        buttonText: string = "",
        sections: Section[]
    ): Promise<OkStatusResponse> {

        const message: ReplyListMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            context: {
                message_id: messageId
            },
            interactive: {
                type: INTERACTIVE_TYPE.list,
                header: {
                    type: "text",
                    text: headerText,
                },
                body: {
                    text: bodyText,
                },
                footer: {
                    text: footerText,
                },
                action: {
                    button: buttonText,
                    sections: sections
                },
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.interactive,
        }
        return await this.postData(message);
    }
    /**
     * Sends a Buttons message
     * @remarks
     * NOTE that this message has a limit of 3 buttons, if exceeded, will throw an Error
     * @param to - recipient phone number
     * @param bodyText
     * @param buttons
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @example
     * ```typescript
     *   wa.sendButtonMessage("2588612345678", "Hello, World!", [
     *       {
     *           reply: {
     *               id: "unique id",
     *               title: "Title for my button",
     *           },
     *           type: "reply",
     *       }
     *   ])
     * ```
     * @group Messages
     */
    public async sendButtonMessage (
        to: string,
        bodyText: string,
        buttons: Button[]
    ): Promise<OkStatusResponse> {

        const message: ButtonMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            interactive: {
                type: INTERACTIVE_TYPE.button,
                body: {
                    text: bodyText,
                },
                action: {
                    buttons: buttons
                },
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.interactive,
        }
        return await this.postData(message);
    }

    /**
     * Sends a Buttons reply message
     * @remarks
     * NOTE that this message has a limit of 3 buttons, if exceeded, will throw an Error
     * @param to - recipient phone number
     * @param bodyText
     * @param buttons - An Buttons Array
     * @param messageId - Id of the message to be replied
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @group  Reply Messages
    * @example
     * ```typescript
     *   wa.sendButtonMessageReply("2588612345678", "Hello, World!","wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN", [
     *       {
     *           reply: {
     *               id: "unique id",
     *               title: "Title for my button",
     *           },
     *           type: "reply",
     *       }
     *   ])
     * ```
     */
    public async sendButtonMessageReply (
        to: string,
        bodyText: string,
        buttons: Button[],
        messageId: string
    ): Promise<OkStatusResponse> {

        const message: ReplyButtonMessage = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            context: {
                message_id: messageId
            },
            interactive: {
                type: INTERACTIVE_TYPE.button,
                body: {
                    text: bodyText,
                },
                action: {
                    buttons: buttons
                },
            },
            recipient_type: RECIPIENT_TYPE.individual,
            to: to,
            type: MESSAGE_TYPE.interactive,
        }
        return await this.postData(message);
    }
    /**
     * Sets a message status to read
     * @remarks
     * NOTE: when you set the mark as status read to a message, all the previous message that are in the "delivered" status will be set to "read" also.
     * @param messageId - Id of the message to be replied
     * @param status - status os of the message, default "read"
     * @returns {OkStatusResponse} - Whatsapp Ok status response
     * @example
     * ```typescript
     * wa.sendMarkAsRead("wam.idNnjnsidnjnjNNSOMS<mkmkNJNJN", "read");
     * ```
     * @group  Reply Messages
     */
    public async sendMarkAsRead (messageId: string, status: MessageStatus = "read"): Promise<OkStatusResponse> {
        const message: MarkedAsRead = {
            messaging_product: MESSAGE_PRODUCT.whatsapp,
            message_id: messageId,
            status: status,
        }
        return await this.postData(message);
    }

    private async postData (message: any): Promise<any> {
        try {
            const response: AxiosResponse<any, any> = await this.api.post("", message);
            return await response.data as OkStatusResponse;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.status === null) throw new Error(JSON.stringify(error, null, 5));
                this.verifyResponseStatus(error.response?.data, error.response?.status);

            }
        }
    }

    private verifyResponseStatus (data: any, statusCode?: number): void {
        if (data?.error) {
            throw new OAuthException(data, statusCode);
        }
    }
}