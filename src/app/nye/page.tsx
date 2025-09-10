import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";
import { Star, MapPin, Clock, Euro, Calendar, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "New Year's Eve Prague 2025 | Best NYE Parties | Best Clubs Prague",
  description: "Celebrate New Year's Eve 2024-2025 in Prague's best clubs and venues. Find the ultimate NYE parties, events, and celebrations in Prague's top nightlife spots.",
  keywords: "NYE Prague 2025, New Year's Eve Prague, Prague NYE parties, New Year Prague clubs, Prague celebration 2025",
};

export default function NYEPage() {
  const nyeEvents = [
    {
      id: "1",
      venue: "M1 Lounge",
      title: "Premium NYE Celebration 2025",
      price: "From 2,500 CZK",
      description: "Luxury NYE party with champagne service, live DJ sets, and exclusive VIP experience",
      features: ["Premium Champagne", "Live DJs", "VIP Service", "Midnight Fireworks View"],
      rating: 4.9,
      slug: "/m1-lounge-best-club-prague"
    },
    {
      id: "2", 
      venue: "Epic Prague",
      title: "Epic NYE Spectacular",
      price: "From 1,800 CZK",
      description: "Multi-level NYE celebration with different music genres on each floor",
      features: ["Multiple Floors", "Various Music Styles", "Light Shows", "Costume Contest"],
      rating: 4.7,
      slug: "/epic-prague"
    },
    {
      id: "3",
      venue: "Radost FX",
      title: "Underground NYE Revolution", 
      price: "From 1,200 CZK",
      description: "Alternative NYE party with underground music and artistic performances",
      features: ["Underground Vibe", "Art Performances", "Alternative Music", "Late Night Vibes"],
      rating: 4.6,
      slug: "/radost-fx-prague"
    },
    {
      id: "4",
      venue: "80s Club",
      title: "Retro NYE Time Machine",
      price: "From 800 CZK", 
      description: "Ring in 2025 with the greatest hits from the 80s and retro atmosphere",
      features: ["80s Music All Night", "Retro Decorations", "Costume Prizes", "Nostalgia Vibes"],
      rating: 4.5,
      slug: "/80s-club-best-clubs-prague"
    }
  ];

  const tips = [
    "Book tickets early - NYE events sell out quickly",
    "Consider VIP packages for the best experience", 
    "Arrive early to avoid long queues",
    "Dress to impress - most venues have dress codes",
    "Pre-drink responsibly and stay hydrated",
    "Plan your transportation in advance"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-yellow-300" />
              <Badge className="bg-yellow-500 text-black text-lg px-4 py-2">Special Event</Badge>
              <Sparkles className="h-8 w-8 text-yellow-300" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              New Year's Eve Prague 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Ring in 2025 at Prague's Most Spectacular NYE Celebrations
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
              Experience the ultimate New Year's Eve in Prague with exclusive parties, champagne toasts, 
              and unforgettable celebrations at the city's premier nightlife venues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                View All NYE Events
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Book VIP Experience
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Countdown to 2025</h2>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">XX</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">XX</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">XX</div>
              <div className="text-sm">Minutes</div>
            </div>
          </div>
        </div>
      </section>

      {/* NYE Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top NYE Events in Prague
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your perfect New Year's Eve celebration from Prague's best venues
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {nyeEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                    {event.venue}
                  </div>
                  <Badge className="absolute top-4 left-4 bg-black/70 text-white">
                    NYE 2025
                  </Badge>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-sm">{event.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <Badge variant="outline" className="text-lg font-bold">
                      {event.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {event.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href={event.slug}>View Venue</Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NYE Tips */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                NYE Prague Tips & Advice
              </h2>
              <p className="text-lg text-muted-foreground">
                Make the most of your New Year's Eve celebration in Prague
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm">{tip}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              NYE Package Options
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect celebration package for your group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm">
                Popular
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Standard</CardTitle>
                <div className="text-3xl font-bold text-muted-foreground">800-1,200 CZK</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Club entry</li>
                  <li>• Welcome drink</li>
                  <li>• Midnight toast</li>
                  <li>• Dance until dawn</li>
                </ul>
                <Button className="w-full mt-4">
                  Choose Standard
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-yellow-500 border-2">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-sm font-bold">
                Premium
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">VIP</CardTitle>
                <div className="text-3xl font-bold text-yellow-600">1,800-2,500 CZK</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Priority entry</li>
                  <li>• VIP area access</li>
                  <li>• Premium drinks</li>
                  <li>• Champagne toast</li>
                  <li>• Personal host service</li>
                </ul>
                <Button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black">
                  Choose VIP
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm">
                Luxury
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Ultra VIP</CardTitle>
                <div className="text-3xl font-bold text-purple-600">3,000+ CZK</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Exclusive entrance</li>
                  <li>• Private VIP booth</li>
                  <li>• Bottle service</li>
                  <li>• Premium champagne</li>
                  <li>• Personal hostess</li>
                  <li>• Photographer service</li>
                </ul>
                <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600">
                  Choose Ultra VIP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for the Ultimate NYE 2025?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Don't miss out on Prague's most spectacular New Year's Eve celebrations. 
            Book your tickets now and secure your spot for an unforgettable night.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Book Your NYE Experience
          </Button>
        </div>
      </section>
    </div>
  );
}