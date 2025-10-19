import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moon Club Prague - Best Club Prague 2025 - Cocktails & Shisha Lounge",
  description: "Moon Club: Sophisticated cocktail bar & club on Dlouha Street. Signature cocktails, Japanese sushi, shisha & glass rooftop ceiling. Best clubs Prague 2025.",
  keywords: "moon club prague, best club prague, cocktail bar prague, shisha prague, dlouha street clubs, best clubs prague 2025, clubs prague, prague nightlife",
  openGraph: {
    title: "Moon Club Prague - Best Cocktail & Shisha Lounge 2025",
    description: "Multifunctional nightlife space with signature cocktails, Japanese sushi & rooftop views on Dlouha Street",
    images: ["/images/clubs/moon-club-best-club-prague-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function MoonClub() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/moon-club-best-club-prague-1.jpg"
          alt="Moon Club Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-4">THIS IS MOON CLUB.</h1>
            <p className="text-xl md:text-2xl font-medium">Multifunctional space for current trends</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">MOONCLUB is a multifunctional space for all interested in current trends.</h2>

                <p className="text-lg mb-6 leading-relaxed">
                  In the renovated historical building we present unique pieces from leading Czech and world brand designers. Alongside the magnificent bar overlooking the night sky, we provide you with the comfort of sitting in one of our lounges or, conversely, being entertained on the dance floor. We would only be happy to make you one of our signature cocktails or a cocktail classic that you know well. You can also enjoy delicious Japanese sushi with us. We want you to enjoy sophisticated entertainment with us, whether the moon shines or not.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/moon-club-best-club-prague-1.jpg"
                      alt="Moon Club Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/moon-club-best-club-prague-2.jpg"
                      alt="Moon Club Bar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="flex-1" asChild>
                    <a href="http://www.moonclub.cz" target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-5 w-5" />
                      Visit Website
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" asChild>
                    <a href="tel:+420703140640">
                      <Phone className="mr-2 h-5 w-5" />
                      +420 703 140 640
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
