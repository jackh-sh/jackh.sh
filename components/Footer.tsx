"use client";

import { EMAIL_ADDRESS } from "@/lib/constants";
import { useEffect, useState } from "react";
import UnderlineLink from "./UnderlineLink";

export default function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateLondonTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Europe/London",
                hour: "2-digit" as const,
                minute: "2-digit" as const,
                second: "2-digit" as const,
            };
            const londonTime = new Intl.DateTimeFormat("en-GB", options).format(
                new Date(),
            );
            setTime(londonTime);
        };

        updateLondonTime();
        const intervalId = setInterval(updateLondonTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="flex justify-center items-center px-10">
            <div className="container">
                <footer>
                    <div className="grid grid-cols-1 md:grid-cols-3 py-12 text-lg w-full">
                        <div className="text-left flex items-center justify-center">
                            © Jack Humphries 2025
                        </div>
                        <div className="flex items-center justify-center">
                            {time}
                        </div>
                        <div className="flex items-center justify-center">
                            <UnderlineLink href={`mailto:${EMAIL_ADDRESS}`}>
                                {EMAIL_ADDRESS}
                            </UnderlineLink>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}
