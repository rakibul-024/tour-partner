"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bookmark, Menu, X } from "lucide-react";
import { useItinerary } from "@/components/itinerary-provider";
import { ItineraryDrawer } from "@/components/itinerary-drawer";

export function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { savedIds } = useItinerary();
  const pathname = usePathname();

  return (
    <>
      <header className={`site-header${pathname.startsWith("/spots/") ? " detail-header" : ""}`}>
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Tour Partner home">
            <span aria-hidden="true" className="brand-mark">T</span>
            <span className="brand-wordmark">
              <span>TRAVEL, THOUGHTFULLY</span>
              <strong>TOUR PARTNER</strong>
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className={`main-nav${mobileOpen ? " nav-open" : ""}`}
          >
            <Link href="/#destinations" onClick={() => setMobileOpen(false)}>
              Discover
            </Link>
            <Link href="/#about" onClick={() => setMobileOpen(false)}>
              Our story
            </Link>
          </nav>
          <div className="header-actions">
            <button
              className="saved-trigger"
              onClick={() => setDrawerOpen(true)}
              aria-label={`Open               Itinerary, ${savedIds.length} saved`}
            >
              <Bookmark size={17} />
              <span>Saved places</span>
              {savedIds.length > 0 && (
                <span className="saved-count">{savedIds.length}</span>
              )}
            </button>
            <button
              className="mobile-menu icon-button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <ItineraryDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
