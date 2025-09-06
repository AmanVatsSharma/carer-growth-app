import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import NavBar from "@/components/layout/navbar";
import { StickyBanner } from "@/components/ui/sticky-banner";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPD Education",
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
              IELTS coaching at just ₹3499.
              <a href="#footer" className="transition duration-200 hover:underline">
                Get Now!
              </a>
            </p>
          </StickyBanner>
          <NavBar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
