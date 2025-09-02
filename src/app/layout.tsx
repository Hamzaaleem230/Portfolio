import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Syed Hamza | Portfolio",
  description:
    "Full-Stack Developer & AI Engineer – Explore my projects, skills, and contact details.",
  keywords: [
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "AI Engineer",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Syed Hamza" }],
  openGraph: {
    title: "Syed Hamza | Portfolio",
    description:
      "Explore my projects, skills, and contact details in this modern portfolio.",
    url: "https://your-portfolio-link.com", // apna link dal dena
    siteName: "Syed Hamza Portfolio",
    images: [
      {
        url: "/og-image.png", // ek preview image bana lena
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
