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
  title: "Best Clubs Prague | List of Clubs in Prague 2025",
  description: "Find the best clubs in the city of Prague in 2025. Prague is full of exciting nightlife and with our list, you will always find the best club to enjoy your night.",
  keywords: "Prague clubs, Prague nightlife, best clubs Prague, Prague bars, nightclubs Prague, Prague entertainment",
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
