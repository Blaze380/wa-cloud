import { WaCloudCredentials, WaCloudMessages } from "./core";

const id: string = "978648727277884";
const wa: WaCloudMessages = new WaCloudMessages(undefined);
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