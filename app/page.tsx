"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useThrottledScroll } from "./hooks/useThrottledScroll";

// Constants
const PARALLAX_FACTOR = 0.5;
const BACKGROUND_SHIFT = 0.1;
const INITIAL_BACKGROUND_POSITION = 20;

// Image data with better descriptive alt texts
const IMAGES = {
  horse: { 
    src: "/horse.png", 
    width: 300, 
    height: 300,
    alt: "Decorative horse silhouette" 
  },
  cliff: { 
    src: "/cliff.webp", 
    width: 480, 
    height: 480,
    alt: "Mountain cliff landscape" 
  },
  trees: { 
    src: "/trees.webp", 
    width: 2000, 
    height: 2000,
    alt: "Forest tree silhouettes" 
  },
  stars: { 
    src: "/stars.png", 
    width: 300, 
    height: 300,
    alt: "Twinkling stars pattern" 
  },
  mainBg: { 
    src: "/main-bg.webp",
    alt: "Abstract background pattern" 
  }
};

// Animation variants for consistent animations
const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

interface HeroSectionProps {
  scrollY: number;
}
const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) =>(  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative h-screen flex items-center"
  >
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
      style={{
        backgroundImage: `url(${IMAGES.mainBg.src})`,
        backgroundPosition: `center ${INITIAL_BACKGROUND_POSITION - scrollY * BACKGROUND_SHIFT}%`,
        transform: `translateY(${scrollY * PARALLAX_FACTOR}px)`,
      }}
    />
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
      className="relative px-6 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-10 max-w-[750px]"
    >
      <h1 className="text-3xl md:text-[50px] text-white font-semibold leading-tight">
        OPSC builds the future of
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 animate-gradient">
          {" "}open source{" "}
        </span>
        one line at a time.
      </h1>
    </motion.div>
  </motion.div>
);

const DecorativeImages = () => (
  <>
    <motion.div 
      className="absolute top-0 right-0 z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        {...IMAGES.horse}
        className="absolute right-55 top-40 transform hover:scale-105 transition-transform duration-300"
        priority
      />
      <Image
        {...IMAGES.cliff}
        className="transform hover:scale-105 transition-transform duration-300"
        priority
      />
    </motion.div>

    <div className="absolute bottom-0 z-5 w-full">
      <Image
        {...IMAGES.trees}
        className="w-full h-auto object-cover"
        priority
      />
    </div>

    <motion.div
      initial={{ rotate: -10, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="absolute top-0 left-0 z-10"
    >
      <Image
        {...IMAGES.stars}
        className="animate-twinkle"
        priority
      />
    </motion.div>
  </>
);

const AboutSection = () => (
  <motion.section
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative text-white py-16  backdrop-blur-sm"
  >
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        About OPSC
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        The Open Source Programming Club (OPSC) is dedicated to promoting open-source 
        software development and collaboration among students. We aim to empower 
        members through knowledge sharing and hands-on projects.
      </p>
      <p className="mb-8 text-lg leading-relaxed">
        Join us in our mission to innovate and contribute to the open-source community!
      </p>
      <div className="flex flex-wrap gap-4">
        <Link 
          href="/projects" 
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none"
        >
          Explore our club
        </Link>
        <Link 
          href="/events" 
          className="px-6 py-3 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-50 transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none"
        >
          Upcoming Events
        </Link>
      </div>
    </div>
  </motion.section>
);

const LoadingSpinner = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-dark-800">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent" />
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const scrollY = useThrottledScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-dark-800 to-purple-400">
      <HeroSection scrollY={scrollY} />
      <DecorativeImages />
      <AboutSection />
    </main>
  );
}