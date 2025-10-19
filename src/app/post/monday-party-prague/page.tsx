import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monday Party Prague - Mondays Like Fridays at Chapeau Rouge | Best Clubs Prague",
  description: "Monday party in Prague! Mondays Like Fridays at Chapeau Rouge. 5+ years of legendary Monday nightlife. Where to party Monday Prague.",
  keywords: "monday party prague, party prague monday, mondays like fridays prague, chapeau rouge monday, best clubs prague, prague nightlife monday, mad monday prague",
};

export default function MondayPartyPrague() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/blog/blog-7.jpg"
          alt="Featured Image"
          fill
          className="object-cover"
          priority
        />
      </div>


      <article className="prose max-w-none">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Martin Muron • Apr 4, 2019 • 1 min read</p>
          <p className="text-sm text-gray-600 mb-2">Updated: Dec 15, 2022</p>
        </div>

        <h1 className="text-4xl font-bold mb-6">Monday Party...What?</h1>

        <p className="mb-4">
          <strong>YES, you did read that title correctly. Monday is actually a party night in Prague, no joke. Even though, many Prague clubs are open 7 days a week, this night is actually better than many other. Lets run through why and where and what.</strong>
        </p>

        <p className="mb-4">
          The first party that started the Monday trend is the legendary Mad Mad Monday party has been around for 5+ years. It started in M1 Lounge and has moved to <a href="https://www.bestclubsprague.com/chapeau-rouge-best-club-prague" className="text-blue-600 hover:underline">Chapeau Rouge</a>. It is now under the title of MONDAYS LIKE FRIDAYS by <a href="https://bit.ly/MADPRGBCP" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MAD PRG</a> and it is absolutely legendary…. absolutely insane, absolutely surprising. We remember when it was first launched, people were like "wait….what?" No one believe that it would turn into such a craze, and last so long.
        </p>

        <p className="mb-4">
          To this day, every Monday, all party goers know they can visit Chapeau Rouge and be part of this amazing Monday party.
        </p>

        <h2 className="text-xl font-semibold mb-3">Multiple underground floors, different styles of music, all types of people. THAT IS A MONDAY.</h2>

        <h3 className="text-xl font-semibold mb-3">Are you looking for a little bit more fun? How about a strip club?</h3>
        <p className="mb-4">
          Goldfingers Prague is the best strip in the city. Their team is very professional, and the girls are well.........WOW
        </p>

        <p className="mb-4">
          Just a little tip from us :-) You can check them out <a href="https://goldfingers.cz/en?utm_source=bestclubsprague&utm_medium=referral" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">here!</a>
        </p>
      </article>
    </div>
  );
}
