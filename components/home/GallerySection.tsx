"use client";

import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";

const data = [
    {
        id: "scoreline",
        title: "WFA ScoreLine",
        href: "/projects/scoreline",
        image: "/img/gallery/scoreline.png",
        logo: "/img/gallery/scoreline-icon.png",
        company: "WFA ScoreLine",
    },
    {
        id: "item-2",
        title: "Socially",
        href: "/projects/socially",
        image: "/img/gallery/socially.png",
        logo: "/img/gallery/socially-icon.png",
        company: "Socially",
    },
    {
        id: "item-3",
        title: "Case study 2",
        href: "#",
        image: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        logo: "https://shadcnblocks.com/images/block/logos/astro-wordmark.svg",
        company: "Company Name",
    },
];

export default function GallerySection() {
    const [selection, setSelection] = useState(data[0].id);
    return (
        <section className="py-32 flex items-center justify-center min-h-screen w-screen max-w-screen px-5">
            <div className="container">
                <div className="pb-8">
                    <span className="mb-4 block font-mono text-lg font-medium">
                        My Projects
                    </span>
                    <h1 className="text-7xl font-medium tracking-tight text-foreground">
                        From Concept to Completion
                    </h1>
                    <p className="pt-10 text-lg leading-8 text-foreground">
                        Here’s a collection of software projects I’ve worked on,
                        showcasing my skills in software development,
                        problem-solving, and innovation. From sports and media
                        technology to , these projects highlight my ability to
                        build impactful and efficient software.
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-5 lg:aspect-[1336/420] lg:flex-row">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            data-state={
                                selection === item.id ? "open" : "closed"
                            }
                            className='group max-lg:w-full max-lg:flex-1 max-md:h-[200px] md:max-lg:aspect-[1336/420] lg:transform-gpu lg:transition-all lg:data-[state="closed"]:w-[20%] lg:data-[state="closed"]:duration-500 lg:data-[state="open"]:w-[60%] lg:data-[state="open"]:duration-400'
                            onMouseEnter={() => {
                                setSelection(item.id);
                            }}
                        >
                            <a
                                href={item.href}
                                className="relative block h-full w-full overflow-hidden rounded-xs bg-primary text-primary-foreground"
                            >
                                <div className='absolute -inset-[50%] hidden h-[200%] w-[200%] md:block lg:group-data-[state="closed"]:blur-sm'>
                                    <div className="absolute top-[calc(25%+40px)] aspect-square h-[calc(50%+40px)] max-lg:right-[calc(50%+40px)] lg:right-[50%]">
                                        <div className="h-full w-full overflow-clip rounded-xs">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-[25%] left-[50%] flex aspect-[389/420] h-[50%] items-center justify-center max-lg:hidden">
                                        <img
                                            src={item.logo}
                                            alt={item.company}
                                            className="h-8 rounded-lg"
                                        />
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 hidden h-[50%] bg-gradient-to-t from-primary from-50% to-transparent lg:block"></div>
                                </div>
                                <div className="relative flex flex-col justify-between gap-4 md:absolute md:inset-0 md:max-lg:inset-x-[50%] md:max-lg:w-[50%]">
                                    <div className='flex h-[80px] items-center gap-2 p-4 transition-opacity delay-200 duration-500 lg:group-data-[state="closed"]:opacity-0'></div>
                                    <div className='flex flex-col gap-2 p-4 transition-all delay-200 delay-250 duration-500 lg:group-data-[state="closed"]:translate-y-4 lg:group-data-[state="closed"]:opacity-0'>
                                        <div className="lg:hidden">
                                            <img
                                                src={item.logo}
                                                alt={item.company}
                                                className="h-5 rounded-md lg:h-6"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="text-base font-medium lg:text-lg">
                                                {item.title}
                                            </div>
                                            <div className="flex size-8 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 lg:size-10">
                                                <ArrowUpRight className="size-4 lg:size-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
