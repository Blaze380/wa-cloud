import { WaCloudCredentials } from "./core/WaCloudCredentials";
import { WaCloudMessages } from "./core/WaCloudMessages";
import { OkStatusResponse } from "./types/OkStatusResponse";

const api: WaCloudMessages = new WaCloudMessages(
    new WaCloudCredentials(1037821177784041, "EAAO33DpjonYBO0UWGLIzGTek0UmqbKkf9lDetUi4EVVXxumszjaFZB1yWA89tnp2UrZB1ydZB2eAzKExnZCIGWjIYwZCm1RuKTpzeUV9hU89rb6JURq6RLoyU27FZBlw4Agcryv9ZBh5dUUK0JsONkdffj5KMyrwZCCA7etlePwuddo51x0vbsy4WJ42IY0VTCHVugZDZD", 420322614490057, 336517706221288));
api.replyTextMessage("Xuliana", 258860842024, "wamid.HBgMMjU4ODYwODQyMDI0FQIAERgSQjVGQzEzNkQyNTRFOUIxMUY5AA==")
    .then((a: OkStatusResponse): void => console.log(a));