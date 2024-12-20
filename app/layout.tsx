import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "OSPC VITC",
  description: "Join the Open Source Programming Club of VIT Chennai and collaborate on exciting projects!",
  keywords: "Open Source, Programming, VIT Chennai, Student Club, Collaboration",
  authors: [{ name: "OSPC VITC", url: "https://ospc-website.vercel.app" }],
  openGraph: {
    title: "OSPC VITC",
    description: "Join the Open Source Programming Club of VIT Chennai and collaborate on exciting projects!",
    url: "https://ospc-website.vercel.app/",
    siteName: "OSPC VITC",
    images: [
      {
        url: "https://ospc-website.vercel.app/logo.webp", // Replace with your actual image URL
        width: 800,
        height: 600,
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
    <html lang="en">
      <body
      >
      <main className="bg-black w-screen h-screen overflow-x-hidden">
      <Navbar/>
      <Navigation />
      
        {children}
      <Footer/>
      </main> 
      </body>
    </html>
  );
}
