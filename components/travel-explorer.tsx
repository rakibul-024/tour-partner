"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Compass, Search, SlidersHorizontal } from "lucide-react";
import { CategoryFilterBar, type CategoryFilter } from "@/components/category-filter";
import { DestinationCard } from "@/components/destination-card";
import { SiteFooter } from "@/components/site-footer";
import type { TouristSpot } from "@/types/spot";

export function TravelExplorer({ spots }: { spots: TouristSpot[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const counts = useMemo(() => {
    const result: Record<CategoryFilter, number> = {
      All: spots.length,
      Beach: 0,
      Hill: 0,
      Forest: 0,
      Historical: 0,
      Wetland: 0,
    };
    spots.forEach((spot) => {
      result[spot.category] += 1;
    });
    return result;
  }, [spots]);

  const filteredSpots = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return spots.filter((spot) => {
      const matchesCategory =
        activeCategory === "All" || spot.category === activeCategory;
      const searchableText = [
        spot.name,
        spot.district,
        spot.category,
        spot.specialty,
        ...spot.tags,
        ...spot.keywords,
      ]
        .join(" ")
        .toLocaleLowerCase();
      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [activeCategory, query, spots]);
  const heroSpot = spots.find((spot) => spot.id === "sundarbans") ?? spots[0];

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          alt={heroSpot.images[0].alt}
          className="hero-image"
          fill
          priority
          sizes="100vw"
          src={heroSpot.images[0].src}
        />
        <div className="hero-wash" />
        <div className="hero-content page-shell">
          <span className="hero-kicker">
            <span className="kicker-line" /> A MORE CONSIDERED WAY TO EXPLORE
          </span>
          <h1 id="hero-title">
            Bangladesh,
            <br />
            <em>in its own time.</em>
          </h1>
          <p>
            Beyond the expected, there are places that ask you to slow down.
            This is your invitation to find them.
          </p>
          <a className="hero-scroll" href="#destinations">
            Explore the collection <ArrowDown size={15} />
          </a>
        </div>
        <div className="hero-side-note">
          <span className="hero-side-number">01 — 08</span>
          <span className="hero-side-rule" />
          <span>THE SUNDARBANS</span>
          <span className="hero-side-place">Where the river meets the forest</span>
        </div>
        <div className="hero-bottomline page-shell">
          <span>AN INDEPENDENT FIELD GUIDE</span>
          <a href={heroSpot.images[0].source} rel="noreferrer" target="_blank">
            Photograph by {heroSpot.images[0].attribution} · Wikimedia Commons
          </a>
        </div>
      </section>

      <section className="discovery-section page-shell" id="destinations">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE COUNTRY, BY CHAPTER</span>
            <h2>For the <em>curious.</em></h2>
          </div>
          <p className="section-intro">
            A considered collection of coastlines, green highlands, quiet
            waterways and living history.
          </p>
        </div>

        <div className="collection-rule">
          <span>THE DESTINATION COLLECTION</span>
          <span>{String(spots.length).padStart(2, "0")} PLACES, ONE REMARKABLE COUNTRY</span>
        </div>
        <div className="explorer-controls">
          <CategoryFilterBar
            active={activeCategory}
            counts={counts}
            onChange={setActiveCategory}
          />
          <label className="search-field">
            <Search aria-hidden="true" size={17} />
            <span className="sr-only">Search places, districts, or interests</span>
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Where would you like to go?"
              type="search"
              value={query}
            />
            <SlidersHorizontal aria-hidden="true" className="search-filter-icon" size={16} />
          </label>
        </div>

        <div aria-live="polite" className="results-meta">
          <span>
            Showing <strong>{filteredSpots.length}</strong>{" "}
            {filteredSpots.length === 1 ? "place" : "places"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </span>
          {query && (
            <button
              className="clear-search"
              onClick={() => setQuery("")}
              type="button"
            >
              Clear search
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {filteredSpots.length > 0 ? (
            <motion.div
              className="destination-grid"
              key={`${activeCategory}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filteredSpots.map((spot, index) => (
                <DestinationCard index={index} key={spot.id} spot={spot} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="empty-state"
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="empty-icon"><Search size={22} /></span>
              <h3>We haven&apos;t found that place.</h3>
              <p>Try another name, region or experience.</p>
              <button
                className="button button-dark"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
                type="button"
              >
                Return to the collection
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="journal-band" id="about">
        <div className="journal-stamp">
          <Compass size={19} />
          <span>FIELD<br />NOTES</span>
        </div>
        <div className="journal-copy">
          <span className="eyebrow">A NOTE ON TRAVELLING WELL</span>
          <p>Go slowly. Stay curious.<br /><em>Let the place set the pace.</em></p>
        </div>
        <a href="#destinations" className="journal-link">
          Find your next chapter <ArrowRight size={17} />
        </a>
      </section>
      <SiteFooter />
    </>
  );
}
