import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Home - Jack Humphries",
    description: "Description Here",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${montserrat.variable} antialiased`}>
                <div className="min-h-screen">
                    <Providers>
                        <Navbar />
                        {children}
                        <Toaster />
                    </Providers>
                </div>
            </body>
        </html>
    );
}
