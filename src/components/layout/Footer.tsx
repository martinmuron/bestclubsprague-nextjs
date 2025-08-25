import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    clubs: [
      { name: "M1 Lounge", href: "/clubs/m1-lounge" },
      { name: "Epic Prague", href: "/clubs/epic-prague" },
      { name: "Moon Club", href: "/clubs/moon-club" },
      { name: "80s Club", href: "/clubs/80s-club" },
      { name: "FU Club Prague", href: "/clubs/fu-club-prague" },
    ],
    categories: [
      { name: "Nightclubs", href: "/clubs?category=nightclub" },
      { name: "Cocktail Bars", href: "/clubs?category=cocktail-bar" },
      { name: "Strip Clubs", href: "/clubs?category=strip-club" },
      { name: "Shisha Lounges", href: "/clubs?category=shisha-lounge" },
    ],
    pages: [
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ]
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Best Clubs Prague</h3>
              <p className="text-sm text-muted-foreground">
                Your ultimate guide to Prague&apos;s nightlife scene. Discover the best clubs, bars, and entertainment venues in the city.
              </p>
            </div>
          </div>

          {/* Popular Clubs */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Popular Clubs</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.clubs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Pages</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} Best Clubs Prague. All rights reserved.
          </div>
          <div className="text-center text-sm text-muted-foreground md:text-right">
            Discover Prague&apos;s best nightlife destinations
          </div>
        </div>
      </div>
    </footer>
  );
}