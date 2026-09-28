import Link from "next/link";
import { ArrowUpRight, Compass, MapPin } from "lucide-react";
import { touristSpots } from "@/lib/spots";
import type { TouristSpot } from "@/types/spot";

const footerDestinations = ["cox-s-bazar", "sajek-valley", "sundarbans", "sonargaon"];

export function SiteFooter({ spot }: { spot?: TouristSpot }) {
  const featuredSpots = footerDestinations
    .map((id) => touristSpots.find((destination) => destination.id === id))
    .filter((destination): destination is TouristSpot => destination !== undefined);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <section className="footer-about" aria-labelledby="footer-brand">
          <Link className="footer-brand" href="/" id="footer-brand">
            TOUR PARTNER
          </Link>
          <p>
            A thoughtful guide to Bangladesh, made for curious travellers and
            journeys worth remembering.
          </p>
          <span className="footer-location"><MapPin size={13} /> Bangladesh, beautifully discovered</span>
        </section>

        <nav className="footer-nav" aria-label="Featured destinations">
          <h2>Find your way</h2>
          {featuredSpots.map((destination) => (
            <Link href={`/spots/${destination.id}`} key={destination.id}>
              {destination.name}
            </Link>
          ))}
          <Link className="footer-all-link" href="/#destinations">
            View all destinations <ArrowUpRight size={13} />
          </Link>
        </nav>

        <section className="footer-note">
          <span className="footer-note-icon"><Compass size={17} /></span>
          <h2>Travel a little slower.</h2>
          <p>
            From hill country to open water, find practical details and
            inspiration for your next Bangladesh escape.
          </p>
          <Link href="/#destinations">Start exploring <ArrowUpRight size={13} /></Link>
        </section>
      </div>

      {spot && (
        <div className="footer-photo-credit">
          Photograph: <a href={spot.images[0].source} rel="noreferrer" target="_blank">
            {spot.images[0].attribution}
          </a>
          {" · "}{spot.images[0].license}
        </div>
      )}

      <div className="footer-bottom">
        <span>© 2026 Rakibul Hasan Rifat. All rights reserved.</span>
        <span>Made with care for the curious.</span>
        <a href="https://commons.wikimedia.org/" rel="noreferrer" target="_blank">
          Images credited to their photographers
        </a>
      </div>
    </footer>
  );
}
