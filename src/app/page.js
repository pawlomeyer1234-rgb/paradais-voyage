"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page(){
  const [open, setOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [cookiesConsent, setCookiesConsent] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // always true
    performance: false,
    functional: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookiesConsent');
    if (consent === 'accepted') {
      setCookiesConsent(true);
    }
  }, []);

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
          <form 
            className="form-glass" 
            action="https://api.web3forms.com/submit" 
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              const response = await fetch(form.action, {
                method: 'POST',
                body: formData
              });
              const data = await response.json();
              if (data.success) {
                form.reset();
                setFormSuccess(true);
              } else {
                alert('There was an error submitting your request. Please try again.');
              }
            }}
          >
            <input type="hidden" name="access_key" value="abf23d8e-c302-4ef2-873a-a62ce6e29277" />
            <h3>Let's Plan Your Next Sojourn</h3>
            <div className="grid">
              <input className="input-glass" name="name" placeholder="Full name" required />
              <input className="input-glass" name="email" placeholder="Email" type="email" required />
              <input className="input-glass" name="phone" placeholder="Phone (optional)" />
              <input className="input-glass" name="preferred_dates" placeholder="Preferred dates" />
            </div>
            <textarea className="input-glass" name="message" rows={5} placeholder="Tell us the vibe, not just the place..." required />
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '1rem' }}>
              <input 
                type="checkbox" 
                id="terms-checkbox" 
                required 
                style={{ 
                  marginTop: '0.25rem',
                  accentColor: '#ffd700',
                  transform: 'scale(1.2)'
                }} 
              />
              <label htmlFor="terms-checkbox" style={{ color: '#fff', fontSize: '0.9rem', lineHeight: '1.4' }}>
                I agree to the{' '}
                <span 
                  style={{ color: '#ffd700', cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={() => setTermsOpen(true)}
                >
                  Terms & Conditions
                </span>
                {' '}and{' '}
                <span 
                  style={{ color: '#ffd700', cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={() => setPrivacyOpen(true)}
                >
                  Privacy Policy
                </span>
              </label>
            </div>
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
            <div style={{ cursor: 'pointer' }} onClick={() => setTermsOpen(true)}>Terms & Conditions</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div>© {new Date().getFullYear()} Paradais Voyage</div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '0.25rem 0' }}></div>
            <div style={{ cursor: 'pointer' }} onClick={() => setPrivacyOpen(true)}>Privacy Policy</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
            <div className="muted">Luxury Travel Concierge</div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '0.25rem 0' }}></div>
            <div style={{ cursor: 'pointer' }} onClick={() => setCookiesOpen(true)}>Cookies Policy</div>
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
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>PRIVACY POLICY – Paradais Voyage Luxury Travel Concierge</p>
              <p style={{ fontStyle: 'italic', opacity: 0.85 }}>Last updated: 01/11/2025</p>
              <p style={{ marginBottom: '1.5rem' }}>Contact: <a href="mailto:info@paradaisvoyage.com" style={{ color: '#ffd700' }}>info@paradaisvoyage.com</a></p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.1rem' }}>1. Introduction</h3>
              <p>Paradais Voyage Luxury Travel Concierge ("we", "our", "us") respects your privacy and is committed to protecting your data under <strong>UK GDPR</strong>.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>2. Data We Collect</h3>
              <p>We may collect:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Name, email, and phone number</li>
                <li>Travel preferences (destinations, dates, accommodation)</li>
                <li>Passport details (where required)</li>
                <li>Payment information (processed by Stripe)</li>
              </ul>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>3. How We Use Your Data</h3>
              <p>We use your data to:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Process bookings and inquiries</li>
                <li>Communicate about travel arrangements</li>
                <li>Share information with suppliers to fulfil your request</li>
                <li>Meet legal and regulatory requirements</li>
              </ul>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>4. Sharing Your Data</h3>
              <p>Your information is shared only with:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Trusted suppliers (hotels, transport, airlines)</li>
                <li>Stripe Payments UK Ltd (for payment processing)</li>
              </ul>
              <p>We do not sell or rent your data to third parties.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>5. Payments and Stripe</h3>
              <p>Payments are handled by <strong>Stripe Connect</strong>, authorised by the <strong>Financial Conduct Authority (FCA)</strong>.</p>
              <p>Stripe processes card and billing data securely, and Paradais Voyage does not have access to your full payment details.</p>
              <p>For details, see <a href="https://stripe.com/gb/privacy" style={{ color: '#ffd700' }} target="_blank" rel="noopener noreferrer">Stripe’s Privacy Policy</a>.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>6. Data Security</h3>
              <p>We use SSL encryption, secure storage, and limited employee access. Your data is retained only as long as necessary to fulfil your booking.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>7. Your Rights</h3>
              <p>Under UK GDPR you may:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Request access to your data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent</li>
                <li>File a complaint with the <strong>Information Commissioner’s Office (ICO)</strong></li>
              </ul>
              <p>To exercise your rights, contact us at <a href="mailto:info@paradaisvoyage.com" style={{ color: '#ffd700' }}>info@paradaisvoyage.com</a>.</p>
            </div>
          </div>
        </div>
      )}

      {termsOpen && (
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
        }} onClick={() => setTermsOpen(false)}>
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
              <h2 style={{ margin: 0, color: '#fff', fontSize: '1.5rem' }}>TERMS & CONDITIONS</h2>
              <button 
                onClick={() => setTermsOpen(false)}
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
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>TERMS &amp; CONDITIONS – Paradais Voyage Luxury Travel Concierge</p>
              <p style={{ fontStyle: 'italic', opacity: 0.85 }}>Last updated: 01/11/2025</p>
              <p style={{ marginBottom: '0.5rem' }}>Registered Business: <strong>Paradais Voyage Luxury Travel Concierge</strong></p>
              <p style={{ marginBottom: '0.5rem' }}>Registered Office: <strong>United Kingdom</strong></p>
              <p style={{ marginBottom: '0.5rem' }}>Email: <a href="mailto:info@paradaisvoyage.com" style={{ color: '#ffd700' }}>info@paradaisvoyage.com</a></p>
              <p style={{ marginBottom: '1.5rem' }}>Website: <a href="https://www.paradaisvoyage.com" style={{ color: '#ffd700' }} target="_blank" rel="noopener noreferrer">www.paradaisvoyage.com</a></p>
              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.1rem' }}>1. Introduction</h3>
              <p>Welcome to Paradais Voyage Luxury Travel Concierge ("we", "our", "us").</p>
              <p>By accessing and using our website and services, you agree to these Terms &amp; Conditions.</p>
              <p>If you do not agree, please discontinue use of our services.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>2. Our Services</h3>
              <p>We provide luxury travel concierge and intermediary services, including:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Luxury hotel reservations</li>
                <li>Private transfers and flights (limousines, private cars, seaplanes, private jets)</li>
              </ul>
              <p>We do <strong>not</strong> operate hotels, airlines, yachts, or transport companies directly.</p>
              <p>We do <strong>not</strong> organise excursions, entertainment, or guided tours.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>3. Payments via Stripe Connect</h3>
              <p>All payments are processed securely through <strong>Stripe Connect</strong>, regulated by the <strong>Financial Conduct Authority (FCA)</strong> in the United Kingdom.</p>
              <p>When you make a payment, Stripe automatically distributes the total between:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Paradais Voyage (our service fee and commission)</li>
                <li>Third-party suppliers (hotels, transport providers, airlines, etc.)</li>
              </ul>
              <p>We do not store or access full card details. All financial transactions are handled by <strong>Stripe Payments UK Ltd</strong>.</p>
              <p>Paradais Voyage may charge a <strong>service fee (12%)</strong> and/or earn a <strong>supplier commission (15%)</strong>, both disclosed before confirmation.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>4. Cancellations &amp; Refunds</h3>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>All cancellations and refunds follow each supplier’s individual policy.</li>
                <li>Our service fees and commissions are <strong>non-refundable</strong> once a booking is confirmed, unless otherwise agreed in writing.</li>
              </ul>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>5. Limitation of Liability</h3>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Paradais Voyage acts solely as an intermediary.</li>
                <li>We are not responsible for delays, cancellations, or damages caused by suppliers.</li>
                <li>Our total liability is limited to the direct service fee paid to us.</li>
              </ul>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>6. Privacy &amp; Data Protection</h3>
              <p>We collect and process personal data in line with our <a href="#privacy" style={{ color: '#ffd700' }}>Privacy Policy</a>.</p>
              <p>Stripe may also process data related to payments. See{' '}
                <a href="https://stripe.com/gb/privacy" style={{ color: '#ffd700' }} target="_blank" rel="noopener noreferrer">Stripe’s Privacy Policy</a> for more details.
              </p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>7. Dispute Resolution</h3>
              <p>Any disputes will first be addressed through written communication.</p>
              <p>If unresolved, disputes fall under the exclusive jurisdiction of the courts of <strong>England and Wales</strong>.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>8. Secure Payments Statement</h3>
              <p>All payments are handled by Stripe Connect.</p>
              <p>By completing a transaction, you agree that Stripe may distribute payments between Paradais Voyage and its suppliers as part of the booking process.</p>
            </div>
          </div>
        </div>
      )}

      {cookiesOpen && (
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
        }} onClick={() => setCookiesOpen(false)}>
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
              <h2 style={{ margin: 0, color: '#fff', fontSize: '1.5rem' }}>COOKIES POLICY</h2>
              <button 
                onClick={() => setCookiesOpen(false)}
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
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>COOKIES POLICY – Paradais Voyage Luxury Travel Concierge</p>
              <p style={{ fontStyle: 'italic', opacity: 0.85 }}>Last updated: 01/11/2025</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.1rem' }}>1. What Are Cookies</h3>
              <p>Cookies are small text files stored on your device to improve your browsing experience.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>2. How We Use Cookies</h3>
              <p>We use cookies to:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Enhance website functionality</li>
                <li>Analyse traffic with Google Analytics</li>
                <li>Remember your form preferences</li>
              </ul>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>3. Third-Party Cookies</h3>
              <p>We use cookies from:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li><strong>Stripe</strong> (for secure payments)</li>
                <li><strong>Google Analytics</strong> (to improve user experience)</li>
              </ul>
              <p>Learn more at: <a href="https://stripe.com/cookies-policy/legal" style={{ color: '#ffd700' }} target="_blank" rel="noopener noreferrer">Stripe Cookies Policy</a></p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>4. Managing Cookies</h3>
              <p>You can disable cookies in your browser settings. However, doing so may impact website functionality.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>5. Contact</h3>
              <p>If you have questions about our Cookies Policy, contact us at: <a href="mailto:info@paradaisvoyage.com" style={{ color: '#ffd700' }}>info@paradaisvoyage.com</a></p>
            </div>
          </div>
        </div>
      )}

      {!cookiesConsent && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          padding: '1.5rem 2rem',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ color: '#fff', fontSize: '0.9rem', lineHeight: '1.5', flex: '1', minWidth: '300px' }}>
            We use cookies to improve your experience and analyse website traffic. By continuing to use this site, you accept our{' '}
            <span 
              style={{ color: '#ffd700', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => setCookiesOpen(true)}
            >
              Cookies Policy
            </span>
            .
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexShrink: 0 }}>
            <button
              onClick={() => setPreferencesOpen(true)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={(e) => {
                e.target.style.borderColor = '#ffd700';
                e.target.style.color = '#ffd700';
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.color = '#fff';
              }}
            >
              Manage Preferences
            </button>
            <button
              onClick={() => {
                setCookiesConsent(true);
                localStorage.setItem('cookiesConsent', 'accepted');
              }}
              style={{
                background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                border: 'none',
                color: '#000',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.3)';
              }}
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {preferencesOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1002,
          animation: 'fadeIn 0.3s ease-out'
        }} onClick={() => setPreferencesOpen(false)}>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2.5rem',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            border: '1px solid rgba(255,215,0,0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            animation: 'slideUp 0.3s ease-out'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ margin: 0, color: '#000', fontSize: '1.8rem', fontWeight: '600' }}>Cookie Preferences</h2>
              <button 
                onClick={() => setPreferencesOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(0,0,0,0.1)';
                  e.target.style.color = '#000';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#666';
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ color: '#333', lineHeight: '1.6', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '2rem', fontSize: '1rem' }}>
                You can choose which types of cookies you allow on this website. Essential cookies are always active because they are required for basic functionality.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Essential Cookies - Always Active */}
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'rgba(255,215,0,0.1)', 
                  borderRadius: '12px',
                  border: '2px solid rgba(255,215,0,0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#ffd700',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px',
                      flexShrink: 0
                    }}>
                      <span style={{ color: '#000', fontSize: '12px', fontWeight: 'bold' }}>✓</span>
                    </div>
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0', color: '#000', fontSize: '1.1rem', fontWeight: '600' }}>
                        Essential Cookies (always active)
                      </h3>
                      <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                        Used to make the website function properly (cannot be disabled).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Performance Cookies */}
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'rgba(255,255,255,0.5)', 
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <input
                      type="checkbox"
                      checked={cookiePreferences.performance}
                      onChange={(e) => setCookiePreferences(prev => ({ ...prev, performance: e.target.checked }))}
                      style={{
                        width: '20px',
                        height: '20px',
                        accentColor: '#ffd700',
                        marginTop: '2px',
                        flexShrink: 0
                      }}
                    />
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0', color: '#000', fontSize: '1.1rem', fontWeight: '600' }}>
                        Performance / Analytics Cookies
                      </h3>
                      <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                        Help us improve our website by collecting anonymous usage data (e.g., Google Analytics).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'rgba(255,255,255,0.5)', 
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <input
                      type="checkbox"
                      checked={cookiePreferences.functional}
                      onChange={(e) => setCookiePreferences(prev => ({ ...prev, functional: e.target.checked }))}
                      style={{
                        width: '20px',
                        height: '20px',
                        accentColor: '#ffd700',
                        marginTop: '2px',
                        flexShrink: 0
                      }}
                    />
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0', color: '#000', fontSize: '1.1rem', fontWeight: '600' }}>
                        Functional Cookies
                      </h3>
                      <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                        Remember your preferences, such as language or display settings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'rgba(255,255,255,0.5)', 
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={(e) => setCookiePreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                      style={{
                        width: '20px',
                        height: '20px',
                        accentColor: '#ffd700',
                        marginTop: '2px',
                        flexShrink: 0
                      }}
                    />
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0', color: '#000', fontSize: '1.1rem', fontWeight: '600' }}>
                        Marketing Cookies
                      </h3>
                      <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                        Used to show you relevant ads and content based on your interests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setPreferencesOpen(false)}
                style={{
                  background: 'transparent',
                  border: '1px solid #ccc',
                  color: '#666',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = '#999';
                  e.target.style.color = '#333';
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = '#ccc';
                  e.target.style.color = '#666';
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
                  localStorage.setItem('cookiesConsent', 'accepted');
                  setCookiesConsent(true);
                  setPreferencesOpen(false);
                }}
                style={{
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                  border: 'none',
                  color: '#000',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.3)';
                }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {formSuccess && (
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
        }} onClick={() => setFormSuccess(false)}>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            textAlign: 'center'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                margin: '0 auto 1rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4AF37, #C5A46D 55%, #BFA46A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: '#1a1a1a'
              }}>
                ✓
              </div>
              <h2 style={{ margin: 0, color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank you!</h2>
              <p style={{ margin: 0, color: '#fff', fontSize: '1rem', lineHeight: '1.6' }}>
                Your request has been submitted. We will respond within 24 hours.
              </p>
            </div>
            <button
              onClick={() => setFormSuccess(false)}
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #C5A46D 55%, #BFA46A)',
                border: 'none',
                color: '#1a1a1a',
                padding: '0.75rem 2rem',
                borderRadius: '14px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '700',
                letterSpacing: '0.3px',
                transition: 'all 0.15s ease',
                boxShadow: '0 10px 24px rgba(212, 175, 55, 0.35)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.filter = 'brightness(1.05)';
                e.target.style.boxShadow = '0 14px 30px rgba(212, 175, 55, 0.45)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.filter = 'brightness(1)';
                e.target.style.boxShadow = '0 10px 24px rgba(212, 175, 55, 0.35)';
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}