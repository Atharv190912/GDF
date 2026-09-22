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
      {/* EmailJS - init with ready flag */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).emailjs) {
            (window as any).emailjs.init('cck5UdkTGd-58RJEU');
            (window as any).__emailjsReady = true;
          }
        }}
      />
      {/* Site scripts */}
      <Script src="/gdf-scripts.js?v=2.4.3" strategy="afterInteractive" />


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
    <a href="#initiatives">Initiatives</a>
    <a href="#flagship">GDF International</a>
    <a href="#circuit">The Circuit</a>
    <a href="#team">Team</a>
    <a href="#" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openWhyGdf) (window as any).openWhyGdf(); }}>Why GDF</a>
    <a href="#" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openFaq) (window as any).openFaq(); }}>FAQ</a>
    <a href="#contact">Contact</a>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
    <div className="nav-socials">
      <a href="https://www.facebook.com/profile.php?id=61580761976168" target="_blank" rel="noopener" aria-label="Facebook">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
      </a>
      <a href="https://www.instagram.com/gdf_international/" target="_blank" rel="noopener" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/gdf-international-6089ab3ab/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </div>
    <button
      className="nav-hamburger"
      aria-label="Open menu"
      onClick={() => {
        document.getElementById('mobileDrawer')?.classList.add('open');
        document.getElementById('mobileBackdrop')?.classList.add('open');
      }}
    >
      <span/><span/><span/>
    </button>
  </div>
</nav>

{/* MOBILE DRAWER BACKDROP */}
<div id="mobileBackdrop" className="mobile-backdrop" onClick={() => {
  document.getElementById('mobileDrawer')?.classList.remove('open');
  document.getElementById('mobileBackdrop')?.classList.remove('open');
}} />

{/* MOBILE DRAWER */}
<div id="mobileDrawer" className="mobile-drawer">
  <button className="mobile-drawer-close" aria-label="Close menu" onClick={() => {
    document.getElementById('mobileDrawer')?.classList.remove('open');
    document.getElementById('mobileBackdrop')?.classList.remove('open');
  }}>✕</button>
  <div className="mobile-drawer-brand">
    <img src="images/LGC.png" alt="GDF Logo" style={{ height: '40px' }} />
    <span>GDF International</span>
  </div>
  <div className="mobile-drawer-links">
    {([
      { label: 'About', href: '#wwa' },
      { label: 'Initiatives', href: '#initiatives' },
      { label: 'GDF International', href: '#flagship' },
      { label: 'The Circuit', href: '#circuit' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ] as { label: string; href: string }[]).map(({ label, href }) => (
      <a key={label} href={href} onClick={() => {
        document.getElementById('mobileDrawer')?.classList.remove('open');
        document.getElementById('mobileBackdrop')?.classList.remove('open');
      }}>{label}</a>
    ))}
    <a href="#" onClick={(e) => {
      e.preventDefault();
      document.getElementById('mobileDrawer')?.classList.remove('open');
      document.getElementById('mobileBackdrop')?.classList.remove('open');
      if (typeof window !== 'undefined' && (window as any).openWhyGdf) (window as any).openWhyGdf();
    }}>Why GDF</a>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      document.getElementById('mobileDrawer')?.classList.remove('open');
      document.getElementById('mobileBackdrop')?.classList.remove('open');
      if (typeof window !== 'undefined' && (window as any).openFaq) (window as any).openFaq();
    }}>FAQ</a>
  </div>
  <div className="mobile-drawer-socials">
    <a href="https://www.facebook.com/profile.php?id=61580761976168" target="_blank" rel="noopener" aria-label="Facebook">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
    </a>
    <a href="https://www.instagram.com/gdf_international/" target="_blank" rel="noopener" aria-label="Instagram">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/gdf-international-6089ab3ab/" target="_blank" rel="noopener" aria-label="LinkedIn">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
    </a>
  </div>
</div>

