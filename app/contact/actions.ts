"use server";

import sendWebhook from "@/lib/discord_webhook";
import { z } from "zod";

const schema = z.object({
    email: z
        .string({
            invalid_type_error: "Invalid Email",
        })
        .email(),
    name: z.string().min(2),
    message: z.string().min(10),
});

export async function sendMessage(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        email: formData.get("email"),
        name: formData.get("name"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, message } = validatedFields.data;

    await sendWebhook({
        embeds: [
            {
                title: "New Website Message",
                description: `From ${name} (${email})\n${message}`,
            },
        ],
    });
}
