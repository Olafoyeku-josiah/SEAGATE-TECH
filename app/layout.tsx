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
  title: "SeaGate Tech | Security, Electrical, Smart Living & LED Billboards | Collingdale, PA",
  description:
    "SeaGate Tech provides 24/7 commercial & residential CCTV surveillance, biometric door access control, certified fire alarm systems, master electrical repairs, smart home appliances, luxury interior decoration, and digital LED billboards in Collingdale, PA.",
  keywords: [
    "SeaGate Tech",
    "Security Cameras Collingdale PA",
    "CCTV Installation Philadelphia",
    "Door Access Control",
    "Fire Alarm System",
    "Licensed Electrician Collingdale",
    "Smart Home Appliances",
    "Interior Design Media Wall",
    "LED Signs Board Advertisements",
  ],
  authors: [{ name: "SeaGate Tech" }],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SeaGate Tech | Security, Electrical & Smart Living",
    description: "24/7 Commercial & Residential Solutions in Collingdale, PA & Tri-State",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-[#ededed] selection:bg-white/20 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
