import { Suspense } from "react";
import GetAJetQuoteClient from "./GetAJetQuoteClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
      <GetAJetQuoteClient />
    </Suspense>
  );
}
