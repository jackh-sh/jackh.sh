import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-12">
                    <h1 className="text-[8rem] leading-none font-bold tracking-tighter">
                        JACK
                        <br />
                        HUMP
                        <br />
                        HRIES
                    </h1>
                    <p className="text-xl max-w-md">
                        CRAFTING SEAMLESS DIGITAL EXPERIENCES WITH CREATIVITY
                        AND CODE.
                    </p>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="link"
                            className="text-black p-0 h-auto hover:no-underline hover:opacity-70"
                            asChild
                        >
                            <Link href="https://linkedin.com">LINKEDIN</Link>
                        </Button>
                        <span>/</span>
                        <Button
                            variant="link"
                            className="text-black p-0 h-auto hover:no-underline hover:opacity-70"
                            asChild
                        >
                            <Link href="https://github.com">GITHUB</Link>
                        </Button>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="w-full h-auto">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Jackh.sh-uiwzTiP3QhZKPwRhjvG1j0eFj704Xx.png"
                            alt="Portrait photo"
                            width={600}
                            height={800}
                            className="w-full h-auto"
                            priority
                            unoptimized
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-medium">
                            I'M A SOFTWARE ENGINEER FROM MANCHESTER
                        </h2>
                        <div className="h-px bg-neutral-200" />
                        <p className="text-neutral-600">Over the past</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="lg:col-start-2 space-y-6">
                        <h2 className="text-2xl font-medium">
                            WEB DEVELOPMENT
                        </h2>
                        <p className="text-neutral-600">
                            web development is one of my areas of expertise.
                            i've created and contributed to many web projects
                            over the years.
                        </p>
                        <div className="w-full h-auto">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="FIPFA match predictor screenshot"
                                width={600}
                                height={400}
                                className="w-full h-auto border border-gray-200"
                                unoptimized
                            />
                        </div>
                        <p className="text-neutral-600">
                            one project i worked extensibly on was the fipfa
                            match predictor. to increase engagement at the 2023
                            fipfa powerchair football world cup, i developed a
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
