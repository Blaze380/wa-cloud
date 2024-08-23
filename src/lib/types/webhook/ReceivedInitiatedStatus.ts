//ReceivedUserInitiatedStatus
import { PricingModel, StatusConversationType } from "../../enums";
import { WebhookNotificationBase } from "./WebhookNotificationBase";

type Origin = {
    type: StatusConversationType;
}

type Conversation = {
    id: string;
    expiration_timestamp: number;
    origin: Origin;
}
type Status = {
    conversation: Conversation;
}
type Value = {
    statuses: Status[];
    pricing: Pricing;
}
type Pricing = {
    pricing_model: PricingModel;
    billable: boolean;
    category: StatusConversationType;
}

type Change = {
    value: Value;
}

type Entry = {
    changes: Change[];
}

export type ReceivedInitiatedStatus = { entry: Entry[]; } & WebhookNotificationBase;
export type ReceivedBusinessReplyToUserStatus = ReceivedInitiatedStatus;