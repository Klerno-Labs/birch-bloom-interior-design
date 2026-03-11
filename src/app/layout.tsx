import type { Metadata } from "next";
import { playfair, manrope, cormorant } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://birchandbloom.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable} ${cormorant.variable}`}>
        {/* Global Texture Overlay */}
        <div className="texture-overlay" />
        
        <Navbar />
        <main className="min-h-screen pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200",
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: "225 Design District Way",
                addressLocality: "Nashville",
                addressRegion: "TN",
                postalCode: "37203",
                addressCountry: "US",
              },
              priceRange: "$$",
              telephone: siteConfig.contact.phone,
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}