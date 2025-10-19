import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Metadata } from "next";
import { Star, MapPin, Clock, Phone, Euro, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "Chapeau Rouge Prague | Historic Nightclub | Best Clubs Prague",
  description: "Experience Prague's legendary Chapeau Rouge - a historic nightclub in Old Town offering diverse music, multiple floors, and unforgettable nightlife since decades.",
  keywords: "Chapeau Rouge Prague, Prague nightclub, Old Town nightclub, historic club Prague, Prague nightlife",
};

export default function ChapeauRougePage() {
  const clubDetails = {
    name: "Chapeau Rouge",
    rating: 4.6,
    category: "Historic Nightclub",
    address: "Jakubská 649/2, 110 00 Old Town, Prague",
    phone: "+420 222 316 328",
    openingHours: {
      weekdays: "20:00 - 05:00",
      weekends: "20:00 - 06:00"
    },
    entryFee: "From 100 CZK",
    features: [
      "Multiple Floors",
      "Diverse Music Genres",
      "Historic Atmosphere",
      "Central Location",
      "Late Night Dancing",
      "Cocktail Bar"
    ],
    description: "Chapeau Rouge is one of Prague's most iconic and historic nightclubs, located in the heart of Old Town. This legendary venue has been a cornerstone of Prague's nightlife scene for decades, offering multiple floors with different music styles and an atmosphere steeped in history."
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/chapeau-rouge-best-club-prague-1.jpg"
          alt="Chapeau Rouge Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-700 text-white">{clubDetails.category}</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{clubDetails.rating}</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-4">
              {clubDetails.name}
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              Prague's Legendary Nightclub in the Heart of Old Town
            </p>
          </div>
        </div>
      </section>

      {/* Club Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Info */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Music className="h-6 w-6 text-red-600" />
                    About Chapeau Rouge
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Step into history at Chapeau Rouge, Prague's most iconic nightclub that has been entertaining 
                    locals and visitors for decades. Located in the medieval heart of Old Town, this legendary venue 
                    combines historic charm with modern nightlife energy.
                  </p>
                  
                  <p className="leading-relaxed">
                    The club's unique multi-floor layout offers different music experiences - from electronic beats 
                    to rock anthems, ensuring there's something for every musical taste. The venue's historic stone 
                    walls and vaulted ceilings create an atmospheric backdrop that's uniquely Prague.
                  </p>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-red-700">Historic Legacy</h3>
                    <p className="text-sm leading-relaxed">
                      Chapeau Rouge has been a witness to Prague's transformation, maintaining its position as a cultural 
                      hub where music, art, and nightlife intersect. The venue's name, meaning "Red Hat" in French, 
                      reflects its bohemian heritage and artistic spirit.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                    {clubDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/clubs/chapeau-rouge-best-club-prague-1.jpg"
                        alt="Chapeau Rouge Interior"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/clubs/chapeau-rouge-best-club-prague-2.png"
                        alt="Chapeau Rouge Atmosphere"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Club Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{clubDetails.address}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{clubDetails.phone}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Opening Hours</p>
                      <p className="text-sm text-muted-foreground">Sun-Thu: {clubDetails.openingHours.weekdays}</p>
                      <p className="text-sm text-muted-foreground">Fri-Sat: {clubDetails.openingHours.weekends}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start gap-3">
                    <Euro className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Entry Fee</p>
                      <p className="text-sm text-muted-foreground">{clubDetails.entryFee}</p>
                      <p className="text-xs text-muted-foreground">Varies by event</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-600 to-orange-600 text-white">
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Ground floor: Main dance floor</li>
                    <li>• Basement: Alternative music</li>
                    <li>• Upper level: Chill-out area</li>
                    <li>• Historic stone architecture</li>
                    <li>• Mixed crowd of locals & tourists</li>
                  </ul>
                  <Button className="w-full mt-4 bg-white text-red-600 hover:bg-gray-100">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Floors & Music */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multiple Floors, Multiple Vibes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover different atmospheres and music styles across Chapeau Rouge's unique multi-level layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Ground Floor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Main dance floor featuring house, electronic, and popular hits with professional sound system.
                </p>
                <Badge variant="secondary">Electronic & House</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Basement Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Historic stone basement with alternative music, rock, and indie sounds for a more intimate experience.
                </p>
                <Badge variant="secondary">Rock & Alternative</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Euro className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Upper Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Relaxed atmosphere perfect for conversations, cocktails, and taking a break from dancing.
                </p>
                <Badge variant="secondary">Chill & Lounge</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Nearby */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Prime Old Town Location</h2>
              <p className="text-lg leading-relaxed mb-6">
                Chapeau Rouge's central location in Old Town makes it easily accessible and the perfect starting 
                or ending point for your Prague nightlife adventure.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium">Walking Distance To:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Old Town Square - 3 minutes</li>
                      <li>• Astronomical Clock - 5 minutes</li>
                      <li>• Charles Bridge - 8 minutes</li>
                      <li>• Wenceslas Square - 10 minutes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Getting There</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Public Transport</p>
                    <p className="text-sm text-muted-foreground">
                      Metro: Náměstí Republiky (Line B) - 5 min walk<br />
                      Tram: Náměstí Republiky - Multiple lines
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">By Taxi/Uber</p>
                    <p className="text-sm text-muted-foreground">
                      Drop-off at Jakubská street<br />
                      Central location, easy to find
                    </p>
                  </div>

                  <Button className="w-full">
                    Open in Maps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Clubs */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Other Historic Venues in Prague
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>M1 Lounge</CardTitle>
                <CardDescription>Premium nightclub with long history</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/m1-lounge-best-club-prague">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Radost FX</CardTitle>
                <CardDescription>Iconic alternative nightlife venue</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/radost-fx-prague">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>La Bodeguita del Medio</CardTitle>
                <CardDescription>Cuban-themed bar and club</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/la-bodeguita-del-medio">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}