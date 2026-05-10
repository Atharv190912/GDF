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
      <span className="marquee-dot"></span><span className="marquee-text">GDF International 2025</span>
      <span className="marquee-dot"></span><span className="marquee-text">Future Global Leaders</span>
      <span className="marquee-dot"></span><span className="marquee-text">Sharjah, UAE</span>
    </div>
    <div className="marquee-item" aria-hidden="true">
      <span className="marquee-dot"></span><span className="marquee-text">Global Diplomatic Foundation</span>
      <span className="marquee-dot"></span><span className="marquee-text">Diplomacy &amp; Leadership</span>
      <span className="marquee-dot"></span><span className="marquee-text">International Cooperation</span>
      <span className="marquee-dot"></span><span className="marquee-text">Youth Empowerment</span>
      <span className="marquee-dot"></span><span className="marquee-text">Model United Nations</span>
      <span className="marquee-dot"></span><span className="marquee-text">GDF International 2025</span>
      <span className="marquee-dot"></span><span className="marquee-text">Future Global Leaders</span>
      <span className="marquee-dot"></span><span className="marquee-text">Sharjah, UAE</span>
    </div>
  </div>
</div>

{/* CONFERENCES */}
<section id="conferences" className="pad" style={{ background: 'var(--beige)' }}>
  <div className="wrap" style={{ position: 'relative', zIndex: '1' }}>
    <p className="tag">Upcoming Events</p>
    <h2 className="h2">Conferences</h2>
    <div className="divider"></div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>

      {/* Card */}
<div className="conf-grid" style={{ flexShrink: '0', maxWidth: '310px', width: '100%' }}>
  <div className="conf-card" onClick={() => { (window as any).openService(); }} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
    
    {/* Image fills top */}
    <img src="images/GDFI.png" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', background: '#1a2740' }} />

    {/* Text section: clean white box below */}
    <div style={{ background: '#ffffff', padding: '14px 16px' }}>
      <div style={{ fontSize: '.85rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: '#1a2740' }}>GDF International</div>
      <div style={{ fontSize: '.85rem', color: '#777', marginTop: '4px' }}>20 AED</div>
    </div>

  </div>
</div>

      {/* Write-up + button */}
      <div style={{ flex: '1', minWidth: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '8px' }}>
        <p style={{ fontSize: '.97rem', color: 'var(--muted)', lineHeight: '1.85', marginBottom: '28px' }}>Stay connected with us for the latest updates and announcements regarding our upcoming conferences and global events.</p>
        <div>
          <button className="btn-sq-solid" onClick={() => { if (typeof window !== 'undefined' && (window as any).openReg) (window as any).openReg(); }} style={{ padding: '14px 40px', letterSpacing: '.1em' }}>REGISTER NOW!</button>
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
      <img src="images/MYC.png" alt="News Image" /> <br />        
<div className="news-title">Mark Your Calendar: 15th August</div>
        <div className="news-text">The GDF International Conference will commence on 15th August and continue over two days, concluding on 16th August. Join students from around the world for a landmark gathering of young diplomats and future global leaders.</div>
      </div>
      <div>
        <img src="images/DEL.png" alt="News Image" /> <br /> 
        <div className="news-title">Delegate Applications: Now Open!</div>
        <div className="news-text">Delegate applications for the GDF International are Now Open!. Limited spots are available — mark your calendars now.</div>
      </div>
      <div>
        <img src="images/SA.png" alt="News Image" /> <br />    
        <div className="news-title">Secretariat Applications Open</div>
        <div className="news-text">Applications are now open for the GDF Secretariat. Students can register to be part of the organising team shaping the conference experience.</div>
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
        <img src="images/aman_tinted.jpg" />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent,rgba(15,25,60,.82))', padding: '18px 16px 14px' }}>
          <div style={{ color: '#fff', fontSize: '.88rem', fontWeight: '700' }}>Aman Kumar Mishra</div>
          <div style={{ color: 'var(--gold)', fontSize: '.74rem', marginTop: '3px' }}>Global Manager</div>
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--beige2)' }}>
        <img src="images/tinted_student.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent,rgba(15,25,60,.82))', padding: '18px 16px 14px' }}>
          <div style={{ color: '#fff', fontSize: '.88rem', fontWeight: '700' }}>Pranav Sajith Nair</div>
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
        <button onClick={() => { (window as any).openTeamApp(); }} style={{ fontSize: '.72rem', padding: '12px 28px', cursor: 'pointer', border: '1.5px solid rgba(255,255,255,.5)', background: 'transparent', color: '#fff', fontFamily: 'Arial,Helvetica,sans-serif', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Join Our Team</button>
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
        <div><button id="cBtn" className="btn-solid" style={{ padding: '14px 44px' }} onClick={() => { (window as any).sendContact(); }}>Send Message</button></div>
        <div id="cStatus" style={{ marginTop: '12px', fontSize: '.85rem', display: 'none' }}></div>
      </div>
    </div>
  </div>
</section>

{/* ========== FOOTER ========== */}
<footer>
  <div className="ft-grid">
    <div>
      <div className="ft-brand" id="ftBrand">Global Diplomatic Foundation</div>
      <div className="ft-tag">Check Us Out!</div>
      <button id="newAdminBtn" onClick={() => { if(typeof window !== 'undefined' && (window as any).launchAdminDashboard) (window as any).launchAdminDashboard(); }} style={{ background: 'none', border: 'none', padding: '0', font: 'inherit', cursor: 'pointer', fontSize: '.72rem', color: 'rgba(255,255,255,.35)', display: 'inline-block', marginTop: '12px', borderBottom: '1px solid rgba(255,255,255,.1)' }}>System Admin Portal</button>
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
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '48px', maxWidth: '900px' }}>
      <div style={{ flex: '0 0 42%' }}>
        <img src="images/GDFTEAM.png" style={{ width: '100%', display: 'block', borderRadius: '8px' }} />
      </div>
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
        <div><label className="ml">Phone <span className="req">*</span></label><input type="tel" className="mi" id="d_ph" placeholder="+971 XX XXX XXXX" /></div>
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

