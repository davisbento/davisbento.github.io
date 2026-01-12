import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Davi Bento - Software Engineer",
  description: "Personal website of Davi Bento, a Software Engineer from Brazil specializing in Node.js, React, and React Native with 11 years of experience.",
  keywords: ["Davi Bento", "Software Engineer", "Node.js", "React", "React Native", "Brazil", "Web Development"],
  authors: [{ name: "Davi Bento" }],
  openGraph: {
    title: "Davi Bento - Software Engineer",
    description: "Software Engineer from Brazil specializing in Node.js, React, and React Native",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