{/* HERO SECTION */}
<section id="hero">
  <div className="hero-bg"></div>
  <div className="hero-overlay"></div>
  <div className="hero-body reveal">
    <div className="circuit-card-badge" style={{ marginBottom: '16px' }}>PIONEERING THE UAE ONLINE MUN CIRCUIT</div>
    <img src="/images/img_002_3ea5b8ad.png" alt="GDF Crest" className="hero-crest float-anim" />
    <h1 style={{ fontWeight: 900 }}>DEBATE. DIPLOMACY. DELIVER.</h1>
    <p className="montserrat reveal delay-1">
      Building the next generation of global leaders through diplomacy, dialogue, and decisive action. The UAE's pioneer in youth international relations and online diplomatic circuits.
    </p> 
    <div className="reveal delay-2" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <a href="#initiatives" className="btn-sq-solid">Explore Initiatives</a>
      <a href="#flagship" className="btn-ghost">GDF International 2026</a>
    </div>
  </div>
</section>

{/* RUNNING TEXT MARQUEE */}
<div className="marquee-section">
  <div className="marquee-track" id="marqueeTrack">
    <div className="marquee-item">
      <span className="marquee-dot"></span><span className="marquee-text">DIPLOMACY &amp; LEADERSHIP</span>
      <span className="marquee-dot"></span><span className="marquee-text">UAE ONLINE MUN CIRCUIT</span>
      <span className="marquee-dot"></span><span className="marquee-text">YOUTH EMPOWERMENT</span>
      <span className="marquee-dot"></span><span className="marquee-text">THE GDF CROWN</span>
      <span className="marquee-dot"></span><span className="marquee-text">SHARJAH, UAE</span>
    </div>
    <div className="marquee-item" aria-hidden="true">
      <span className="marquee-dot"></span><span className="marquee-text">DIPLOMACY &amp; LEADERSHIP</span>
      <span className="marquee-dot"></span><span className="marquee-text">UAE ONLINE MUN CIRCUIT</span>
      <span className="marquee-dot"></span><span className="marquee-text">YOUTH EMPOWERMENT</span>
      <span className="marquee-dot"></span><span className="marquee-text">THE GDF CROWN</span>
      <span className="marquee-dot"></span><span className="marquee-text">SHARJAH, UAE</span>
    </div>
  </div>
</div>

{/* GDF IN NUMBERS */}
<section className="numbers-section">
  <div className="wrap">
    <div className="numbers-grid">
      <div className="number-item reveal">
        <div className="number-val">#1</div>
        <div className="number-label">In The UAE</div>
        <div className="number-sub">Pioneers of the UAE Online MUN Circuit</div>
      </div>
      <div className="number-item reveal delay-1">
        <div className="number-val">20+</div>
        <div className="number-label">Diplomatic Chambers</div>
        <div className="number-sub">World-class specialized committees</div>
      </div>
      <div className="number-item reveal delay-2">
        <div className="number-val">12.6K+</div>
        <div className="number-label">Global Network</div>
        <div className="number-sub">Youth leaders across Broadcast &amp; Community</div>
      </div>
      <div className="number-item reveal delay-3">
        <div className="number-val">1x</div>
        <div className="number-label">Annual Flagship</div>
        <div className="number-sub">Exclusive GDF International summit</div>
      </div>
      <div className="number-item reveal delay-1">
        <div className="number-val">1</div>
        <div className="number-label">Conferences Held</div>
        <div className="number-sub">Successfully hosted events</div>
      </div>
      <div className="number-item reveal delay-2">
        <div className="number-val">100+</div>
        <div className="number-label">Delegates Hosted</div>
        <div className="number-sub">Future leaders impacted</div>
      </div>
    </div>
  </div>
</section>

