/**
 * DASHBOARD LAYOUT
 * 
 * Root layout for the futuristic admin dashboard
 * Features:
 * - Dark theme by default (modern/professional)
 * - Responsive sidebar navigation
 * - Tech-grid background pattern
 * - Smooth transitions and animations
 * - Toast notifications for user feedback
 * 
 * Flow:
 * 1. Wraps app in ThemeProvider (defaults to dark)
 * 2. Renders sidebar navigation
 * 3. Main content area with tech aesthetics
 * 4. Toast provider for notifications
 */

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarDashboard } from "@/components/dashboard/layout/sidebar";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
    title: "IPD Dashboard - Advanced Admin Panel",
    description: "Modern futuristic admin dashboard for IPD Education with real-time monitoring",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* Main Dashboard Container */}
                    <div className="flex w-full min-h-screen md:flex-row flex-col bg-background">
                        {/* Sidebar Navigation */}
                        <SidebarDashboard />
                        
                        {/* Main Content Area with Tech Background - Offset for fixed sidebar */}
                        <main className="flex-1 overflow-y-auto relative tech-grid md:ml-[300px] dashboard-scrollbar">
                            {children}
                        </main>
                    </div>
                    
                    {/* Toast Notifications */}
                    <Toaster 
                        position="top-right"
                        toastOptions={{
                            classNames: {
                                success: 'border-green-500/50 bg-green-500/10',
                                error: 'border-red-500/50 bg-red-500/10',
                                warning: 'border-yellow-500/50 bg-yellow-500/10',
                                info: 'border-cyan-500/50 bg-cyan-500/10',
                            }
                        }}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
