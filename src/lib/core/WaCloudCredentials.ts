export class WaCloudCredentials {
    public readonly businessId: number;
    public readonly accessToken: string;
    public readonly WABA_ID: number;
    public readonly phoneNumberId: number;
    public readonly baseUrl: string;
    constructor (businessId: number, accessToken: string, WABA_ID: number, phoneNumberId: number, apiVersion: string = "v20.0") {
        this.businessId = businessId;
        this.WABA_ID = WABA_ID;
        this.accessToken = accessToken;
        this.phoneNumberId = phoneNumberId;
        this.baseUrl = `https://graph.facebook.com/${ apiVersion }`
    }

}