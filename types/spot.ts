export const categories = [
  "Beach",
  "Hill",
  "Forest",
  "Historical",
  "Wetland",
] as const;

export type SpotCategory = (typeof categories)[number];
export type TransitMode = "Bus" | "Train" | "Flight";

export interface SpotImage {
  src: string;
  alt: string;
  attribution: string;
  license: string;
  source: string;
}

export interface TouristSpot {
  id: string;
  name: string;
  district: string;
  category: SpotCategory;
  description: string;
  specialty: string;
  rating: number;
  reviews: number;
  bestSeason: string;
  budget: string;
  tags: string[];
  activities: string[];
  images: SpotImage[];
  coordinates: { lat: number; lng: number };
  transit: Record<TransitMode, string>;
  keywords: string[];
}
