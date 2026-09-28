import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SpotDetail } from "@/components/spot-detail";
import { getSpotById, touristSpots } from "@/lib/spots";

export function generateStaticParams() {
  return touristSpots.map((spot) => ({ id: spot.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const spot = getSpotById(id);
  if (!spot) return { title: "Place not found" };
  return {
    title: spot.name,
    description: spot.description,
    openGraph: {
      title: `${spot.name} — Tour Partner`,
      description: spot.description,
    },
  };
}

export default async function SpotPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const spot = getSpotById(id);
  if (!spot) notFound();

  return (
    <>
      <SpotDetail spot={spot} />
      <SiteFooter spot={spot} />
    </>
  );
}
