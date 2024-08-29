import { WaCredentials, WaMedia, WaMessageWebhooks } from "./core";

const id: string = "978648727277884";
//const wa: WaCloudMessages = new WaCloudMessages(undefined);
const wa: WaMedia = new WaMedia({
    accessToken: "EAAO33DpjonYBO0UWGLIzGTek0UmqbKkf9lDetUi4EVVXxumszjaFZB1yWA89tnp2UrZB1ydZB2eAzKExnZCIGWjIYwZCm1RuKTpzeUV9hU89rb6JURq6RLoyU27FZBlw4Agcryv9ZBh5dUUK0JsONkdffj5KMyrwZCCA7etlePwuddo51x0vbsy4WJ42IY0VTCHVugZDZD",
    baseUrl: "https://graph.facebook.com/v20.0",
    businessId: 1037821177784041,
    phoneNumberId: 336517706221288,
    WABA_ID: 420322614490057,
})
const a = async () => {
    const response = await wa.uploadMedia("C:/Users/UNAC/Contacts/Downloads/response.pdf");
    console.log(response.data);
}
a()