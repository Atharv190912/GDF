'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.dispatchEvent(new Event('DOMContentLoaded'));
    }
  }, []);

  return (
    <>
      <style>{`
        .adm-table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 0.85rem; color: #333; }
        .adm-table th, .adm-table td { padding: 12px; text-align: left; border-bottom: 1px solid #eee; }
        .adm-table th { background: #f8f9fa; font-weight: 700; color: #1a2740; }
        .type-badge { padding: 4px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }
        .type-badge.delegate { background: #e3f2fd; color: #1976d2; }
        .type-badge.chair { background: #f3e5f5; color: #7b1fa2; }
        .type-badge.team { background: #e8f5e9; color: #2e7d32; }
        .status-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.7rem; font-weight: 700; }
        .status-badge.pending { background: #fff3e0; color: #f57c00; }
        .status-badge.accepted { background: #e8f5e9; color: #2e7d32; }
        .status-badge.declined { background: #ffebee; color: #c62828; }
        .btn-s { padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem; font-weight: 600; margin-right: 5px; }
        .btn-acc { background: #2e7d32; color: #fff; }
        .btn-dec { background: #c62828; color: #fff; }
        .stat-card { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); text-align: center; }
        .stat-card h3 { font-size: 0.8rem; color: #666; margin-bottom: 8px; }
        .stat-card .num { font-size: 1.8rem; font-weight: 800; color: #1a2740; }
      `}</style>
      {/* EmailJS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={() => { (window as any).emailjs?.init('cck5UdkTGd-58RJEU'); }}
      />
      {/* Site scripts - v2 */}
      <Script src={`/gdf-scripts.js?v=${Date.now()}`} strategy="afterInteractive" />

{/* NAV */}
<nav>
  <a href="#hero" className="nav-brand">
    <img src="images/LGC.png" />
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
      <span>Global Diplomatic Foundation</span>
      <span style={{ color: 'var(--gold)', fontSize: '.45rem', marginTop: '4px' }}>INTERNATIONAL</span>
    </div>
  </a>
<div className="nav-links">
  <a href="#conferences">Conference</a>
  <a href="#news">Updates</a>
  <a href="#wwa">About Our Foundation</a>
  <a href="#" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openWhyGdf) (window as any).openWhyGdf(); }}>Why GDF</a>
  <a href="#" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openFaq) (window as any).openFaq(); }}>FAQ</a>
  <a href="#contact">Contact</a>
</div>
<div className="nav-socials">
  <a href="https://www.facebook.com/profile.php?id=61580761976168" target="_blank" rel="noopener">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
  </a>
  <a href="https://www.linkedin.com/in/gdf-international-6089ab3ab/" target="_blank" rel="noopener">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  </a>
  <a href="https://www.instagram.com/gdf_international/" target="_blank" rel="noopener">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  </a>
</div>
</nav>

{/* HERO */}
<section id="hero">
  <div className="hero-photo"></div>
  <div className="hero-dim"></div>
  <div className="hero-body">
    <img src="/images/img_002_3ea5b8ad.png" alt="GDF" className="hero-crest" />
    <h1>Think Globally.<br />Lead Diplomatically.</h1>
    <p>The Global Diplomatic Foundation fosters a culture of dialogue, leadership, and international cooperation — bringing together students from diverse backgrounds to build the next generation of global leaders.</p> 
    <a href="#wwa" className="btn-sq-outline">Learn More</a>
  </div>
</section>

{/* RUNNING TEXT MARQUEE */}
<div className="marquee-section">
  <div className="marquee-track" id="marqueeTrack">
    {/* Two copies for seamless loop */}
    <div className="marquee-item">
      <span className="marquee-dot"></span><span className="marquee-text">Global Diplomatic Foundation</span>
      <span className="marquee-dot"></span><span className="marquee-text">Diplomacy &amp; Leadership</span>
      <span className="marquee-dot"></span><span className="marquee-text">International Cooperation</span>
      <span className="marquee-dot"></span><span className="marquee-text">Youth Empowerment</span>
      <span className="marquee-dot"></span><span className="marquee-text">Model United Nations</span>
      <span className="marquee-dot"></span><span className="marquee-text">GDF International 19-20 Dec 2026</span>
      <span className="marquee-dot"></span><span className="marquee-text">Sharjah, UAE</span>
    </div>
    <div className="marquee-item" aria-hidden="true">
      <span className="marquee-dot"></span><span className="marquee-text">Global Diplomatic Foundation</span>
      <span className="marquee-dot"></span><span className="marquee-text">Diplomacy &amp; Leadership</span>
      <span className="marquee-dot"></span><span className="marquee-text">International Cooperation</span>
      <span className="marquee-dot"></span><span className="marquee-text">Youth Empowerment</span>
      <span className="marquee-dot"></span><span className="marquee-text">Model United Nations</span>
      <span className="marquee-dot"></span><span className="marquee-text">GDF International 19-20 Dec 2026</span>
      <span className="marquee-dot"></span><span className="marquee-text">Sharjah, UAE</span>
    </div>
  </div>
</div>

{/* CONFERENCES & EVENTS */}
<section id="conferences" className="pad" style={{ background: 'var(--beige)' }}>
  <div className="wrap" style={{ position: 'relative', zIndex: '1' }}>
    <p className="tag">Upcoming Events</p>
    <h2 className="h2">Conferences &amp; Events</h2>
    <div className="divider"></div>

    <div style={{ display: 'flex', justifyContent: 'center' }}>

      {/* GDF INTERNATIONAL */}
      <div style={{ maxWidth: '600px', width: '100%', background: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 6px 25px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', border: '1px solid #eee' }}>
        <div style={{ background: '#1a2740', padding: '0', position: 'relative' }}>
          <img src="images/GDFI.png" style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', display: 'block' }} alt="GDF International" />
          <div style={{ position: 'absolute', bottom: '12px', left: '16px', background: 'rgba(0,33,71,0.9)', backdropFilter: 'blur(4px)', padding: '4px 12px', borderRadius: '6px', color: '#fff', fontSize: '0.8rem', fontWeight: '700' }}>
            20 AED · 19-20 DEC 2026
          </div>
        </div>
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: '1', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '.05em', textTransform: 'uppercase', color: '#1a2740', marginBottom: '8px' }}>GDF International</div>
            <p style={{ fontSize: '.95rem', color: 'var(--muted)', lineHeight: '1.75', marginBottom: '24px' }}>
              Our flagship global conference bringing together students from across the globe to build the next generation of international leaders and diplomats.
            </p>
          </div>
          <div>
            <button className="btn-sq-solid" onClick={() => { if (typeof window !== 'undefined' && (window as any).openReg) (window as any).openReg(); }} style={{ width: '100%', padding: '14px 20px', letterSpacing: '.08em' }}>
              REGISTER FOR GDF INTERNATIONAL
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* WHO WE ARE */}
<section id="wwa" className="pad" style={{ background: 'var(--off)' }}>
  <div className="wrap">
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div>
        <p className="tag">Our Mission</p>
        <h2 className="h2">Who We Are</h2>
        <div className="divider"></div>
        <p className="body-text">The Global Diplomatic Foundation is dedicated to empowering young minds through strategic diplomatic dialogue, leadership development, and international cooperation. Our expert-led approach brings together students from diverse backgrounds to create meaningful debate, build cross-cultural understanding, and develop the next generation of global leaders.</p>
      </div>
      <img src="images/tinted_large.jpg" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
    </div>
  </div>
