'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.dispatchEvent(new Event('DOMContentLoaded'));

      // Intersection Observer for Scroll Animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
      
      // Navbar scroll effect
      const handleScroll = () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) nav?.classList.add('scrolled');
        else nav?.classList.remove('scrolled');
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <>
      <style>{`
        .adm-table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 0.85rem; color: var(--white); }
        .adm-table th, .adm-table td { padding: 12px; text-align: left; border-bottom: 1px solid rgba(212,175,55,0.1); }
        .adm-table th { background: var(--navy-card); font-weight: 700; color: var(--gold); }
        .type-badge { padding: 4px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }
        .type-badge.delegate { background: rgba(25,118,210,0.15); color: #64b5f6; }
        .type-badge.chair { background: rgba(123,31,162,0.15); color: #ce93d8; }
        .type-badge.team { background: rgba(46,125,50,0.15); color: #81c784; }
        .status-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.7rem; font-weight: 700; }
        .status-badge.pending { background: rgba(245,124,0,0.15); color: #ffb74d; }
        .status-badge.accepted { background: rgba(46,125,50,0.15); color: #81c784; }
        .status-badge.declined { background: rgba(198,40,40,0.15); color: #ef9a9a; }
        .btn-s { padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem; font-weight: 600; margin-right: 5px; }
        .btn-acc { background: #2e7d32; color: #fff; }
        .btn-dec { background: #c62828; color: #fff; }
        .stat-card { background: var(--navy-card); padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); text-align: center; border: 1px solid rgba(212,175,55,0.08); }
        .stat-card h3 { font-size: 0.8rem; color: var(--muted); margin-bottom: 8px; }
        .stat-card .num { font-size: 1.8rem; font-weight: 800; color: var(--gold); }
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
    <img src="images/LGC.png" alt="GDF Logo"/>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
      <span style={{ fontSize: '1.2rem', letterSpacing: '0.02em', fontWeight: 800 }}>Global Diplomatic Foundation</span>
      <span style={{ color: 'var(--gold)', fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700 }}>INTERNATIONAL</span>
    </div>
  </a>
<div className="nav-links montserrat">
  <a href="#wwa">About</a>
  <a href="#conferences">Events</a>
  <a href="#news">Updates</a>
  <a href="#team">Team</a>
  <a href="#" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openFaq) (window as any).openFaq(); }}>FAQ</a>
  <a href="#contact">Contact</a>
</div>
<div className="nav-socials">
  <a href="https://www.facebook.com/profile.php?id=61580761976168" target="_blank" rel="noopener">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
  </a>
  <a href="https://www.instagram.com/gdf_international/" target="_blank" rel="noopener">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  </a>
</div>
</nav>

{/* HERO */}
<section id="hero">
  <div className="hero-bg"></div>
  <div className="hero-overlay"></div>
  <div className="hero-body reveal">
    <img src="/images/img_002_3ea5b8ad.png" alt="GDF Crest" className="hero-crest float-anim" />
    <h1 style={{ fontWeight: 800 }}>Think Globally.<br />Lead Diplomatically.</h1>
    <p className="montserrat reveal delay-1">The Global Diplomatic Foundation fosters a culture of dialogue, leadership, and international cooperation — uniting ambitious students to build the next generation of global leaders.</p> 
    <div className="reveal delay-2">
      <a href="#wwa" className="btn-sq-solid" style={{ marginRight: '16px' }}>Discover GDF</a>
      <a href="#conferences" className="btn-ghost">View Events</a>
    </div>
  </div>
</section>

{/* RUNNING TEXT MARQUEE */}
<div className="marquee-section">
  <div className="marquee-track" id="marqueeTrack">
    <div className="marquee-item">
      <span className="marquee-dot"></span><span className="marquee-text">DIPLOMACY &amp; LEADERSHIP</span>
      <span className="marquee-dot"></span><span className="marquee-text">INTERNATIONAL COOPERATION</span>
      <span className="marquee-dot"></span><span className="marquee-text">YOUTH EMPOWERMENT</span>
      <span className="marquee-dot"></span><span className="marquee-text">MODEL UNITED NATIONS</span>
      <span className="marquee-dot"></span><span className="marquee-text">SHARJAH, UAE</span>
    </div>
    <div className="marquee-item" aria-hidden="true">
      <span className="marquee-dot"></span><span className="marquee-text">DIPLOMACY &amp; LEADERSHIP</span>
      <span className="marquee-dot"></span><span className="marquee-text">INTERNATIONAL COOPERATION</span>
      <span className="marquee-dot"></span><span className="marquee-text">YOUTH EMPOWERMENT</span>
      <span className="marquee-dot"></span><span className="marquee-text">MODEL UNITED NATIONS</span>
      <span className="marquee-dot"></span><span className="marquee-text">SHARJAH, UAE</span>
    </div>
  </div>
</div>

{/* WHO WE ARE */}
<section id="wwa" className="pad">
  <div className="watermark anton reveal">GLOBAL<br/>DIPLOMATIC<br/>FOUNDATION</div>
  <div className="wrap wwa-grid">
    <div className="wwa-text reveal delay-1">
      <p className="tag">Our Mission</p>
      <h2 className="h2">Empowering the Next Generation of Global Leaders</h2>
      <div className="divider"></div>
      <p className="body-text montserrat" style={{ marginBottom: '24px' }}>
        The Global Diplomatic Foundation is dedicated to empowering young minds through strategic diplomatic dialogue, leadership development, and international cooperation.
      </p>
      <p className="body-text montserrat" style={{ marginBottom: '40px' }}>
        Our expert-led approach brings together students from diverse backgrounds to create meaningful debate, build cross-cultural understanding, and solve the pressing issues of our time.
      </p>
      <a href="#" className="btn-ghost" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openWhyGdf) (window as any).openWhyGdf(); }}>Why Choose GDF?</a>
    </div>
    <div className="wwa-img-wrapper reveal delay-2">
      <img src="images/img_001_f4f1400b.jpg" className="wwa-img-1" alt="GDF Conference" />
      <img src="images/tinted_large.jpg" className="wwa-img-2 float-slow" alt="GDF Delegates" />
    </div>
  </div>
</section>

{/* CONFERENCES & EVENTS */}
<section id="conferences" className="pad">
  <div className="wrap" style={{ position: 'relative', zIndex: '1' }}>
    <div className="reveal" style={{ textAlign: 'center' }}>
      <p className="tag">Upcoming Events</p>
      <h2 className="h2">Conferences &amp; Events</h2>
      <div className="divider" style={{ margin: '0 auto 60px' }}></div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* GDF INTERNATIONAL CARD */}
      <div className="conf-card reveal delay-1" style={{ maxWidth: '800px', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="conf-img-wrap">
          <img src="images/GDFI.png" alt="GDF International" />
          <div className="conf-badge montserrat">19-20 DEC 2026</div>
        </div>
        <div className="conf-content" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '30px', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: 'var(--gold)', marginBottom: '12px', letterSpacing: '-0.01em' }}>GDF INTERNATIONAL</h3>
            <p className="montserrat" style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              Our flagship global conference bringing together students from across the globe to build the next generation of international leaders and diplomats in Sharjah, UAE.
            </p>
          </div>
          <div>
            <button className="btn-sq-solid" onClick={() => { if (typeof window !== 'undefined' && (window as any).openReg) (window as any).openReg(); }}>
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* NEWS */}
<section id="news" className="pad">
  <div className="wrap">
    <div className="reveal">
      <p className="tag">Updates</p>
      <h2 className="h2">Latest News</h2>
      <div className="divider"></div>
    </div>
    <div className="news-grid montserrat">
      <div className="news-card reveal delay-1">
        <div className="news-date">Dec 2026</div>
        <h3 className="news-title">GDF International Dates Announced!</h3>
        <p className="news-text">We are thrilled to announce that GDF International is officially scheduled for 19th - 20th December 2026 in Sharjah, UAE. Mark your calendars for the premier Model UN event!</p>
      </div>
      <div className="news-card reveal delay-2">
        <div className="news-date">Registrations</div>
        <h3 className="news-title">Delegate Applications: Now Open!</h3>
        <p className="news-text">Delegate applications for GDF International are Now Open! Limited spots are available — register now to secure your place in the most quality MUN.</p>
      </div>
      <div className="news-card reveal delay-3">
        <div className="news-date">Opportunities</div>
        <h3 className="news-title">Secretariat Applications Open</h3>
        <p className="news-text">Want to be part of the organizing team? Applications to join the GDF Secretariat are currently open. Check out the Team section for more details.</p>
      </div>
    </div>
  </div>
</section>

{/* TEAM CAROUSEL PER USER PAINT SKETCH */}
<section id="team" className="pad team-paint-section">
  <div className="wrap">
    <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
      <p className="tag">The People Behind GDF</p>
      <h2 className="h2" style={{ fontWeight: 800 }}>Meet Our Team</h2>
      <div className="divider" style={{ margin: '0 auto' }}></div>
    </div>

    {/* Team Carousel (Main Active Card + Faded Next Card + Circle Arrow) */}
    <div className="team-paint-container reveal">
      {/* Active Card */}
      <div className="team-paint-active-card" id="teamActiveCard">
        <div className="team-paint-photo-wrapper">
          <img id="teamCardPhoto" src="images/Atharv.jpg" alt="Atharv Johari" />
        </div>
        <div className="team-paint-bio">
          <h3 className="team-paint-name" id="teamCardName">Atharv Johari</h3>
          <p className="team-paint-role" id="teamCardRole">Founder &amp; CEO</p>
          <div className="team-paint-msg" id="teamCardQuote">
            &ldquo;GDF was born from a simple belief — that every young person deserves a platform to think globally and lead with purpose. We are not just running a conference; we are building a generation of diplomats.&rdquo;
          </div>
          <div className="team-paint-dots" id="teamIndicators">
            <span className="team-paint-dot active"></span>
            <span className="team-paint-dot"></span>
            <span className="team-paint-dot"></span>
            <span className="team-paint-dot"></span>
            <span className="team-paint-dot"></span>
          </div>
        </div>
      </div>

      {/* Faded Next Person Card (per Paint sketch) */}
      <div
        className="team-paint-faded-card"
        id="teamFadedCard"
        onClick={() => { if (typeof window !== 'undefined' && (window as any).teamSliderNext) (window as any).teamSliderNext(); }}
        title="Click to view next team member"
      >
        <div className="team-paint-faded-badge">NEXT</div>
        <img id="teamFadedPhoto" src="images/mohit_tinted.jpg" alt="Next Team Member" className="team-paint-faded-img" />
        <div className="team-paint-faded-label">
          <div id="teamFadedName" style={{ fontWeight: 800 }}>Mohit Tanay</div>
          <div id="teamFadedRole" className="team-paint-faded-role-text">President</div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="team-paint-arrow-group">
        <button
          className="team-paint-arrow-btn"
          id="teamNextBtn"
          onClick={() => { if (typeof window !== 'undefined' && (window as any).teamSliderNext) (window as any).teamSliderNext(); }}
          aria-label="Next Team Member"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <button
          className="team-paint-arrow-btn prev"
          id="teamPrevBtn"
          onClick={() => { if (typeof window !== 'undefined' && (window as any).teamSliderPrev) (window as any).teamSliderPrev(); }}
          aria-label="Previous Team Member"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>
    </div>

    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button className="btn-ghost" onClick={() => { if (typeof window !== 'undefined' && (window as any).openTeamApp) (window as any).openTeamApp(); }}>Join Our Team</button>
    </div>
  </div>
</section>

{/* SPONSORS */}
<section id="sponsors" className="pad" style={{ background: 'var(--navy2)', borderTop: '1px solid rgba(212,175,55,0.06)' }}>
  <div className="wrap" style={{ textAlign: 'center' }}>
    <div className="reveal">
      <p className="tag">Our Partners</p>
      <h2 className="h2">Sponsors &amp; Partners</h2>
      <div className="divider" style={{ margin: '0 auto 40px' }}></div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '60px', marginBottom: '40px' }}>
      <div className="reveal delay-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <img src="images/solarize.png" alt="Solarize Digitech" style={{ maxHeight: '70px', maxWidth: '200px', objectFit: 'contain', filter: 'brightness(1.5) grayscale(100%)', opacity: '0.6', transition: 'all .3s' }} onMouseOver={(e)=>{e.currentTarget.style.filter='brightness(1) grayscale(0%)'; e.currentTarget.style.opacity='1';}} onMouseOut={(e)=>{e.currentTarget.style.filter='brightness(1.5) grayscale(100%)'; e.currentTarget.style.opacity='0.6';}} />
        <span className="montserrat" style={{ fontSize: '.7rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>Technology Partner</span>
      </div>
      <div className="reveal delay-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <img src="images/earthaid.png" alt="EarthAid" style={{ maxHeight: '80px', maxWidth: '200px', objectFit: 'contain', filter: 'brightness(1.5) grayscale(100%)', opacity: '0.6', transition: 'all .3s' }} onMouseOver={(e)=>{e.currentTarget.style.filter='brightness(1) grayscale(0%)'; e.currentTarget.style.opacity='1';}} onMouseOut={(e)=>{e.currentTarget.style.filter='brightness(1.5) grayscale(100%)'; e.currentTarget.style.opacity='0.6';}} />
        <span className="montserrat" style={{ fontSize: '.7rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>Sustainability Partner</span>
      </div>
    </div>
  </div>
</section>

{/* SOCIAL WAVE — SVG textPath sine-wave */}
<section className="social-wave-section" id="social">
  {/* Moving SVG wave typography — two copies for seamless loop */}
  <div className="wave-svg-container">
    <div className="wave-anim-inner">
      {/* First copy */}
      <svg
        viewBox="0 0 3200 350"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', width: '3200px', height: '350px', flexShrink: 0 }}
      >
        <defs>
          <path
            id="wavePath1"
            d="M 0,175 C 200,35 400,35 600,175 S 1000,315 1200,175 S 1600,35 1800,175 S 2200,315 2400,175 S 2800,35 3000,175 S 3400,315 3600,175"
            fill="none"
            stroke="none"
          />
        </defs>
        <text className="wave-text-path">
          <textPath href="#wavePath1" startOffset="0%" textLength="3200" lengthAdjust="spacing">
            Follow Us On Social · Follow Us On Social · Follow Us On Social ·
          </textPath>
        </text>
      </svg>
      {/* Second copy — seamless continuation */}
      <svg
        viewBox="0 0 3200 350"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', width: '3200px', height: '350px', flexShrink: 0 }}
        aria-hidden="true"
      >
        <defs>
          <path
            id="wavePath2"
            d="M 0,175 C 200,35 400,35 600,175 S 1000,315 1200,175 S 1600,35 1800,175 S 2200,315 2400,175 S 2800,35 3000,175 S 3400,315 3600,175"
            fill="none"
            stroke="none"
          />
        </defs>
        <text className="wave-text-path">
          <textPath href="#wavePath2" startOffset="0%" textLength="3200" lengthAdjust="spacing">
            Follow Us On Social · Follow Us On Social · Follow Us On Social ·
          </textPath>
        </text>
      </svg>
    </div>
  </div>

  {/* Stationary social icons at bottom */}
  <div className="wave-icons-container">
    <a href="https://www.facebook.com/profile.php?id=61580761976168" target="_blank" rel="noopener" className="wave-icon" aria-label="Facebook">
      <svg viewBox="0 0 24 24" fill="#293B5B"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/gdf-international-6089ab3ab/" target="_blank" rel="noopener" className="wave-icon" aria-label="LinkedIn">
      <svg viewBox="0 0 24 24" fill="#293B5B"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
    </a>
    <a href="https://www.instagram.com/gdf_international/" target="_blank" rel="noopener" className="wave-icon" aria-label="Instagram">
      <svg viewBox="0 0 24 24" fill="none" stroke="#293B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="#293B5B" stroke="none"/>
      </svg>
    </a>
  </div>
</section>

{/* CONTACT */}
<section id="contact" className="pad">
  <div className="wrap">
    <div className="contact-grid reveal">
      <div className="c-left">
        <p className="tag">Get In Touch</p>
        <h2 className="h2" style={{ marginBottom: '20px', fontWeight: 800 }}>Contact Us</h2>
        <div className="divider"></div>
        <p className="body-text montserrat" style={{ marginBottom: '32px' }}>Interested in working together or have a question about the conference? Fill out some info and we will be in touch shortly.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '.9rem', color: 'var(--white)' }} className="montserrat">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: 'var(--gold)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.12 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
            <a href="tel:+971562971909" style={{ color: 'var(--muted)' }}>+971 56 297 1909</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: 'var(--gold)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="mailto:info@gdfintl.org" style={{ color: 'var(--muted)' }}>info@gdfintl.org</a>
              <a href="mailto:globaldiplomaticfoundaiton@gmail.com" style={{ color: 'var(--muted)' }}>globaldiplomaticfoundaiton@gmail.com</a>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: 'var(--gold)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <span style={{ color: 'var(--muted)' }}>Sharjah, United Arab Emirates</span>
          </div>
        </div>
      </div>
      <div className="c-form">
        <div className="c-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label className="c-lbl montserrat">First Name</label>
            <input type="text" className="inp" id="cFname" />
          </div>
          <div>
            <label className="c-lbl montserrat">Last Name</label>
            <input type="text" className="inp" id="cLname" />
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label className="c-lbl montserrat">Email</label>
          <input type="email" className="inp" id="cEmail" />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label className="c-lbl montserrat">Message</label>
          <textarea className="inp" rows={4} id="cMsg"></textarea>
        </div>
        <div>
          <button id="cBtn" className="btn-solid" style={{ width: '100%' }} onClick={() => { if (typeof window !== 'undefined' && (window as any).sendContact) (window as any).sendContact(); }}>Send Message</button>
        </div>
        <div id="cStatus" style={{ marginTop: '16px', fontSize: '.9rem', display: 'none', color: 'var(--gold)' }}></div>
      </div>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer>
  <div className="wrap ft-grid montserrat">
    <div>
      <div className="ft-brand">GDF</div>
      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.8' }}>The Global Diplomatic Foundation.<br/>Building the next generation of leaders.</p>
    </div>
    <div className="ft-col">
      <div className="ft-col-title">Navigation</div>
      <a href="#wwa">About Us</a>
      <a href="#conferences">Events</a>
      <a href="#team">Our Team</a>
      <a href="#" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openWhyGdf) (window as any).openWhyGdf(); }}>Why GDF</a>
    </div>
    <div className="ft-col">
      <div className="ft-col-title">Support</div>
      <a href="#" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openFaq) (window as any).openFaq(); }}>FAQ</a>
      <a href="#contact">Contact Us</a>
    </div>
    <div className="ft-col">
      <div className="ft-col-title">Contact</div>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.8' }}>
        <a href="mailto:info@gdfintl.org" style={{ display: 'inline', marginBottom: 0 }}>info@gdfintl.org</a><br />
        <a href="tel:+971562971909" style={{ display: 'inline', marginBottom: 0 }}>(+971) 56 297 1909</a>
      </p>
    </div>
  </div>
</footer>

{/* FLOATING BANNER */}
<div className="floating-banner" onClick={() => { if (typeof window !== 'undefined' && (window as any).openReg) (window as any).openReg(); }}>
  <div className="banner-pulse"></div>
  Register Now
</div>



{/* ========== WHY GDF OVERLAY ========== */}
<div className="overlay" id="whyGdfOverlay">
  <div className="ov-nav">
    <a href="#" onClick={() => { (window as any).closeWhyGdf(); return false; }} className="nav-brand">
      <img src="images/LGC.png" alt="GDF Logo" />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
        <span style={{ fontWeight: 800 }}>Global Diplomatic Foundation</span>
        <span style={{ color: 'var(--gold)', fontSize: '.55rem', marginTop: '2px', letterSpacing: '0.15em' }}>INTERNATIONAL</span>
      </div>
    </a>
    <div style={{ display: 'flex', gap: '32px' }}>
      <a href="#" onClick={() => { (window as any).closeWhyGdf(); return false; }} style={{ color: 'rgba(255,255,255,.85)', fontSize: '.8rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Close &#215;</a>
    </div>
  </div>
  <div className="ov-inner" style={{ background: 'var(--navy)', minHeight: '100vh', padding: '120px 20px 80px' }}>
    <div className="wrap">
      <div style={{ textAlign: 'center' }}>
        <p className="tag">Why Choose GDF?</p>
        <h2 className="h2" style={{ textAlign: 'center', fontWeight: 800 }}>The Best MUN &amp; Debate Conference in the UAE</h2>
        <div className="divider" style={{ margin: '0 auto 40px' }}></div>
        <p style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px', color: 'var(--muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
          The <strong style={{ color: 'var(--gold)' }}>Global Diplomatic Foundation (GDF)</strong> hosts <strong style={{ color: 'var(--gold)' }}>GDF International</strong> — the premier, most accessible, and top-tier <strong style={{ color: 'var(--gold)' }}>Model United Nations (MUN)</strong> and <strong style={{ color: 'var(--gold)' }}>debate conference</strong> in the UAE. Whether you are seeking world-class diplomatic training or premier parliamentary debate, GDF delivers excellence.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
        {[
          { icon: '🏆', title: 'Best MUN in UAE', desc: 'GDF International is recognised as one of the best Model United Nations conferences in the UAE, delivering a world-class MUN experience for students.' },
          { icon: '💰', title: 'Most Accessible Conference', desc: 'At just 20 AED for GDF International — and completely FREE for GDF Delegate Day — we offer unmatched value for high-calibre diplomacy.' },
          { icon: '✨', title: 'Highest Quality MUN', desc: 'Expert-led committees, professional debate formats, real diplomatic simulations — GDF International sets the standard for quality MUN conferences.' },
          { icon: '🎤', title: 'Premier Debate Experience', desc: 'From structured debate to parliamentary procedure, GDF offers the best debate conference experience for students in Sharjah, Dubai, and across the UAE.' },
          { icon: '🌍', title: 'Global & Inclusive', desc: 'Students from diverse backgrounds and schools across the region participate, providing a rich, international exchange of perspectives.' },
          { icon: '🚀', title: 'Executive Leadership', desc: 'Beyond MUN and debate, GDF equips the next generation of global leaders with public speaking, policy drafting, and strategic negotiation skills.' },
        ].map((item, i) => (
          <div key={i} style={{ background: 'var(--navy-card)', borderRadius: '12px', padding: '32px 26px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{item.icon}</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '12px', letterSpacing: '-0.01em' }}>{item.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* ========== FAQ OVERLAY ========== */}
<div className="overlay" id="faqOverlay">
  <div className="ov-nav">
    <a href="#" onClick={() => { (window as any).closeFaq(); return false; }} className="nav-brand">
      <img src="images/LGC.png" alt="GDF Logo" />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
        <span style={{ fontWeight: 800 }}>Global Diplomatic Foundation</span>
        <span style={{ color: 'var(--gold)', fontSize: '.55rem', marginTop: '2px', letterSpacing: '0.15em' }}>INTERNATIONAL</span>
      </div>
    </a>
    <div style={{ display: 'flex', gap: '32px' }}>
      <a href="#" onClick={() => { (window as any).closeFaq(); return false; }} style={{ color: 'rgba(255,255,255,.85)', fontSize: '.8rem', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase' }}>Close &#215;</a>
    </div>
  </div>
  <div className="ov-inner" style={{ background: 'var(--navy)', minHeight: '100vh', padding: '120px 20px 80px' }}>
    <div className="wrap">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <p className="tag">Frequently Asked Questions</p>
        <h2 className="h2" style={{ textAlign: 'center', fontWeight: 800 }}>MUN &amp; Debate Conference FAQ</h2>
        <div className="divider" style={{ margin: '0 auto 48px' }}></div>
      </div>
      <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { q: 'What is the best MUN conference?', a: 'GDF International by the Global Diplomatic Foundation is one of the best MUN (Model United Nations) conferences, offering the highest quality debate, diplomacy training, and leadership development for students in the UAE and globally.' },
          { q: 'What is the registration fee for GDF conferences?', a: 'GDF International offers one of the most accessible MUN experiences at just 20 AED. Delegate Day events are completely FREE — making it an open and premier platform for young diplomats.' },
          { q: 'What is the quality of MUN at GDF?', a: 'GDF International, organised by the Global Diplomatic Foundation, is among the highest quality MUN conferences in the UAE. It features expert-led committees, professional debate formats, and real diplomatic simulations for students.' },
          { q: 'What is the best debate conference for students in UAE?', a: 'GDF International by the Global Diplomatic Foundation is the premier conference for students in the UAE and Middle East, combining rigorous debate, Model United Nations, and diplomacy training.' },
          { q: 'What is GDF International?', a: 'GDF International is the flagship Model United Nations (MUN) and debate conference by the Global Diplomatic Foundation (GDF). It brings together students from across the globe to debate global issues, develop leadership skills, and experience real diplomacy.' },
          { q: 'How do I register for GDF International?', a: 'Register for GDF International by visiting gdfintl.org and clicking Register. Spots are limited, so apply early!' },
        ].map((item, i) => (
          <details key={i} style={{ background: 'var(--navy-card)', borderRadius: '10px', border: '1px solid rgba(212,175,55,0.15)', overflow: 'hidden', color: 'var(--white)' }}>
            <summary style={{ padding: '20px 24px', fontWeight: '700', fontSize: '1rem', color: 'var(--white)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{item.q}</span>
              <span style={{ fontSize: '1.3rem', color: 'var(--gold)', flexShrink: 0, marginLeft: '16px' }}>+</span>
            </summary>
            <p style={{ padding: '0 24px 20px', color: 'var(--muted)', lineHeight: '1.75', fontSize: '0.92rem', margin: 0 }}>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </div>
</div>

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
