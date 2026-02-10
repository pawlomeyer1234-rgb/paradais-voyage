"use client";

import Link from "next/link";
import Image from "next/image";

export default function AircraftPageClient({ data }) {
  if (!data) return null;
  const { title, positioning, image, specs, useCases, exampleRoutes, slug } = data;
  const quoteUrl = `/get-a-jet-quote?aircraft=${slug}`;

  return (
    <main className="pv-root">
      <header className="pv-nav">
        <div className="pv-container nav-grid">
          <div className="brand">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
              <span className="brand-mark" aria-hidden="true" />
              <div>
                <span className="brand-text">Paradais Voyage</span>
                <div className="brand-tagline">Luxury Travel Concierge</div>
              </div>
            </Link>
          </div>
          <nav className="nav-items">
            <Link href="/#what-we-do">What We Do</Link>
            <Link href="/#aircraft-categories">Aircraft</Link>
            <Link href="/#about">About</Link>
            <Link className="btn-glass btn-sm" href="/get-a-jet-quote">
              Get a Private Jet Quote
            </Link>
          </nav>
        </div>
      </header>

      <section className="pv-section" style={{ paddingTop: "4rem" }}>
        <div className="pv-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="glass-card" style={{ padding: "2rem", overflow: "hidden" }}>
            <div style={{ marginBottom: "1.5rem", borderRadius: "18px", overflow: "hidden", aspectRatio: "16/9", position: "relative" }}>
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 style={{ margin: "0 0 0.75rem", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>{title}</h1>
            <p style={{ margin: "0 0 1.5rem", opacity: 0.95, lineHeight: 1.6, fontSize: "1.1rem" }}>{positioning}</p>

            <h2 style={{ margin: "0 0 0.75rem", fontSize: "1.25rem", fontWeight: 600 }}>Key specifications</h2>
            <ul style={{ margin: "0 0 1.5rem", paddingLeft: "1.25rem", lineHeight: 1.7 }}>
              <li><strong>Typical range:</strong> {specs.range}</li>
              <li><strong>Passenger capacity:</strong> {specs.capacity}</li>
              <li><strong>Cabin comfort:</strong> {specs.cabin}</li>
              <li><strong>Typical routes:</strong> {specs.routes}</li>
            </ul>

            <h2 style={{ margin: "0 0 0.75rem", fontSize: "1.25rem", fontWeight: 600 }}>Use cases</h2>
            <ul style={{ margin: "0 0 1.5rem", paddingLeft: "1.25rem", lineHeight: 1.7 }}>
              {useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 style={{ margin: "0 0 0.75rem", fontSize: "1.25rem", fontWeight: 600 }}>Example routes</h2>
            <ul style={{ margin: "0 0 1.5rem", paddingLeft: "1.25rem", lineHeight: 1.7 }}>
              {exampleRoutes.map((route, i) => (
                <li key={i}>{route}</li>
              ))}
            </ul>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              <Link className="btn-gold" href={quoteUrl} style={{ display: "inline-block" }}>
                Request a Quote for This Aircraft
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="pv-footer">
        <div className="pv-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
            <div>Contact: info@paradaisvoyage.com</div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.3)", margin: "0.25rem 0" }} />
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Terms & Conditions</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <div>© {new Date().getFullYear()} Paradais Voyage</div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.3)", margin: "0.25rem 0" }} />
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
            <div className="muted">Luxury Travel Concierge</div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.3)", margin: "0.25rem 0" }} />
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Cookies Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
