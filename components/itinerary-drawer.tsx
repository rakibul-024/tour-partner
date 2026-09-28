"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Bookmark, MapPin, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { touristSpots } from "@/lib/spots";
import { useItinerary } from "@/components/itinerary-provider";

export function ItineraryDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { savedIds, toggleSaved } = useItinerary();
  const savedSpots = touristSpots.filter((spot) => savedIds.includes(spot.id));
  const prefersReducedMotion = useReducedMotion();
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable.item(0);
      const last = focusable.item(focusable.length - 1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close itinerary"
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            ref={drawerRef}
            aria-labelledby="itinerary-title"
            aria-modal="true"
            className="itinerary-drawer"
            initial={prefersReducedMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { type: "spring", damping: 30, stiffness: 280 }
            }
            role="dialog"
          >
            <div className="drawer-heading">
              <div>
                <span className="eyebrow">YOUR PERSONAL COLLECTION</span>
                <h2 id="itinerary-title">Saved places</h2>
              </div>
              <button
                ref={closeButtonRef}
                aria-label="Close saved places"
                className="icon-button"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            </div>
            {savedSpots.length ? (
              <div className="drawer-list">
                {savedSpots.map((spot) => (
                  <article className="saved-spot" key={spot.id}>
                    <Link
                      className="saved-image"
                      href={`/spots/${spot.id}`}
                      onClick={onClose}
                    >
                      <Image
                        src={spot.images[0].src}
                        alt=""
                        fill
                        sizes="88px"
                      />
                    </Link>
                    <div className="saved-copy">
                      <span className="category-label">{spot.category}</span>
                      <Link href={`/spots/${spot.id}`} onClick={onClose}>
                        <h3>{spot.name}</h3>
                      </Link>
                      <span className="saved-location">
                        <MapPin size={13} /> {spot.district}
                      </span>
                    </div>
                    <button
                      aria-label={`Remove ${spot.name} from itinerary`}
                      className="icon-button remove-saved"
                      onClick={() => toggleSaved(spot.id)}
                    >
                      <X size={16} />
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="drawer-empty">
                <span className="empty-icon">
                  <Bookmark size={22} />
                </span>
                <h3>Your next adventure starts here</h3>
                <p>
                  Save the places that catch your eye and they&apos;ll be waiting
                  here when you&apos;re ready.
                </p>
                <button className="text-link" onClick={onClose}>
                  Explore destinations <ArrowUpRight size={16} />
                </button>
              </div>
            )}
            <div className="drawer-footer">
              <span>{savedSpots.length} places saved</span>
              <span>Stored on this device</span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
