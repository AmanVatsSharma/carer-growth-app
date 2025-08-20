import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarDashboard } from "@/components/dashboard/layout/sidebar";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
    title: "IDP Dashboard",
    description: "Admin Dashboard for IDP Education",
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
                    <div className="flex w-full h-screen">
                        <SidebarDashboard />
                        {children}
                    </div>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
