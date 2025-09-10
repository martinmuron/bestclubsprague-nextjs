import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Metadata } from "next";
import { Star, MapPin, Clock, Phone, Euro } from "lucide-react";

export const metadata: Metadata = {
  title: "M1 Lounge Prague | Best Club Prague | Premium Nightlife Experience",
  description: "M1 Lounge - Prague's premier nightclub with 20+ years of excellence. Experience luxury nightlife in the heart of Prague with world-class DJs and VIP service.",
  keywords: "M1 Lounge Prague, best club Prague, Prague nightclub, VIP Prague, luxury nightlife Prague",
};

export default function M1LoungePage() {
  const clubDetails = {
    name: "M1 Lounge",
    rating: 4.8,
    category: "Premium Nightclub",
    address: "Národní 961/25, 110 00 Staré Město, Prague",
    phone: "+420 224 811 274",
    openingHours: {
      weekdays: "22:00 - 05:00",
      weekends: "22:00 - 06:00"
    },
    entryFee: "From 300 CZK",
    features: [
      "Premium Sound System",
      "VIP Bottle Service",
      "International DJs", 
      "Luxury Interior",
      "Professional Security",
      "Coat Check Service"
    ],
    description: "M1 Lounge has been Prague's premier nightclub destination for over 20 years, setting the standard for luxury nightlife in the city. Located in the heart of Prague's historic center, M1 Lounge combines sophisticated atmosphere with world-class entertainment."
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-yellow-500 text-black">{clubDetails.category}</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{clubDetails.rating}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {clubDetails.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Prague's Premier Nightclub Experience Since 2003
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-2xl">
              {clubDetails.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Reserve VIP Table
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                View Gallery
              </Button>
            </div>
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
                  <CardTitle className="text-2xl">About M1 Lounge</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    M1 Lounge stands as Prague's most prestigious nightclub, offering an unparalleled nightlife experience 
                    in the heart of the city. With over two decades of excellence, M1 Lounge has hosted countless memorable 
                    nights, featuring international DJs, luxury VIP services, and an atmosphere that defines Prague's 
                    premium nightlife scene.
                  </p>
                  
                  <p className="leading-relaxed">
                    The club's sophisticated interior design, state-of-the-art sound system, and professional staff 
                    create an environment where luxury meets entertainment. Whether you're celebrating a special occasion 
                    or simply want to experience the best of Prague's nightlife, M1 Lounge delivers an unforgettable experience.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                    {clubDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
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
                      <p className="font-medium">Address</p>
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
                      <p className="text-sm text-muted-foreground">Mon-Thu: {clubDetails.openingHours.weekdays}</p>
                      <p className="text-sm text-muted-foreground">Fri-Sat: {clubDetails.openingHours.weekends}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start gap-3">
                    <Euro className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Entry Fee</p>
                      <p className="text-sm text-muted-foreground">{clubDetails.entryFee}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>VIP Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Private VIP tables</li>
                    <li>• Bottle service</li>
                    <li>• Personal hostess service</li>
                    <li>• Priority entry</li>
                    <li>• Private dining area</li>
                  </ul>
                  <Button className="w-full mt-4">
                    Book VIP Experience
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
            Other Premium Clubs in Prague
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Epic Prague</CardTitle>
                <CardDescription>Multi-level entertainment complex</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/epic-prague">View Details</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Radost FX</CardTitle>
                <CardDescription>Iconic Prague nightlife venue</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/radost-fx-prague">View Details</Link>
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
          </div>
        </div>
      </section>
    </div>
  );
}