{/* WHO WE ARE & UAE CIRCUIT */}
<section id="wwa" className="pad">
  <div className="watermark anton reveal">GLOBAL<br/>DIPLOMATIC<br/>FOUNDATION</div>
  <div className="wrap">
    <div className="wwa-grid">
      <div className="wwa-text reveal delay-1">
        <p className="tag">Our Mission &amp; Foundation</p>
        <h2 className="h2">Building the Future of Youth Diplomacy</h2>
        <div className="divider"></div>
        <p className="body-text montserrat" style={{ marginBottom: '20px' }}>
          The Global Diplomatic Foundation (GDF) is an international youth diplomatic organization dedicated to equipping students with the critical thinking, public speaking, and policy-making skills needed to address the challenges of tomorrow.
        </p>
        <p className="body-text montserrat" style={{ marginBottom: '32px' }}>
          We are proud to be the <strong style={{ color: 'var(--gold)' }}>first in the UAE to build the UAE Online MUN Circuit</strong> — establishing the nation's only premium, highly accessible virtual diplomatic network that connects delegates across continents.
        </p>
        <a href="#" className="btn-ghost" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openWhyGdf) (window as any).openWhyGdf(); }}>Why Choose GDF?</a>
      </div>
      <div className="wwa-img-wrapper reveal delay-2">
        <img src="images/img_001_f4f1400b.jpg" className="wwa-img-1" alt="GDF Conference" />
        <img src="images/tinted_large.jpg" className="wwa-img-2 float-slow" alt="GDF Delegates" />
      </div>
    </div>

    {/* The Circuit & The Crown */}
    <div className="circuit-grid" id="circuit">
      <div className="circuit-card reveal">
        <div className="circuit-card-badge">THE UAE PIONEERS</div>
        <h3>The UAE Online MUN Circuit</h3>
        <p>
          Before GDF, access to high-caliber Model United Nations was restricted by geography and prohibitive fees. GDF transformed youth diplomacy by establishing the first structured UAE Online MUN Circuit — offering elite debate at just 20 AED without compromising on committee rigor or prestige.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <span className="flagship-chip">Direct Virtual Chambers</span>
          <span className="flagship-chip">Global Dais Expert Chairs</span>
          <span className="flagship-chip">Strict Parliamentary Rules</span>
        </div>
      </div>

      <div className="circuit-card reveal delay-1">
        <div className="circuit-card-badge">SUPREME RECOGNITION</div>
        <h3>The GDF Crown &amp; Awards</h3>
        <p>
          GDF awards are unlike any other conference. We believe extraordinary research and diplomacy deserve extraordinary recognition. At GDF International, the highest-performing delegations compete for the coveted <strong style={{ color: 'var(--gold)' }}>GDF Crown</strong>, supreme trophies, and official leadership credentials.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <span className="flagship-chip">The GDF Crown Trophy</span>
          <span className="flagship-chip">Executive Best Delegate Awards</span>
          <span className="flagship-chip">Global Dais Appointments</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* INITIATIVES SECTION: "WE DON'T JUST HOST — WE TEACH & EMPOWER" */}
