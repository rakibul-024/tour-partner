import spotData from "@/data/touristSpots.json";
import type { TouristSpot } from "@/types/spot";

export const touristSpots = spotData as TouristSpot[];

export function getSpotById(id: string): TouristSpot | undefined {
  return touristSpots.find((spot) => spot.id === id);
}

export function getSpotImage(spot: TouristSpot): string {
  return spot.images[0]?.src ?? "/placeholder-landscape.svg";
}
