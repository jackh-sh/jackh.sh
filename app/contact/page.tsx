"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL_ADDRESS, GITHUB_URL, LINKED_IN_URL } from "@/lib/constants";
import { toast } from "sonner";
import Link from "next/link";
import UnderlineLink from "@/components/UnderlineLink";

export default function Contact() {
    function onClick() {
        toast("Hello World!");
    }

    return (
        <main className="flex items-center justify-center min-h-screen w-screen py-20">
            <div className="max-w-7xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-12">
                    <h1 className="text-[8rem] leading-none font-bold tracking-tighter">
                        CON
                        <br />
                        TACT
                        <br />
                        ME
                    </h1>
                    <p className="text-xl max-w-md">
                        GET IN TOUCH FOR COLLABORATIONS, QUESTIONS, OR JUST TO
                        SAY HELLO.
                    </p>
                    <div className="space-y-4">
                        <a
                            href={`mailto:${EMAIL_ADDRESS}`}
                            className="text-neutral-600"
                        >
                            Email: {EMAIL_ADDRESS}
                        </a>
                        <p className="text-neutral-600">
                            Based in Manchester, UK
                        </p>
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="link"
                                className="text-black p-0 h-auto hover:no-underline hover:opacity-70"
                                asChild
                            >
                                <UnderlineLink href={LINKED_IN_URL}>
                                    LINKEDIN
                                </UnderlineLink>
                            </Button>
                            <span>/</span>
                            <Button
                                variant="link"
                                className="text-black p-0 h-auto hover:no-underline hover:opacity-80"
                                asChild
                            >
                                <UnderlineLink href={GITHUB_URL}>
                                    GITHUB
                                </UnderlineLink>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="space-y-12 flex items-center justify-center w-full">
                    <form
                        className="space-y-6 w-full md:max-w-md max-w-full"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onClick();
                        }}
                    >
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium pb-4"
                            >
                                Name
                            </label>
                            <Input
                                id="name"
                                className="mt-2"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                className="mt-2"
                                type="email"
                                placeholder="Your email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium pb-4"
                            >
                                Message
                            </label>
                            <Textarea
                                id="message"
                                className="mt-2"
                                placeholder="Your message"
                                rows={6}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-black text-white hover:bg-gray-800"
                        >
                            Send Message
                        </Button>
                    </form>
                    {/*<div className="w-full h-auto">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Map of Manchester"
                        width={600}
                        height={400}
                        className="w-full h-auto border border-gray-200"
                        unoptimized
                      />
                    </div>*/}
                </div>
            </div>
        </main>
    );
}