<section id="initiatives" className="pad" style={{ background: 'var(--navy2)', borderTop: '1px solid rgba(212,175,55,0.08)' }}>
  <div className="wrap">
    <div className="reveal" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 20px' }}>
      <p className="tag">Beyond The Conference</p>
      <h2 className="h2">We Don't Just Host — We Teach &amp; Empower</h2>
      <div className="divider" style={{ margin: '0 auto 24px' }}></div>
      <p className="body-text montserrat">
        GDF is more than an annual summit. We are an active, 365-day diplomatic academy and community. Explore our 4 core educational pillars designed to accelerate your growth as an international leader.
      </p>
    </div>

    <div className="initiatives-grid">
      {/* 1. YOUTH ACADEMY */}
      <div className="initiative-card reveal">
        <div className="initiative-header">
          <span className="initiative-badge">DIPLOMATIC EDUCATION</span>
          <h3 className="initiative-title">GDF Youth Academy</h3>
          <div className="initiative-tagline">Your gateway to global awareness, leadership, and diplomacy.</div>
        </div>
        <div className="initiative-body">
          <p className="initiative-desc">
            An all-in-one learning space on Google Classroom where young leaders access study guides, comprehensive briefing notes, and structured delegate training modules.
          </p>
          <ul className="initiative-features">
            <li><span className="bullet">&#10003;</span> Exclusive study guides and foreign policy briefing notes</li>
            <li><span className="bullet">&#10003;</span> Interactive discussions and peer-to-peer debate analysis</li>
            <li><span className="bullet">&#10003;</span> Announcements on global scholarships, events and opportunities</li>
          </ul>
          <div className="initiative-action-box">
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em' }}>CLASSROOM CODE</div>
              <div className="code-highlight">2ypkcedf</div>
            </div>
            <a href="https://classroom.google.com/" target="_blank" rel="noopener" className="btn-sq-solid" style={{ padding: '12px 24px' }}>
              Join Classroom
            </a>
          </div>
        </div>
      </div>

      {/* 2. GDF BROADCAST */}
      <div className="initiative-card reveal delay-1">
        <div className="initiative-header">
          <span className="initiative-badge">DAILY INTELLIGENCE</span>
          <h3 className="initiative-title">GDF Broadcast</h3>
          <div className="initiative-tagline">Daily World Updates, Powered by GDF.</div>
        </div>
        <div className="initiative-body">
          <p className="initiative-desc">
            Stay ahead of geopolitics. Our editorial team delivers curated daily briefings on global affairs, diplomatic summits, and youth opportunities directly to your WhatsApp.
          </p>
          <ul className="initiative-features">
            <li><span className="bullet">&#10003;</span> Verified global news and geopolitical situation reports</li>
            <li><span className="bullet">&#10003;</span> Diplomatic insights, UN organ facts, and strategic perspectives</li>
            <li><span className="bullet">&#10003;</span> Scholarship, competition, and youth ambassador alerts</li>
          </ul>
          <div className="initiative-action-box">
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em' }}>WHATSAPP CHANNEL</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 700 }}>12.6K+ Followers</div>
            </div>
            <a href="https://whatsapp.com/channel/0029VbCabBE5Ui2eM2uNSM1V" target="_blank" rel="noopener" className="btn-sq-solid" style={{ padding: '12px 24px' }}>
              Follow Channel
            </a>
          </div>
        </div>
      </div>

      {/* 3. GDF GLOBAL COMMUNITY */}
      <div className="initiative-card reveal">
        <div className="initiative-header">
          <span className="initiative-badge">WORLDWIDE NETWORK</span>
          <h3 className="initiative-title">GDF Global Community</h3>
          <div className="initiative-tagline">A Global Space for Young Leaders.</div>
        </div>
        <div className="initiative-body">
          <p className="initiative-desc">
            Be part of something bigger. An active international network connecting delegates, secretariat alumni, and youth leaders from across the Middle East and worldwide.
          </p>
          <ul className="initiative-features">
            <li><span className="bullet">&#10003;</span> Connect with ambitious students and aspiring diplomats</li>
            <li><span className="bullet">&#10003;</span> Engage in live conversations on contemporary multilateral issues</li>
            <li><span className="bullet">&#10003;</span> Collaborate on youth-led advocacy and cross-border initiatives</li>
          </ul>
          <div className="initiative-action-box">
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em' }}>COMMUNITY CHANNEL</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 700 }}>Open to All Delegates</div>
            </div>
            <a href="https://whatsapp.com/channel/0029VbCabBE5Ui2eM2uNSM1V" target="_blank" rel="noopener" className="btn-sq-solid" style={{ padding: '12px 24px' }}>
              Join Community
            </a>
          </div>
        </div>
      </div>

      {/* 4. DEBATE OF THE MONTH & QUESTION OF THE DAY */}
      <div className="initiative-card reveal delay-1">
        <div className="initiative-header">
          <span className="initiative-badge">COMPETITION &amp; MERIT</span>
          <h3 className="initiative-title">Debate &amp; Knowledge Challenges</h3>
          <div className="initiative-tagline">Test your knowledge · Challenge motions · Win certificates.</div>
        </div>
        <div className="initiative-body">
          <p className="initiative-desc">
            Continuous intellectual rigor. Take on the monthly parliamentary motion, answer daily diplomatic trivia, and earn verified recognition and executive features.
          </p>
          <ul className="initiative-features">
            <li><span className="bullet">&#10003;</span> Debate of the Month: Formulate arguments on international policy</li>
            <li><span className="bullet">&#10003;</span> Question of the Day: Test your understanding of global treaties</li>
            <li><span className="bullet">&#10003;</span> Official GDF Certificates and social media spotlights for winners</li>
          </ul>
          <div className="initiative-action-box">
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em' }}>LIVE PARTICIPATION</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 700 }}>Weekly Competitions</div>
            </div>
            <a href="https://whatsapp.com/channel/0029VbCabBE5Ui2eM2uNSM1V" target="_blank" rel="noopener" className="btn-sq-solid" style={{ padding: '12px 24px' }}>
              Participate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FLAGSHIP STAR SECTION: GDF INTERNATIONAL 2026 */}
