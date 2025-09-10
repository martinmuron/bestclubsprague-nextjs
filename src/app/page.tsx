import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Home() {
  // Club data based on actual site content
  const clubs = [
    {
      id: "1",
      name: "M1 LOUNGE",
      slug: "m1-lounge-best-club-prague",
      description: "If RnB is your flavor. There is nothing better.",
      address: "Masna 705/1, 110 00 Stare Mesto",
      details: "A very popular RnB club next to the crowded Dlouha \"nightlife street\". Opened for over 13 years, it provides the best dance music in Prague. Visited by many rappers like Wiz Khalifa, Big Sean, Xzibit, Machine Gun Kelly, it really is the top RnB spot in Prague."
    },
    {
      id: "2", 
      name: "Epic Prague",
      slug: "epic-prague",
      description: "Epic IS the most modern club in prague.",
      address: "Revolucni 1/1003/3, 110 00 Stare Mesto Praha 1",
      details: "The most modern and newest club in Prague. An absolutely insane sound system, with over 100 square meters of LED screens and a superior lighting system. What more needs to be said?"
    },
    {
      id: "3",
      name: "MOON CLUB",
      slug: "moon-club-best-club-prague", 
      description: "Dance the night away at one of the newest clubs in Prague.",
      address: "Dlouha 709/26, 110 00 Stare Mesto",
      details: "Sip on rare cocktails that you will not find anywhere else, or dance the night away under their glass rooftop ceiling."
    },
    {
      id: "4",
      name: "CAFE 80s club",
      slug: "80s-club-best-clubs-prague",
      description: "Eighties-inspired café-restaurant & music club in Prague downtown!",
      address: "V Kolkovne 909/6, 110 00 Stare Mesto",
      details: "Discover acid wash jeans, baggies, MTV, Polaroids, Walkmen, eight-track tapes, cassettes, digital watches – and a few Czechoslovak features like Pedro chewing gum, Tuzex stores, foreign currency coupons, and imported Burda and Bravo magazines – these are the images that come to mind when recalling the golden Eighties…"
    },
    {
      id: "5",
      name: "FU Club & LOUNGE",
      slug: "fu-club-prague-best-club-prague",
      description: "A new addition to Best Clubs Prague.",
      address: "Dlouha 13, Prague 1",
      details: "A new addition to Best Clubs Prague is the FU Club & Lounge, which has recently opened on the highly popular party street - Dlouha. Open daily, it never fails to bring the party."
    },
    {
      id: "6",
      name: "RADOST FX",
      slug: "radost-fx-prague",
      description: "Multigenre Club with genius loci since 1992",
      address: "Belehradska 120, 120 00 Praha 2",
      details: "One of the oldest clubs in Prague, just a few steps from Wenceslas Square, offers a variety of parties of different genres. From House to Techno, RnB & Hip Hop, dance music & live concerts delivered on one of the smoothest soundsystem by Funktion One. Rihanna filmed her video for Don't Stop The Music here in 2006."
    },
    {
      id: "7",
      name: "Chapeau rouge",
      slug: "chapeau-rouge-best-club-prague",
      description: "SINCE 1919.",
      address: "Jakubska 2, 110 00 Stare Mesto",
      details: "Legendary! Chapeau Rouge was founded in 1919. Yes you read that correctly. That is absolutely ridiculous! There is a reason though why it has lasted this long. The parties, the staff, and the overall atmosphere is exceptional, outrageous, unforgettable. Everyday there are DJs, and various live concerts and performances. Did we mention there are 3 floors?"
    },
    {
      id: "8",
      name: "POP UP BAR",
      slug: "pop-up-bar-best-club-prague",
      description: "BAR that becomes a club!",
      address: "Na Príkope 390/3, 110 00 Stare Mesto",
      details: "Experience the vibrant transition of POP UP BAR, a unique spot that morphs from a cozy bar into an electrifying club. Known for its amazing atmosphere and music, it's the perfect destination for both relaxed evenings and lively nights out."
    }
  ];

  // Recent blog posts based on actual site
  const recentPosts = [
    {
      id: "1",
      title: "Where should you spend your Prague NYE 2024/2025?",
      slug: "where-should-you-spend-your-prague-nye-2024-2025",
      url: "/post/where-should-you-spend-your-prague-nye-2024-2025"
    },
    {
      id: "2", 
      title: "Halloween in Prague 2024. Where Should you Go!?",
      slug: "halloween-in-prague-where-should-you-go",
      url: "/post/halloween-in-prague-where-should-you-go"
    },
    {
      id: "3",
      title: "Prague Wednesday Party - Ladies Night", 
      slug: "prague-wednesday-party-ladies-night",
      url: "/post/prague-wednesday-party-ladies-night"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/videos/prague-nightlife.mp4" type="video/mp4" />
          {/* Fallback background */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 to-blue-900"></div>
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black mb-6 leading-tight tracking-wide font-sans">
              WELCOME TO OUR LIST OF<br />
              THE BEST CLUBS IN PRAGUE.<br />
              ENJOY PRAGUE&apos;S NIGHTLIFE<br />
              TO THE MAX AND HAVE SOME<br />
              FUN! <span className="text-sm md:text-base lg:text-lg">UPDATED FOR 2025</span>
            </h1>
            <div className="mt-8">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-3"
              >
                TAKE ME TO THE LIST
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg leading-tight font-semibold">
                  <Link href={post.url} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              How did we create the list of the best clubs in Prague for 2025?
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                The nightlife in Prague is absolutely insane, and you will definitely enjoy it. Choosing the right club to visit while you are here is the tricky part. Unfortunately many clubs do not care about customer service or about the quality of the music. You will find a bar or club around every single corner in Prague. While most are tourist traps, there are a few places where you can really have a great time. These clubs are the best in Prague and we have made this list for you.
              </p>
              
              <p className="text-lg leading-relaxed">
                We have been in the nightlife scene for over 17 years and have experienced just about everything that comes to your mind. From a club show from DJ Afrojack to partying with Kanye, in Prague, we have done it all. Each club has a different style of music so please take a look and read about the club before you head there based on our recommendation. Enjoy your night!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs List - Full Width 2-Column Layout */}
      <section className="space-y-0">
        {clubs.map((club, index) => (
          <div key={club.id} className="w-full">
            {/* Normal Layout - Image Left, Content Right */}
            {index % 2 === 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Image/Video Side */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="bg-white flex items-center justify-center p-8 lg:p-16">
                  <div className="max-w-md text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-widest uppercase font-sans">
                      {club.name}
                    </h2>
                    <h3 className="text-xl lg:text-2xl font-medium mb-6 text-gray-800">
                      {club.description}
                    </h3>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 underline mb-4">
                        {club.address}
                      </p>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed">
                      {club.details}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
                      asChild
                    >
                      <Link href={`/${club.slug}`}>LEARN MORE</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              /* Reverse Layout - Content Left, Image Right */
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Content Side */}
                <div className="bg-white flex items-center justify-center p-8 lg:p-16 lg:order-1">
                  <div className="max-w-md text-center lg:text-right">
                    <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-widest uppercase font-sans">
                      {club.name}
                    </h2>
                    <h3 className="text-xl lg:text-2xl font-medium mb-6 text-gray-800">
                      {club.description}
                    </h3>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 underline mb-4">
                        {club.address}
                      </p>
                    </div>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed">
                      {club.details}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
                      asChild
                    >
                      <Link href={`/${club.slug}`}>LEARN MORE</Link>
                    </Button>
                  </div>
                </div>
                
                {/* Image/Video Side */}
                <div className="relative overflow-hidden lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* About Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">WHO ARE WE?</h3>
            <p className="text-lg leading-relaxed">
              We&apos;re not entirely certain what label best fits us. Are we Party Enthusiasts? Drinkaholics? Perhaps Partyaholics? Regardless, we are a group of individuals who enjoy socializing and having fun. To help you achieve the same, we have compiled a list of some of the world&apos;s best clubs located in Prague.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ULTIMATE GUIDE TO PRAGUE&apos;S NIGHTLIFE
          </h2>
          <p className="text-lg mb-8 opacity-90">
            If you are looking for information or a reservation, it is best to write the club directly.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black" asChild>
            <Link href="/blog-clubs-prague">Read Our Blog</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}