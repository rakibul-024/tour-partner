"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Bookmark, MapPin, Star } from "lucide-react";
import { useItinerary } from "@/components/itinerary-provider";
import type { TouristSpot } from "@/types/spot";

export function DestinationCard({
  spot,
  index = 0,
}: {
  spot: TouristSpot;
  index?: number;
}) {
  const { isSaved, toggleSaved } = useItinerary();
  const saved = isSaved(spot.id);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="destination-card"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.06, 0.36),
      }}
      layout
    >
      <div className="card-image-wrap">
        <Link href={`/spots/${spot.id}`} tabIndex={-1} aria-hidden="true">
          <Image
            alt={spot.images[0].alt}
            className="card-image"
            src={spot.images[0].src}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        </Link>
        <span className="card-category">{spot.category}</span>
        <span aria-hidden="true" className="card-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rating-pill">
          <Star size={12} fill="currentColor" /> {spot.rating.toFixed(1)}
        </span>
        <button
          aria-label={
            saved
              ? `Remove ${spot.name} from itinerary`
              : `Save ${spot.name} to itinerary`
          }
          aria-pressed={saved}
          className={`save-button${saved ? " is-saved" : ""}`}
          onClick={() => toggleSaved(spot.id)}
        >
          <Bookmark size={17} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="card-content">
        <div className="card-title-line">
          <div>
            <h3>
              <Link href={`/spots/${spot.id}`}>{spot.name}</Link>
            </h3>
            <p className="card-location">
                <MapPin size={13} /> {spot.district}, Bangladesh
            </p>
          </div>
          <Link
            aria-label={`Explore ${spot.name}`}
            className="card-arrow"
            href={`/spots/${spot.id}`}
          >
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <p className="card-specialty">{spot.specialty}</p>
        <a
          className="photo-credit"
          href={spot.images[0].source}
          rel="noreferrer"
          target="_blank"
        >
          Photo by {spot.images[0].attribution} · {spot.images[0].license}
        </a>
        <div aria-label="Highlights" className="card-tags">
          {spot.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link className="card-cta" href={`/spots/${spot.id}`}>
          Discover this place <ArrowUpRight size={15} />
        </Link>
      </div>
    </motion.article>
  );
}
