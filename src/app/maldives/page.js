"use client";
import Link from "next/link";

export default function MaldivesPage() {
  return (
    <main className="pv-root">
      <header className="pv-nav">
        <div className="pv-container nav-grid">
          <div className="brand">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <span className="brand-mark" aria-hidden="true" />
              <div>
                <span className="brand-text">Paradais Voyage</span>
                <div className="brand-tagline">Luxury Travel Concierge</div>
              </div>
            </Link>
          </div>
          <nav className="nav-items">
            <Link href="/#experiences">Experiences</Link>
            <Link href="/#destinations">Destinations</Link>
            <Link href="/#about">About</Link>
            <Link className="btn-glass btn-sm" href="/#form">
              Plan Your Sojourn
            </Link>
          </nav>
        </div>
      </header>

      <section className="pv-hero">
        <div className="pv-container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '60px 40px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px', background: 'linear-gradient(135deg, #00B4DB, #0083B0)', 
                        backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Maldives Paradise
            </h1>
            <p style={{ fontSize: '1.3rem', color: '#cbd5e1', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
              Discover The Ultimate Luxury Escape in Maldives - where pristine white sands meet crystal-clear waters and world-class resorts welcome you with unforgettable service.
            </p>
            <div className="cta-row" style={{ justifyContent: 'center', gap: '20px' }}>
              <Link className="btn-gold" href="/#form">Plan Your Maldives Escape</Link>
              <Link className="btn-glass" href="/">Back to Home</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pv-section">
        <div className="pv-container">
          <div className="cards">
            <article className="feature-card glass-card">
              <div className="experience-images" style={{ height: '200px', marginBottom: '20px' }}>
                <div className="experience-image" style={{ 
                  backgroundImage: 'url("/images/hero/Maledives.jpg")',
                  borderRadius: '12px'
                }}></div>
              </div>
              <h3>Overwater Villas</h3>
              <p>Experience the pinnacle of luxury in our handpicked overwater villas. Wake up to panoramic ocean views, step directly into crystal-clear waters, and enjoy unparalleled privacy in your own slice of paradise.</p>
            </article>

            <article className="feature-card glass-card">
              <div className="experience-images" style={{ height: '200px', marginBottom: '20px' }}>
                <div className="experience-image" style={{ 
                  backgroundImage: 'url("/images/hero/Maledives.jpg")',
                  borderRadius: '12px'
                }}></div>
              </div>
              <h3>Exclusive Resorts</h3>
              <p>Access to the world's most exclusive Maldivian resorts, including private islands, Michelin-starred dining, and bespoke experiences tailored to your every desire.</p>
            </article>

            <article className="feature-card glass-card">
              <div className="experience-images" style={{ height: '200px', marginBottom: '20px' }}>
                <div className="experience-image" style={{ 
                  backgroundImage: 'url("/images/hero/Maledives.jpg")',
                  borderRadius: '12px'
                }}></div>
              </div>
              <h3>Private Experiences</h3>
              <p>From private yacht charters to underwater dining experiences, helicopter transfers to secluded sandbanks, we curate once-in-a-lifetime moments exclusively for you.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pv-section">
        <div className="pv-container">
          <div className="about-grid">
            <div className="about-card glass-card">
              <h2>Why Choose Maldives with Paradais Voyage?</h2>
              <p>Our Maldives expertise goes beyond booking. We understand the nuances of each atoll, the seasonal variations, and the hidden gems that make your stay truly extraordinary. From the moment you land at Malé International Airport to your private seaplane transfer, every detail is meticulously planned.</p>
              
              <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>What We Include:</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: '1.8', marginBottom: '20px' }}>
                <li>✓ Private seaplane or speedboat transfers</li>
                <li>✓ Exclusive resort access and upgrades</li>
                <li>✓ 24/7 concierge support during your stay</li>
                <li>✓ Bespoke dining experiences and reservations</li>
                <li>✓ Private excursions and water activities</li>
                <li>✓ Spa treatments and wellness programs</li>
              </ul>
              
              <Link className="btn-gold" href="/#form">Start Planning Your Maldives Journey</Link>
            </div>
            <div className="about-side glass-panel" style={{ 
              backgroundImage: 'url("/images/hero/Maledives.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          </div>
        </div>
      </section>

      <section className="pv-section pv-form">
        <div className="pv-container">
          <form className="form-glass" onSubmit={(e) => e.preventDefault()}>
            <h3>Plan Your Maldives Escape</h3>
            <div className="grid">
              <input className="input-glass" placeholder="Full name" required />
              <input className="input-glass" placeholder="Email" type="email" required />
              <input className="input-glass" placeholder="Phone (optional)" />
              <input className="input-glass" placeholder="Preferred travel dates" />
            </div>
            <textarea className="input-glass" rows={5} placeholder="Tell us about your dream Maldives experience - overwater villa preferences, activities you'd like, special occasions..." />
            <div className="form-foot">
              <button className="btn-gold" type="submit">Request Maldives Proposal</button>
              <span className="fine">Personalized itinerary within 24 hours.</span>
            </div>
          </form>
        </div>
      </section>

      <footer className="pv-footer">
        <div className="pv-container foot">
          <div>Contact: info@paradaisvoyage.com</div>
          <div className="sep" />
          <div>© {new Date().getFullYear()} Paradais Voyage</div>
          <div className="sep" />
          <div className="muted">Luxury Travel Concierge</div>
        </div>
      </footer>
    </main>
  );
}
