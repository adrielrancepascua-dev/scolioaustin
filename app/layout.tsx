import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScolioAustin - Clinical Precision 3D Scoliosis Correction",
  description:
    "3D De-rotation & Correction for Scoliosis. Evidence-based Schroth & SEAS Methods with Interactive Diagnostics.",
  keywords: [
    "scoliosis",
    "schroth method",
    "SEAS",
    "3D de-rotation",
    "physical therapy",
    "clinical",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ScolioAustin",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-clinical-white text-clinical-text">
        {children}
      </body>
    </html>
  );
}
