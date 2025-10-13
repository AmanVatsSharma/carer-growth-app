import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarDashboard } from "@/components/dashboard/layout/sidebar";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
    title: "IPD Dashboard",
    description: "Admin Dashboard for IPD Education",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex w-full min-h-screen md:flex-row flex-col overflow-hidden">
                        <SidebarDashboard />
                        <main className="flex-1 overflow-y-auto">
                            {children}
                        </main>
                    </div>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