</section>

{/* NEWS */}
<section id="news" className="pad" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <p className="tag">Updates</p>
    <h2 className="h2">Latest News</h2>
    <div className="divider"></div>
    <div className="news-grid">
      <div>
        <img src="images/DEL.png" alt="News Image" /> <br /> 
        <div className="news-title">GDF International Dates Announced!</div>
        <div className="news-text">We are thrilled to announce that GDF International is officially scheduled for 19th - 20th December 2026 in Sharjah, UAE. Mark your calendars for the premier Model UN event!</div>
      </div>
      <div>
        <img src="images/SA.png" alt="News Image" /> <br />    
        <div className="news-title">Delegate Applications: Now Open!</div>
        <div className="news-text">Delegate applications for GDF International are Now Open! Limited spots are available — register now to secure your place.</div>
      </div>
      <div>
        <img src="images/MYC.png" alt="News Image" /> <br />        
        <div className="news-title">Secretariat Applications Open</div>
        <div className="news-text">Want to be part of the organizing team? Applications to join the GDF Secretariat are currently open. Check out the "Join Our Team" section for more details.</div>
      </div>
    </div>
  </div>
</section>

{/* TESTIMONIALS */}
<section id="testimonials">
  <div className="wrap">
    <div className="t-overflow">
      <div className="t-track" id="tTrack">
        <div className="t-slide">
          <blockquote>“At GDF, we inspire leadership through debate, diplomacy, and principled action.”
</blockquote>
          <cite>— Founder & CEO</cite>
        </div>
        <div className="t-slide">
          <blockquote>“Through GDF, we strive young minds to transcend boundaries & lead with purpose."</blockquote>
          <cite>— President</cite>
        </div>
        <div className="t-slide">
          <blockquote>“Our mission is to coordinate, support, and empower global teams in true diplomacy.”
</blockquote>
          <cite>— Global Manager</cite>
        </div>
      </div>
    </div>
    <div className="t-nav">
      <button className="t-btn" onClick={() => { (window as any).tPrev(); }}>&#8592;</button>
      <button className="t-btn" onClick={() => { (window as any).tNext(); }}>&#8594;</button>
    </div>
  </div>
</section>





