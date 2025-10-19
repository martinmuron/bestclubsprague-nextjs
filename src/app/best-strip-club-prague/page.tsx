import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Strip Club Prague 2025 | Goldfingers & Golden Eye | Best Clubs Prague",
  description: "Goldfingers: Prague's best strip club on Wenceslas Square. Professional entertainment, quality service & luxurious atmosphere. Best adult entertainment Prague 2025.",
  keywords: "best strip club prague, goldfingers prague, golden eye prague, wenceslas square strip club, prague adult entertainment, best clubs prague 2025, gentlemen's club prague",
  openGraph: {
    title: "Best Strip Club Prague 2025 - Goldfingers & Golden Eye",
    description: "Premium adult entertainment on Wenceslas Square. Professional shows & luxurious atmosphere.",
    images: ["/images/goldfingers-logo.png"],
    type: "website",
    locale: "en_US",
  },
};

export default function BestStripClubPrague() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-32">
            <Image
              src="/images/goldfingers-logo.png"
              alt="Goldfingers"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">THIS IS GOLDFINGERS.</h1>

        <h2 className="text-xl italic mb-8 text-center text-muted-foreground">Sometimes the girls can get a little nasty.</h2>

        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-lg mb-6 leading-relaxed">
              So you are looking for a place where you can enjoy a nice show and have a good time. You are tired of the regular club scene and you want to spice it up a bit. Welcome to Goldfingers, where anything can happen. What was the saying? What happens in Prague, stays in Prague? All jokes aside, Goldfingers provides a quality service with their professional team.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              It is located on Wenceslas Square right in the center of Prague. Perfect location for the best strip club in the city.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="flex-1" asChild>
                <a href="https://goldfingers.cz/en?utm_source=bestclubsprague&utm_medium=referral" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-5 w-5" />
                  Visit Goldfingers
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Golden Eye</h3>
            <p className="text-lg mb-6 leading-relaxed">
              You can also enjoy great entertainment and shows at the second club in the Goldfingers family. Its name is Golden Eye and you can find it only 500 meters from Goldfingers, i.e. at Václavská nám. 56, right in the center of Prague. If you know Goldfingers, you will also like Golden Eye. The luxurious environment of the hive of a new strip club awaits you, an unforgettable atmosphere, beautiful and sexy girls, non-stop shows and memories for a lifetime.
            </p>

            <Button size="lg" variant="outline" className="w-full" asChild>
              <a href="http://www.goldeneye.cz" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-5 w-5" />
                Visit Golden Eye
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="relative h-96 rounded-lg overflow-hidden mt-8">
          <Image
            src="/images/homepage/hero-background.jpg"
            alt="Prague Nightlife"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
