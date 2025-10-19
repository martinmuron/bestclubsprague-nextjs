import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Metadata } from "next";
import { Star, MapPin, Clock, Phone, Euro, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "80s Club Prague | Best Retro Nightclub | Best Clubs Prague",
  description: "Experience the ultimate 80s nostalgia at Prague's premier retro nightclub. Dance to classic hits, enjoy themed nights and relive the golden era of music.",
  keywords: "80s club Prague, retro nightclub Prague, 80s music Prague, themed nightclub Prague, retro party Prague",
};

export default function EightiesClubPage() {
  const clubDetails = {
    name: "80s Club Prague",
    rating: 4.5,
    category: "Retro Nightclub",
    address: "Wenceslas Square area, Prague 1",
    phone: "+420 xxx xxx xxx",
    openingHours: {
      weekdays: "21:00 - 04:00",
      weekends: "21:00 - 05:00"
    },
    entryFee: "From 200 CZK",
    features: [
      "80s Music All Night",
      "Retro Themed Decor",
      "Costume Parties", 
      "Classic Cocktails",
      "Nostalgic Atmosphere",
      "Dancing & Karaoke"
    ],
    description: "Step back in time at 80s Club Prague, where the golden era of music comes alive every night. This unique retro nightclub recreates the magic of the 1980s with authentic decor, classic hits, and an atmosphere that transports you to the decade of neon lights and disco balls."
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/80s-club-best-clubs-prague-1.jpg"
          alt="80s Club Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-pink-500 text-white">{clubDetails.category}</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{clubDetails.rating}</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-4">
              {clubDetails.name}
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              Step Back to the Golden Era of Music & Dance
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
                    <Music className="h-6 w-6 text-pink-500" />
                    About 80s Club Prague
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Welcome to Prague's ultimate retro destination! 80s Club Prague is where nostalgia meets nightlife, 
                    creating an authentic 1980s experience that attracts music lovers, party-goers, and anyone looking 
                    to dance the night away to the greatest hits of the decade.
                  </p>
                  
                  <p className="leading-relaxed">
                    From Madonna to Michael Jackson, from synth-pop to new wave, our DJs spin the classics that defined 
                    a generation. The club's interior design pays homage to 80s aesthetics with neon lights, retro furniture, 
                    and authentic memorabilia that creates the perfect backdrop for your night out.
                  </p>

                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-purple-700">What Makes Us Special</h3>
                    <ul className="space-y-2">
                      <li>• <strong>Authentic 80s Music:</strong> Only the best hits from the golden decade</li>
                      <li>• <strong>Themed Nights:</strong> Special events celebrating 80s culture</li>
                      <li>• <strong>Costume Parties:</strong> Dress up and win prizes for best 80s outfit</li>
                      <li>• <strong>Classic Cocktails:</strong> Drinks popular in the 1980s era</li>
                      <li>• <strong>Retro Atmosphere:</strong> Immersive 80s environment</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                    {clubDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/clubs/80s-club-best-clubs-prague-1.jpg"
                        alt="80s Club Interior"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/images/clubs/80s-club-best-clubs-prague-2.jpg"
                        alt="80s Club Atmosphere"
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
                      <p className="font-medium">Reservations</p>
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
                      <p className="text-xs text-muted-foreground">Free entry in 80s costume</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle>Special Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Madonna Monday</li>
                    <li>• Throwback Thursday</li>
                    <li>• 80s Karaoke Friday</li>
                    <li>• Costume Contest Saturday</li>
                    <li>• Retro Dance Lessons</li>
                  </ul>
                  <Button className="w-full mt-4 bg-white text-purple-600 hover:bg-gray-100">
                    Check Event Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Music & Atmosphere */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Ultimate 80s Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in the decade that defined pop culture with authentic music, 
              decor, and atmosphere that transports you back in time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Classic Hits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dance to the greatest hits from artists like Madonna, Michael Jackson, 
                  Duran Duran, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Retro Atmosphere</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Neon lights, disco balls, and authentic 80s decor create the perfect 
                  nostalgic environment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Euro className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Great Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Affordable entry fees and drink prices make it accessible for everyone 
                  to enjoy the 80s experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Clubs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Other Popular Clubs in Prague
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>M1 Lounge</CardTitle>
                <CardDescription>Premium nightclub experience</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/m1-lounge-best-club-prague">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Chapeau Rouge</CardTitle>
                <CardDescription>Historic nightclub in Old Town</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/chapeau-rouge-best-club-prague">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>KU Club Bar</CardTitle>
                <CardDescription>Multi-level entertainment venue</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/ku-club-bar-best-clubs-prague">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}