{/* TEAM */}
<section id="team" className="pad" style={{ background: 'var(--white)' }}>
  <div className="wrap">
    <p className="tag">The People Behind GDF</p>
    <h2 className="h2">Our Team</h2>
    <div className="divider"></div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridTemplateRows: 'repeat(2,340px)', gap: '10px' }}>

      {/* Row 1 */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--beige2)' }}>
        <img src="images/Atharv.jpg" />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent,rgba(15,25,60,.82))', padding: '18px 16px 14px' }}>
          <div style={{ color: '#fff', fontSize: '.88rem', fontWeight: '700' }}>Atharv Johari</div>
          <div style={{ color: 'var(--gold)', fontSize: '.74rem', marginTop: '3px' }}>Founder &amp; CEO</div>
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--beige2)' }}>
        <img src="images/mohit_tinted.jpg" />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent,rgba(15,25,60,.82))', padding: '18px 16px 14px' }}>
          <div style={{ color: '#fff', fontSize: '.88rem', fontWeight: '700' }}>Mohit Tanay Dandamudi</div>
          <div style={{ color: 'var(--gold)', fontSize: '.74rem', marginTop: '3px' }}>President</div>
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--beige2)' }}>
        <img src="images/tinted_student.jpg" />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent,rgba(15,25,60,.82))', padding: '18px 16px 14px' }}>
          <div style={{ color: '#fff', fontSize: '.88rem', fontWeight: '700' }}>Pranav Sajith Nair</div>
          <div style={{ color: 'var(--gold)', fontSize: '.74rem', marginTop: '3px' }}>Global Manager</div>
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--beige2)' }}>
        <img src="images/omisha.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent,rgba(15,25,60,.82))', padding: '18px 16px 14px' }}>
          <div style={{ color: '#fff', fontSize: '.88rem', fontWeight: '700' }}>Omisha Chandrashekar Hegde</div>
          <div style={{ color: 'var(--gold)', fontSize: '.74rem', marginTop: '3px' }}>Chief Operations Officer</div>
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--beige2)' }}>
        <img src="images/guru.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent,rgba(15,25,60,.82))', padding: '18px 16px 14px' }}>
          <div style={{ color: '#fff', fontSize: '.88rem', fontWeight: '700' }}>Guru Sriman Murari</div>
          <div style={{ color: 'var(--gold)', fontSize: '.74rem', marginTop: '3px' }}>Chief Communication Officer</div>
        </div>
      </div>

      {/* Join Our Team cell */}
      <div style={{ background: 'var(--navy)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '32px' }}>
        <div style={{ color: 'var(--gold)', fontSize: '2rem' }}>✦</div>
        <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '.85rem', textAlign: 'center', lineHeight: '1.7', fontFamily: 'Arial,Helvetica,sans-serif' }}>Want to be part of something global?</p>
        <button onClick={() => { if (typeof window !== 'undefined' && (window as any).openTeamApp) (window as any).openTeamApp(); }} style={{ fontSize: '.72rem', padding: '12px 28px', cursor: 'pointer', border: '1.5px solid rgba(255,255,255,.5)', background: 'transparent', color: '#fff', fontFamily: 'Arial,Helvetica,sans-serif', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Join Our Team</button>
      </div>

    </div>{/* end grid */}
  </div>{/* end wrap */}
</section>{/* end team section */}

{/* ========== SOCIAL ========== */}
<section id="social" style={{ background: 'var(--navy)', padding: '70px 0 80px', overflow: 'hidden', marginTop: '100px' }}>
  <div style={{ width: '100%', overflow: 'hidden', marginBottom: '44px' }}>
    <svg viewBox="0 0 1200 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <defs><path id="arcStatic" d="M50,115 Q600,5 1150,115"/></defs>
      <text fontFamily="Arial,Helvetica,sans-serif" fontSize="72" fontWeight="900" fill="white" letterSpacing="3">
        <textPath href="#arcStatic" startOffset="50%" textAnchor="middle">Follow Us On Social Media</textPath>
      </text>
    </svg>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
    <a href="https://www.facebook.com/profile.php?id=61580761976168" target="_blank" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '54px', height: '54px', background: '#fff', borderRadius: '10px', color: '#1b2a4a' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
    </a>
    <a href="https://www.instagram.com/gdf_international/" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '54px', height: '54px', background: '#fff', borderRadius: '10px', color: '#1b2a4a' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/gdf-international-6089ab3ab/" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '54px', height: '54px', background: '#fff', borderRadius: '10px', color: '#1b2a4a' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06C12.66 9.1 14 8 16 8c4 0 5 2.6 5 6v10h-5v-9c0-2.1-.04-4.8-3-4.8S10 12.9 10 15v9H7.5V8z"/></svg>
    </a>
  </div>
</section>

{/* ========== SPONSORS ========== */}
<section id="sponsors" style={{ background: '#fff', padding: '60px 0' }}>
  <div className="wrap" style={{ textAlign: 'center' }}>
    <p className="tag" style={{ textAlign: 'center' }}>Our Partners</p>
    <h2 className="h2" style={{ textAlign: 'center' }}>Sponsors &amp; Partners</h2>
    <div className="divider" style={{ margin: '0 auto 40px' }}></div>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '48px', marginBottom: '48px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ background: '#fff', padding: '24px 36px', border: '1px solid #e8e4da', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '200px', minHeight: '90px' }} onMouseOver={(e) => { const t = e.currentTarget; t.style.boxShadow='0 4px 20px rgba(0,0,0,.1)'; }} onMouseOut={(e) => { const t = e.currentTarget; t.style.boxShadow='none'; }}>
          <img src="images/solarize.png" alt="Solarize Digitech" style={{ maxHeight: '70px', maxWidth: '180px', objectFit: 'contain' }} />
        </div>
        <span style={{ fontSize: '.72rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>Technology Partner</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ background: '#fff', padding: '8px 12px', border: '1px solid #e8e4da', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '200px', minHeight: '90px' }} onMouseOver={(e) => { const t = e.currentTarget; t.style.boxShadow='0 4px 20px rgba(0,0,0,.1)'; }} onMouseOut={(e) => { const t = e.currentTarget; t.style.boxShadow='none'; }}>
          <img src="images/earthaid.png" alt="EarthAid" style={{ maxHeight: '80px', maxWidth: '190px', objectFit: 'contain' }} />
        </div>
        <span style={{ fontSize: '.72rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>Sustainability Partner</span>
      </div>
    </div>
    <p style={{ fontSize: '.9rem', color: 'var(--muted)' }}>Interested in sponsoring GDF? <a href="#contact" style={{ color: 'var(--navy)', fontWeight: '700', textDecoration: 'underline' }}>Get in touch</a></p>
  </div>
</section>

{/* ========== CONTACT ========== */}
<section id="contact" className="pad" style={{ background: 'var(--beige)' }}>
  <div className="wrap">
    <div className="contact-grid">
      <div className="c-left">
        <p className="tag">Get In Touch</p>
        <h2 style={{ fontSize: 'clamp(1.8rem,3.2vw,2.8rem)', fontWeight: '700', letterSpacing: '-.02em', lineHeight: '1.1', marginBottom: '18px' }}>Contact Us</h2>
        <div className="divider"></div>
        <p style={{ marginBottom: '28px' }}>Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to hear from you!</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '.9rem', color: 'var(--muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '36px', height: '36px', background: 'var(--navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.12 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </span>
            <a href="tel:+971562971909" style={{ color: 'var(--muted)', textDecoration: 'none' }}>+971 56 297 1909</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '36px', height: '36px', background: 'var(--navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <div>
              <a href="mailto:info@gdfintl.org" style={{ color: 'var(--muted)', textDecoration: 'none' }}>info@gdfintl.org</a><br />
              <a href="mailto:globaldiplomaticfoundaiton@gmail.com" style={{ color: 'var(--muted)', textDecoration: 'none' }}>globaldiplomaticfoundaiton@gmail.com</a>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '36px', height: '36px', background: 'var(--navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <span>Sharjah, United Arab Emirates</span>
          </div>
        </div>
      </div>
      <div className="c-form">
        <div className="c-group">
          <span className="c-lbl">Name</span>
          <div className="c-row">
            <div className="c-group">
              <label className="c-lbl" style={{ fontSize: '.73rem', color: '#999' }}>First Name <span className="c-sub">(required)</span></label>
              <input type="text" className="inp" id="cFname" />
            </div>
            <div className="c-group">
              <label className="c-lbl" style={{ fontSize: '.73rem', color: '#999' }}>Last Name <span className="c-sub">(required)</span></label>
              <input type="text" className="inp" id="cLname" />
            </div>
          </div>
        </div>
        <div className="c-group">
          <label className="c-lbl">Email <span className="c-sub">(required)</span></label>
          <input type="email" className="inp" id="cEmail" />
        </div>
        <div className="c-group">
          <label className="c-lbl">Message <span className="c-sub">(required)</span></label>
          <textarea className="inp" rows={5} id="cMsg"></textarea>
        </div>
        <div><button id="cBtn" className="btn-solid" style={{ padding: '14px 44px' }} onClick={() => { if (typeof window !== 'undefined' && (window as any).sendContact) (window as any).sendContact(); }}>Send Message</button></div>
        <div id="cStatus" style={{ marginTop: '12px', fontSize: '.85rem', display: 'none' }}></div>
      </div>
    </div>
  </div>
</section>

{/* ========== WHY GDF OVERLAY ========== */}
<div className="overlay" id="whyGdfOverlay">
  <div className="ov-nav">
    <a href="#" onClick={() => { (window as any).closeWhyGdf(); return false; }} className="nav-brand">
      <img src="images/LGC.png" />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
        <span>Global Diplomatic Foundation</span>
        <span style={{ color: 'var(--gold)', fontSize: '.45rem', marginTop: '4px' }}>INTERNATIONAL</span>
      </div>
    </a>
    <div style={{ display: 'flex', gap: '32px' }}>
      <a href="#" onClick={() => { (window as any).closeWhyGdf(); return false; }} style={{ color: 'rgba(255,255,255,.75)', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Close &#215;</a>
    </div>
  </div>
  <div className="ov-inner" style={{ background: 'var(--off)', minHeight: '100vh', padding: '120px 20px 80px' }}>
    <div className="wrap">
      <p className="tag" style={{ textAlign: 'center' }}>Why Choose GDF?</p>
      <h2 className="h2" style={{ textAlign: 'center' }}>The Best MUN &amp; Debate Conference in the UAE</h2>
      <div className="divider" style={{ margin: '0 auto 40px' }}></div>
      <p style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px', color: 'var(--muted)', lineHeight: '1.8', fontSize: '1rem' }}>
        The <strong>Global Diplomatic Foundation (GDF)</strong> hosts <strong>GDF International</strong> — the most quality, most affordable, and best <strong>Model United Nations (MUN)</strong> and <strong>debate conference</strong> in the UAE and Middle East. Whether you're looking for the <strong>cheapest MUN</strong>, the <strong>world's best MUN</strong>, or a premium <strong>debate experience</strong>, GDF is the answer.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
        {[
          { icon: '🏆', title: 'Best MUN in UAE', desc: 'GDF International is recognised as one of the best Model United Nations conferences in the UAE, delivering a world-class MUN experience for students.' },
          { icon: '💰', title: 'Cheapest MUN Conference', desc: 'At just 20 AED for GDF International — and completely FREE for GDF Delegate Day — we are the most affordable MUN conference available anywhere.' },
          { icon: '✨', title: 'Most Quality MUN', desc: 'Expert-led committees, professional debate formats, real diplomatic simulations — GDF International sets the standard for quality MUN conferences.' },
          { icon: '🎤', title: 'Premier Debate Conference', desc: 'From structured debate to parliamentary procedure, GDF offers the best debate conference experience for students in Sharjah, Dubai, and across the UAE.' },
          { icon: '🌍', title: 'International & Inclusive', desc: 'Students from across the globe participate in GDF conferences, making it a truly international MUN experience with diverse perspectives.' },
          { icon: '🚀', title: 'Leadership Development', desc: 'Beyond MUN and debate, GDF builds the next generation of global leaders through diplomacy, collaboration, and youth empowerment programs.' },
        ].map((item, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '28px 24px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
            <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#1a2740', marginBottom: '10px', letterSpacing: '-0.01em' }}>{item.title}</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* ========== FAQ OVERLAY (Rich Snippets) ========== */}
<div className="overlay" id="faqOverlay">
  <div className="ov-nav">
    <a href="#" onClick={() => { (window as any).closeFaq(); return false; }} className="nav-brand">
      <img src="images/LGC.png" />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
        <span>Global Diplomatic Foundation</span>
        <span style={{ color: 'var(--gold)', fontSize: '.45rem', marginTop: '4px' }}>INTERNATIONAL</span>
      </div>
    </a>
    <div style={{ display: 'flex', gap: '32px' }}>
      <a href="#" onClick={() => { (window as any).closeFaq(); return false; }} style={{ color: 'rgba(255,255,255,.75)', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Close &#215;</a>
    </div>
  </div>
  <div className="ov-inner" style={{ background: '#fff', minHeight: '100vh', padding: '120px 20px 80px' }}>
    <div className="wrap">
      <p className="tag" style={{ textAlign: 'center' }}>Frequently Asked Questions</p>
      <h2 className="h2" style={{ textAlign: 'center' }}>MUN &amp; Debate Conference FAQ</h2>
      <div className="divider" style={{ margin: '0 auto 48px' }}></div>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { q: 'What is the best MUN conference?', a: 'GDF International by the Global Diplomatic Foundation is one of the best MUN (Model United Nations) conferences, offering the highest quality debate, diplomacy training, and leadership development for students in the UAE and globally.' },
          { q: 'What is the cheapest MUN conference?', a: 'GDF International offers one of the most affordable MUN experiences at just 20 AED. GDF Delegate Day is completely FREE — making it the cheapest MUN conference available. Register at gdfintl.org.' },
          { q: 'What is the most quality MUN in the UAE?', a: 'GDF International, organised by the Global Diplomatic Foundation, is the most quality MUN conference in the UAE. It features expert-led committees, professional debate formats, and real diplomatic simulations for students.' },
          { q: 'What is the best debate conference for students?', a: 'GDF International and GDF Delegate Day by the Global Diplomatic Foundation are the best debate conferences for students in the UAE and Middle East, combining debate, Model United Nations, and diplomacy training.' },
          { q: 'What is GDF International?', a: 'GDF International is the flagship Model United Nations (MUN) and debate conference by the Global Diplomatic Foundation (GDF). It brings together students from across the globe to debate global issues, develop leadership skills, and experience real diplomacy.' },
          { q: 'Is there a free MUN conference in UAE?', a: 'Yes! GDF Delegate Day by the Global Diplomatic Foundation is a completely free MUN and debate event open to all registered delegates — the cheapest and most accessible MUN experience in the UAE.' },
          { q: 'How do I register for a MUN conference in UAE?', a: 'Register for GDF International or GDF Delegate Day — the best MUN conferences in the UAE — by visiting gdfintl.org and clicking Register. Spots are limited, so apply early!' },
        ].map((item, i) => (
          <details key={i} style={{ background: 'var(--off)', borderRadius: '10px', border: '1px solid #eee', overflow: 'hidden' }}>
            <summary style={{ padding: '20px 24px', fontWeight: '700', fontSize: '0.95rem', color: '#1a2740', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{item.q}</span>
              <span style={{ fontSize: '1.2rem', color: 'var(--gold)', flexShrink: 0, marginLeft: '16px' }}>+</span>
            </summary>
            <p style={{ padding: '0 24px 20px', color: 'var(--muted)', lineHeight: '1.75', fontSize: '0.9rem', margin: 0 }}>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </div>
</div>


{/* ========== FOOTER ========== */}
<footer>
  <div className="ft-grid">
    <div>
      <div className="ft-brand" id="ftBrand">Global Diplomatic Foundation</div>
      <div className="ft-tag">Check Us Out!</div>
      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.1)', marginTop: '4px' }}>Build v2.4.1</div>
    </div>
    <div className="ft-col">
      <div className="ft-col-title">Location</div>
      <p>Sharjah,<br />United Arab Emirates</p>
    </div>
    <div className="ft-col">
      <div className="ft-col-title">Contact</div>
      <p>
        <a href="mailto:info@gdfintl.org">info@gdfintl.org</a><br />
        <a href="mailto:globaldiplomaticfoundaiton@gmail.com">globaldiplomaticfoundaiton@gmail.com</a><br />
        (+971) 56 297 1909
      </p>
    </div>

  </div>
</footer>

{/* ========== SERVICE OVERLAY (Conference) ========== */}
<div className="overlay" id="svcOverlay">
  <div className="ov-nav">
    <a href="#" onClick={() => { (window as any).closeSvc(); return false; }} className="nav-brand">
      <img src="images/LGC.png" />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
        <span>Global Diplomatic Foundation</span>
        <span style={{ color: 'var(--gold)', fontSize: '.45rem', marginTop: '4px' }}>INTERNATIONAL</span>
      </div>
    </a>
    <div style={{ display: 'flex', gap: '32px' }}>
      <a href="#" onClick={() => { (window as any).closeSvc(); return false; }} style={{ color: 'rgba(255,255,255,.75)', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Conference</a>
      <a href="#" style={{ color: 'rgba(255,255,255,.75)', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>About Our Foundation</a>
      <a href="#contact" onClick={() => { (window as any).closeSvc(); }} style={{ color: 'rgba(255,255,255,.75)', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Contact</a>
    </div>
  </div>
  <div className="ov-inner">
    <div className="crumb"><a href="#" onClick={() => { (window as any).closeSvc(); return false; }}>Conference</a> &rsaquo; GDF International</div>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '48px', maxWidth: '900px' }}>
      <div style={{ flex: '0 0 42%' }}>
        <img src="images/GDFINTL.png" style={{ width: '100%', display: 'block', borderRadius: '8px' }} />
      </div>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '16px' }}>
        <h1 className="svc-h1" style={{ marginTop: '0' }}>GDF International</h1>
        <div className="svc-price">20 AED</div>
        <p className="svc-desc">GDF International is a youth-focused platform dedicated to fostering diplomacy, leadership, and global engagement. Register below to secure your delegate spot.</p>
        <div style={{ marginTop: '24px', width: '100%', position: 'relative' }}>
          <button className="btn-solid" style={{ width: '100%', padding: '15px' }} onClick={() => { if (typeof window !== 'undefined' && (window as any).openReg) (window as any).openReg(); }}>Register as Delegate</button>
          <span style={{ position: 'absolute', top: '-12px', right: '10px', background: '#e74c3c', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Opening Soon · Apr 7</span>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ========== TEAM SERVICE OVERLAY ========== */}
<div className="overlay" id="teamOverlay">
  <div className="ov-nav">
    <a href="#" onClick={() => { (window as any).closeTeamOverlay(); return false; }} className="nav-brand">
      <img src="images/LGC.png" />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
        <span>Global Diplomatic Foundation</span>
        <span style={{ color: 'var(--gold)', fontSize: '.45rem', marginTop: '4px' }}>INTERNATIONAL</span>
      </div>
    </a>
    <div style={{ display: 'flex', gap: '32px' }}>
      <a href="#" onClick={() => { (window as any).closeTeamOverlay(); return false; }} style={{ color: 'rgba(255,255,255,.75)', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Conference</a>
      <a href="#" style={{ color: 'rgba(255,255,255,.75)', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>About Our Foundation</a>
      <a href="#contact" onClick={() => { (window as any).closeTeamOverlay(); }} style={{ color: 'rgba(255,255,255,.75)', fontSize: '.78rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Contact</a>
    </div>
  </div>
  <div className="ov-inner">
    <div className="crumb"><a href="#" onClick={() => { (window as any).closeTeamOverlay(); return false; }}>Home</a> &rsaquo; Join Our Team</div>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '48px', maxWidth: '700px' }}>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '16px' }}>
        <h1 className="svc-h1" style={{ marginTop: '0' }}>Join the Secretariat</h1>
        <p className="svc-desc" style={{ marginTop: '12px' }}>Be part of the team that makes GDF happen. We're looking for passionate individuals in Marketing, Operations, Graphic Design, and Social Media.</p>
        <div style={{ marginTop: '24px', width: '100%' }}>
          <button className="btn-solid" style={{ width: '100%', padding: '15px' }} onClick={() => { (window as any).closeTeamOverlay(); (window as any).openTeamApp(); }}>Apply Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ========== REGISTRATION MODAL ========== */}
<div style={{ display: 'none', position: 'fixed', inset: '0', zIndex: '9999', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'rgba(8,14,36,.65)' }} id="regBackdrop">
  <div className="modal" style={{ maxWidth: '600px' }}>
    <button className="modal-x" onClick={() => { (window as any).closeReg(); }}>&#215;</button>
    <div className="step-row" id="regStepRow">
      <div className="s-dot on" id="rs0" style={{ background: 'var(--gold)', borderColor: 'var(--gold)', padding: '0', overflow: 'visible' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2 L14.5 10 L22 12 L14.5 14 L12 22 L9.5 14 L2 12 L9.5 10 Z" fill="white"/></svg>
      </div>
      <div className="s-line" id="rl01"></div>
      <div className="s-dot" id="rs1">1</div>
      <div className="s-line" id="rl12"></div>
      <div className="s-dot" id="rs2">2</div>
      <div className="s-line" id="rl23"></div>
      <div className="s-dot" id="rs3">3</div>
      <div className="s-line" id="rl34"></div>
      <div className="s-dot" id="rs4">4</div>
    </div>

    {/* ── STEP 0: Role Selection ── */}
    <div id="rStep0" style={{ display: 'block' }}>
      <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '6px' }}>GDF Registration</h3>
      <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: '4px' }}>How would you like to participate?</p>
      <div className="role-cards">
        <div className="role-card" id="roleDelegate" onClick={() => { if (typeof window !== 'undefined' && (window as any).selectRole) (window as any).selectRole('delegate'); }}>
          <div className="role-check">&#10003;</div>
          <div className="role-title">Delegate</div>
          <div className="role-desc">Represent a country or portfolio in a committee and debate global issues.</div>
        </div>
        <div className="role-card" id="roleChair" onClick={() => { if (typeof window !== 'undefined' && (window as any).selectRole) (window as any).selectRole('chair'); }}>
          <div className="role-check">&#10003;</div>
          <div className="role-title">Chair</div>
          <div className="role-desc">Lead and moderate a committee as a Chairperson or Vice-Chair.</div>
        </div>
      </div>
      <div id="roleError" style={{ color: '#e53', fontSize: '.82rem', marginBottom: '12px', display: 'none' }}>Please select a role to continue.</div>
      <button className="btn-solid" style={{ width: '100%', padding: '14px' }} onClick={() => { (window as any).regNext(0); }}>Continue →</button>
    </div>

    {/* ── STEP 1 (Delegate): Personal Details ── */}
    <div id="rStep1" style={{ display: 'none' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>Delegate Registration</h3>
      <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '20px' }}>Step 1 of 4 — Personal Details</p>
      <div className="mf"><div className="m2">
        <div><label className="ml">First Name <span className="req">*</span></label><input type="text" className="mi" id="d_fn" /></div>
        <div><label className="ml">Last Name <span className="req">*</span></label><input type="text" className="mi" id="d_ln" /></div>
      </div></div>
      <div className="mf"><div className="m2">
        <div><label className="ml">Age <span className="req">*</span></label><input type="number" className="mi" id="d_age" min="10" max="30" placeholder="e.g. 17" /></div>
        <div><label className="ml">Phone <span className="req">*</span></label><input type="tel" className="mi" id="d_ph" placeholder="+971 XX XXX XXXX" /></div>
      </div></div>
      <div className="mf"><label className="ml">Email <span className="req">*</span></label><input type="email" className="mi" id="d_em" /></div>
      <div className="mf"><label className="ml">Address <span className="req">*</span></label>
        <input type="text" className="mi" id="d_addr" placeholder="Street address" style={{ marginBottom: '8px' }} />
        <div className="m2" style={{ marginBottom: '8px' }}>
          <select className="mi" id="d_country" onChange={(e) => { (window as any).onCountryChange(); }}><option value="">Country *</option></select>
          <select className="mi" id="d_city"><option value="">City / Region *</option></select>
        </div>
        <div id="emirate_row" style={{ display: 'none', marginBottom: '8px' }}>
          <select className="mi" id="d_emirate" style={{ width: '100%' }}>
            <option value="">Emirate *</option>
            <option>Abu Dhabi</option><option>Dubai</option><option>Sharjah</option>
            <option>Ajman</option><option>Ras Al Khaimah</option><option>Fujairah</option><option>Umm Al Quwain</option>
          </select>
        </div>
      </div>
      <button className="btn-solid" style={{ width: '100%', padding: '14px', marginTop: '8px' }} onClick={() => { (window as any).regNext(1); }}>Next: Committee Preferences →</button>
    </div>

    {/* ── STEP 2 (Delegate): Committee Preferences — CARD GRID ── */}
    <div id="rStep2" style={{ display: 'none' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>Committee Preferences</h3>
      <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '6px' }}>Step 2 of 4 — Select up to <strong>3 committees</strong></p>
      <p className="comm-sel-count c0" id="commSelCount">0 / 3 selected</p>

      <div className="comm-grid" id="committeeGrid"></div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn-outline" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).regBack(2); }}>← Back</button>
        <button className="btn-solid" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).regNext(2); }}>Next: Portfolio →</button>
      </div>
    </div>

    {/* ── STEP 3 (Delegate): Portfolio ── */}
    <div id="rStep3" style={{ display: 'none' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>Portfolio Preference</h3>
      <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '20px' }}>Step 3 of 4 — Choose your preferred country/role for each committee</p>
      <div id="portfolioFields" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}></div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn-outline" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).regBack(3); }}>← Back</button>
        <button className="btn-solid" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).regNext(3); }}>Next: Payment →</button>
      </div>
    </div>

    {/* ── STEP 4 (Delegate): Payment ── */}
    <div id="rStep4" style={{ display: 'none' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>Payment</h3>
      <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '20px' }}>Step 4 of 4 — Transfer your registration fee</p>
      
      {/* Payment Type Selection */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          id="payTypeIntl"
          className="btn-outline" 
          style={{ flex: '1', padding: '10px', fontSize: '.85rem', background: 'var(--navy)', color: 'white' }}
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).setPaymentType) (window as any).setPaymentType('international');
          }}
        >
          International
        </button>
        <button 
          id="payTypeIndian"
          className="btn-outline" 
          style={{ flex: '1', padding: '10px', fontSize: '.85rem' }}
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).setPaymentType) (window as any).setPaymentType('indian');
          }}
        >
          Indian (UPI)
        </button>
      </div>

      {/* International Payment Details */}
      <div id="payDetailsIntl">
        <div className="pay-card">
          <div style={{ fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', opacity: '.6', marginBottom: '8px' }}>Registration Fee</div>
          <div style={{ fontSize: '2.4rem', fontWeight: '700', marginBottom: '4px' }}>20 AED</div>
          <div style={{ fontSize: '.82rem', opacity: '.7', marginBottom: '20px' }}>GDF International — Delegate</div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="pay-row"><span>Bank</span><span>HSBC</span></div>
            <div className="pay-row"><span>Account Name</span><span>Sanskriti Johari</span></div>
            <div className="pay-row"><span>IBAN</span><span style={{ fontFamily: 'monospace' }}>AE920200000041712654001</span></div>
            <div className="pay-row"><span>Reference</span><span style={{ fontFamily: 'monospace' }} id="payRef2">GDF-REG</span></div>
          </div>
        </div>
        <div className="warn-box">Use your full name as the payment reference. Fill in your transfer details below after paying.</div>
      </div>

      {/* Indian Payment Details (QR Code) */}
      <div id="payDetailsIndian" style={{ display: 'none' }}>
        <div className="pay-card" style={{ textAlign: 'center', background: '#fff', color: '#1a2740' }}>
          <div style={{ fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', opacity: '.6', marginBottom: '12px', color: '#666' }}>Scan to Pay (UPI)</div>
          <div style={{ background: '#fff', padding: '15px', borderRadius: '12px', display: 'inline-block', marginBottom: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <img src="images/qr_code.png" alt="Payment QR Code" style={{ width: '280px', height: '280px', display: 'block' }} />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '4px' }}>₹500 INR</div>
          <div style={{ fontSize: '.82rem', opacity: '.7', color: '#666' }}>GDF International — Delegate</div>
          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #eee' }}>
            <div style={{ fontSize: '.75rem', fontWeight: '600', color: '#999' }}>UPI ID</div>
            <div style={{ fontFamily: 'monospace', fontSize: '1rem', color: '#1a2740' }}>8871742919@axl</div>
          </div>
        </div>
        <div className="warn-box" style={{ background: 'rgba(0,0,0,0.05)', color: '#444', border: '1px solid #ddd' }}>Scan the QR code above or use the UPI ID. Fill in the transaction details below.</div>
      </div>

      <div className="mf">
        <div className="m2">
          <div>
            <label className="ml" id="lbl_chname">Cardholder / Account Name <span className="req">*</span></label>
            <input type="text" className="mi" id="d_chname" placeholder="Full Name" />
          </div>
          <div id="col_card4">
            <label className="ml">Last 4 digits of card <span className="req">*</span></label>
            <input type="text" className="mi" id="d_card4" placeholder="XXXX" maxLength={4} />
          </div>
        </div>
      </div>
      <div className="mf">
        <div className="m2">
          <div id="col_bankname">
            <label className="ml">Bank Name <span className="req">*</span></label>
            <input type="text" className="mi" id="d_bankname" placeholder="e.g. Emirates NBD" />
          </div>
          <div>
            <label className="ml" id="lbl_transref">Transaction Reference <span className="req">*</span></label>
            <input type="text" className="mi" id="d_transref" placeholder="e.g. TXN123456" />
          </div>
        </div>
      </div>
      <div className="mf"><label className="ml">Transfer Date <span className="req">*</span></label><input type="date" className="mi" id="d_transdate" /></div>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
        <button className="btn-outline" style={{ flex: '1', padding: '13px' }} onClick={() => { (window as any).regBack(4); }}>← Back</button>
        <button className="btn-solid" style={{ flex: '1', padding: '13px' }} onClick={() => { (window as any).submitDelegate(); }}>Submit Application →</button>
      </div>
    </div>


    {/* ── CHAIR STEP 1: Personal Details ── */}
    <div id="cStep1" style={{ display: 'none' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>Chair Application <span className="chair-tag">CHAIR</span></h3>
      <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '20px' }}>Step 1 of 3 — Personal Details</p>
      <div className="mf"><div className="m2">
        <div><label className="ml">First Name <span className="req">*</span></label><input type="text" className="mi" id="c_fn" /></div>
        <div><label className="ml">Last Name <span className="req">*</span></label><input type="text" className="mi" id="c_ln" /></div>
      </div></div>
      <div className="mf"><div className="m2">
        <div><label className="ml">Age <span className="req">*</span></label><input type="number" className="mi" id="c_age" min="14" max="35" placeholder="e.g. 19" /></div>
        <div><label className="ml">Phone <span className="req">*</span></label><input type="tel" className="mi" id="c_ph" placeholder="+971 XX XXX XXXX" /></div>
      </div></div>
      <div className="mf"><label className="ml">Email <span className="req">*</span></label><input type="email" className="mi" id="c_em" /></div>
      <div className="mf"><label className="ml">Address <span className="req">*</span></label>
        <input type="text" className="mi" id="c_addr" placeholder="Street address" style={{ marginBottom: '8px' }} />
        <div className="m2" style={{ marginBottom: '8px' }}>
          <select className="mi" id="c_country" onChange={(e) => { (window as any).onChairCountryChange(); }}><option value="">Country *</option></select>
          <select className="mi" id="c_city"><option value="">City / Region *</option></select>
        </div>
        <div id="c_emirate_row" style={{ display: 'none', marginBottom: '8px' }}>
          <select className="mi" id="c_emirate" style={{ width: '100%' }}>
            <option value="">Emirate *</option>
            <option>Abu Dhabi</option><option>Dubai</option><option>Sharjah</option>
            <option>Ajman</option><option>Ras Al Khaimah</option><option>Fujairah</option><option>Umm Al Quwain</option>
          </select>
        </div>
      </div>
      <div className="mf"><label className="ml">School / University <span className="req">*</span></label><input type="text" className="mi" id="c_school" placeholder="e.g. American University of Dubai" /></div>
      <button className="btn-solid" style={{ width: '100%', padding: '14px', marginTop: '8px' }} onClick={() => { (window as any).chairNext(1); }}>Next: Experience & Background →</button>
    </div>

    {/* ── CHAIR STEP 2: Experience ── */}
    <div id="cStep2" style={{ display: 'none' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>Experience & Background <span className="chair-tag">CHAIR</span></h3>
      <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '20px' }}>Step 2 of 3 — Tell us about your MUN experience</p>
      <div className="mf"><label className="ml">MUN Experience <span className="req">*</span></label>
        <select className="mi" id="c_exp_level">
          <option value="">Select experience level</option>
          <option>First MUN (no prior experience)</option>
          <option>1–2 conferences</option>
          <option>3–5 conferences</option>
          <option>6–10 conferences</option>
          <option>10+ conferences</option>
        </select>
      </div>
      <div className="mf"><label className="ml">Past Conferences Attended <span className="req">*</span></label><textarea className="mi" id="c_conferences" rows={3} placeholder="List the MUN conferences you've attended (name, year, role)..."></textarea></div>
      <div className="mf"><label className="ml">Chairing Experience</label><textarea className="mi" id="c_chair_exp" rows={3} placeholder="Any previous chairing or dais experience? If none, write 'None'"></textarea></div>
      <div className="mf"><label className="ml">Awards & Achievements</label><textarea className="mi" id="c_awards" rows={3} placeholder="List any MUN awards, Best Delegate, Outstanding Delegate, etc."></textarea></div>
      <div className="mf"><label className="ml">Relevant Skills & Strengths <span className="req">*</span></label><textarea className="mi" id="c_skills" rows={3} placeholder="e.g. Public speaking, parliamentary procedure, research..."></textarea></div>
      <div className="mf"><label className="ml">Why do you want to Chair at GDF? <span className="req">*</span></label><textarea className="mi" id="c_why" rows={3} placeholder="Tell us your motivation and what you bring to the dais..."></textarea></div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn-outline" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).chairBack(2); }}>← Back</button>
        <button className="btn-solid" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).chairNext(2); }}>Next: Committee Preferences →</button>
      </div>
    </div>

    {/* ── CHAIR STEP 3: Committee Preferences — CARD GRID ── */}
    <div id="cStep3" style={{ display: 'none' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>Committee Preferences <span className="chair-tag">CHAIR</span></h3>
      <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '10px' }}>Step 3 of 3 — Select your <strong>top 3 committees</strong> to chair, in order of preference</p>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '.76rem', fontWeight: '700' }}>
          <span className="pref-badge pb1">1st</span> 1st Choice
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '.76rem', fontWeight: '700' }}>
          <span className="pref-badge pb2">2nd</span> 2nd Choice
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '.76rem', fontWeight: '700' }}>
          <span className="pref-badge pb3">3rd</span> 3rd Choice
        </span>
      </div>

      <p className="comm-sel-count c0" id="chairCommCount">0 / 3 selected</p>

      <div className="comm-grid" id="chairCommGrid"></div>

      <p style={{ fontSize: '.75rem', color: '#aaa', marginBottom: '16px' }}>Click committees in order of preference. Click again to deselect.</p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn-outline" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).chairBack(3); }}>← Back</button>
        <button className="btn-solid" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).chairNext(3); }}>Submit Application →</button>
      </div>
    </div>

    {/* ── FINAL: Confirmation ── */}
    <div id="rStep5" style={{ display: 'none', textAlign: 'center', padding: '20px 0' }}>
      <div className="confirm-icon">&#10003;</div>
      <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '12px' }} id="confirmTitle">Application Submitted!</h3>
      <p style={{ fontSize: '.9rem', color: 'var(--muted)', lineHeight: '1.75', marginBottom: '18px' }} id="confirmMsg"></p>
      <div id="regSummary" className="reg-summary"></div>
      <button className="btn-solid" style={{ padding: '12px 40px' }} onClick={() => { (window as any).closeReg(); }}>Close</button>
    </div>

  </div>
