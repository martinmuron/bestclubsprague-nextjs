import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Popular Nightclubs in Spain | Ibiza, Barcelona & Madrid Guide",
  description: "Top 5 nightclubs in Spain: Pacha Ibiza, Ushuaia Ibiza, Opium Barcelona, Kapital Madrid & Olivia Valere Marbella. Complete Spain nightlife guide.",
  keywords: "spain nightclubs, ibiza clubs, barcelona nightlife, madrid clubs, pacha ibiza, ushuaia ibiza, opium barcelona, kapital madrid, best clubs spain",
};

export default function FeaturedSpainNightclubs() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/blog/blog-4.jpg"
          alt="Featured Image"
          fill
          className="object-cover"
          priority
        />
      </div>


      <article className="prose max-w-none">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Martin Muron • Mar 2, 2023 • 3 min read</p>
        </div>

        <h1 className="text-4xl font-bold mb-6">Featured: Spain - 5 Popular Nightclubs in Spain</h1>

        <p className="mb-4">
          Spain is famous for its vibrant nightlife, with numerous nightclubs catering to different music tastes and party styles. Whether you are looking for an intimate setting or a large-scale clubbing experience, Spain has it all. Here are 5 of the most popular nightclubs in Spain that you shouldn't miss.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Opium Barcelona</h2>
        <p className="mb-4">
          Opium Barcelona is one of the most popular nightclubs in Barcelona, offering a luxurious clubbing experience. The club is known for its stunning views of the Mediterranean Sea, world-class DJs, and high-energy music. With a vast dance floor, Opium Barcelona attracts a cosmopolitan crowd, and it's an excellent place to experience the glamour and excitement of Barcelona nightlife. For those looking for a more exclusive experience, the club offers VIP tables with bottle service, perfect for celebrating a special occasion or simply enjoying a night out with friends. Whether you're a local or a tourist, Opium Barcelona is a must-visit destination for anyone looking for a memorable night out in Barcelona.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Pacha Ibiza</h2>
        <p className="mb-4">
          Pacha Ibiza is one of the most iconic nightclubs in the world and is located on the famous island of Ibiza. The club is known for its electrifying atmosphere, with top-notch DJs, stunning light shows, and a massive dance floor. Pacha Ibiza attracts an international crowd and is a popular destination for party-goers who want to experience the island's legendary nightlife. The music ranges from techno to house, and the club has multiple rooms, each with its own unique vibe.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Kapital Madrid</h2>
        <p className="mb-4">
          Kapital Madrid is one of the most renowned nightclubs in the Spanish capital, offering a unique and unforgettable experience for partygoers. The club is located in the heart of Madrid and features seven floors, each with its own music genre, ranging from reggaeton to techno. Kapital Madrid has a spacious dance floor that can accommodate a large crowd, several bars serving a variety of drinks, and VIP areas that provide a more exclusive experience for guests. The VIP tables are situated in private areas of the club and come with bottle service, providing a more personalized and luxurious party experience. With its exciting atmosphere, top DJs, and various music genres, Kapital Madrid is undoubtedly one of the best nightclubs in Spain.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Olivia Valere Marbella</h2>
        <p className="mb-4">
          Olivia Valere is a luxurious nightclub located in the upscale resort town of Marbella. The club features a stunning outdoor terrace with a pool and a bar, making it the perfect spot to party under the stars. Inside, the club boasts multiple dance floors and VIP areas, with DJs playing a range of music genres, from R&B to electronic.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Ushuaia Ibiza</h2>
        <p className="mb-4">
          Ushuaia Ibiza is an iconic outdoor nightclub located on the party island of Ibiza. With its stunning beachfront location, lively pool parties, and world-renowned DJs, Ushuaia Ibiza has earned a reputation as one of the best nightclubs in the world. The club offers a range of VIP packages that provide guests with the ultimate party experience, including the best VIP tables in Ibiza. The VIP tables at Ushuaia Ibiza are located in prime locations throughout the club, offering an exclusive area for guests to enjoy the party with bottle service, premium views of the stage and dance floor, and personalized attention from the staff. Ushuaia Ibiza's pool parties are particularly popular, where guests can dance to the latest electronic and dance music, cool off in the pool, and enjoy a refreshing cocktail or two. With its breathtaking location, electrifying atmosphere, and best VIP tables in Ibiza, Ushuaia Ibiza is a must-visit for partygoers looking for an unforgettable night out on the island.
        </p>

        <p className="mb-4">
          In conclusion, Spain is home to some of the most iconic and exciting nightclubs in the world, each with its own unique vibe and atmosphere. Whether you are looking for glamorous parties or underground music scenes, Spain has something for everyone. So, what are you waiting for? Head out to one of these popular nightclubs and dance the night away!
        </p>
      </article>
    </div>
  );
}
