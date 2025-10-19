import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steampunk Prague - Best Club Prague 2025 - Late Night Food & Themed Parties",
  description: "Steampunk: Themed parties till 7am with full kitchen service. Open 7 days, homemade burgers, steaks & unforgettable experiences. Best clubs Prague 2025.",
  keywords: "steampunk prague, best club prague, late night food prague, themed parties prague, best clubs prague 2025, clubs prague, prague nightlife, open till 7am",
  openGraph: {
    title: "Steampunk Prague - Themed Parties & Late Night Food Till 7AM",
    description: "Experience themed parties with full kitchen till morning. Open 7 days a week in the center of Prague",
    images: ["/images/clubs/steampunk-best-club-prague-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function SteampunkPrague() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/steampunk-best-club-prague-1.jpg"
          alt="Steampunk Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-4">THIS IS STEAMPUNK.</h1>
            <p className="text-xl md:text-2xl font-medium">An Experience You'll Always Remember</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg mb-6 leading-relaxed">
                  Steampunk Prague is located right in the center where all the action happens. You never know what to expect when you arrive.... in a good way. They take their parties to another level, with well though-out themes that are perfectly executed. Steampunk is not just a club but an experience that you will always remember. The party starts here from begging of the night till the end. This is one of the only clubs on the list that has a kitchen with great choices of food. Homemade burgers, fresh salads, pasta, steaks and more are all available till the early morning hours.
                </p>

                <h2 className="text-3xl font-bold mb-6">EVERYTHING IS POSSIBLE</h2>

                <p className="text-lg mb-6 leading-relaxed">
                  Steampunk is open 7 days a week to at least 5 am and you can always expect a good party. On the weekends it is open till 7 in the morning, which makes it the last closing club on the best club list.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  Check out their Facebook (which they take great pride in) to find what events they have in the week.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/steampunk-best-club-prague-1.jpg"
                      alt="Steampunk Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/clubs/steampunk-best-club-prague-2.jpg"
                      alt="Steampunk Atmosphere"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="flex-1" asChild>
                    <a href="http://www.facebook.com/pg/steampunkprague.cz" target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-5 w-5" />
                      Follow on Facebook
                    </a>
                  </Button>
                </div>

                <p className="text-xl font-bold mt-8 text-center">See you there!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
