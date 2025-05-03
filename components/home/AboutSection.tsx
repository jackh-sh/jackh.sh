import { AspectRatio } from "../ui/aspect-ratio";

export default function AboutSection() {
    return (
        <section className="flex items-center justify-center bg-muted min-h-screen w-screen max-w-screen px-5">
            <div className="container mx-auto py-12 sm:py-32 max-w-7xl">
                <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-24">
                    <div className="">
                        <span className="mb-4 block font-mono text-lg font-medium">
                            About Me
                        </span>
                        <h1 className="text-7xl font-medium tracking-tight text-foreground">
                            Crafting innovative solutions with technology.
                        </h1>
                        <p className="pt-10 text-lg leading-8 text-foreground">
                            Technology isn’t just my profession—it’s my passion.
                            I thrive on exploring and mastering different
                            aspects of the tech world, allowing me to contribute
                            across the entire stack. For me, it’s not just about
                            writing code or designing interfaces; it’s about
                            building meaningful solutions that harness the best
                            of what technology has to offer. <br />
                            <br />
                            Throughout my career, I’ve had the opportunity to
                            work with a wide range of companies, from innovative
                            startups to global industry leaders. I’ve
                            collaborated with brands like Nissan and Amazon Web
                            Services, gaining invaluable experience in media and
                            technology. These experiences have reinforced my
                            adaptability, communication skills, and ability to
                            thrive in diverse team environments.
                        </p>
                    </div>
                    <div>
                        <div className="relative mx-auto max-w-[596px] overflow-hidden rounded-xs bg-black pl-6 pt-6 lg:mx-0">
                            <AspectRatio
                                ratio={0.9104 / 1}
                                className="overflow-hidden rounded-xs"
                            >
                                <img
                                    alt=""
                                    src="/img/jack-3.png"
                                    className="block size-full object-cover"
                                />
                            </AspectRatio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