<section id="flagship" className="flagship-section">
  <div className="wrap">
    <div className="flagship-box reveal">
      <div className="flagship-grid">
        <div className="flagship-media">
          <img src="images/GDFINTL.png" alt="GDF International" />
          <div className="flagship-media-badge">EXCLUSIVELY ONCE A YEAR</div>
        </div>
        <div className="flagship-content">
          <div className="flagship-eyebrow">THE PREMIER DIPLOMATIC SUMMIT · SHARJAH &amp; ONLINE CIRCUIT</div>
          <h2 className="flagship-title">GDF INTERNATIONAL 2026</h2>
          <p className="flagship-desc">
            The flagship diplomatic conference hosted exclusively once per year. GDF International brings together delegates from across the region and around the world to debate pressing global crises, simulate real international diplomacy, and compete for the supreme <strong style={{ color: 'var(--gold)' }}>GDF Crown</strong>.
          </p>
          <div className="flagship-chips">
            <span className="flagship-chip">The GDF Crown Trophy</span>
            <span className="flagship-chip">19–20 December 2026</span>
            <span className="flagship-chip">20 AED Accessible Delegate Fee</span>
            <span className="flagship-chip">20+ Specialized Chambers</span>
            <span className="flagship-chip">UAE &amp; Global Online Circuit</span>
          </div>
          <div>
            <button className="btn-sq-solid" style={{ padding: '18px 44px', fontSize: '0.85rem' }} onClick={() => { if (typeof window !== 'undefined' && (window as any).openReg) (window as any).openReg(); }}>
              REGISTER FOR GDF INTERNATIONAL →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* TEAM - AUTO-ROTATING CAROUSEL */}
