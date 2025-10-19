import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Bodeguita del Medio Prague - Best Club Prague 2025 - Cuban Cocktails & Live Music",
  description: "La Bodeguita del Medio: Authentic Cuban restaurant & club in Old Town. Live music, dancers, DJs, Caribbean cocktails & celebrity favorite. Best clubs Prague 2025.",
  keywords: "la bodeguita del medio prague, cuban bar prague, best club prague, live music prague, latin club prague, best clubs prague 2025, clubs prague, old town nightlife",
  openGraph: {
    title: "La Bodeguita del Medio Prague - Authentic Cuban Experience",
    description: "Cuban cocktails, live music, dancers & authentic Havana atmosphere in the heart of Old Town Prague",
    images: ["/images/clubs/la-bodeguita-del-medio-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function LaBodeguitaDelMedio() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/la-bodeguita-del-medio-1.jpg"
          alt="La Bodeguita del Medio Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <Badge className="mb-4 bg-orange-600">Cuban Style</Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-4">LA BODEGUITA DEL MEDIO</h1>
            <p className="text-xl md:text-2xl font-medium">Authentic Cuban Cocktails & Live Music in Old Town</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">About LA BODEGUITA DEL MEDIO</h2>

                <p className="text-lg mb-6 leading-relaxed">
                  Cuban cocktail bar & music restaurant in the colonial style of old Havana with an unmistakable character of the interior, where you can enjoy every night live Cuban music, dancers and DJs in addition to great dishes, juicy steaks, fresh fish and the best Caribbean cocktails in town.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  The restaurant is situated in the heart of the city just a few steps from the Old Town Square. On the first floor you will find two bars and whole restaurant & on the ground floor its one bar with club where our DJs play the famous songs from pop, latino and reggaeton.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg my-6">
                  <h3 className="font-bold text-xl mb-3">Celebrity Favorite</h3>
                  <p className="leading-relaxed">
                    Bodeguita in Prague is also popular for its special VIP guests as world well-known celebrities, actors, athletes, singers etc. They can be seen very often there. Interior design - walls all over are dotted with a variety of paintings, photographs and signatures of our guests.
                  </p>
                </div>

                <p className="text-lg mb-6 leading-relaxed">
                  La Bodeguita del Medio is definitely No. 1 place to visit if you are looking for a tasty dinner with a great cocktails and original party with temperament latino music.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/la-bodeguita-del-medio-1.jpg"
                      alt="La Bodeguita Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/la-bodeguita-del-medio-2.jpg"
                      alt="La Bodeguita Atmosphere"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
