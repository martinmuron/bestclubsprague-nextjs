import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pop Up Bar Prague - Best Club Prague 2025 - Wenceslas Square Nightlife",
  description: "Pop Up Bar: Coffee by day, club by night at Wenceslas Square. Modern cocktail bar transforming to vibrant club. Best clubs Prague 2025 in central location.",
  keywords: "pop up bar prague, best club prague, wenceslas square nightlife, cocktail bar prague, best clubs prague 2025, clubs prague, prague center nightlife",
  openGraph: {
    title: "Pop Up Bar Prague - From Bar to Club at Wenceslas Square",
    description: "Coffee by day, drinks by night. Modern bar & club transformation at the heart of Prague's nightlife",
    images: ["/images/clubs/pop-up-bar-best-club-prague-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function PopUpBar() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/pop-up-bar-best-club-prague-1.jpg"
          alt="Pop Up Bar Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-4">THIS IS POP UP BAR</h1>
            <p className="text-xl md:text-2xl font-medium">Coffee by Day, Drinks by Night</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">ABOUT POP-UP Bar</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Coffee by Day, Drinks by Night</h3>
                    <p className="text-lg leading-relaxed">
                      Embrace the unique duality of POP UP BAR. Start your day with their rich, aromatic coffee and transition to innovative cocktails as the evening sets in.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">From Bar to Club: An Atmosphere That Transforms</h3>
                    <p className="text-lg leading-relaxed">
                      Witness the transformation from a tranquil bar setting to a vibrant club scene. A perfect blend for those who appreciate versatility in their nightlife.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Modern Elegance: Inside the POP UP BAR</h3>
                    <p className="text-lg leading-relaxed">
                      Step into their modern, stylish interior that sets the stage for unforgettable nights. Every corner is designed for comfort and visual appeal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Music that Moves: Our DJs</h3>
                    <p className="text-lg leading-relaxed">
                      Get ready to be enthralled by their line-up of renowned DJs. They bring the best beats to ensure your night is filled with rhythm and energy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Prime Location: At the Heart of Prague</h3>
                    <p className="text-lg leading-relaxed">
                      Located at the bottom of Wenceslas Square, POP UP BAR is at the epicenter of Prague's buzzing nightlife, easily accessible and unmistakably central.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">A Local and Tourist Favorite</h3>
                    <p className="text-lg leading-relaxed">
                      A hotspot that captivates both locals and tourists alike. Join a diverse crowd where everyone finds something to love.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Cocktail Mastery: Our Expert Staff</h3>
                    <p className="text-lg leading-relaxed">
                      Their bartenders are artists of their craft, mixing a range of cocktails from classic favorites to innovative creations. Each drink is a masterpiece, adding to the overall experience.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/pop-up-bar-best-club-prague-1.jpg"
                      alt="Pop Up Bar Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/pop-up-bar-best-club-prague-2.jpg"
                      alt="Pop Up Bar Atmosphere"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="flex-1" asChild>
                    <a href="http://www.popup-bar.cz" target="_blank" rel="noopener noreferrer">
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
