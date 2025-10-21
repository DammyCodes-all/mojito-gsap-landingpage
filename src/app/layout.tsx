import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import GsapPlugin from "@/components/gsapPlugin";

export const metadata: Metadata = {
  title: "Mojito GSAP Landing Page",
  description: "A stunning landing page built with GSAP and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <GsapPlugin>
          <Navbar />
          <main>{children}</main>
        </GsapPlugin>
      </body>
    </html>
  );
}
