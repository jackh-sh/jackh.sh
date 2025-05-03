export interface WebhookMessage {
    content?: string;
    username?: string;
    avatar_url?: string;
    tts?: boolean;
    embeds?: EmbedObject[];
    allowed_mentions?: AllowedMentionObject;
    components?: MessageComponent[];
    files?: FileContent[];
    attachments?: PartialAttachmentObject[];
    flags?: number;
    thread_name?: string;
    applied_tags?: string[];
    poll?: PollRequestObject;
}

interface EmbedObject {
    title?: string;
    type?: "rich";
    description?: string;
    url?: string;
    timestamp?: string;
    color?: number;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedThumbnail;
    video?: EmbedVideo;
    provider?: EmbedProvider;
    author?: EmbedAuthor;
    fields?: EmbedField[];
}

interface EmbedFooter {
    text: string;
    icon_url?: string;
}

interface EmbedImage {
    url: string;
}

interface EmbedThumbnail {
    url: string;
}

interface EmbedVideo {
    url?: string;
    width?: number;
    height?: number;
}

interface EmbedProvider {
    name?: string;
    url?: string;
}

interface EmbedAuthor {
    name: string;
    url?: string;
    icon_url?: string;
}

interface EmbedField {
    name: string;
    value: string;
    inline?: boolean;
}

type AllowedMentionObject = Record<string, unknown>;
type MessageComponent = Record<string, unknown>;
type FileContent = Record<string, unknown>;
type PartialAttachmentObject = Record<string, unknown>;
type PollRequestObject = Record<string, unknown>;

export default async function sendWebhook(message: WebhookMessage) {
    const res = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok || (res.status !== 204 && res.status !== 200)) {
        console.log(await res.json());
        throw Error("Webhook failed");
    }

    return;
}
