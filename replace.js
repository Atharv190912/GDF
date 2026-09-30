const fs = require('fs');

const pagePath = 'c:/Users/hello/Desktop/GDF/app/page.tsx';
let page = fs.readFileSync(pagePath, 'utf8');

// 1. Hero badge
page = page.replace('PIONEERING THE UAE ONLINE MUN CIRCUIT', 'PIONEERS OF THE ONLINE MUN CIRCUIT');

// 2. Hero paragraph
page = page.replace(
  "The UAE\\'s pioneer in youth international relations and online diplomatic circuits.",
  "The pioneer in youth international relations and online diplomatic circuits."
);

// 3. Marquee
page = page.replace(
  '<span class="marquee-dot"></span><span class="marquee-text">SHARJAH, UAE</span>',
  '<span class="marquee-dot"></span><span class="marquee-text">GLOBAL ONLINE CIRCUIT</span>'
);
page = page.replace(
  '<span className="marquee-dot"></span><span className="marquee-text">SHARJAH, UAE</span>',
  '<span className="marquee-dot"></span><span className="marquee-text">GLOBAL ONLINE CIRCUIT</span>'
);
// replace globally just in case
page = page.replace(/SHARJAH, UAE<\/span>/g, 'GLOBAL ONLINE CIRCUIT</span>');

// 4. Numbers section
page = page.replace(
  '<div className="number-label">In The UAE</div>\\n        <div className="number-sub">Pioneers of the UAE Online MUN Circuit</div>',
  '<div className="number-label">In Pioneering MUN</div>\\n        <div className="number-sub">Free MUN &amp; Diplomatic Tutoring</div>'
);
page = page.replace(
  '<div className="number-label">In The UAE</div>\\r\\n        <div className="number-sub">Pioneers of the UAE Online MUN Circuit</div>',
  '<div className="number-label">In Pioneering MUN</div>\\n        <div className="number-sub">Free MUN &amp; Diplomatic Tutoring</div>'
);

// 5. WWA text
page = page.replace(
  'first in the UAE to build the UAE Online MUN Circuit</strong> — establishing the nation\\'s only premium',
  'pioneers of the UAE Online MUN Circuit</strong> — establishing a premium'
);

// 6. Circuit card badge
page = page.replace(
  '<div className="circuit-card-badge">THE UAE PIONEERS</div>',
  '<div className="circuit-card-badge">THE PIONEERS</div>'
);

// 7. Circuit card content
page = page.replace(
  '<h3>The UAE Online MUN Circuit</h3>',
  '<h3>The Online MUN Circuit</h3>'
);
page = page.replace(
  'establishing the first structured UAE Online MUN Circuit — offering elite debate at just 20 AED',
  'establishing the first structured Online MUN Circuit — offering elite debate at an affordable price'
);

// 8. Flagship eyebrow
page = page.replace(
  'THE PREMIER DIPLOMATIC SUMMIT · SHARJAH &amp; ONLINE CIRCUIT',
  'THE PREMIER DIPLOMATIC SUMMIT · GLOBAL ONLINE CIRCUIT'
);

// 9. Flagship chip
page = page.replace(
  '<span className="flagship-chip">20 AED Accessible Delegate Fee</span>',
  '<span className="flagship-chip">Affordable Delegate Fee</span>'
);

// 10. Final CTA button
page = page.replace(
  'Register For Conference (20 AED)',
  'Register For Conference (Affordable)'
);

