import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cabaret Prague 2025 | Medusa Dinner & Show | Best Clubs Prague",
  description: "Medusa Prague: Best cabaret dinner & show experience. Live music, spectacular performances, top-quality food & elegant atmosphere. Best entertainment Prague 2025.",
  keywords: "best cabaret prague, medusa prague, dinner show prague, cabaret show prague, live entertainment prague, best clubs prague 2025, prague shows, dinner and show",
  openGraph: {
    title: "Best Cabaret Prague 2025 - Medusa Dinner & Show",
    description: "Spectacular cabaret shows with dinner, live music & talented performers in the heart of Prague",
    images: ["/images/medusa-logo.png"],
    type: "website",
    locale: "en_US",
  },
};

export default function BestCabaretPrague() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-32">
            <Image
              src="/images/medusa-logo.png"
              alt="Medusa Prague"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Medusa Prague - Dinner & Show</h1>

        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/homepage/cocktail-bg.jpg"
            alt="Medusa Prague Atmosphere"
            fill
            className="object-cover"
          />
        </div>

        <Card>
          <CardContent className="p-8">
            <p className="text-lg mb-6 leading-relaxed">
              If you're looking for a night that's stylish, full of atmosphere, and truly entertaining — Medusa is the place to be.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Located in the heart of Prague, we offer a unique experience combining top-quality food, live music, and a spectacular cabaret show every Friday, Saturday, and now also Thursday.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Medusa isn't just about drinks or dancing — it's about the full experience. Elegant setting, delicious dishes, talented performers, and energy that carries you through the night.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Whether you're celebrating something special or just want to enjoy a night out that's different from the usual, Medusa delivers something more than just another club.
            </p>

            <div className="flex justify-center mt-8">
              <Button size="lg" asChild>
                <a href="https://www.medusaprague.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-5 w-5" />
                  Visit Medusa Prague
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
