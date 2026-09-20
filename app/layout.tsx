import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#002147',
}

export const metadata: Metadata = {
  title: {
    default: 'GDF International | Best MUN & Debate Conference in UAE — Global Diplomatic Foundation',
    template: '%s | GDF International — Global Diplomatic Foundation',
  },
  description: 'GDF International is the world\'s best and most affordable Model United Nations (MUN) and debate conference for students. Join the Global Diplomatic Foundation — the most quality MUN in the UAE and the Middle East — for diplomacy, leadership, and international cooperation.',
  keywords: [
    // Brand
    'GDF', 'GDF International', 'Global Diplomatic Foundation', 'gdfintl', 'gdfintl.org',
    // Core MUN
    'MUN', 'Model United Nations', 'MUN conference', 'MUN 2026', 'MUN UAE', 'MUN Sharjah', 'MUN Dubai',
    'MUN Middle East', 'MUN conference 2026', 'Model UN', 'Model United Nations conference',
    // Best / Quality MUN
    'best MUN', 'best MUN conference', 'worlds best MUN', "world's best MUN", 'most quality MUN',
    'top MUN conference', 'premium MUN', 'best MUN in UAE', 'best Model United Nations',
    'best MUN for students', 'top Model United Nations conference',
    // Cheapest / Affordable
    'cheapest MUN', 'affordable MUN', 'low cost MUN', 'budget MUN', 'cheap MUN conference',
    'free MUN', 'affordable Model United Nations', 'cheapest MUN conference',
    // Debate
    'debate', 'debate conference', 'student debate', 'international debate', 'debate competition UAE',
    'debate competition', 'youth debate', 'debate competition Sharjah', 'debate club UAE',
    'public speaking competition UAE',
    // Youth & Leadership
    'youth diplomacy', 'student leadership', 'youth conference UAE', 'youth leadership conference',
    'student conference UAE', 'diplomacy for students', 'leadership development UAE',
    'youth empowerment', 'student diplomacy', 'international youth conference',
    // Location
    'UAE conference', 'Sharjah conference', 'Dubai student conference', 'Middle East youth conference',
    // Long-tail
    'best MUN conference for students', 'most affordable MUN conference',
    'UAE Online MUN Circuit', 'GDF Crown', 'MUN registration UAE',
  ],
  authors: [{ name: 'Global Diplomatic Foundation' }],
  creator: 'Global Diplomatic Foundation',
  publisher: 'Global Diplomatic Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gdfintl.org'),
  alternates: {
    canonical: 'https://gdfintl.org',
  },
  openGraph: {
    title: 'GDF International | Best MUN & Debate Conference — Global Diplomatic Foundation',
    description: 'The world\'s most quality and affordable Model United Nations (MUN) conference. GDF International — UAE\'s premier debate and diplomacy conference for students.',
    url: 'https://gdfintl.org',
    siteName: 'Global Diplomatic Foundation',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Global Diplomatic Foundation — Best MUN Conference UAE',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDF International | Best MUN & Debate Conference UAE',
    description: 'The world\'s most quality and affordable Model United Nations (MUN) and debate conference for students. Join GDF International.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Global Diplomatic Foundation',
  alternateName: ['GDF', 'GDF International', 'GDF Intl'],
  url: 'https://gdfintl.org',
  logo: 'https://gdfintl.org/logo.png',
  description: 'The Global Diplomatic Foundation (GDF) is the world\'s best and most affordable Model United Nations (MUN) and debate conference organiser for students, based in Sharjah, UAE.',
  foundingDate: '2025',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-56-297-1909',
    contactType: 'customer support',
    email: 'info@gdfintl.org',
    areaServed: 'AE',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sharjah',
    addressCountry: 'AE',
  },
  sameAs: [
    'https://www.instagram.com/gdf_international/',
    'https://www.linkedin.com/in/gdf-international-6089ab3ab/',
    'https://www.facebook.com/profile.php?id=61580761976168',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Global Diplomatic Foundation',
  url: 'https://gdfintl.org',
  description: 'Best, most quality, and most affordable MUN and debate conference in the UAE and Middle East.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://gdfintl.org/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const eventSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'GDF International — Model United Nations Conference',
    description: 'GDF International is the most quality and affordable Model United Nations (MUN) conference in the UAE. Join students from across the globe for debate, diplomacy, and leadership development.',
    url: 'https://gdfintl.org/#conferences',
    startDate: '2026-12-19',
    endDate: '2026-12-20',
    image: 'https://gdfintl.org/logo.png',
    organizer: {
      '@type': 'Organization',
      name: 'Global Diplomatic Foundation',
      url: 'https://gdfintl.org',
    },
    location: {
      '@type': 'Place',
      name: 'Sharjah, United Arab Emirates',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sharjah',
        addressCountry: 'AE',
      },
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    offers: {
      '@type': 'Offer',
      price: '20',
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
      url: 'https://gdfintl.org/#conferences',
    },
    keywords: 'MUN, Model United Nations, debate, diplomacy, UAE MUN, best MUN, affordable MUN, cheapest MUN',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best MUN conference in the UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GDF International by the Global Diplomatic Foundation is widely regarded as one of the best MUN (Model United Nations) conferences, offering the highest quality debate, diplomacy training, and leadership development for students in the UAE and globally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the UAE Online MUN Circuit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GDF is the first organization in the UAE to build the UAE Online MUN Circuit — creating a borderless, accessible, and uncompromisingly rigorous virtual diplomatic arena for students across the Emirates and internationally at just 20 AED.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GDF only host Model UN conferences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! GDF is an international youth diplomatic organization and academy. We teach, mentor, and empower young leaders year-round through the GDF Youth Academy (Google Classroom 2ypkcedf), our daily GDF Broadcast, the Global Community network, and monthly debate challenges.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes GDF International unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GDF International is hosted exclusively once per year (19–20 December 2026). It features 20+ specialized committees, world-class crisis rooms, and the coveted GDF Crown and supreme diplomatic awards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I register for GDF International in UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can register for GDF International — the UAE\'s premier online MUN conference — by visiting gdfintl.org and clicking Register. Delegate registration is just 20 AED.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best MUN conference and best online conference?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GDF International and MUNs done by GDF are highly recommended for their best awarding platform and learning opportunities at an affordable rate.',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {eventSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {/* Loading Screen */}
        <div id="gdf-loader">
          <div className="loader-ring">
            <img src="/images/LGC.png" alt="GDF" />
          </div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('load', function() {
            var loader = document.getElementById('gdf-loader');
            if (loader) {
              setTimeout(function() {
                loader.classList.add('fade-out');
                setTimeout(function() { loader.remove(); }, 700);
              }, 800);
            }
          });
        ` }} />
        {children}
      </body>
    </html>
  )
}