// 11. Contact section - remove Sharjah location
page = page.replace(
  /\\s*<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>\\s*<span style={{ color: 'var\\(--gold\\)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"\\/><circle cx="12" cy="10" r="3"\\/><\\/svg><\\/span>\\s*<span style={{ color: 'var\\(--muted\\)' }}>Sharjah, United Arab Emirates<\\/span>\\s*<\\/div>/,
  ''
);

// 12. Footer brand text
page = page.replace(
  'Pioneering the UAE Online MUN Circuit.<br/>',
  'Pioneering the Online MUN Circuit.<br/>'
);

// 13. Why GDF overlay
page = page.replace(
  'Pioneering Youth Diplomacy in the UAE &amp; Beyond',
  'Pioneering Youth Diplomacy Globally'
);
page = page.replace(
  "We built the UAE\\'s only premium",
  "We built a premium"
);

// 14. Why GDF card
page = page.replace(
  "title: 'First UAE Online MUN Circuit'",
  "title: 'First Online MUN Circuit'"
);
page = page.replace(
  "GDF is the first organization in the UAE to build a dedicated, structured Online MUN Circuit",
  "GDF is the first organization to build a dedicated, structured Online MUN Circuit"
);

// 15. Why GDF affordability card
page = page.replace(
  "title: 'Premium & Accessible (20 AED)'",
  "title: 'Premium & Accessible'"
);
page = page.replace(
  "At just 20 AED, GDF International provides world-class quality at the most accessible price point.",
  "GDF International provides world-class quality at the most accessible and affordable price point."
);

// 16. FAQ item
page = page.replace(
  "GDF is the first organization in the UAE to build the UAE Online MUN Circuit.",
  "GDF is the first organization to build the Online MUN Circuit."
);

// 17. FAQ registration fee item
page = page.replace(
  "Registration for our flagship conference is just 20 AED, making GDF International the UAE\\'s only premium and truly affordable online Model United Nations.",
  "Registration for our flagship conference is at an affordable rate of just \\.45 (equivalent to 20 AED, ?500 INR, €4.81), making GDF International the world\\'s most premium and truly affordable online Model United Nations."
);

// 18. Service overlay price
page = page.replace(
  '<div className="svc-price">20 AED</div>',
  '<div className="svc-price">Affordable</div>'
);

// 20. FAQs map (to allow hidden items)
page = page.replace(
  '].map((item, i) => (\\n          <details key={i} style={{ background: \\'var(--navy-card)\\', borderRadius: \\'10px\\', border: \\'1px solid rgba(212,175,55,0.15)\\', overflow: \\'hidden\\', color: \\'var(--white)\\' }}>',
  '].map((item: any, i) => (\\n          <details key={i} style={{ ...(item.hidden ? { display: \\'none\\' } : {}), background: \\'var(--navy-card)\\', borderRadius: \\'10px\\', border: \\'1px solid rgba(212,175,55,0.15)\\', overflow: \\'hidden\\', color: \\'var(--white)\\' }}>'
);
page = page.replace(
  '].map((item, i) => (\\r\\n          <details key={i} style={{ background: \\'var(--navy-card)\\', borderRadius: \\'10px\\', border: \\'1px solid rgba(212,175,55,0.15)\\', overflow: \\'hidden\\', color: \\'var(--white)\\' }}>',
  '].map((item: any, i) => (\\n          <details key={i} style={{ ...(item.hidden ? { display: \\'none\\' } : {}), background: \\'var(--navy-card)\\', borderRadius: \\'10px\\', border: \\'1px solid rgba(212,175,55,0.15)\\', overflow: \\'hidden\\', color: \\'var(--white)\\' }}>'
);
// Mark the last FAQ as hidden
page = page.replace(
  "a: 'GDF International and MUNs done by GDF are highly recommended for their best awarding platform and learning opportunities at an affordable rate.'\\n          },",
  "a: 'GDF International and MUNs done by GDF are highly recommended for their best awarding platform and learning opportunities at an affordable rate.',\\n            hidden: true\\n          },"
);
page = page.replace(
  "a: 'GDF International and MUNs done by GDF are highly recommended for their best awarding platform and learning opportunities at an affordable rate.'\\r\\n          },",
  "a: 'GDF International and MUNs done by GDF are highly recommended for their best awarding platform and learning opportunities at an affordable rate.',\\n            hidden: true\\n          },"
);


// 19. International payment section replacement
const paymentFind = \        <button 
          id="payTypeIntl"
          className="btn-outline" 
          style={{ flex: '1', padding: '10px', fontSize: '.85rem', background: 'var(--navy)', color: 'white' }}
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).setPaymentType) (window as any).setPaymentType('international');
          }}
        >
          International
        </button>\;
const paymentReplace = \        <button 
          id="payTypeIntl"
          className="btn-outline" 
          disabled
          style={{ flex: '1', padding: '10px', fontSize: '.85rem', background: 'rgba(26,39,64,0.5)', color: 'rgba(255,255,255,0.4)', cursor: 'not-allowed', borderColor: 'rgba(255,255,255,0.1)' }}
        >
          International
        </button>\;
page = page.replace(paymentFind, paymentReplace);
page = page.replace(paymentFind.replace(/\\n/g, '\\r\\n'), paymentReplace);

const payDetailsFind = \      {/* International Payment Details */}
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
      </div>\;
