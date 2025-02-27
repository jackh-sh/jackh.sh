"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import * as React from "react";

export function Providers({ children }: React.PropsWithChildren) {
    return (
        <ThemeProvider
            attribute={"class"}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}
