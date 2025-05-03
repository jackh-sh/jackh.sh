import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Home - Jack Humphries",
    description:
        "Software Engineer Passionate About Building Innovative Solutions",
    icons: {
        icon: [
            {
                url: "/favicons/favicon-96x96.png",
                type: "image/png",
                sizes: "96x96",
            },
            { url: "/favicons/favicon.svg", type: "image/svg+xml" },
            { url: "/favicons/favicon.ico", rel: "shortcut icon" },
        ],
        apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/favicons/site.webmanifest",
    appleWebApp: {
        title: "jackh.sh",
    },
    openGraph: {
        title: "Jack Humphries",
        description:
            "Software Engineer Passionate About Building Innovative Solutions",
        url: "https://jackh.sh",
        siteName: "Jack Humphries",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "jackh.sh Open Graph Image",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${montserrat.variable} antialiased`}>
                <div className="min-h-screen max-w-screen overflow-x-hidden">
                    <Providers>
                        <Navbar />
                        {children}
                        <Footer />
                        <Toaster />
                    </Providers>
                </div>
            </body>
        </html>
    );
}
