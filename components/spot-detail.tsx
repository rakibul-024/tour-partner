"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Binoculars,
  Bookmark,
  BusFront,
  CalendarDays,
  Camera,
  Check,
  Compass,
  Footprints,
  MapPin,
  Plane,
  Sailboat,
  Star,
  TrainFront,
  Wallet,
} from "lucide-react";
import { useItinerary } from "@/components/itinerary-provider";
import type { TouristSpot, TransitMode } from "@/types/spot";

const transitOptions: {
  mode: TransitMode;
  icon: typeof BusFront;
  title: string;
}[] = [
  { mode: "Bus", icon: BusFront, title: "By bus" },
  { mode: "Train", icon: TrainFront, title: "By train" },
  { mode: "Flight", icon: Plane, title: "By air" },
];

const activityIcons = [Footprints, Camera, Binoculars, Sailboat];

export function SpotDetail({ spot }: { spot: TouristSpot }) {
  const [activeTransit, setActiveTransit] = useState<TransitMode>("Bus");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const prefersReducedMotion = useReducedMotion();
  const { isSaved, toggleSaved } = useItinerary();
  const saved = isSaved(spot.id);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${spot.coordinates.lat},${spot.coordinates.lng}`;

  return (
    <motion.main
      animate={{ opacity: 1, y: 0 }}
      className="detail-main page-shell"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
    >
      <div className="detail-breadcrumb">
        <Link href="/"><ArrowLeft size={15} /> All destinations</Link>
        <span>/</span>
        <span>{spot.name}</span>
      </div>

      <section className="detail-gallery" aria-label={`${spot.name} photo gallery`}>
        <div className="gallery-main">
          <Image src={spot.images[0].src} alt={spot.images[0].alt} fill priority sizes="(max-width: 760px) 100vw, 68vw" />
          <span className="gallery-label"><span /> {spot.category.toUpperCase()} · BANGLADESH</span>
          <a className="gallery-credit" href={spot.images[0].source} rel="noreferrer" target="_blank">
            Photograph by {spot.images[0].attribution} · {spot.images[0].license}
          </a>
        </div>
        <div className="gallery-side">
          <span className="gallery-side-index">TOUR PARTNER</span>
          <span className="gallery-side-rule" />
          <h2>{spot.specialty}</h2>
          <p>A place to take the longer way around, look closer, and leave a little room for the unexpected.</p>
          <span className="gallery-side-place"><MapPin size={14} /> {spot.district}, Bangladesh</span>
        </div>
      </section>

      <div className="detail-title-row">
        <div>
          <span className="eyebrow">{spot.category.toUpperCase()} · TOUR PARTNER</span>
          <h1>{spot.name}</h1>
          <p className="detail-location"><MapPin size={16} /> {spot.district}, Bangladesh</p>
        </div>
        <div className="detail-actions">
          <span className="detail-rating"><Star size={16} fill="currentColor" /> {spot.rating.toFixed(1)} <small>({spot.reviews.toLocaleString()} reviews)</small></span>
          <button
            className={`button save-detail${saved ? " saved" : ""}`}
            onClick={() => toggleSaved(spot.id)}
            aria-pressed={saved}
          >
            {saved ? <Check size={16} /> : <Bookmark size={16} />}
            {saved ? "Saved to itinerary" : "Save to itinerary"}
          </button>
        </div>
      </div>

      <div className="detail-layout">
        <div className="detail-primary">
          <section className="overview-grid" aria-label="Destination overview">
            <div className="overview-item">
              <span className="overview-icon"><CalendarDays size={17} /></span>
              <span className="overview-label">BEST TIME TO GO</span>
              <strong>{spot.bestSeason}</strong>
            </div>
            <div className="overview-item">
              <span className="overview-icon"><MapPin size={17} /></span>
              <span className="overview-label">LOCATION</span>
              <strong>{spot.district}</strong>
            </div>
            <div className="overview-item">
              <span className="overview-icon"><Compass size={17} /></span>
              <span className="overview-label">EXPERIENCE</span>
              <strong>{spot.category}</strong>
            </div>
            <div className="overview-item">
              <span className="overview-icon"><Wallet size={17} /></span>
              <span className="overview-label">DAILY BUDGET</span>
              <strong>{spot.budget}</strong>
            </div>
          </section>

          <section className="detail-section intro-copy">
            <span className="eyebrow">A LITTLE ABOUT THE PLACE</span>
            <p>{spot.description}</p>
          </section>

          <section className="specialty-callout">
            <div className="specialty-mark"><Compass size={21} /></div>
            <div>
              <span className="eyebrow">THE THING YOU&apos;LL REMEMBER</span>
              <h2>{spot.specialty}</h2>
            </div>
            <span aria-hidden="true" className="callout-ornament">✳</span>
          </section>

          <section className="detail-section">
            <div className="detail-section-heading">
              <div>
                <span className="eyebrow">MAKE A DAY OF IT</span>
                <h2>Things to do</h2>
              </div>
              <span className="activity-count">{spot.activities.length} ideas</span>
            </div>
            <div className="activity-grid">
              {spot.activities.map((activity, index) => {
                const Icon = activityIcons[index % activityIcons.length];
                return (
                  <button
                    aria-pressed={selectedActivities.includes(activity)}
                    className={`activity-item${selectedActivities.includes(activity) ? " selected" : ""}`}
                    key={activity}
                    onClick={() =>
                      setSelectedActivities((current) =>
                        current.includes(activity)
                          ? current.filter((item) => item !== activity)
                          : [...current, activity],
                      )
                    }
                    type="button"
                  >
                    <span className="activity-icon"><Icon size={18} /></span>
                    <span>{activity}</span>
                    {selectedActivities.includes(activity) ? (
                      <Check aria-hidden="true" className="activity-arrow" size={15} />
                    ) : (
                      <ArrowUpRight aria-hidden="true" className="activity-arrow" size={15} />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="transit-card">
            <div className="transit-heading">
              <span className="eyebrow">GETTING THERE</span>
              <h2>Every journey has a beginning.</h2>
            </div>
            <div className="transit-tabs" role="tablist" aria-label="Travel directions">
              {transitOptions.map(({ mode, icon: Icon, title }) => (
                <button
                  aria-selected={activeTransit === mode}
                  className={`transit-tab${activeTransit === mode ? " active" : ""}`}
                  id={`tab-${mode}`}
                  key={mode}
                  onClick={() => setActiveTransit(mode)}
                  role="tab"
                  type="button"
                >
                  <Icon size={16} /> {title}
                </button>
              ))}
            </div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="transit-copy"
              key={activeTransit}
              role="tabpanel"
              aria-labelledby={`tab-${activeTransit}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 5 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            >
              <p>{spot.transit[activeTransit]}</p>
            </motion.div>
          </section>
        </div>

        <aside className="detail-aside">
          <div className="map-card">
            <span className="map-overline"><MapPin size={14} /> FIND YOUR WAY</span>
            <div className="map-art" aria-hidden="true">
              <span className="map-contour contour-one" />
              <span className="map-contour contour-two" />
              <span className="map-contour contour-three" />
              <span className="map-pin"><MapPin size={21} fill="currentColor" /></span>
              <span className="map-place">{spot.district}</span>
              <span className="map-country">BANGLADESH</span>
            </div>
            <div className="map-card-footer">
              <div>
                <span className="eyebrow">COORDINATES</span>
                <p>{spot.coordinates.lat.toFixed(4)}° N, {spot.coordinates.lng.toFixed(4)}° E</p>
              </div>
              <a
                aria-label={`Open ${spot.name} in Google Maps`}
                className="map-link"
                href={mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                <ArrowUpRight size={17} />
              </a>
            </div>
            <a className="button button-dark map-button" href={mapUrl} rel="noreferrer" target="_blank">
              Open in Google Maps <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="aside-note">
            <span className="note-icon"><Compass size={17} /></span>
            <p>Travel gently. Leave every place a little better than you found it.</p>
          </div>
        </aside>
      </div>
    </motion.main>
  );
}
