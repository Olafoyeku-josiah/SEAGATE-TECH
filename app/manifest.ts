import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SeaGate Tech - Security & Electrical Solutions",
    short_name: "SeaGate Tech",
    description:
      "24/7 Commercial & Residential CCTV Surveillance, Biometric Door Access Control, Certified Fire Alarm Systems, Master Electricians, and LED Billboards in Collingdale, PA.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
