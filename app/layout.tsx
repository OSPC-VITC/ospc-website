import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ospcvitc.club"),
  title: "OSPC VITC - Open Source Programming Club | VIT Chennai",
  alternates: {
    canonical: "https://ospcvitc.club"
  },
  description: "Join OSPC VITC, the premier open source programming community at VIT Chennai. Build real-world projects, master coding skills, participate in hackathons, and connect with passionate developers. Discover workshops, tech events, and collaborative opportunities.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.webp", type: "image/webp" }
    ],
    apple: "/apple-touch-icon.png"
  },
  keywords: [
    "OSPC VITC",
    "VIT Chennai",
    "Open Source Club",
    "Programming Community",
    "Student Developers",
    "Tech Projects",
    "Software Development",
    "Coding Workshops",
    "Hackathons",
    "Developer Community",
    "Learn Programming",
    "College Tech Club",
    "VITC Organizations",
    "Open Source Projects",
    "Student Innovation"
  ],
  authors: [
    { name: "OSPC VITC", url: "https://ospcvitc.club" }
  ],
  category: "Technology",
  openGraph: {
    title: "OSPC VITC - Open Source Programming Club | VIT Chennai",
    description: "Join OSPC VITC, the premier open source programming community at VIT Chennai. Build real-world projects, master coding skills, participate in hackathons, and connect with passionate developers.",
    url: "https://ospcvitc.club",
    siteName: "OSPC VITC",
    images: [
      {
        url: "https://ospcvitc.club/logo.webp",
        width: 1200,
        height: 630,
        alt: "OSPC VITC - Building the next generation of developers"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "process.env.GOOGLE_SITE_VERIFICATION",
    other: {
      me: ["ospcvitc.club"]
    }
  },
  other: {
    "theme-color": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <main className="bg-black w-screen h-screen overflow-x-hidden">
            <Navbar />
            <Navigation />
            {children}
            <Footer />
          </main>
      </body>
    </html>
  );
}