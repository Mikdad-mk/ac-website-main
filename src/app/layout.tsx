import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Providers } from "@/components/providers";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoolCare Aircon - Professional Air Conditioner Service Malaysia | Petaling Jaya | Basic Service MYR70',
  description: 'Professional air conditioner service, repair & installation in Petaling Jaya, Selangor, Malaysia. Basic service from MYR70, Chemical wash MYR130. 24/7 emergency AC repair. First time in Malaysia - 25psi free gas top up. Call +60 12-274 2875',
  keywords: [
    'air conditioner service Malaysia',
    'aircond repair Petaling Jaya',
    'aircon service Selangor',
    'air conditioning installation Malaysia',
    'aircond maintenance KL',
    'emergency aircon repair',
    '24/7 AC service Malaysia',
    'professional aircond technician',
    'air conditioner cleaning service',
    'split unit aircon repair',
    'central air conditioning service',
    'aircond gas top up Malaysia',
    'air conditioner troubleshooting',
    'commercial aircon service',
    'residential AC repair Malaysia',
    'chemical wash aircon Malaysia',
    'aircond service Kota Damansara',
    'aircon repair Shah Alam',
    'aircond cleaning Subang Jaya',
    'coolcare aircon service',
    'cheap aircon service Malaysia',
    'reliable aircond repair',
    'aircon maintenance Klang Valley',
    'aircond service near me',
    'best aircon service Malaysia',
    'affordable aircond repair'
  ],
  authors: [{ name: 'CoolCare Aircon Malaysia' }],
  creator: 'CoolCare Aircon Professional Services',
  publisher: 'CoolCare Aircon Malaysia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.coolcareaircon.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CoolCare Aircon - Professional Air Conditioner Service Malaysia',
    description: 'Expert aircond service & repair in Petaling Jaya, Selangor. Basic service MYR70, Chemical wash MYR130. 24/7 emergency service. First time in Malaysia - 25psi free gas top up. Call +60 12-274 2875',
    url: 'https://www.coolcareaircon.com',
    siteName: 'CoolCare Aircon Malaysia',
    locale: 'en_MY',
    type: 'website',
    images: [
      {
        url: '/heroimagelooping/hero section image.png',
        width: 1200,
        height: 630,
        alt: 'CoolCare Aircon - Professional Air Conditioner Service Malaysia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoolCare Aircon - Professional Air Conditioner Service Malaysia',
    description: 'Expert aircond service & repair in Petaling Jaya, Selangor. Basic service MYR70, Chemical wash MYR130. 24/7 emergency service available.',
    images: ['/heroimagelooping/hero section image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#213 90% 55%',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.coolcareaircon.com/#business",
        "name": "CoolCare Aircon Malaysia",
        "alternateName": "CoolCare Professional Air Conditioning Services",
        "description": "Professional air conditioner service, repair and installation in Petaling Jaya, Selangor, Malaysia. 24/7 emergency AC repair services. Basic service from MYR70, Chemical wash MYR130. First time in Malaysia offering 25psi free gas top up.",
        "url": "https://www.coolcareaircon.com",
        "telephone": "+60122742875",
        "email": "servicecoolcare73@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NO. 4-5-16, CEMPAKA 4, JALAN CECAWI, SEKSYEN 6/19",
          "addressLocality": "Kota Damansara",
          "addressRegion": "Selangor",
          "postalCode": "47810",
          "addressCountry": "MY"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 3.1725,
          "longitude": 101.5758
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 3.1725,
            "longitude": 101.5758
          },
          "geoRadius": "50000"
        },
        "priceRange": "$$",
        "currenciesAccepted": "MYR",
        "paymentAccepted": "Cash, Bank Transfer, Online Payment",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Air Conditioning Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Air Conditioner Repair",
                "description": "Professional AC repair services for all brands and models"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Air Conditioner Installation",
                "description": "Expert installation of new air conditioning systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Air Conditioner Maintenance",
                "description": "Regular maintenance and servicing to keep your AC running efficiently"
              }
            }
          ]
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Petaling Jaya"
          },
          {
            "@type": "City", 
            "name": "Kuala Lumpur"
          },
          {
            "@type": "State",
            "name": "Selangor"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.coolcareaircon.com/#website",
        "url": "https://www.coolcareaircon.com",
        "name": "CoolCare Aircon Malaysia - Air Conditioner Service & Repair",
        "description": "Professional air conditioning services in Malaysia",
        "inLanguage": "en-MY",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.coolcareaircon.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.coolcareaircon.com/#organization", 
        "name": "CoolCare Aircon Malaysia",
        "url": "https://www.coolcareaircon.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.coolcareaircon.com/logo/navbar-logo.png",
          "width": 300,
          "height": 100
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+60122742875",
          "contactType": "customer service",
          "availableLanguage": ["English", "Malay"],
          "areaServed": "MY"
        },
        "sameAs": [
          "https://www.facebook.com/coolair.malaysia",
          "https://www.instagram.com/coolair.malaysia"
        ]
      }
    ]
  };

  return (
    <html lang="en-MY">
      <head>
        <link rel="icon" href="/logo/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <link rel="canonical" href="https://www.coolcareaircon.com" />
        <meta name="geo.region" content="MY-10" />
        <meta name="geo.placename" content="Petaling Jaya, Selangor" />
        <meta name="geo.position" content="3.1725;101.5758" />
        <meta name="ICBM" content="3.1725, 101.5758" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <FloatingWhatsApp />
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  )
}