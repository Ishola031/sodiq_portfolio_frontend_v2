"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";

// Filter out false-positive React 19 script tag warning from next-themes in dev
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const origError = console.error;
    console.error = (...args: unknown[]) => {
        if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) return;
        origError.apply(console, args);
    };
}

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
                refetchOnWindowFocus: false,
            },
        },
    }));

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
}