</div>

{/* ========== TEAM APPLICATION MODAL ========== */}
<div style={{ display: 'none', position: 'fixed', inset: '0', zIndex: '9999', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'rgba(8,14,36,.65)' }} id="teamBackdrop">
  <div className="modal" style={{ maxWidth: '600px' }}>
    <button className="modal-x" onClick={() => { (window as any).closeTeamApp(); }}>&#215;</button>
    <div className="step-row">
      <div className="s-dot" id="ts0" style={{ background: 'var(--gold)', borderColor: 'var(--gold)', padding: '0', overflow: 'visible' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2 L14.5 10 L22 12 L14.5 14 L12 22 L9.5 14 L2 12 L9.5 10 Z" fill="white"/></svg>
      </div>
      <div className="s-line" id="tl01"></div>
      <div className="s-dot" id="ts1">1</div>
      <div className="s-line" id="tl12"></div>
      <div className="s-dot" id="ts2">2</div>
      <div className="s-line" id="tl23"></div>
      <div className="s-dot" id="ts3">3</div>
    </div>

    <div id="tStep1" style={{ display: 'block' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>Join Our Team <span className="chair-tag">SECRETARIAT</span></h3>
      <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '20px' }}>Step 1 of 3 — Personal Details</p>
      <div className="mf"><div className="m2">
        <div><label className="ml">First Name <span className="req">*</span></label><input type="text" className="mi" id="tm_fn" /></div>
        <div><label className="ml">Last Name <span className="req">*</span></label><input type="text" className="mi" id="tm_ln" /></div>
      </div></div>
      <div className="mf"><div className="m2">
        <div><label className="ml">Age <span className="req">*</span></label><input type="number" className="mi" id="tm_age" placeholder="e.g. 17" /></div>
        <div><label className="ml">Phone <span className="req">*</span></label><input type="tel" className="mi" id="tm_ph" placeholder="+971 XX XXX XXXX" /></div>
      </div></div>
      <div className="mf"><label className="ml">Email <span className="req">*</span></label><input type="email" className="mi" id="tm_em" /></div>
      <div className="mf"><label className="ml">Address <span className="req">*</span></label>
        <input type="text" className="mi" id="tm_addr" placeholder="Street address" style={{ marginBottom: '8px' }} />
        <div className="m2">
          <select className="mi" id="tm_country">
            <option value="">Country *</option>
            <option>United Arab Emirates</option><option>Saudi Arabia</option><option>Kuwait</option>
            <option>Qatar</option><option>Bahrain</option><option>Oman</option><option>Egypt</option>
            <option>Jordan</option><option>Iraq</option><option>Lebanon</option><option>Other</option>
          </select>
          <select className="mi" id="tm_city">
            <option value="">City / Region *</option>
            <option>Dubai</option><option>Abu Dhabi</option><option>Sharjah</option><option>Riyadh</option>
            <option>Jeddah</option><option>Kuwait City</option><option>Doha</option><option>Manama</option>
            <option>Muscat</option><option>Cairo</option><option>Amman</option><option>Baghdad</option>
            <option>Beirut</option><option>Other</option>
          </select>
        </div>
      </div>
      <div className="mf">
        <label className="ml">Department <span className="req">*</span></label>
        <select className="mi" id="tm_dept">
          <option value="">Select department *</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
          <option value="Graphic Designing">Graphic Designing</option>
          <option value="Social Media">Social Media</option>
        </select>
      </div>
      <div id="tm_e1" style={{ color: '#e53', fontSize: '.82rem', marginBottom: '12px', display: 'none' }}>Please fill in all required fields.</div>
      <button className="btn-solid" style={{ width: '100%', padding: '14px' }} onClick={() => { (window as any).teamNext(1); }}>Next: Experience →</button>
    </div>

    <div id="tStep2" style={{ display: 'none' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>Experience & Motivation <span className="chair-tag">SECRETARIAT</span></h3>
      <p style={{ fontSize: '.8rem', color: '#999', marginBottom: '20px' }}>Step 2 of 3 — Tell us about yourself</p>
      <div className="mf"><label className="ml">Relevant Experience <span className="req">*</span></label><textarea className="mi" id="tm_exp" rows={4} placeholder="Describe your skills and any relevant experience…"></textarea></div>
      <div className="mf"><label className="ml">Why do you want to join GDF? <span className="req">*</span></label><textarea className="mi" id="tm_why" rows={4} placeholder="Why do you want to join the GDF secretariat?"></textarea></div>
      <div id="tm_e2" style={{ color: '#e53', fontSize: '.82rem', marginBottom: '12px', display: 'none' }}>Please fill in all required fields.</div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn-outline" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).teamBack(2); }}>← Back</button>
        <button className="btn-solid" style={{ flex: '1', padding: '12px' }} onClick={() => { (window as any).teamNext(2); }}>Review Application →</button>
      </div>
    </div>

    <div id="tStep3" style={{ display: 'none', textAlign: 'center', padding: '20px 0' }}>
      <div className="confirm-icon">&#10003;</div>
      <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '12px' }}>Application Submitted!</h3>
      <p style={{ fontSize: '.9rem', color: 'var(--muted)', lineHeight: '1.75', marginBottom: '24px' }}>Thank you for applying to the GDF Secretariat. Our team will review your application and get back to you soon.</p>
      <button className="btn-solid" style={{ padding: '12px 40px' }} onClick={() => { (window as any).closeTeamApp(); }}>Close</button>
    </div>

  </div>
</div>




{/* ===== DELEGATE DAY REGISTRATION MODAL ===== */}
<div id="delDayBackdrop" style={{ display: 'none', position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999, alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
  <div className="modal" style={{ background: '#fff', borderRadius: '16px', width: '100%', maxWidth: '560px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', position: 'relative' }}>

    {/* Header */}
    <div style={{ background: 'linear-gradient(135deg, #002147 0%, #1a2740 100%)', padding: '28px 28px 20px', borderRadius: '16px 16px 0 0', position: 'relative' }}>
      <button onClick={() => { const el = document.getElementById('delDayBackdrop'); if (el) el.style.display = 'none'; }} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.1rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
      <span style={{ background: 'var(--gold)', color: '#002147', fontSize: '0.65rem', fontWeight: '800', padding: '3px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '10px' }}>FREE ENTRY</span>
      <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '800', margin: '0 0 4px 0' }}>GDF Delegate Day</h2>
      <p style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: '600', margin: 0 }}>16 August 2026 · Online</p>
    </div>

    {/* Form Body */}
    <div style={{ padding: '28px' }}>

      {/* Section 1: Personal Information */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontSize: '0.8rem', fontWeight: '800', color: '#002147', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', borderBottom: '2px solid var(--gold)', paddingBottom: '6px' }}>1. Personal Information</h4>
        <div className="mf"><label className="ml">Full Name (as on certificate) <span className="req">*</span></label><input className="mi" id="dd_fn" type="text" placeholder="Your full name" /></div>
        <div className="mf"><label className="ml">Email Address <span className="req">*</span></label><input className="mi" id="dd_em" type="email" placeholder="your@email.com" /></div>
        <div className="mf"><label className="ml">Phone Number (with country code) <span className="req">*</span></label><input className="mi" id="dd_ph" type="tel" placeholder="+1 234 567 8900" /></div>
        <div className="mf">
          <label className="ml">Country <span className="req">*</span></label>
          <select className="mi" id="dd_country" onChange={() => { (window as any).onDelegateDayCountryChange((document.getElementById('dd_country') as HTMLSelectElement)?.value); }}>
            <option value="">Select Country</option>
            <option value="UAE">United Arab Emirates</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mf">
          <label className="ml">City <span className="req">*</span></label>
          <select className="mi" id="dd_city"><option value="">Select City</option></select>
        </div>
        <div className="mf"><label className="ml">Date of Birth <span className="req">*</span></label><input className="mi" id="dd_dob" type="date" /></div>
        <div className="mf">
          <label className="ml">Gender (Optional)</label>
          <select className="mi" id="dd_gender">
            <option value="">Prefer not to say</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Section 2: Academic Information */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontSize: '0.8rem', fontWeight: '800', color: '#002147', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', borderBottom: '2px solid var(--gold)', paddingBottom: '6px' }}>2. Academic Information</h4>
        <div className="mf"><label className="ml">School / College / University Name <span className="req">*</span></label><input className="mi" id="dd_inst" type="text" placeholder="Your institution" /></div>
        <div className="mf"><label className="ml">Grade / Year of Study <span className="req">*</span></label><input className="mi" id="dd_grade" type="text" placeholder="e.g. Grade 11, 2nd Year" /></div>
        <div className="mf"><label className="ml">Organization (if not a student)</label><input className="mi" id="dd_org" type="text" placeholder="Your organization (optional)" /></div>
      </div>

      {/* Section 3: MUN & Diplomacy Experience */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontSize: '0.8rem', fontWeight: '800', color: '#002147', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', borderBottom: '2px solid var(--gold)', paddingBottom: '6px' }}>3. MUN &amp; Diplomacy Experience</h4>
        <div className="mf">
          <label className="ml">Have you attended a MUN before? <span className="req">*</span></label>
          <select className="mi" id="dd_mun_exp">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mf"><label className="ml">Number of MUNs attended (if applicable)</label><input className="mi" id="dd_mun_count" type="number" min="0" placeholder="0" /></div>
        <div className="mf"><label className="ml">Leadership Roles Held (Optional)</label><input className="mi" id="dd_leadership" type="text" placeholder="e.g. Secretary-General, Chair…" /></div>
      </div>

      {/* Section 4: Consent */}
      <div style={{ marginBottom: '28px' }}>
        <h4 style={{ fontSize: '0.8rem', fontWeight: '800', color: '#002147', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px', borderBottom: '2px solid var(--gold)', paddingBottom: '6px' }}>4. Consent &amp; Confirmation</h4>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontSize: '0.85rem', color: '#444', cursor: 'pointer' }}>
          <input type="checkbox" id="dd_c1" style={{ marginTop: '2px', accentColor: '#002147' }} />
          I confirm that the information provided is accurate.
        </label>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontSize: '0.85rem', color: '#444', cursor: 'pointer' }}>
          <input type="checkbox" id="dd_c2" style={{ marginTop: '2px', accentColor: '#002147' }} />
          I agree to receive updates regarding GDF events.
        </label>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#444', cursor: 'pointer' }}>
          <input type="checkbox" id="dd_c3" style={{ marginTop: '2px', accentColor: '#002147' }} />
          I consent to photography and videography during the event.
        </label>
      </div>

      {/* Submit */}
      <button id="ddSubmitBtn" className="btn-solid" style={{ width: '100%', padding: '15px', fontSize: '0.95rem', fontWeight: '700', background: 'var(--gold)', color: '#002147', border: 'none', borderRadius: '8px', cursor: 'pointer', letterSpacing: '0.05em' }} onClick={() => { (window as any).submitDelegateDay(); }}>
        Submit Delegate Day Registration
      </button>
    </div>
  </div>
</div>

    </>
  );
}
