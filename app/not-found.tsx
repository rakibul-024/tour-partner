import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found page-shell">
      <span className="not-found-icon"><Compass size={28} /></span>
      <span className="eyebrow">A WRONG TURN, PERHAPS</span>
      <h1>This place isn&apos;t on our map.</h1>
      <p>Let&apos;s find you somewhere lovely instead.</p>
      <Link className="button button-dark" href="/"><ArrowLeft size={16} /> Back to destinations</Link>
    </main>
  );
}
