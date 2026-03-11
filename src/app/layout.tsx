import type { Metadata } from "next";
import { Playfair_Display, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Birch & Bloom | Interior Design Studio Nashville",
  description: "Award-winning interior design studio specializing in residential transformations. Spaces That Tell Your Story.",
  metadataBase: new URL("https://birchandbloom.com"),
  openGraph: {
    title: "Birch & Bloom | Interior Design Studio Nashville",
    description: "Award-winning interior design studio specializing in residential transformations. Spaces That Tell Your Story.",
    url: "https://birchandbloom.com",
    siteName: "Birch & Bloom",
    images: [
      {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Birch & Bloom Interior Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Birch & Bloom Interior Design",
  image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
  telephone: "(555) 321-6543",
  email: "hello@birchandbloom.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "225 Design District Way",
    addressLocality: "Nashville",
    addressRegion: "TN",
    postalCode: "37203",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} ${cormorant.variable}`}>
      <body className="bg-[#faf8f5] text-[#2c2c2c] font-manrope antialiased selection:bg-[#8b7355] selection:text-white">
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}