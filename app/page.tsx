import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
import { Button } from "@/components/ui/button";
import UnderlineLink from "@/components/UnderlineLink";
import { GITHUB_URL, LINKED_IN_URL } from "@/lib/constants";

export default function Home() {
    return (
        <main>
            <div className="flex items-center justify-center min-h-screen w-screen py-20">
                <div className="max-w-7xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-12">
                        <h1 className="text-[8rem] leading-none font-bold tracking-tighter">
                            JACK
                            <br />
                            HUMP
                            <br />
                            HRIES
                        </h1>
                        <p className="text-xl max-w-md">
                            CRAFTING SEAMLESS DIGITAL EXPERIENCES WITH
                            CREATIVITY AND CODE.
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

                    <div className="lg:col-start-2 space-y-12 z-10 flex flex-col justify-center">
                        <div className="aspect-square w-full max-w-md mx-auto bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400">
                                Image Placeholder
                            </span>
                            {/* Uncomment and update the src when you have an image */}
                            {/* <Image
                                src="/path-to-your-image.jpg"
                                alt="Jack Humphries"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                              /> */}
                        </div>
                    </div>
                </div>
            </div>

            <AboutSection />
            <GallerySection />
        </main>
    );
}
