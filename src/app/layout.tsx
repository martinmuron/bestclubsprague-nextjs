import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Clubs Prague 2025 | Ultimate Prague Nightlife Guide & Club List",
  description: "Discover the best clubs in Prague 2025. Complete guide to Prague's top nightlife venues, parties & entertainment. Find where to party every night of the week in Prague.",
  keywords: "best clubs prague, clubs prague, prague nightlife, best clubs prague 2025, where to party prague, party prague sunday, party prague wednesday, nightclubs prague",
  openGraph: {
    title: "Best Clubs Prague 2025 | Ultimate Nightlife Guide",
    description: "Complete guide to Prague's best clubs, parties & nightlife venues. Updated for 2025.",
    type: "website",
    locale: "en_US",
    siteName: "Best Clubs Prague",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
