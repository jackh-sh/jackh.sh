"use client";

import { useState, useTransition, FormEvent, ChangeEvent } from "react";
import { sendMessage } from "@/app/contact/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle, Check } from "lucide-react";
import { toast } from "sonner";

type FormState = {
    name: string;
    email: string;
    message: string;
};

type FieldErrors = {
    name?: string[];
    email?: string[];
    message?: string[];
    generic?: string[];
};

export default function ContactForm() {
    const [formState, setFormState] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<FieldErrors>({});
    const [pending, startTransition] = useTransition();

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { id, value } = e.target;
        setFormState((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", formState.name);
        formData.append("email", formState.email);
        formData.append("message", formState.message);

        startTransition(async () => {
            const result = await sendMessage(formData);
            if (!result.success) {
                setErrors(result.errors);
            } else {
                setFormState({ name: "", email: "", message: "" });
                setErrors({});
                toast("Your message has been sent successfully", {
                    icon: <Check />,
                });
            }
        });
    };

    return (
        <form
            className="space-y-6 w-full md:max-w-md max-w-full"
            onSubmit={handleSubmit}
        >
            {errors.generic && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        {errors.generic
                            ? errors.generic
                            : "Something went wrong. Please try again."}
                    </AlertDescription>
                </Alert>
            )}
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium pb-4">
                    Name
                </label>
                <Input
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Your name"
                    required
                    disabled={pending}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">
                        {errors.name.join(", ")}
                    </p>
                )}
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <Input
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Your email"
                    required
                    disabled={pending}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">
                        {errors.email.join(", ")}
                    </p>
                )}
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium pb-4">
                    Message
                </label>
                <Textarea
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Your message"
                    rows={6}
                    required
                    disabled={pending}
                />
                {errors.message && (
                    <p className="text-red-500 text-sm">
                        {errors.message.join(", ")}
                    </p>
                )}
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
