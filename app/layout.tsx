import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ItineraryProvider } from "@/components/itinerary-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tour Partner — Thoughtful journeys through Bangladesh",
    template: "%s — Tour Partner",
  },
  description:
    "A considered guide to Bangladesh's remarkable places, made for slower journeys and lasting memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ItineraryProvider>
          <SiteHeader />
          {children}
        </ItineraryProvider>
      </body>
    </html>
  );
}
