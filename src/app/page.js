"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
            <a href="#what-we-do">What We Do</a>
            <a href="#aircraft-categories">Aircraft</a>
            <a href="#about">About</a>
            <a className="btn-glass btn-sm" href="/get-a-jet-quote">
              Get a Private Jet Quote
            </a>
          </nav>
        </div>
      </header>

      <section className="pv-hero">
        <div className="pv-container hero-grid">
          <div className="hero-copy glass-card">
            <h1>Private Jet Charter. Precision Without Compromise.</h1>
            <p>Global access to vetted aircraft operators. One point of contact. Absolute discretion.</p>
            <div className="cta-row">
              <a className="btn-gold" href="/get-a-jet-quote">Get a Private Jet Quote</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="pv-media-frame glass-panel">
              <img src="/hero/jet-gory.jpg" alt="Private jet" />
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="pv-section">
        <div className="pv-container">
          <h2 className="pv-section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>What We Do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <strong style={{ fontSize: '1rem' }}>Private Jet Charter Brokerage</strong>
            </div>
            <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <strong style={{ fontSize: '1rem' }}>Access to Vetted Global Operators</strong>
            </div>
            <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <strong style={{ fontSize: '1rem' }}>Single Point of Contact from Quote to Wheels-Down</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="aircraft-categories" className="pv-section">
        <div className="pv-container">
          <h2 className="pv-section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Aircraft Categories</h2>
          <div className="cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
            {[
              { title: 'Light Jets →', desc: 'Ideal for short-haul flights across Europe, offering speed, flexibility, and access to smaller airports.', image: '/images/hero/Light Jets.png' },
              { title: 'Midsize Jets →', desc: 'A balance of comfort and range for longer European routes and multi-city travel.', image: '/images/hero/Midsize Jets.png' },
              { title: 'Heavy Jets →', desc: 'Spacious cabins and intercontinental capability for long-range private travel.', image: '/images/hero/Heavy Jets.png' },
              { title: 'Ultra Long Range →', desc: 'Non-stop intercontinental flights with maximum comfort and performance.', image: '/images/hero/Ultra Long Range.png' }
            ].map((cat, i) => (
              <Link key={i} href="/get-a-jet-quote" className="glass-card" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <img
                  src={cat.image}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'clamp(180px, 20vw, 220px)',
                    objectFit: 'cover',
                    display: 'block',
                    borderTopLeftRadius: '18px',
                    borderTopRightRadius: '18px'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>{cat.title}</h3>
                  <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem' }}>{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="pv-section pv-strip">
        <div className="pv-container">
          <h2 className="pv-section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Popular Private Jet Routes</h2>
          <div className="strip-row">
            <Link href="/get-a-jet-quote?corridor=EU" className="chip glass-chip destination-chip" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="destination-image" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image src="/images/hero/Intra-Europe.png" alt="Intra-Europe Private Jet" fill sizes="(max-width: 768px) 100vw, 360px" style={{ objectFit: 'cover' }} />
              </div>
              <span className="destination-name">Intra-Europe <span style={{ marginLeft: '8px', fontSize: '0.8em', opacity: 0.8 }}>→</span></span>
            </Link>
            <Link href="/get-a-jet-quote?corridor=EU-US" className="chip glass-chip destination-chip" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="destination-image" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image src="/images/hero/Europe-US.png" alt="Europe to US Private Jet" fill sizes="(max-width: 768px) 100vw, 360px" style={{ objectFit: 'cover' }} />
              </div>
              <span className="destination-name">Europe ↔ US <span style={{ marginLeft: '8px', fontSize: '0.8em', opacity: 0.8 }}>→</span></span>
            </Link>
            <Link href="/get-a-jet-quote?corridor=EU-ME" className="chip glass-chip destination-chip" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="destination-image" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image src="/images/hero/Europe-Middle East.png" alt="Europe to Middle East Private Jet" fill sizes="(max-width: 768px) 100vw, 360px" style={{ objectFit: 'cover' }} />
              </div>
              <span className="destination-name">Europe ↔ Middle East <span style={{ marginLeft: '8px', fontSize: '0.8em', opacity: 0.8 }}>→</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="pv-section">
        <div className="pv-container about-grid">
          <div className="about-card glass-card">
            <h2>About Paradais Voyage</h2>
            <p>Paradais Voyage is a luxury travel and private aviation concierge created for clients who value clarity, discretion, and absolute control.</p>
            <p>We work exclusively with trusted global operators to deliver seamless coordination, transparent pricing, and uncompromising reliability. Every journey is handled personally — from private jet charters to bespoke travel arrangements — without intermediaries, friction, or unnecessary complexity.</p>
            <p>This is not mass-market travel.<br />This is precision, discretion, and travel designed entirely around you.</p>
            <a className="btn-gold" href="/get-a-jet-quote">Speak With a Concierge</a>
          </div>
          <div className="about-side">
            <div className="pv-media-frame glass-panel">
              <img src="/images/hero/cabin.jpg" alt="Private jet cabin" />
            </div>
          </div>
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
            <h3>Get a Private Jet Quote</h3>
            <p style={{ margin: '0 0 1.25rem', opacity: 0.9, fontSize: '0.95rem' }}>Share your route, dates, and passengers. Our concierge responds within 60 minutes (business hours).</p>
            <div className="grid">
              <input className="input-glass" name="name" placeholder="Full name" required />
              <input className="input-glass" name="email" placeholder="Email" type="email" required />
              <input className="input-glass" name="phone" placeholder="Phone (optional)" />
              <input className="input-glass" name="preferred_dates" placeholder="Preferred dates / time window" />
            </div>
            <textarea className="input-glass" name="message" rows={5} placeholder="Route (from / to), passengers, one-way or return, aircraft preference, and any special requirements." required />
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
              <span className="fine">Response from a concierge within 60 minutes during business hours.</span>
            </div>
          </form>
        </div>
      </section>

      <footer className="pv-footer">
        <div className="pv-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
            <div>Contact: info@paradaisvoyage.com</div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '0.25rem 0' }} />
            <div style={{ cursor: 'pointer' }} onClick={() => setTermsOpen(true)}>Terms & Conditions</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div>© {new Date().getFullYear()} Paradais Voyage</div>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '0.25rem 0' }} />
            <div style={{ cursor: 'pointer' }} onClick={() => setPrivacyOpen(true)}>Privacy Policy</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', margin: '0.25rem 0' }} />
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
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>PRIVACY POLICY – Paradais Voyage Ltd</p>
              <p style={{ fontStyle: 'italic', opacity: 0.85 }}>Last updated: 01/11/2025</p>
              <p style={{ marginBottom: '1.5rem' }}><strong>Contact:</strong><br /><a href="mailto:info@paradaisvoyage.com" style={{ color: '#ffd700' }}>info@paradaisvoyage.com</a></p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.1rem' }}>1. Introduction</h3>
              <p>Paradais Voyage Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR).</p>
              <p>This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>2. Data We Collect</h3>
              <p>We may collect and process the following personal data:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Travel-related information submitted via enquiry forms (such as route, dates, passenger count, and preferences)</li>
              </ul>
              <p>We do not intentionally collect passport details or sensitive personal data unless explicitly required and agreed in writing.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>3. How We Use Your Data</h3>
              <p>We use your personal data to:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Respond to enquiries and provide private aviation brokerage services</li>
                <li>Communicate with you regarding your request</li>
                <li>Share necessary information with third-party aircraft operators to obtain quotes or arrange services</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>4. Sharing Your Data</h3>
              <p>Your data may be shared only with:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Trusted third-party aircraft operators and aviation service providers for the purpose of fulfilling your request</li>
                <li>Technical service providers supporting website functionality (e.g. form handling or email delivery)</li>
              </ul>
              <p>We do not sell, rent, or trade your personal data to third parties.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>5. Payments</h3>
              <p>Paradais Voyage Ltd does not store or process full payment card details.</p>
              <p>Where payments are required, they are handled directly between the client and the relevant third-party service provider, unless otherwise agreed in writing.</p>
              <p>Any third-party payment processors operate under their own privacy policies.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>6. Data Security</h3>
              <p>We implement appropriate technical and organisational measures to protect your personal data, including SSL encryption and restricted access.</p>
              <p>Your data is retained only for as long as necessary to fulfil the purposes outlined in this policy or to meet legal requirements.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>7. Your Rights</h3>
              <p>Under UK GDPR, you have the right to:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO)</li>
              </ul>
              <p>To exercise your rights, please contact:<br /><a href="mailto:info@paradaisvoyage.com" style={{ color: '#ffd700' }}>info@paradaisvoyage.com</a></p>
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
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>TERMS &amp; CONDITIONS – Paradais Voyage Ltd</p>
              <p style={{ fontStyle: 'italic', opacity: 0.85 }}>Last updated: 01/11/2025</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Registered Business:</strong><br />Paradais Voyage Ltd (Luxury Travel &amp; Private Aviation Concierge)</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Registered Office:</strong><br />United Kingdom</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong><br /><a href="mailto:info@paradaisvoyage.com" style={{ color: '#ffd700' }}>info@paradaisvoyage.com</a></p>
              <p style={{ marginBottom: '1.5rem' }}><strong>Website:</strong><br /><a href="https://www.paradaisvoyage.com" style={{ color: '#ffd700' }} target="_blank" rel="noopener noreferrer">www.paradaisvoyage.com</a></p>
              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.1rem' }}>1. Introduction</h3>
              <p>Welcome to Paradais Voyage Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;).</p>
              <p>By accessing and using our website and services, you agree to these Terms &amp; Conditions.</p>
              <p>If you do not agree, please discontinue use of our services.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>2. Our Services</h3>
              <p>Paradais Voyage provides private aviation concierge and brokerage services, including:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Private jet charter coordination</li>
                <li>Air charter brokerage and client introductions</li>
                <li>Aviation-related concierge services</li>
              </ul>
              <p>We act strictly as an intermediary between clients and third-party aircraft operators.</p>
              <p>We do not own, operate, or control any aircraft, airlines, or aviation operators.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>3. Payments &amp; Fees</h3>
              <p>Paradais Voyage does not operate as an air carrier.</p>
              <p>Payments for flight services are made directly between the client and the selected third-party aircraft operator, unless otherwise agreed in writing.</p>
              <p>Where applicable, Paradais Voyage may charge a disclosed service fee or receive a commission from suppliers. Any fees will be clearly communicated prior to confirmation.</p>
              <p>Paradais Voyage does not store or process full payment card details.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>4. Cancellations &amp; Refunds</h3>
              <p>All cancellations, changes, and refunds are governed by the individual terms of the third-party aircraft operator.</p>
              <p>Service fees charged by Paradais Voyage are non-refundable once a booking or introduction is confirmed, unless otherwise agreed in writing.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>5. Limitation of Liability</h3>
              <p>Paradais Voyage acts solely as an intermediary.</p>
              <p>We are not responsible for operational decisions, delays, cancellations, or damages caused by third-party suppliers.</p>
              <p>Our total liability shall not exceed the service fee paid directly to Paradais Voyage.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>6. Privacy &amp; Data Protection</h3>
              <p>Personal data is processed in accordance with our Privacy Policy.</p>
              <p>Third-party suppliers may process data necessary to fulfil services.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>7. Dispute Resolution</h3>
              <p>Any disputes shall first be addressed through written communication.</p>
              <p>If unresolved, disputes are subject to the exclusive jurisdiction of the courts of England and Wales.</p>
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
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>COOKIES POLICY – Paradais Voyage Ltd</p>
              <p style={{ fontStyle: 'italic', opacity: 0.85 }}>Last updated: 01/11/2025</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.1rem' }}>1. What Are Cookies</h3>
              <p>Cookies are small text files placed on your device when you visit a website. They help ensure the website functions correctly and improve your browsing experience.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>2. How We Use Cookies</h3>
              <p>Paradais Voyage Ltd uses cookies for the following purposes:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Essential cookies required for the basic operation of the website</li>
                <li>Functionality cookies to remember user preferences submitted through forms</li>
                <li>Analytics cookies (only where enabled) to understand website usage and improve performance</li>
              </ul>
              <p>Non-essential cookies are used only where legally permitted.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>3. Third-Party Cookies</h3>
              <p>We may use third-party services that set cookies, such as:</p>
              <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <li>Analytics providers (e.g. Google Analytics), if enabled</li>
              </ul>
              <p>These providers process data in accordance with their own privacy policies.</p>
              <p>We do not use cookies to store payment details.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>4. Managing Cookies</h3>
              <p>You can control or disable cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of the website.</p>

              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>5. Contact</h3>
              <p>If you have any questions about this Cookies Policy, please contact us at:<br /><a href="mailto:info@paradaisvoyage.com" style={{ color: '#ffd700' }}>info@paradaisvoyage.com</a></p>
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