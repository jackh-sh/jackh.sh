"use client";

import { sendMessage } from "@/app/contact/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useActionState } from "react";

const initialState = {
    name: "",
    email: "",
    message: "",
};

export default function ContactForm() {
    const [state, formAction, pending] = useActionState(
        sendMessage,
        initialState,
    );

    console.log(state);

    return (
        <form
            className="space-y-6 w-full md:max-w-md max-w-full"
            onSubmit={formAction}
        >
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium pb-4">
                    Name
                </label>
                <Input
                    id="name"
                    className="mt-2"
                    placeholder="Your name"
                    required
                    min={2}
                    disabled={pending}
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <Input
                    id="email"
                    className="mt-2"
                    type="email"
                    placeholder="Your email"
                    required
                    disabled={pending}
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium pb-4">
                    Message
                </label>
                <Textarea
                    id="message"
                    className="mt-2"
                    placeholder="Your message"
                    rows={6}
                    minLength={10}
                    required
                    disabled={pending}
                />
            </div>
            <Button
                type="submit"
                loading={pending}
                className="w-full bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 hover:dark:bg-gray-200 duration-400 cursor-pointer"
            >
                Send Message
            </Button>
        </form>
    );
}
