import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radost FX Prague - Best Club Prague 2025 - Multi-Genre Since 1992",
  description: "Radost FX: Legendary Prague club since 1992. Multi-genre parties (House, Techno, RnB) with Funktion One sound. Rihanna filmed Don't Stop The Music video here.",
  keywords: "radost fx prague, best club prague, prague nightclub, house music prague, techno prague, best clubs prague 2025, clubs prague, vinohrady club",
  openGraph: {
    title: "Radost FX Prague - Legendary Club Since 1992",
    description: "30+ years of legendary parties. Multi-genre music & Funktion One sound system near Wenceslas Square",
    images: ["/images/clubs/radost-fx-prague-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function RadostFxPrague() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/radost-fx-prague-1.jpg"
          alt="Radost FX Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <Badge className="mb-4 bg-purple-600">Since 1992</Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-4">RADOST FX</h1>
            <p className="text-xl md:text-2xl font-medium">Multigenre Club with genius loci since 1992</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">ABOUT RADOST FX</h2>

                <p className="text-lg mb-4 leading-relaxed">
                  In the fall of 2022, it was exactly 30 years since music and cultural events have been held in the non-residential premises of the house at Bělehradská Street No. 120. Over its thirty-year history, the legendary Vinohrady club with a restaurant & lounge called Radost FX has provided entertainment and the opportunity to realize their artistic ambitions to several generations, and many of them fondly remember their youth when visiting this "genius loci" place in the center of Prague.
                </p>

                <p className="text-lg mb-4 leading-relaxed">
                  In the 1990s, the Radost FX club was one of the very first nightclubs not only in Prague, but also in the entire Czech Republic. In 1999, the British magazine Ministry ranked Radost FX among the 20 best clubs in the world. In 2007, Radost FX became the 8th best bar in the world according to World's Best Bars.
                </p>

                <p className="text-lg mb-4 leading-relaxed">
                  In the 1990s, for example, the world-famous Paul Van Dyk was a regular resident of the club. Also worth mentioning are the performances of world-famous names such as Carl Cox, Moby, Laurent Garnier, MJ Cole, David Morales, Westbam and many others. Among the local DJs, the legendary deejays Loutka, Bidlo, Vilém and Ladida are worth mentioning.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg my-6">
                  <h3 className="font-bold text-xl mb-3">Rihanna's Music Video</h3>
                  <p className="leading-relaxed">
                    The interior of the club and restaurant was also timeless in its time. Perhaps that is why the world-famous singer Rihanna shot a music video in Radosti FX in 2006. The clip for the song <span className="font-semibold">"Don't Stop The Music"</span> currently has an incredible over 600,000,000 views on Youtube.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/radost-fx-prague-1.jpg"
                      alt="Radost FX Interior 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/radost-fx-prague-2.jpg"
                      alt="Radost FX Interior 2"
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
