"use client";

import { Suspense, useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function GetAJetQuoteContent() {
  const searchParams = useSearchParams();
  const destination = (searchParams.get("destination") ?? "").trim();
  const isDubai = /dubai/i.test(destination);
  const isMaldives = /maldives/i.test(destination);

  const headline = useMemo(() => {
    if (isDubai) return "Private Jet Charter to Dubai";
    if (isMaldives) return "Private Jet Charter to Maldives";
    return "Get a Jet Quote";
  }, [isDubai, isMaldives]);

  const destinationValue = useMemo(() => {
    if (isDubai) return "Dubai (DXB / DWC)";
    if (isMaldives) return "Maldives (MLE)";
    return "";
  }, [isDubai, isMaldives]);

  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

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
            <Link href="/#experiences">Private Jets</Link>
            <Link href="/#how-it-works">How It Works</Link>
            <Link href="/#about">About</Link>
            <Link className="btn-glass btn-sm" href="/get-a-jet-quote">
              Get a Jet Quote
            </Link>
          </nav>
        </div>
      </header>

      <section className="pv-section pv-form" style={{ paddingTop: "4rem" }}>
        <div className="pv-container">
          {formSuccess ? (
            <div className="form-glass" style={{ textAlign: "center", padding: "3rem" }}>
              <h3 style={{ marginBottom: "1rem" }}>Request received</h3>
              <p style={{ opacity: 0.9 }}>We&apos;ll be in touch within 24 hours.</p>
              <Link className="btn-gold" href="/" style={{ display: "inline-block", marginTop: "1rem" }}>Back to home</Link>
            </div>
          ) : (
            <form
              className="form-glass"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const response = await fetch(form.action, { method: "POST", body: formData });
                const data = await response.json();
                if (data.success) {
                  setFormSuccess(true);
                } else {
                  alert("There was an error submitting your request. Please try again.");
                }
              }}
            >
              <input type="hidden" name="access_key" value="abf23d8e-c302-4ef2-873a-a62ce6e29277" />
              <input type="hidden" name="form_page" value="get-a-jet-quote" />
              <h3>{headline}</h3>
              <div className="grid">
                <input
                  key={destinationValue || "destination"}
                  className="input-glass"
                  name="destination"
                  placeholder="Destination (e.g. Dubai DXB, Maldives MLE)"
                  defaultValue={destinationValue}
                />
                <input className="input-glass" name="name" placeholder="Full name" required />
                <input className="input-glass" name="email" placeholder="Email" type="email" required />
                <input className="input-glass" name="phone" placeholder="Phone (optional)" />
                <input className="input-glass" name="preferred_dates" placeholder="Preferred dates" />
              </div>
              <textarea className="input-glass" name="message" rows={5} placeholder="Route, dates, passengers, and any preferences..." required />
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginTop: "1rem" }}>
                <input
                  type="checkbox"
                  id="quote-terms-checkbox"
                  required
                  style={{ marginTop: "0.25rem", accentColor: "#ffd700", transform: "scale(1.2)" }}
                />
                <label htmlFor="quote-terms-checkbox" style={{ color: "#fff", fontSize: "0.9rem", lineHeight: "1.4" }}>
                  I agree to the{" "}
                  <span style={{ color: "#ffd700", cursor: "pointer", textDecoration: "underline" }} onClick={() => setTermsOpen(true)}>Terms & Conditions</span>
                  {" "}and{" "}
                  <span style={{ color: "#ffd700", cursor: "pointer", textDecoration: "underline" }} onClick={() => setPrivacyOpen(true)}>Privacy Policy</span>
                </label>
              </div>
              <div className="form-foot">
                <button className="btn-gold" type="submit">Submit Request</button>
                <span className="fine">Response from a concierge within 24 hours.</span>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className="pv-footer">
        <div className="pv-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
            <div>Contact: info@paradaisvoyage.com</div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.3)", margin: "0.25rem 0" }} />
            <div style={{ cursor: "pointer" }} onClick={() => setTermsOpen(true)}>Terms & Conditions</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <div>© {new Date().getFullYear()} Paradais Voyage</div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.3)", margin: "0.25rem 0" }} />
            <div style={{ cursor: "pointer" }} onClick={() => setPrivacyOpen(true)}>Privacy Policy</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
            <div className="muted">Luxury Travel Concierge</div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.3)", margin: "0.25rem 0" }} />
            <div style={{ cursor: "pointer" }} onClick={() => setCookiesOpen(true)}>Cookies Policy</div>
          </div>
        </div>
      </footer>

      {privacyOpen && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }} onClick={() => setPrivacyOpen(false)}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", borderRadius: "20px", padding: "2rem", maxWidth: "600px", maxHeight: "80vh", overflow: "auto", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h2 style={{ margin: 0, color: "#fff", fontSize: "1.5rem" }}>PRIVACY POLICY</h2>
              <button onClick={() => setPrivacyOpen(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer", padding: "0.5rem" }}>×</button>
            </div>
            <div style={{ color: "#fff", lineHeight: "1.6" }}>
              <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem" }}>PRIVACY POLICY – Paradais Voyage</p>
              <p style={{ fontStyle: "italic", opacity: 0.85 }}>Last updated: 01/11/2025</p>
              <p>Contact: <a href="mailto:info@paradaisvoyage.com" style={{ color: "#ffd700" }}>info@paradaisvoyage.com</a></p>
              <p>For the full policy, see our <Link href="/" style={{ color: "#ffd700" }}>main site</Link>.</p>
            </div>
          </div>
        </div>
      )}

      {termsOpen && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }} onClick={() => setTermsOpen(false)}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", borderRadius: "20px", padding: "2rem", maxWidth: "600px", maxHeight: "80vh", overflow: "auto", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h2 style={{ margin: 0, color: "#fff", fontSize: "1.5rem" }}>TERMS & CONDITIONS</h2>
              <button onClick={() => setTermsOpen(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer", padding: "0.5rem" }}>×</button>
            </div>
            <div style={{ color: "#fff", lineHeight: "1.6" }}>
              <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem" }}>TERMS & CONDITIONS – Paradais Voyage</p>
              <p style={{ fontStyle: "italic", opacity: 0.85 }}>Last updated: 01/11/2025</p>
              <p>For the full terms, see our <Link href="/" style={{ color: "#ffd700" }}>main site</Link>.</p>
            </div>
          </div>
        </div>
      )}

      {cookiesOpen && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }} onClick={() => setCookiesOpen(false)}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", borderRadius: "20px", padding: "2rem", maxWidth: "600px", maxHeight: "80vh", overflow: "auto", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h2 style={{ margin: 0, color: "#fff", fontSize: "1.5rem" }}>COOKIES POLICY</h2>
              <button onClick={() => setCookiesOpen(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer", padding: "0.5rem" }}>×</button>
            </div>
            <div style={{ color: "#fff", lineHeight: "1.6" }}>
              <p>For our full Cookies Policy, see our <Link href="/" style={{ color: "#ffd700" }}>main site</Link>.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function GetAJetQuoteFallback() {
  return (
    <main className="pv-root" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="pv-container" style={{ textAlign: "center", opacity: 0.8 }}>Loading…</div>
    </main>
  );
}

export default function GetAJetQuotePage() {
  return (
    <Suspense fallback={<GetAJetQuoteFallback />}>
      <GetAJetQuoteContent />
    </Suspense>
  );
}
