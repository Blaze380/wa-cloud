import { ResponseError } from '@/types/errors';
export class OAuthException extends Error {
    constructor (error: ResponseError, statusCode?: number) {
        super(JSON.stringify(error, null, 5) + `\nResponse Status Code: ${ statusCode }`);
        this.name = "OAuthException";

    }
}