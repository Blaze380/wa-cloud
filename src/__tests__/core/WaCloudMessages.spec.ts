import { WaCloudCredentials, WaCloudMessages } from '../..';
import { OkStatusResponse } from '../../lib/types/OkStatusResponse';
//import second from '../../src/lib/wa-cloud-api'
var api: WaCloudCredentials;
beforeAll((): void => {
    api = new WaCloudCredentials(1037821177784041, "EAAO33DpjonYBO0UWGLIzGTek0UmqbKkf9lDetUi4EVVXxumszjaFZB1yWA89tnp2UrZB1ydZB2eAzKExnZCIGWjIYwZCm1RuKTpzeUV9hU89rb6JURq6RLoyU27FZBlw4Agcryv9ZBh5dUUK0JsONkdffj5KMyrwZCCA7etlePwuddo51x0vbsy4WJ42IY0VTCHVugZDZD", 420322614490057, 336517706221288)
})

describe("Constructor tests", () => {
    it("should Throw an Object Null Exception", () => {
        let credentials: any;
        expect(() => new WaCloudMessages(credentials)).toThrow()
    });


})

describe("Text messages", () => {
    it("Should send text message and not return a null response", async () => {
        const wa: WaCloudMessages = new WaCloudMessages(api);
        const response: OkStatusResponse = await wa.sendTextMessage("Oi", "258860842024");
        expect(response).not.toBeNull();
    });

    it("Should throw an exception", () => {
        const wa: WaCloudMessages = new WaCloudMessages(api);
        expect(() => wa.sendTextMessage("Oi", "as")).toThrow();
    });

    it("Should throw an exception", () => {
        const wa: WaCloudMessages = new WaCloudMessages(api);
        expect(() => wa.sendTextMessage(undefined as any, "258860842024")).toThrow()
    })
})
