"use client";
import { useState } from "react";
import Link from "next/link";

export default function Page(){
  const [open, setOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <main className="pv-root">
      <header className="pv-nav">
        <div className="pv-container nav-grid">
          <div className="brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="brand-mark" aria-hidden="true" />
              <div>
                <span className="brand-text">Paradais Voyage</span>
                <div className="brand-tagline">Luxury Travel Concierge</div>
              </div>
            </div>
          </div>
          <nav className="nav-items">
            <a href="#experiences">Luxury Services</a>
            <a href="#destinations">Destinations</a>
            <a href="#about">About</a>
            <a className="btn-glass btn-sm" href="#form">
              Plan Your Sojourn
            </a>
          </nav>
        </div>
      </header>

      <section className="pv-hero">
        <div className="pv-container hero-grid">
          <div className="hero-copy glass-card">
            <h1>Stay. Travel. Arrive in Style.</h1>
            <p>At Paradais Voyage we curate only two essentials of exceptional travel: exceptional stays and seamless private transport. From five-star suites and overwater villas to private jets and chauffeured limousines - we handle accommodation and transport with surgical precision. Please note: we do not provide excursions or activity bookings; our promise is perfect arrival, perfect stay, every time.</p>
            <div className="cta-row">
              <a className="btn-gold" href="#form">Start Your Journey</a>
              <a className="btn-glass" href="#experiences">Explore Luxury Services</a>
            </div>
            <ul className="trust-badges">
              <li className="badge-glass">Bespoke Itineraries</li>
              <li className="badge-glass">24/7 Concierge</li>
              <li className="badge-glass">Discreet VIP Access</li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="hero-media glass-panel" />
          </div>
        </div>
      </section>

      <section id="experiences" className="pv-section">
        <div className="pv-container cards" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          {[
            { title: "Luxury Hotels", copy: "Luxury reimagined: curated hotels offering silence, beauty, and perfection.", images: ["/images/hero/hotel 1.jpg", "/images/hero/hotel 2.jpg"] },
            { title: "Private Transport & Flights", copy: "Personal drivers, luxury vehicles, zero compromises.", images: ["/images/hero/Car 1.webp", "/images/hero/jet.webp"] }
          ].map((c, i) => (
            <article key={i} className="feature-card glass-card" style={{ width: '400px', flex: '0 0 auto' }}>
              {c.images && (
                <div className="experience-images">
                  {c.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="experience-image" style={{ backgroundImage: `url('${img}')` }}>
                    </div>
                  ))}
                </div>
              )}
              <h3>{c.title}</h3>
              <p>{c.copy}</p>
              <button className="btn-link">Explore Perfection →</button>
            </article>
          ))}
        </div>
      </section>

      <section id="destinations" className="pv-section pv-strip">
        <div className="pv-container strip-row">
          {[
            { name: "Maldives", image: "/images/hero/Maledives.jpg", link: "/maldives", clickable: true },
            { name: "Dubai", image: "/images/hero/Dubai.jpg", link: "/dubai", clickable: true }
          ].map((d, i) => (
            <Link key={i} href={d.link} className="chip glass-chip destination-chip" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="destination-image" style={{ backgroundImage: `url(${d.image})` }}></div>
              <span className="destination-name">
                {d.name}
                {d.clickable && <span style={{ marginLeft: '8px', fontSize: '0.8em', opacity: 0.8 }}>→</span>}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="pv-section">
        <div className="pv-container about-grid">
          <div className="about-card glass-card">
            <h2>About Paradais Voyage</h2>
            <p>Paradais Voyage is a luxury business and travel concierge that connects clients with trusted global suppliers. We ensure smooth cooperation, reliable services, and full transparency. Our mission is to make every experience effortless, safe, and unique - whether it's travel, business, or lifestyle.</p>
            <a className="btn-gold" href="#form">Request a Proposal</a>
          </div>
          <div className="about-side glass-panel" />
        </div>
      </section>

      <section id="form" className="pv-section pv-form">
        <div className="pv-container">
          <form className="form-glass" onSubmit={(e) => e.preventDefault()}>
            <h3>Let's Plan Your Next Sojourn</h3>
            <div className="grid">
              <input className="input-glass" placeholder="Full name" required />
              <input className="input-glass" placeholder="Email" type="email" required />
              <input className="input-glass" placeholder="Phone (optional)" />
              <input className="input-glass" placeholder="Preferred dates" />
            </div>
            <textarea className="input-glass" rows={5} placeholder="Tell us the vibe, not just the place..." />
            <div className="form-foot">
              <button className="btn-gold" type="submit">Submit Request</button>
              <span className="fine">Response from a concierge within 24 hours.</span>
            </div>
          </form>
        </div>
      </section>

      <footer className="pv-footer">
        <div className="pv-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
            <div>Contact: info@paradaisvoyage.com</div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '0.25rem 0' }}></div>
            <div>Terms & Conditions</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div>© {new Date().getFullYear()} Paradais Voyage</div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '0.25rem 0' }}></div>
            <div style={{ cursor: 'pointer' }} onClick={() => setPrivacyOpen(true)}>Privacy Policy</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
            <div className="muted">Luxury Travel Concierge</div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '0.25rem 0' }}></div>
            <div>Cookies Policy</div>
          </div>
        </div>
      </footer>

      {privacyOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setPrivacyOpen(false)}>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '600px',
            maxHeight: '80vh',
            overflow: 'auto',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0, color: '#fff', fontSize: '1.5rem' }}>PRIVACY POLICY</h2>
              <button 
                onClick={() => setPrivacyOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.5rem'
                }}
              >
                ×
              </button>
            </div>
            <div style={{ color: '#fff', lineHeight: '1.6' }}>
              <p><strong>Privacy Policy – Paradais Voyage Luxury Travel Concierge</strong></p>
              <p><em>Last updated: 01/01/2026</em></p>
              
              <h3 style={{ color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Introduction</h3>
              <p>Paradais Voyage Luxury Travel Concierge ("we", "our", "us") respects your privacy and is committed to protecting your personal data.</p>
              
              <h3 style={{ color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Data We Collect</h3>
              <p>We may collect the following data:</p>
              <ul>
                <li>Name, email, phone number</li>
                <li>Travel preferences (e.g. destination, dates, accommodation type)</li>
                <li>Passport details where required for bookings</li>
                <li>Payment preferences (only if relevant for service fees)</li>
              </ul>
              
              <h3 style={{ color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. How We Use Your Data</h3>
              <p>We use your personal data to:</p>
              <ul>
                <li>Process enquiries and bookings</li>
                <li>Communicate with you regarding your travel arrangements</li>
                <li>Share relevant information with our <strong>trusted suppliers</strong> (hotels, transport companies) solely for the purpose of your booking</li>
                <li>Comply with legal or regulatory requirements</li>
              </ul>
              
              <h3 style={{ color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>4. Sharing Your Data</h3>
              <ul>
                <li>We share your data <strong>only with suppliers necessary to fulfil your booking</strong>.</li>
                <li>We do not sell or trade your personal data.</li>
              </ul>
              
              <h3 style={{ color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>5. Data Security</h3>
              <ul>
                <li>We store personal data securely and limit access to authorised staff only.</li>
                <li>We implement technical measures to protect your data against unauthorised access or loss.</li>
              </ul>
              
              <h3 style={{ color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>6. Your Rights</h3>
              <p>Under UK GDPR, you have the right to:</p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for data processing at any time</li>
              </ul>
              <p>To exercise your rights, contact us at: <a href="mailto:info@paradaisvoyage.com" style={{ color: '#ffd700' }}>info@paradaisvoyage.com</a></p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}