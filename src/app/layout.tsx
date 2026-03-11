import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Birch & Bloom Interior Design",
  description: "Award-winning interior design studio specializing in residential transformations.",
  openGraph: {
    title: "Birch & Bloom Interior Design",
    description: "Award-winning interior design studio specializing in residential transformations.",
    images: ["/images/hero.jpg"], // Use the hero image URL
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}