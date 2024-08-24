export class WaCloudCredentials {
    /**
     * @ignore
     */
    public readonly businessId: number;
    /**
     * @ignore
     */
    public readonly accessToken: string;
    /**
     * @ignore
     */
    public readonly WABA_ID: number;
    /**
     * @ignore
     */
    public readonly phoneNumberId: number;
    /**
     * @ignore
     */
    public readonly baseUrl: string;

    /**
     *
     * @param businessId - Meta Bussines suite account ID
     * @param accessToken  - Acess token
     * @param WABA_ID  - WhatSapp Bussines Account ID
     * @param phoneNumberId  - Phone number ID associated to the WABA
     * @param apiVersion  - API version
     */
    constructor (businessId: number, accessToken: string, WABA_ID: number, phoneNumberId: number, apiVersion: string = "v20.0") {
        this.businessId = businessId;
        this.WABA_ID = WABA_ID;
        this.accessToken = accessToken;
        this.phoneNumberId = phoneNumberId;
        this.baseUrl = `https://graph.facebook.com/${ apiVersion }`
    }

}