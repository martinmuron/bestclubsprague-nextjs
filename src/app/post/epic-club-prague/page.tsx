import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epic Club Prague Review | Best EDM Club Prague 2025",
  description: "Epic Club Prague: #1 L-Acoustics sound system, 100m² LED screens & international DJs. Complete review of Prague's most modern electronic music club.",
  keywords: "epic club prague, epic prague review, best edm club prague, electronic music prague, best clubs prague 2025, house music prague, epic nightclub",
};

export default function EpicClubPrague() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/clubs/epic-prague-1.jpg"
          alt="Epic Club Prague"
          fill
          className="object-cover"
          priority
        />
      </div>

      <article className="prose max-w-none">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Martin Muron • Oct 30, 2023 • 1 min read</p>
        </div>

        <h1 className="text-4xl font-bold mb-6">Club Review: Epic Club Prague</h1>

        <h2 className="text-2xl font-semibold mb-4">A Long-Standing Gem in Prague's Nightlife</h2>

        <p className="mb-4">
          Epic Prague has maintained a coveted spot on our list of the best clubs in Prague for numerous years, and the reasons are quite evident. Its modernistic approach to nightlife is unparalleled, exuding an ambiance that's both thrilling and contemporary.
        </p>

        <h3 className="text-xl font-semibold mb-3">A Modern Marvel - That is Epic Prague</h3>

        <p className="mb-4">
          The club is a modern-day marvel with over 100m² of LED screens that create a surreal visual spectacle, enhancing the overall clubbing experience. The pièce de résistance is undoubtedly the sound system - acclaimed as the #1 sound system in the world. This is not a feat limited to Prague, but a global accolade that sets Epic apart in the international clubbing scene.
        </p>

        <h3 className="text-xl font-semibold mb-3">Unyielding Event Schedule</h3>

        <p className="mb-4">
          Operating from Wednesday to Saturday, Epic Prague has a relentless event schedule that keeps the city's nightlife upbeat and vibrant. Every evening brings forth a new realm of excitement, making each visit a unique experience.
        </p>

        <h3 className="text-xl font-semibold mb-3">Immerse in the Epic Experience</h3>

        <p className="mb-4">
          For those on a quest for the quintessential party in Prague, Epic is the destination. The club's ethos is well encapsulated in their engaging online presence; a glimpse into what awaits can be seen on their <a href="https://www.instagram.com/epic_prague/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a> and <a href="https://www.facebook.com/epicprague/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a> pages. And there's more! Dive into the upcoming events and plan your nights by checking out their program <a href="https://www.epicprague.com/program" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">here</a>.
        </p>

        <p className="mb-4">
          The video below encapsulates the essence of what makes Epic a must-visit when in Prague. The beats, the lights, and the crowd - it's a sensory feast that beckons.
        </p>
      </article>
    </div>
  );
}
