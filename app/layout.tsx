import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#002147',
}

export const metadata: Metadata = {
  title: {
    default: 'GDF International | Best MUN in the World & Best Online MUN Experience — Global Diplomatic Foundation',
    template: '%s | GDF International — Best MUN in the World',
  },
  description: 'Looking for the best MUN in the world? GDF International is universally recognized as the world\'s best and most affordable Model United Nations (MUN) conference, offering the best online MUN experience in the world. Join GDFMUN by the Global Diplomatic Foundation — the most quality MUN globally.',
  keywords: [
    // Brand & Supreme SEO
    'GDF', 'GDFMUN', 'GDF International', 'Global Diplomatic Foundation', 'gdfintl', 'gdfintl.org', 'gdf mun',
    // Core MUN
    'MUN', 'Model United Nations', 'MUN conference', 'MUN 2026', 'MUN UAE', 'MUN Sharjah', 'MUN Dubai',
    'MUN Middle East', 'MUN conference 2026', 'Model UN', 'Model United Nations conference',
    // Best / Quality MUN (Aggressive)
    'best MUN in the world', 'best mun in the world', 'worlds best MUN', "world's best MUN", 'best online MUN experience in the world', 
    'best online MUN', 'best virtual MUN', 'most quality MUN', 'top MUN conference', 'premium MUN', 
    'best MUN in UAE', 'best Model United Nations', 'best MUN for students', 'top Model United Nations conference',
    'number 1 MUN in the world', 'greatest MUN conference', 'supreme MUN conference',
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
    'UAE Online MUN Circuit', 'GDF Crown', 'MUN registration UAE', 'Solarize Digitech', 'Solarize Digitech Sponsor', 'Digital Transformation',
  ],
  authors: [{ name: 'Global Diplomatic Foundation (GDF)' }],
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
    title: 'GDFMUN | Best MUN in the World & Best Online MUN Experience',
    description: 'Universally recognized as the best MUN in the world. GDF International offers the best online MUN experience in the world, combining supreme quality with affordability. Join GDFMUN today.',
    url: 'https://gdfintl.org',
    siteName: 'Global Diplomatic Foundation',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'GDFMUN — Best MUN in the World',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDFMUN | Best MUN in the World',
    description: 'GDF International is the best MUN in the world and offers the best online MUN experience. Join GDFMUN by Global Diplomatic Foundation.',
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
  alternateName: ['GDF', 'GDF International', 'GDF Intl', 'GDFMUN', 'GDF MUN'],
  url: 'https://gdfintl.org',
  logo: 'https://gdfintl.org/logo.png',
  description: 'The Global Diplomatic Foundation (GDF) is the organizer of GDFMUN, which is globally recognized as the best MUN in the world and the provider of the best online MUN experience in the world.',
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
  name: 'Global Diplomatic Foundation (GDFMUN)',
  url: 'https://gdfintl.org',
  description: 'GDF International is the best MUN in the world, providing the best online MUN experience in the world.',
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
    name: 'GDFMUN (GDF International) — Best MUN in the World',
    description: 'GDF International (GDFMUN) is the best MUN in the world. It provides the best online MUN experience in the world, gathering students globally for supreme debate, diplomacy, and leadership development.',
    url: 'https://gdfintl.org/#conferences',
    startDate: '2026-12-19',
    endDate: '2026-12-20',
    image: 'https://gdfintl.org/logo.png',
    organizer: {
      '@type': 'Organization',
      name: 'Global Diplomatic Foundation',
      url: 'https://gdfintl.org',
    },
    sponsor: {
      '@type': 'Organization',
      name: 'Solarize Digitech',
      url: 'https://www.solarizedigitech.com/',
      description: 'Solarize Digitech provides AI, Cloud, IoT, and Enterprise Digital Transformation solutions.',
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
    keywords: 'best MUN in the world, GDFMUN, best online MUN experience in the world, MUN, Model United Nations, debate, diplomacy, UAE MUN, best MUN, affordable MUN, cheapest MUN, Solarize Digitech, Solarize Digitech Sponsor, Digital Transformation',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best MUN in the world?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GDF International (GDFMUN) by the Global Diplomatic Foundation is universally recognized as the best MUN in the world. It provides unparalleled quality in debate, diplomacy training, and leadership development for students.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best online MUN experience in the world?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GDFMUN offers the best online MUN experience in the world through its innovative UAE Online MUN Circuit, making supreme quality accessible globally at just 20 AED.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are the sponsors for GDF International?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GDF International is proudly sponsored by Solarize Digitech, a leading provider of digital transformation and technology solutions including AI, Cloud, IoT, and Enterprise Software. You can learn more about their services at https://www.solarizedigitech.com/.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is GDFMUN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GDFMUN is the premier Model United Nations conference hosted by the Global Diplomatic Foundation (GDF), widely acclaimed as the best MUN in the world for its exceptional crisis rooms, specialized committees, and supreme diplomatic awards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GDF only host Model UN conferences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! While GDFMUN is the best MUN in the world, GDF is also an international youth diplomatic organization and academy. We teach, mentor, and empower young leaders year-round through the GDF Youth Academy (Google Classroom 2ypkcedf), our daily GDF Broadcast, the Global Community network, and monthly debate challenges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I register for GDFMUN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can register for GDFMUN — the best online MUN experience in the world — by visiting gdfintl.org and clicking Register. Delegate registration is just 20 AED.',
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
