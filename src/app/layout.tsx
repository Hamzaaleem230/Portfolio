import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant"; // 👈 add this line

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
  description: "Full-Stack Developer & AI Engineer – Explore my projects, skills, and contact details.",
  icons: {
    icon: "/my_logo.png",
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
        <ChatAssistant /> {/* 👈 assistant globaly yahan inject ho gaya */}
      </body>
    </html>
  );
}
