import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import NavBar from "@/components/layout/navbar";
import { StickyBanner } from "@/components/ui/sticky-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Growth Abroad",
  description: "Abroad Career Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StickyBanner hideOnScroll className="bg-gradient-to-b from-blue-500 to-blue-600">
            <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
              Announcing $10M seed funding from project mayhem ventures.{" "}
              <a href="#" className="transition duration-200 hover:underline">
                Read announcement
              </a>
            </p>
          </StickyBanner>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
