"use server";

export type SendMessageResult =
    | { success: true }
    | { success: false; errors: Record<string, string[]> };

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

export async function sendMessage(
    formData: FormData,
): Promise<
    { success: true } | { success: false; errors: Record<string, string[]> }
> {
    try {
        const validatedFields = schema.safeParse({
            email: formData.get("email"),
            name: formData.get("name"),
            message: formData.get("message"),
        });

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const { name, email, message } = validatedFields.data;

        await sendWebhook({
            embeds: [
                {
                    title: "New Website Message",
                    description: `From ${name} (${email})\n\n>${message}`,
                },
            ],
        });
    } catch (e) {
        console.log(e);
        return {
            success: false,
            errors: {
                generic: [
                    "Something went wrong, please try again or send me an email instead.",
                ],
            },
        };
    }

    return { success: true };
}
