"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Terminal from "./Terminal";
import { FaCalendarAlt, FaLocationArrow, FaWpexplorer } from "react-icons/fa";
import ParticlesComponent from "@/components/Particles";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";

// Animation variants
const animations = {
  fadeInUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 0.5 }
  }
};

// Components
const SpotlightGrid = () => (
  <>
    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
    <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
    <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
  </>
);

const Hero = () => (
  <motion.div 
    className="pb-20 pt-10 relative"
    variants={animations.fadeIn}
    initial="hidden"
    animate="visible"
  >
    <SpotlightGrid />
    <div className="flex justify-center relative my-20 z-10">
      <ParticlesComponent />
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <motion.div
          className="space-y-6 text-center"
          variants={animations.fadeInUp}
        >
          <p className="uppercase tracking-widest text-lg text-white-200">OSPC</p>
          <TextGenerateEffect
            words="Open Source Programming Club VIT Chennai"
            className="text-white-100 text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-white-200 md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Promoting awareness and adoption of Free and Open Source Software (FOSS) 
            and empowering students with Git and GitHub expertise at OSPC VIT, Chennai.
          </p>
          <Link href="/about"
           className=" flex justify-center">
            <MagicButton
              title="About OSPC"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const AboutSection = () => (
  <motion.section
    variants={animations.fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative text-white py-16 backdrop-blur-sm"
  >
    <div className="max-w-3xl mx-auto px-6 space-y-8">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        About OPSC
      </h2>
      <div className="space-y-4">
        <p className="text-lg leading-relaxed">
          The Open Source Programming Club (OSPC) at VIT is a student-driven initiative 
          aimed at fostering a culture of open-source development. Our mission is to 
          empower members with practical skills, community-driven projects, and insights 
          into collaborative software development.
        </p>
        <p className="text-lg leading-relaxed">
        We believe in the power of open-source to bring about positive change and
        innovation. Whether you&apos;re an experienced developer or just getting started,
        join us in building a world where knowledge is freely shared, and everyone
        has the opportunity to contribute!
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="/about">
          <MagicButton title="Explore OSPC" icon={<FaWpexplorer />} position="right" />
        </Link>
        <Link href="/events">
          <MagicButton title="Upcoming Events" icon={<FaCalendarAlt />} position="right" />
        </Link>
      </div>
    </div>
  </motion.section>
);

const EntryAnimation = ({ onComplete }: { onComplete: () => void }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black z-50"  
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 5 }} // Animation duration is set to 5 seconds
    onAnimationComplete={onComplete}
  >
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl text-white-200 font-bold mb-4">
        Welcome to OPSC
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2">
        Empowering Open-Source 
      </p>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
        at VIT, Chennai
      </p>
    </div>
  </motion.div>
);

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowAnimation(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      setShowAnimation(false);
    }
  }, []);

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-dark-800 to-purple-400">
      <AnimatePresence>
        {showAnimation && <EntryAnimation onComplete={() => setShowAnimation(false)} />}
      </AnimatePresence>
      <Spotlight />
      <Hero />
      <Terminal />
      <AboutSection />
    </main>
  );
}