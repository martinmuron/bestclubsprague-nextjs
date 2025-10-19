import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where to Party on Halloween in Prague | Bloody Sexy Halloween Guide",
  description: "Where to party on Halloween in Prague? Bloody Sexy Halloween - Central Europe's biggest Halloween event. 3 days of parties, shows & costume contests.",
  keywords: "where to party halloween prague, halloween prague, bloody sexy halloween, halloween events prague, best clubs prague, halloween parties prague",
};

export default function WhereToPartyPragueHalloween2022() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/blog/halloween-2024.jpg"
          alt="Featured Image"
          fill
          className="object-cover"
          priority
        />
      </div>


      <article className="prose max-w-none">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Martin Muron • Oct 11, 2022 • 1 min read</p>
        </div>

        <h1 className="text-4xl font-bold mb-6">Where should you party in Prague on Halloween 2022?</h1>

        <p className="mb-4">
          It is that scary time of the year! There are Halloween parties all over Prague. Prague being the party town that it is, every club has to take advantage right! Let's get down to it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">SO WHERE SHOULD YOU GO ON HALLOWEEN?</h2>

        <p className="mb-4">
          It should not be surprising that we would recommend <a href="https://www.bloodysexy.cz/en" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Bloody Sexy Halloween</a>. Perhaps you have even heard about it before. It is not just the biggest Halloween party in Prague but also in Central Europe.
        </p>

        <h2 className="text-2xl font-semibold mb-4">HALLOWEEN TAKES OVER PRAGUE for 3 DAYS!</h2>

        <p className="mb-4">
          This event goes on for 3 days. Yes....correct.... 3 whole days! From October 27th to October 29th, Prague's Sasazu is transformed into the scariest and most exciting event of the year.
        </p>

        <p className="mb-4">
          Here is another <strong>little tip</strong> for you. GET <strong>TICKETS FAST</strong> BEFORE THEY <strong>SELL OUT</strong>!!!! You can find them <a href="https://goout.net/en/bloody-sexy-halloweekend-2022/ezihblg/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">here</a>.
        </p>

        <p className="mb-4">
          Ok let's break down a little of what you can expect.
        </p>

        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2">Insane Live Shows - This is not an event with just some DJ spinning the mix.</li>
          <li className="mb-2">Costume Contest where you can win 2,000 euro!</li>
          <li className="mb-2">International DJs absolutely destroying the dance floor</li>
          <li className="mb-2">Dance Shows - Sexy Halloween Dancer Shows</li>
        </ol>

        <p className="mb-4">
          Alright, not going to bore you to death. Join over 7,5000+ people that attend every year. Create memories.
        </p>

        <h3 className="text-xl font-semibold mb-3">CHECK OUT THE AFTERMOVIE of LAST YEAr'S HALLOWEEN IN PRAGUE!</h3>
      </article>
    </div>
  );
}