{/* ========== ADMIN / ADMISSION OVERLAY ========== */}
<div style={{ display: 'none', position: 'fixed', inset: '0', zIndex: '10000', alignItems: 'center', justifyContent: 'center', background: 'rgba(8,14,36,.85)' }} id="admOverlay">
  <div style={{ width: '100%', maxWidth: '400px', padding: '40px', textAlign: 'center', background: '#fff', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
    <h2 style={{ color: '#1a2740', marginBottom: '24px', fontSize: '1.5rem', fontWeight: '800' }}>Admin Login</h2>
    <input type="text" id="admUser" placeholder="Username" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', marginBottom: '12px' }} />
    <input type="password" id="admPass" placeholder="Password" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', marginBottom: '20px' }} />
    <button className="btn-solid" style={{ width: '100%', padding: '12px' }} onClick={() => { (window as any).checkAdm(); }}>Login to Dashboard</button>
    <button className="btn-outline" style={{ width: '100%', marginTop: '12px', borderColor: '#ddd', color: '#666' }} onClick={() => { document.getElementById('admOverlay').style.display='none'; }}>Cancel</button>
  </div>
</div>


<div style={{ display: 'none', position: 'fixed', inset: '0', zIndex: '10000', background: '#fff', overflowY: 'auto' }} id="admPortal">
  <div style={{ padding: '40px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>GDF Admissions Portal</h2>
      <button className="btn-outline" onClick={() => { document.getElementById('admPortal').style.display='none'; }}>Logout</button>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '40px' }}>
      <div className="stat-card"><h3>Delegates</h3><div className="num" id="statD">0</div></div>
      <div className="stat-card"><h3>Chairs</h3><div className="num" id="statC">0</div></div>
      <div className="stat-card"><h3>Team</h3><div className="num" id="statT">0</div></div>
    </div>
    <div id="admContent"></div>
  </div>
</div>

    </>
  );
}
