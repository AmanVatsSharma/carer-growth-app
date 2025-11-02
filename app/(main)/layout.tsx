import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import NavBar from "@/components/layout/navbar";
import { StickyBanner } from "@/components/ui/sticky-banner";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Base URL configuration - used for absolute URLs in metadata
// Falls back to localhost in development
const baseUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://ipdeducation.in";
const logoUrl = `${baseUrl}/logo/005_nbg.png`;

// Console log for debugging metadata configuration
if (typeof window === "undefined") {
  console.log("[Layout] Metadata configuration:", {
    baseUrl,
    logoUrl,
    metadataLoaded: true,
  });
}

/**
 * Comprehensive metadata configuration for SEO and social sharing
 * Includes favicon, Open Graph, Twitter Cards, and structured data support
 */
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "IPD Education",
    template: "%s | IPD Education",
  },
  description: "Abroad Career Growth - Expert guidance for study abroad, visa assistance, education loans, and accommodation support.",
  
  // Site metadata
  metadataBase: new URL(baseUrl),
  keywords: [
    "study abroad",
    "international education",
    "visa assistance",
    "education loan",
    "student accommodation",
    "IPD Education",
    "abroad career growth",
  ],
  
  // Icons configuration - Favicon and app icons
  // Multiple sizes for better browser and device support
  icons: {
    icon: [
      { url: "/logo/005_nbg.png", sizes: "any" }, // Main favicon
      { url: "/logo/005_nbg.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/005_nbg.png", sizes: "96x96", type: "image/png" },
      { url: "/logo/005_nbg.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/logo/005_nbg.png", sizes: "180x180", type: "image/png" }, // Apple touch icon
    ],
    shortcut: "/logo/005_nbg.png", // Legacy favicon support
  },
  
  // Open Graph metadata for social media sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "IPD Education",
    title: "IPD Education - Abroad Career Growth",
    description: "Expert guidance for study abroad, visa assistance, education loans, and accommodation support.",
    images: [
      {
        url: logoUrl,
        width: 545,
        height: 482,
        alt: "IPD Education Logo",
        type: "image/png",
      },
    ],
  },
  
  // Twitter Card metadata for Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: "IPD Education - Abroad Career Growth",
    description: "Expert guidance for study abroad, visa assistance, education loans, and accommodation support.",
    images: [logoUrl],
    creator: "@ipdeducation", // Update with actual Twitter handle if available
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (add your verification codes if available)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   // Add other verification services as needed
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Google Search
  // This helps Google recognize the website logo and organization information
  // Required for logo to appear in Google Search results
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IPD Education",
    url: baseUrl,
    logo: logoUrl,
    description: "Expert guidance for study abroad, visa assistance, education loans, and accommodation support.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "admissions@ipdeducation.in",
    },
    sameAs: [
      // Add social media profiles here when available
      // Example: "https://www.facebook.com/ipdeducation",
      // Example: "https://www.linkedin.com/company/ipdeducation",
    ],
  };

  // Console log for debugging structured data
  if (typeof window === "undefined") {
    console.log("[Layout] Structured data configuration:", {
      organizationData: organizationStructuredData,
      structuredDataLoaded: true,
    });
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Structured Data for Google Search Recognition */}
        {/* This enables the logo to appear in Google Search results */}
        {/* Using Script component with id and strategy for proper head injection */}
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
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
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
