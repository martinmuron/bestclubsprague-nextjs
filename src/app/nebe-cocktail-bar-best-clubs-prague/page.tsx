import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebe Cocktail Bar Prague - Best Club Prague 2025 - Bartending Shows & Dancing",
  description: "Nebe: Heavenly cocktail bar with 100+ drinks, bartending shows & dance floor. Two locations near Wenceslas Square. Best clubs Prague 2025.",
  keywords: "nebe prague, nebe cocktail bar, best club prague, cocktail bar prague, bartending show prague, best clubs prague 2025, clubs prague, wenceslas square nightlife",
  openGraph: {
    title: "Nebe Cocktail Bar Prague - 100+ Cocktails & Bartending Shows",
    description: "Heavenly cocktail & music bar with professional bartending shows at two central Prague locations",
    images: ["/images/clubs/nebe-cocktail-bar-best-clubs-prague-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function NebeCocktailBar() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/nebe-cocktail-bar-best-clubs-prague-1.jpg"
          alt="Nebe Cocktail Bar Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-4">THIS IS NEBE.</h1>
            <p className="text-xl md:text-2xl font-medium">A Heavenly Cocktail & Music Bar Experience</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">ABOUT NEBE</h2>

                <p className="text-lg mb-6 leading-relaxed">
                  The unique cocktail and music bar Nebe can be found in the center of Prague in two locations. Nebe Celnice is located in Prague 1, close to Náměstí Republiky. Nebe Bělehradská is located in Prague 2, just a few steps from Wenceslas Square near the I.P.Pavlova metro station.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  As the name of the bar suggests, you can be sure that your experience here will be heavenly. Both bars offer a wide range of more than 100 types of great mixed drinks, a selection of wine and beer, at very reasonable prices that are not common in the center.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  A team of professional bartenders will mix cocktails in front of you throughout the night and you can also look forward to an entertaining bartending show. At 9 o'clock in the evening, the bar spaces will turn into a dance floor, where you can dance to pop, R&B and house music, but there is also a classic from the 80s and 90s.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  The spaces can also be rented for private corporate parties and celebrations of all kinds.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/nebe-cocktail-bar-best-clubs-prague-1.jpg"
                      alt="Nebe Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/nebe-cocktail-bar-best-clubs-prague-2.jpeg"
                      alt="Nebe Atmosphere"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="flex-1" asChild>
                    <a href="http://www.nebepraha.cz" target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-5 w-5" />
                      Visit Website
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
