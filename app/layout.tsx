import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seagatetechpa.com"),
  title: {
    default: "SeaGate Tech | Security, Electrical, Smart Living & LED Billboards | Collingdale, PA",
    template: "%s | SeaGate Tech",
  },
  description:
    "SeaGate Tech provides 24/7 commercial & residential CCTV surveillance systems, biometric door access control, certified fire alarm systems, master electrical repairs, smart home appliances, luxury interior decoration, and digital LED billboards in Collingdale, PA & Tri-State area.",
  keywords: [
    "SeaGate Tech",
    "Security Cameras Collingdale PA",
    "CCTV Installation Philadelphia",
    "Commercial Surveillance Cameras",
    "Door Access Control Systems",
    "Biometric Fingerprint Door Locks",
    "Commercial Fire Alarm Systems PA",
    "Firealarm Inspection & Installation",
    "Licensed Electrician Collingdale PA",
    "Emergency Electrical Repair Philadelphia",
    "Electrical Breaker Panel Upgrades",
    "Smart Home Appliances Automation",
    "Interior Design Media Wall LED Lighting",
    "LED Signs Board Advertisements",
    "Digital Billboards Philadelphia",
    "Security Contractor Delaware County PA",
  ],
  authors: [{ name: "SeaGate Tech", url: "https://seagatetechpa.com" }],
  creator: "SeaGate Tech",
  publisher: "SeaGate Tech",
  category: "Security & Electrical Services",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://seagatetechpa.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seagatetechpa.com",
    siteName: "SeaGate Tech",
    title: "SeaGate Tech | Security, Electrical & Smart Living Solutions",
    description:
      "Enterprise 24/7 CCTV surveillance, biometric access control, fire alarm systems, master electrical repairs, smart living, and digital billboards in Collingdale, PA & Tri-State.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "SeaGate Tech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SeaGate Tech | Security, Electrical & Smart Living",
    description:
      "24/7 Commercial & Residential Security, Electrical Repairs, Fire Alarms & Digital Billboards in Collingdale, PA.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Electrician", "SecuritySystemInstaller"],
      "@id": "https://seagatetechpa.com/#organization",
      "name": "SeaGate Tech",
      "url": "https://seagatetechpa.com",
      "logo": "https://seagatetechpa.com/logo.png",
      "image": "https://seagatetechpa.com/logo.png",
      "telephone": "+1-267-210-5793",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1014 Spruce Street Av.",
        "addressLocality": "Collingdale",
        "addressRegion": "PA",
        "postalCode": "19023",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.9148,
        "longitude": -75.2813,
      },
      "areaServed": [
        { "@type": "City", "name": "Collingdale" },
        { "@type": "AdministrativeArea", "name": "Delaware County" },
        { "@type": "City", "name": "Philadelphia" },
        { "@type": "AdministrativeArea", "name": "Pennsylvania" },
        { "@type": "AdministrativeArea", "name": "Tri-State Area" },
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "description": "24/7 Emergency Dispatch Available",
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SeaGate Tech Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Door Access Control System",
              "description": "Biometric fingerprint and facial recognition access control systems.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Surveillance Camera Residential & Commercial",
              "description": "Commercial-grade 4K PTZ and multi-angle CCTV surveillance installations.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Firealarm System",
              "description": "Code-compliant commercial fire alarm panels, detectors, and suppression equipment.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Electricians Repair Service",
              "description": "Licensed electrical panel upgrades, wiring, diagnostics, and 24/7 emergency restoration.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interior Design Decoration For Home",
              "description": "Luxury custom LED entertainment walls, ambient lighting, and modern living consoles.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smart Home Appliances",
              "description": "IoT connected kitchen appliances, refrigeration, and whole-home automation.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LED Signs Board For Advertisements",
              "description": "High-luminance outdoor commercial digital billboards and advertising signage.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://seagatetechpa.com/#website",
      "url": "https://seagatetechpa.com",
      "name": "SeaGate Tech",
      "publisher": {
        "@id": "https://seagatetechpa.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-[#ededed] selection:bg-white/20 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