<section id="team" className="pad team-paint-section">
  <div className="wrap">
    <div className="reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
      <p className="tag">The People Behind GDF</p>
      <h2 className="h2" style={{ fontWeight: 800 }}>Meet Our Team</h2>
      <div className="divider" style={{ margin: '0 auto' }}></div>
    </div>

    {(() => {
      const teamMembers = [
        { name: 'Atharv Johari', role: 'Founder & CEO', img: 'images/Atharv.jpg' },
        { name: 'Mohit Tanay Dandamudi', role: 'President', img: 'images/mohit_tinted.jpg' },
        { name: 'Pranav Sajith Nair', role: 'Global Manager', img: 'images/tinted_student.jpg' },
        { name: 'Omisha Chandrashekar Hegde', role: 'Chief Operations Officer', img: 'images/omisha.png' },
        { name: 'Akshita Subi Nair', role: 'Chief Communication Officer', img: 'images/akshita.jpg' },
        { name: 'Fatin Ibrahim', role: 'Managing Director', img: 'images/fatin_ibrahim.png' }
      ];
      
      const numItems = Math.max(teamMembers.length, 5);
      const angle = 360 / numItems;
      const radius = Math.round((280 / 2) / Math.tan(Math.PI / numItems)) + 60; // 60px gap

      return (
        <>
          <style>{`
            .cylinder-scene {
              width: 100%;
              height: 500px;
              perspective: 1400px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 40px 0;
              overflow: hidden;
            }
            .cylinder-carousel {
              width: 280px;
              height: 400px;
              position: relative;
              transform-style: preserve-3d;
              animation: spin3D 60s infinite linear;
            }
            .cylinder-carousel:hover {
              animation-play-state: paused;
            }
            .cylinder-card {
              position: absolute;
              width: 280px;
              height: 400px;
              background-size: cover;
              background-position: center;
              border-radius: 12px;
              box-shadow: 0 15px 40px rgba(0,0,0,0.6);
              overflow: hidden;
              display: flex;
              align-items: flex-end;
              border: 1px solid rgba(212,175,55,0.4);
            }
            .cylinder-card::after {
              content: '';
              position: absolute;
              bottom: 0; left: 0; right: 0;
              height: 60%;
              background: linear-gradient(to top, rgba(10, 17, 40, 1) 0%, rgba(10, 17, 40, 0.8) 30%, transparent 100%);
              z-index: 1;
            }
            .cylinder-card-content {
              position: relative;
              z-index: 2;
              padding: 24px;
              width: 100%;
              text-align: left;
            }
            .cylinder-card-content h3 {
              margin: 0 0 6px 0;
              color: var(--white);
              font-size: 1.25rem;
              font-weight: 800;
              line-height: 1.2;
            }
            .cylinder-card-content p {
              margin: 0;
              color: var(--gold);
              font-size: 0.8rem;
              text-transform: uppercase;
              font-weight: 700;
              letter-spacing: 0.05em;
            }
            @keyframes spin3D {
              0% { transform: translateZ(-${radius}px) rotateY(0deg); }
              100% { transform: translateZ(-${radius}px) rotateY(-360deg); }
            }
          `}</style>
          
          <div className="cylinder-scene reveal">
            <div className="cylinder-carousel">
              {teamMembers.map((member, i) => (
                <div 
                  key={i} 
                  className="cylinder-card"
                  style={{ 
                    backgroundImage: `url('${member.img}')`,
                    transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`
                  }}
                >
                  <div className="cylinder-card-content">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    })()}

    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <button className="btn-ghost" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openTeamApp) (window as any).openTeamApp(); }}>Join Our Team</button>
    </div>
  </div>
</section>
{/* SPONSORS & PARTNERS */}
<section id="sponsors" className="pad" style={{ background: 'var(--navy2)', borderTop: '1px solid rgba(212,175,55,0.06)' }}>
  <div className="wrap" style={{ textAlign: 'center' }}>
    <div className="reveal">
      <p className="tag">Our Partners</p>
      <h2 className="h2">Sponsors &amp; Partners</h2>
      <div className="divider" style={{ margin: '0 auto 40px' }}></div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '80px', marginBottom: '20px' }}>
      <div className="reveal delay-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <img src="images/solarize.png" alt="Solarize Digitech" style={{ height: '70px', objectFit: 'contain' }} />
        <span className="montserrat" style={{ fontSize: '.7rem', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>Technology Partner</span>
      </div>
      <div className="reveal delay-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <img src="images/earthaid.png" alt="EarthAid" style={{ height: '70px', objectFit: 'contain' }} />
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

{/* FINAL CALL TO ACTION */}
<section className="final-cta-section">
  <div className="wrap reveal">
    <p className="tag">Join The Global Movement</p>
    <h2 className="final-cta-title">THE WORLD NEEDS<br/>BETTER DIALOGUE.</h2>
    <p className="final-cta-sub montserrat">
      Whether you are an aspiring delegate, a seasoned chair, or a student passionate about international relations — your journey in diplomacy begins with the Global Diplomatic Foundation.
    </p>
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href="https://classroom.google.com/" target="_blank" rel="noopener" className="btn-sq-solid" style={{ padding: '16px 36px' }}>
        Join Youth Academy (Code: 2ypkcedf)
      </a>
      <button className="btn-ghost" style={{ padding: '16px 36px' }} onClick={() => { if (typeof window !== 'undefined' && (window as any).openReg) (window as any).openReg(); }}>
        Register For Conference (20 AED)
      </button>
    </div>
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
        <p className="body-text montserrat" style={{ marginBottom: '32px' }}>
          Interested in collaborating with the Global Diplomatic Foundation, partnering with our circuit, or have questions about our initiatives? Reach out to our secretariat.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '.9rem', color: 'var(--white)' }} className="montserrat">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: 'var(--gold)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.12 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
            <a href="tel:+971562971909" style={{ color: 'var(--muted)' }}>+971 56 297 1909</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: 'var(--gold)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
            <a href="mailto:info@gdfintl.org" style={{ color: 'var(--muted)' }}>info@gdfintl.org</a>
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
      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.8' }}>
        The Global Diplomatic Foundation.<br/>
        Pioneering the UAE Online MUN Circuit.<br/>
        Building the next generation of global leaders.
      </p>
    </div>
    <div className="ft-col">
      <div className="ft-col-title">Organization</div>
      <a href="#wwa">About Us</a>
      <a href="#initiatives">Youth Academy</a>
      <a href="#circuit">UAE Circuit &amp; Crown</a>
      <a href="#team">Secretariat</a>
      <a href="#" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openWhyGdf) (window as any).openWhyGdf(); }}>Why GDF</a>
    </div>
    <div className="ft-col">
      <div className="ft-col-title">Programs</div>
      <a href="#flagship">GDF International 2026</a>
      <a href="https://classroom.google.com/" target="_blank" rel="noopener">Google Classroom (2ypkcedf)</a>
      <a href="https://whatsapp.com/channel/0029VbCabBE5Ui2eM2uNSM1V" target="_blank" rel="noopener">GDF Broadcast</a>
      <a href="https://whatsapp.com/channel/0029VbCabBE5Ui2eM2uNSM1V" target="_blank" rel="noopener">Global Community</a>
    </div>
    <div className="ft-col">
      <div className="ft-col-title">Contact &amp; Support</div>
      <a href="#" onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined' && (window as any).openFaq) (window as any).openFaq(); }}>Frequently Asked Questions</a>
      <a href="#contact">Contact Secretariat</a>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: '1.8', marginTop: '12px' }}>
        <a href="mailto:info@gdfintl.org" style={{ display: 'inline', marginBottom: 0 }}>info@gdfintl.org</a><br />
        <a href="tel:+971562971909" style={{ display: 'inline', marginBottom: 0 }}>(+971) 56 297 1909</a>
      </p>
    </div>
  </div>
</footer>

{/* FLOATING BANNER */}
<div className="floating-banner" onClick={() => { if (typeof window !== 'undefined' && (window as any).openReg) (window as any).openReg(); }}>
  <div className="banner-pulse"></div>
  GDF International · Register
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
        <p className="tag">The GDF Difference</p>
        <h2 className="h2" style={{ textAlign: 'center', fontWeight: 800 }}>Pioneering Youth Diplomacy in the UAE &amp; Beyond</h2>
        <div className="divider" style={{ margin: '0 auto 40px' }}></div>
        <p style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px', color: 'var(--muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
          The <strong style={{ color: 'var(--gold)' }}>Global Diplomatic Foundation (GDF)</strong> is more than a conference organizer — we are the pioneers of the <strong style={{ color: 'var(--gold)' }}>UAE Online MUN Circuit</strong>. We built the UAE's only premium, highly accessible virtual diplomatic platform that bridges borders, trains young leaders, and rewards true excellence.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
        {[
          { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, title: 'First UAE Online MUN Circuit', desc: 'GDF is the first organization in the UAE to build a dedicated, structured Online MUN Circuit, connecting ambitious students from across the region to high-level multilateral debate.' },
          { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="2 4 5 16 19 16 22 4 15 11 12 2 9 11 2 4"/></svg>, title: 'The GDF Crown & Supreme Awards', desc: 'Our recognition standards are unmatched. Outstanding delegates compete for the prestigious GDF Crown, bespoke trophies, executive certificates, and global dais appointments.' },
          { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title: 'Exclusive Annual Flagship', desc: 'GDF International is hosted exclusively once per year (19–20 Dec 2026), ensuring supreme organizational rigor, distinguished guest speakers, and elite crisis chambers.' },
          { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: 'Premium & Accessible (20 AED)', desc: 'We believe elite diplomatic education should not be financially prohibitive. At just 20 AED, GDF International provides world-class quality at the most accessible price point.' },
          { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>, title: 'We Don’t Just Host — We Teach', desc: 'Through the GDF Youth Academy (Google Classroom 2ypkcedf) and daily GDF Broadcast, we provide continuous foreign policy masterclasses, briefing notes, and study guides.' },
          { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Worldwide Diplomatic Community', desc: 'Over 12,600 young leaders are connected through our international channels, collaborating on global policy issues and participating in monthly debate challenges.' },
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
        <h2 className="h2" style={{ textAlign: 'center', fontWeight: 800 }}>Foundation &amp; Conference FAQ</h2>
        <div className="divider" style={{ margin: '0 auto 48px' }}></div>
      </div>
      <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { 
            q: 'Who founded GDF?', 
            a: 'The Global Diplomatic Foundation was founded by Atharv Johari.' 
          },
          { 
            q: 'Does GDF only host Model UN conferences?', 
            a: 'No! GDF is an international youth diplomatic organization and academy. We don\'t just host conferences — we teach, mentor, and empower young leaders year-round through the GDF Youth Academy (Google Classroom), our daily GDF Broadcast, the Global Community network, and monthly debate challenges.' 
          },
          { 
            q: 'What is the UAE Online MUN Circuit?', 
            a: 'GDF is the first organization in the UAE to build the UAE Online MUN Circuit. We created a structured, accessible virtual diplomatic arena that allows delegates across the Emirates and globally to debate complex geopolitical crises with expert chairs and international standards.' 
          },
          { 
            q: 'What makes GDF International unique?', 
            a: 'GDF International is hosted exclusively once per year (19–20 December 2026). It features 20+ specialized committees, crisis chambers, and our signature awards program — including the supreme GDF Crown trophy and executive delegate certificates.' 
          },
          { 
            q: 'What is the registration fee for GDF International?', 
            a: 'Registration for our flagship conference is just 20 AED, making GDF International the UAE\'s only premium and truly affordable online Model United Nations.' 
          },
          { 
            q: 'How do I join the GDF Youth Academy?', 
            a: 'Any student can join the GDF Youth Academy for free on Google Classroom using class code 2ypkcedf. You will receive study guides, foreign policy briefing notes, and delegate debate training materials.' 
          },
          { 
            q: 'How do I access the GDF Broadcast and Global Community?', 
            a: 'You can join our verified WhatsApp channel (over 12,600 followers) to receive daily curated world news, diplomatic insights, and announcements regarding upcoming debates and committee sessions.' 
          },
          { 
            q: 'How do I register for GDF International 2026?', 
            a: 'Delegate registrations are officially open at gdfintl.org. Click "Register Now" on the homepage to access the delegate application portal. Spots in specialized committees are allocated on a rolling basis.' 
          },
          {
            q: 'What is the best MUN conference and best online conference?',
            a: 'GDF International and MUNs done by GDF are highly recommended for their best awarding platform and learning opportunities at an affordable rate.'
          },
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




    </>
  );
}

