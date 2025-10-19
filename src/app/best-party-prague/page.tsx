import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Party Prague 2025 | Top Event Organizers | Best Clubs Prague",
  description: "Find the best parties in Prague 2025. Top event organizers: Warehouse Entertainment & OMG. Ultimate guide to where to party in Prague every night.",
  keywords: "best party prague, party prague, where to party prague, prague events, warehouse entertainment, best clubs prague 2025, prague nightlife, party organizers prague",
  openGraph: {
    title: "Best Party Prague 2025 - Top Event Organizers Guide",
    description: "Discover Prague's best party organizers: Warehouse Entertainment & OMG. Never miss an epic night out.",
    images: ["/images/warehouse-logo.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function BestPartyPrague() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">PARTY ORGANIZERS IN PRAGUE | WE PICK OUR 2 FAVORITES</h1>

        <h2 className="text-2xl font-semibold mb-8">Go to the Best Parties!</h2>

        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-lg mb-6 leading-relaxed">
              In Prague, every night's a party – but let's be honest, not all of them are great. With so many party organizers, it's like playing roulette with your night out. Some events? Meh. But fear not, we're here to steer you away from the dull and straight to the best parties in Prague. We're talking about parties that actually live up to the hype, where the music, crowd, and vibe are just right. So, forget the hit-and-miss and stick with us. We're on a mission to make sure your Prague party experience is nothing short of epic – or at least not a total snooze-fest.
            </p>

            <p className="text-lg leading-relaxed">
              We've been to many parties in Prague. Seriously, a lot. Probably too many. But thanks to our extensive "research," we can confidently say we've found the crème de la crème of event organizers in the city. When you choose a party from these organizers, it's not just a roll of the dice – it's a sure bet for a fantastic night. Trust us, your odds of having a good time are sky-high. So, if you're wondering where to party in Prague, follow our lead. We've done the legwork, so you don't have to!
            </p>
          </CardContent>
        </Card>

        <h3 className="text-3xl font-bold mb-8 text-center">THERE are 2 companies that stand out</h3>

        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow">
            <div className="flex justify-center p-8 bg-gray-50">
              <div className="relative w-64 h-32">
                <Image
                  src="/images/warehouse-logo.jpg"
                  alt="Warehouse Entertainment"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Best Party in Prague organizer is.... warehouse entertainment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                Warehouse, renowned for orchestrating the best parties in Prague, has quickly risen to be the city's top party organizer. Their events, known for their electric atmosphere and unforgettable experiences, are the epitome of the 'best party Prague' scene. To stay updated on Warehouse's thrilling events, follow their Instagram. This is your gateway to the latest in Prague's vibrant party landscape. For easy access to these premier events, visit https://linktr.ee/wprg to buy tickets. With Warehouse Entertainment, you're set for an unparalleled party experience in Prague.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <div className="flex justify-center p-8 bg-gray-50">
              <div className="relative w-64 h-32">
                <Image
                  src="/images/omp-logo.png"
                  alt="Oh My Prague"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">#2 Prague Party Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4 leading-relaxed">
                Number 2 on the list is Oh My Prague (their Instagram).
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                More than just a party organizer, OMG is known for orchestrating a diverse array of experiences that extend beyond the typical night out. They offer an exciting mix of trips and events, appealing to a wide range of interests and tastes.
              </p>
              <p className="text-lg leading-relaxed">
                OMG has quickly become a formidable competitor to Warehouse Entertainment, offering some of the best parties in Prague. Their events are characterized by their creativity, energy, and ability to bring people together for unforgettable experiences. From themed parties to exclusive trips, OMG is dedicated to providing a unique blend of entertainment and adventure, making it a must-visit destination for anyone looking to explore Prague's dynamic social scene.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
