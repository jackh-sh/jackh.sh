import { Button } from "@/components/ui/button";
import { EMAIL_ADDRESS, GITHUB_URL, LINKED_IN_URL } from "@/lib/constants";
import UnderlineLink from "@/components/UnderlineLink";
import ContactForm from "@/components/forms/contact";

export default function Contact() {
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
                            className="text-neutral-600 dark:text-neutral-400"
                        >
                            Email: {EMAIL_ADDRESS}
                        </a>
                        <p className="text-neutral-600 dark:text-neutral-400">
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
                    <ContactForm />
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
