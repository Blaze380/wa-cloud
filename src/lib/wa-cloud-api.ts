import { WaCloudCredentials, WaCloudMessages } from "./core";

const id: string = "978648727277884";
const wa: WaCloudMessages = new WaCloudMessages(new WaCloudCredentials(1037821177784041, "EAAO33DpjonYBO0UWGLIzGTek0UmqbKkf9lDetUi4EVVXxumszjaFZB1yWA89tnp2UrZB1ydZB2eAzKExnZCIGWjIYwZCm1RuKTpzeUV9hU89rb6JURq6RLoyU27FZBlw4Agcryv9ZBh5dUUK0JsONkdffj5KMyrwZCCA7etlePwuddo51x0vbsy4WJ42IY0VTCHVugZDZD", 420322614490057, 336517706221288));
const a = async () => {
    const a = await wa.sendButtonMessage("258860842024", "Hozaaaah", [
        {
            type: "reply",
            reply: {
                id: "jonas",
                title: "Clique me"
            },
        },
        {
            type: "reply",
            reply: {
                id: "jonass",
                title: "fdgdg me"
            },
        },
        {
            type: "reply",
            reply: {
                id: "jonaas",
                title: "Clique dfxvdfme"
            },
        },

    ])
    console.log(a);
}
a()