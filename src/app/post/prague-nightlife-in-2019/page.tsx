import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prague Nightlife Guide | Best Clubs & Parties Every Night",
  description: "Complete Prague nightlife guide. Parties every day of the week, best clubs, cheap beer & wild atmosphere. Make your own choice, avoid tourist traps.",
  keywords: "prague nightlife, prague clubs, nightlife prague, best clubs prague, party prague, prague bars, where to party prague, prague entertainment",
};

export default function PragueNightlife2019() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/blog/blog-10.jpg"
          alt="Featured Image"
          fill
          className="object-cover"
          priority
        />
      </div>


      <article className="prose max-w-none">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Martin Muron • Apr 7, 2019 • 1 min read</p>
          <p className="text-sm text-gray-600 mb-2">Updated: Sep 15, 2022</p>
        </div>

        <h1 className="text-4xl font-bold mb-6">Prague Nightlife in 2021</h1>

        <p className="mb-4">
          Well this is a question… oh boy….. here we go.
        </p>

        <p className="mb-4">
          In Prague, you will find cheap beer (in some places), amazing people (girls and guys :-) ) , and just a wild atmosphere. Prague is known to be alive every day of the week, and this is very true. There are parties literally, every single day of the week. The question that always comes up is.. Where do I go? Well, this is why we compiled this list for clubs for you to make that decision easier. Visit them all!
        </p>

        <p className="mb-4">
          Do not listen to your hotel concierge, your hostel receptionist, or some restaurant waiter. Most of these people have a commission to tell you where to go. Make your own decision based on your music preferences and just how wild you want to get. Some places have great parties, but are not crowded and in some places you cannot even move.
        </p>
      </article>
    </div>
  );
}
