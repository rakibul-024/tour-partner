import { TravelExplorer } from "@/components/travel-explorer";
import { touristSpots } from "@/lib/spots";

export default function HomePage() {
  return (
    <main>
      <TravelExplorer spots={touristSpots} />
    </main>
  );
}