const payDetailsReplace = \      {/* International Payment Details */}
      <div id="payDetailsIntl" style={{ position: 'relative' }}>
        {/* Hazard overlay covering international payment */}
        <div style={{
          position: 'absolute', inset: '0', zIndex: 10,
          background: 'rgba(10,14,36,0.93)',
          borderRadius: '12px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '24px', textAlign: 'center', gap: '12px',
          border: '2px solid rgba(245,124,0,0.6)'
        }}>
          <span style={{ fontSize: '2.5rem' }}>??</span>
          <p style={{ color: '#ffb74d', fontWeight: 700, fontSize: '1rem', margin: 0 }}>International Payment Temporarily Unavailable</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', lineHeight: '1.6', margin: 0 }}>Due to a technical issue, the international payment portal is currently unavailable. Please use the <strong style={{ color: 'var(--gold)' }}>Indian (UPI) method</strong> or contact us directly at <a href="mailto:info@gdfintl.org" style={{ color: 'var(--gold)' }}>info@gdfintl.org</a> or <a href="tel:+971562971909" style={{ color: 'var(--gold)' }}>+971 56 297 1909</a> to complete your registration.</p>
        </div>
        <div className="pay-card">
          <div style={{ fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', opacity: '.6', marginBottom: '8px' }}>Registration Fee</div>
          <div style={{ fontSize: '2.4rem', fontWeight: '700', marginBottom: '4px' }}>Affordable</div>
          <div style={{ fontSize: '.82rem', opacity: '.7', marginBottom: '20px' }}>GDF International — Delegate</div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="pay-row"><span>Bank</span><span>HSBC</span></div>
            <div className="pay-row"><span>Account Name</span><span>Sanskriti Johari</span></div>
            <div className="pay-row"><span>IBAN</span><span style={{ fontFamily: 'monospace' }}>AE920200000041712654001</span></div>
            <div className="pay-row"><span>Reference</span><span style={{ fontFamily: 'monospace' }} id="payRef2">GDF-REG</span></div>
          </div>
        </div>
        <div className="warn-box">Use your full name as the payment reference. Fill in your transfer details below after paying.</div>
      </div>\;
page = page.replace(payDetailsFind, payDetailsReplace);
page = page.replace(payDetailsFind.replace(/\\n/g, '\\r\\n'), payDetailsReplace);

fs.writeFileSync(pagePath, page);
console.log('page.tsx updated.');

const layoutPath = 'c:/Users/hello/Desktop/GDF/app/layout.tsx';
let layout = fs.readFileSync(layoutPath, 'utf8');

// 21. layout.tsx faqSchema
layout = layout.replace(
  'making supreme quality accessible globally at just 20 AED',
  'making supreme quality accessible globally at an affordable price'
);
layout = layout.replace(
  'Delegate registration is just 20 AED',
  'Delegate registration is just \\.45 (equivalent to 20 AED, ?500 INR, €4.81)'
);

// 22. layout.tsx structured data
layout = layout.replace(
  "addressLocality: 'Sharjah',\\n    addressCountry: 'AE',",
  "addressLocality: 'International',\\n    addressCountry: 'Global',"
);
layout = layout.replace(
  "addressLocality: 'Sharjah',\\r\\n    addressCountry: 'AE',",
  "addressLocality: 'International',\\n    addressCountry: 'Global',"
);
layout = layout.replace(
  "areaServed: 'AE',",
  "areaServed: 'Worldwide',"
);

layout = layout.replace(
  "name: 'Sharjah, United Arab Emirates',\\n      address: {\\n        '@type': 'PostalAddress',\\n        addressLocality: 'Sharjah',\\n        addressCountry: 'AE',",
  "name: 'Global Online Circuit',\\n      address: {\\n        '@type': 'PostalAddress',\\n        addressLocality: 'Online',\\n        addressCountry: 'Global',"
);
layout = layout.replace(
  "name: 'Sharjah, United Arab Emirates',\\r\\n      address: {\\r\\n        '@type': 'PostalAddress',\\r\\n        addressLocality: 'Sharjah',\\r\\n        addressCountry: 'AE',",
  "name: 'Global Online Circuit',\\n      address: {\\n        '@type': 'PostalAddress',\\n        addressLocality: 'Online',\\n        addressCountry: 'Global',"
);

// 23 & 24. keywords and description
layout = layout.replace(
  "'MUN Sharjah', ",
  ""
);
layout = layout.replace(
  "'debate competition Sharjah', ",
  ""
);
layout = layout.replace(
  "'Sharjah conference', ",
  ""
);
layout = layout.replace(
  "'debate club UAE',",
  ""
);

fs.writeFileSync(layoutPath, layout);
console.log('layout.tsx updated.');

