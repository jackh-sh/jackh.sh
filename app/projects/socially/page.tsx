import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Page() {
    return (
        <main className="py-32 flex justify-center min-h-screen w-screen max-w-screen">
            <div className="container">
                <div className="pb-8">
                    <h1 className="text-7xl font-medium tracking-tight text-foreground">
                        Socially
                    </h1>

                    <section className="py-32">
                        <div className="container flex flex-col items-center gap-16 lg:px-16">
                            <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
                                <a
                                    href="#"
                                    className="group relative col-span-2 overflow-clip rounded-lg sm:max-lg:col-span-1"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080"
                                        alt="placeholder"
                                        className="absolute h-full w-full object-cover object-center"
                                    />
                                    <div className="relative flex h-full w-full flex-col items-start justify-between bg-primary/60 p-4 text-primary-foreground transition-colors hover:bg-primary/70 sm:aspect-[3/2] md:p-6 lg:p-10">
                                        <img
                                            src="https://shadcnblocks.com/images/block/logos/astro-wordmark.svg"
                                            alt="placeholder logo"
                                            className="mb-12 h-10 invert md:h-12"
                                        />
                                        <div className="flex items-center text-xs font-medium md:text-base lg:text-lg">
                                            Read more{" "}
                                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </a>
                                <div className="flex flex-col justify-between rounded-lg bg-accent p-4 sm:justify-end md:p-6 lg:p-10">
                                    <div className="mb-8 text-3xl sm:mb-2 lg:text-5xl">
                                        100+
                                    </div>
                                    <div className="text-xs md:text-base lg:text-lg">
                                        Metric 1
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between rounded-lg bg-accent p-4 sm:justify-end md:p-6 lg:p-10">
                                    <div className="mb-8 text-3xl sm:mb-2 lg:text-5xl">
                                        5
                                    </div>
                                    <div className="text-xs md:text-base lg:text-lg">
                                        Metric 2
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between rounded-lg bg-accent p-4 md:p-6 lg:p-10">
                                    <div className="mb-8 text-3xl lg:text-5xl">
                                        150+
                                    </div>
                                    <div className="text-xs md:text-base lg:text-lg">
                                        Metric 3
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between rounded-lg bg-accent p-4 md:p-6 lg:p-10">
                                    <div className="mb-8 text-3xl lg:text-5xl">
                                        10
                                    </div>
                                    <div className="text-xs md:text-base lg:text-lg">
                                        Metric 4
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="group relative col-span-2 overflow-clip rounded-lg sm:max-lg:col-span-1"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080"
                                        alt="placeholder"
                                        className="absolute h-full w-full object-cover object-center"
                                    />
                                    <div className="relative flex h-full w-full flex-col items-start justify-between gap-4 bg-primary/50 p-4 text-primary-foreground transition-colors hover:bg-primary/70 sm:aspect-[2/1] md:flex-row md:items-end md:p-6 lg:p-10">
                                        <div>
                                            <img
                                                src="https://shadcnblocks.com/images/block/logos/shadcn-ui-wordmark.svg"
                                                alt="placeholder logo"
                                                className="mb-8 h-8 invert md:mb-0 md:h-10"
                                            />
                                        </div>
                                        <div className="flex shrink-0 items-center text-xs font-medium md:text-base lg:text-lg">
                                            Read more{" "}
                                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <p>
                        Socially is a desktop application which combines all
                        social media direct messages into one window. The idea
                        is quite common now with{" "}
                        <a href="https://blogs.opera.com/desktop/2020/05/opera-gx-instagram-workspaces/">
                            OperaGX
                        </a>{" "}
                        and other software but my design is sleek and compact.
                    </p>
                    <p>
                        A while ago, I discovered a technology called{" "}
                        <a href="https://electronjs.org">Electron</a>. I was
                        fascinated as I had always wanted to make beautiful
                        desktop applications. Most graphical user interface
                        toolkits were difficult to learn and very tedious. Not
                        to mention they use the default themes. I began trying
                        to teach myself Electron but I struggled as I didn't
                        have much knowledge of NodeJS and JavaScript at the
                        time.
                    </p>
                    <p>
                        There is an app on the Windows Store called{" "}
                        <a href="https://chatdock.org/">ChatDock</a>. I saw it
                        in an advert and I have loved using it as it is just
                        concise and works for the purpose. However, I have had a
                        few problems with it. The application was very slow and
                        took up nearly a gigabyte of RAM while running. Also,
                        the app felt quite jittery and the user interface felt
                        quite slow. Another reason was that WhatsApp began to
                        stop functioning as the browser the developers have used
                        wasn't up to date. I wanted to fix these but the
                        application didn't appear to be open source. I then took
                        it upon myself to create this app myself.
                    </p>
                    <p>
                        The initial premise of the app is quite simple; get
                        loads of web browser views and give each one a link to
                        the social media. In Electron there are a few ways to do
                        this. I initially tried using a BrowserView in the
                        backend main process but that just seemed to be
                        complicated. I then discovered the WebView tag which you
                        can use as a standard HTML tag. Even though Electron
                        doesn't recommend using them at the moment due to them
                        updating the architecture around them, I thought it
                        would still be suitable for this project.
                    </p>
                    <p>
                        After adding a few buttons, a setup menu, and a settings
                        menu, the application was ready and I began building it
                        using electron-builder for all platforms. This was
                        version 0.5.
                    </p>
                    <p>
                        After this build, I began rewriting the JavaScript code
                        to be more efficient and to improve the overall
                        experience of the application.
                    </p>
                    <p>
                        Then, after many mistakes over the years and many
                        learning curves, I've rewritten the app in React and I
                        am currently rewriting it in Typescript.
                    </p>
                    <p>
                        Check out the website for Socially{" "}
                        <a href="https://getsocially.app">here</a>. The project
                        is also open source and the code is available on{" "}
                        <a href="https://github.com/JackHumphries9/socially">
                            here
                        </a>
                        .
                    </p>
                </div>
            </div>
        </main>
    );
}
