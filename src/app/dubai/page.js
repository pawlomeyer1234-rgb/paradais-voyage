'use client';

import Link from 'next/link';

export default function DubaiPage() {
  return (
    <main className="pv-root">
      {/* Navigation */}
      <nav className="pv-nav">
        <div className="pv-container nav-grid">
          <Link href="/" className="brand">
            <div className="brand-mark"></div>
            <div className="brand-text">Paradais Voyage</div>
            <div className="brand-tagline">Luxury Travel Concierge</div>
          </Link>
          <div className="nav-items">
            <Link href="/#destinations">Destinations</Link>
            <Link href="/#about">About</Link>
            <Link href="/#form">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pv-hero">
        <div className="pv-container">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Dubai Luxury Experiences</h1>
              <p style={{ fontSize: '1.3rem', color: '#cbd5e1', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
                Discover The Ultimate Luxury Escape in Dubai - where modern architecture meets traditional hospitality and world-class experiences await your arrival.
              </p>
              <div className="cta-row">
                <a className="btn-gold" href="#form">Plan Your Dubai Experience</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-media glass-panel"></div>
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
                  backgroundImage: 'url("/images/hero/Dubai.jpg")',
                  borderRadius: '12px'
                }}></div>
              </div>
              <h3>Luxury Hotels & Resorts</h3>
              <p>Handpicked luxury accommodations offering breathtaking city views, world-class amenities, and unparalleled service in the heart of Dubai.</p>
            </article>

            <article className="feature-card glass-card">
              <div className="experience-images" style={{ height: '200px', marginBottom: '20px' }}>
                <div className="experience-image" style={{ 
                  backgroundImage: 'url("/images/hero/car 2.jpg")',
                  borderRadius: '12px',
                  width: '48%'
                }}></div>
                <div className="experience-image" style={{ 
                  backgroundImage: 'url("/images/hero/jet.webp")',
                  borderRadius: '12px',
                  width: '48%'
                }}></div>
              </div>
              <h3>Premium Transfers</h3>
              <p>Luxury vehicle transfers and private jet services arranged with precision, ensuring seamless transportation throughout your Dubai experience.</p>
            </article>

            <article className="feature-card glass-card">
              <div className="experience-images" style={{ height: '200px', marginBottom: '20px' }}>
                <div className="experience-image" style={{ 
                  backgroundImage: 'url("/images/hero/Plaza Samolot.jpg")',
                  borderRadius: '12px'
                }}></div>
              </div>
              <h3>Exclusive Experiences</h3>
              <p>From private desert safaris to exclusive shopping experiences and world-class dining, we coordinate every detail for your perfect Dubai adventure.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pv-section">
        <div className="pv-container">
          <div className="about-grid">
            <div className="about-card glass-card">
              <h2>Why Choose Dubai with Paradais Voyage</h2>
              <p>Our Dubai expertise ensures you experience effortless luxury. From the moment you land at Dubai International Airport to the time you explore the city's wonders, every transfer, every booking, and every exclusive access is carefully managed.</p>
              
              <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>What We Include:</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: '1.8', marginBottom: '20px' }}>
                <li>✔ Handpicked 5-star hotels and luxury resorts</li>
                <li>✔ Private luxury vehicle & helicopter transfers</li>
                <li>✔ Exclusive access to premium experiences</li>
                <li>✔ 24/7 concierge support during your journey</li>
              </ul>
              
              <a className="btn-gold" href="#form">Request Dubai Proposal</a>
            </div>
            <div className="about-side" style={{ 
              backgroundImage: 'url("/images/hero/Dubai.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="pv-section pv-form">
        <div className="pv-container">
          <form className="form-glass" onSubmit={(e) => e.preventDefault()}>
            <h3>Plan Your Dubai Experience</h3>
            <div className="grid">
              <input className="input-glass" placeholder="Full name" required />
              <input className="input-glass" placeholder="Email" type="email" required />
              <input className="input-glass" placeholder="Phone (optional)" />
              <input className="input-glass" placeholder="Preferred travel dates" />
            </div>
            <textarea className="input-glass" rows={5} placeholder="Tell us the vibe, not just the place..." />
            <div className="form-foot">
              <button className="btn-gold" type="submit">Request Dubai Proposal</button>
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
