import { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "@/styles/globals.css";

export const metadata = {
  title: "Birch & Bloom Interior Design",
  description: "Award-winning interior design studio specializing in residential transformations.",
  openGraph: {
    title: "Birch & Bloom Interior Design",
    description: "Award-winning interior design studio specializing in residential transformations.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}