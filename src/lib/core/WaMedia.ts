import axios, { AxiosInstance, AxiosResponse } from "axios";
import { WaCredentials } from "./WaCredentials";
import FormData from 'form-data';
import fs from 'fs';
import { MESSAGE_PRODUCT } from "../enums";
import mime from "mime";
//import mime from 'mime-types';
export class WaMedia {
    private readonly waCredentials: WaCredentials;
    private readonly api: AxiosInstance;
    private readonly messagesEndpoint: string;
    constructor (WaCredentials: WaCredentials) {
        if (!WaCredentials) throw new Error("This Object is null");
        this.waCredentials = WaCredentials;
        this.messagesEndpoint = `${ this.waCredentials.baseUrl }/${ this.waCredentials.phoneNumberId }/media`;
        this.api = axios.create({
            baseURL: this.messagesEndpoint,
            headers: {
                Authorization: `Bearer ${ this.waCredentials.accessToken }`,
                'Content-Type': 'multipart/form-data',
            }
        });
    }
    public uploadMedia (filePath: string): Promise<AxiosResponse> {
        try {
            const data: FormData = new FormData();
            data.append('messaging_product', MESSAGE_PRODUCT.whatsapp);
            data.append('file', this.readFile(filePath));
            return this.api.post("", data,);
        } catch (error) {
            console.error('Error trying sending file:', error);

        }
    }
    public async retrieveMediaUrl (mediaId: string): Promise<AxiosResponse> {
        return await axios.get(`${ this.waCredentials.baseUrl }/${ mediaId }?phone_number_id=${ this.waCredentials.phoneNumberId }`);
    }
    public async downloadMedia (mediaUrl: string): Promise<AxiosResponse> {
        return await axios.get(`${ this.waCredentials.baseUrl }/${ mediaUrl }`);
    }
    public async deleteMedia (mediaId: string): Promise<AxiosResponse> {
        return await axios.delete(`${ this.waCredentials.baseUrl }/${ mediaId }?phone_number_id=${ this.waCredentials.phoneNumberId }`);
    }
    /**
     * @deprecated
     * @param filePath
     * @returns
     */
    public async uploadStickerMedia (filePath: string): Promise<AxiosResponse> {
        const metaData = await this.getFileStats(filePath);
        return this.uploadMedia(filePath);
    }

    /**
     * @deprecated
     * @param filePath
     * @returns
     */
    private async getFileStats (filePath: string) {
        const metaData = await fs.promises.stat(filePath);
        return {
            size: metaData.size,
            mimeType: mime.lookup(filePath),
        }
    }
    private readFile (filePath: string) {
        return fs.createReadStream(filePath);
    }
}