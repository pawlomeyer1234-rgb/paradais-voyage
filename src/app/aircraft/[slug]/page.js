import { notFound } from "next/navigation";
import { AIRCRAFT_CATEGORIES, AIRCRAFT_SLUGS } from "../aircraftData";
import AircraftPageClient from "./AircraftPageClient";

export function generateStaticParams() {
  return AIRCRAFT_SLUGS.map((slug) => ({ slug }));
}

export default function AircraftSlugPage({ params }) {
  const { slug } = params;
  const data = AIRCRAFT_CATEGORIES[slug] ?? null;
  if (!data) notFound();
  return <AircraftPageClient data={data} />;
}
