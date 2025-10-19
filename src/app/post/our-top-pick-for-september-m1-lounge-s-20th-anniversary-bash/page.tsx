import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "M1 Lounge 20th Anniversary Party | Prague Club Events",
  description: "M1 Lounge celebrates 20 years! UK sensation Ramz & top DJs. Complete event guide to Prague's legendary nightclub anniversary bash.",
  keywords: "m1 lounge 20th anniversary, m1 lounge prague, prague club events, best clubs prague, prague nightlife, club anniversary party",
};

export default function M1Lounge20thAnniversary() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/blog/blog-6.jpg"
          alt="Featured Image"
          fill
          className="object-cover"
          priority
        />
      </div>


      <article className="prose max-w-none">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Martin Muron • Sep 13, 2023 • 2 min read</p>
        </div>

        <h1 className="text-4xl font-bold mb-6">Our Top Pick for September: M1 Lounge's 20th Anniversary Bash</h1>

        <p className="mb-4">
          September is a month filled with the promise of cooler weather and a calendar packed with exciting events. However, one event is capturing everyone's attention this year: M1 Lounge's 20th Anniversary Party. Happening on September 28, 2023, this is the celebration you've been waiting for.
        </p>

        <h2 className="text-2xl font-semibold mb-4">An Unforgettable Evening</h2>
        <p className="mb-4">
          For 20 years, M1 Lounge has been a pivotal part of the nightlife landscape, consistently offering an unparalleled mix of music, ambiance, and exceptional service. It's no wonder the club has been listed among the best clubs in Prague for the last five years!
        </p>

        <h3 className="text-xl font-semibold mb-3">A Line-Up That's Second to None</h3>
        <p className="mb-4">
          The star of the night is the UK sensation Ramz, famous for hits like "Barking," "Family Tree," and "Hold You Down." His captivating voice and infectious melodies are sure to set the stage on fire.
        </p>

        <p className="mb-4">
          But the excitement doesn't stop there. A stellar roster of DJs, including DJ Illegal, DJ Tricky V, DJ Don, DJ Norbert, DJ Australan, and DJ Czekid, will keep the energy high and the dance floor packed.
        </p>

        <h3 className="text-xl font-semibold mb-3">Culinary Delights</h3>
        <p className="mb-4">
          Arrive early and you'll be treated to an array of finger foods to kickstart your evening. It's the perfect way to fuel up for a night of dancing and revelry.
        </p>

        <h3 className="text-xl font-semibold mb-3">Dress for the Occasion</h3>
        <p className="mb-4">
          The evening calls for smart casual attire, so make sure to dress in a way that's both comfortable and chic.
        </p>

        <h3 className="text-xl font-semibold mb-3">Secure Your Table</h3>
        <p className="mb-4">
          Given the event's high-profile nature, reserving a table is strongly advised for an optimal experience. Make your reservation today to ensure you're part of this monumental celebration.
        </p>

        <h3 className="text-xl font-semibold mb-3">Key Event Information</h3>
        <p className="mb-4">
          Date: September 28, 2023<br/>
          Time: Kicks off at 22:00<br/>
          Location: M1 Lounge<br/>
          Dress Code: Smart Casual
        </p>

        <p className="mb-4">
          M1 Lounge's 20th Anniversary Party is shaping up to be an epic night of music, gastronomy, and unforgettable moments. It's our top event pick for September, and we can't wait to see you there!
        </p>
      </article>
    </div>
  );
}
