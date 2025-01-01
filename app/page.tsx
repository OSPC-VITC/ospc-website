"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useThrottledScroll } from "./hooks/useThrottledScroll";
import Terminal from "./Terminal"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ParticlesComponent from "@/components/Particles";
import { Spotlight } from "@/components/ui/spotlight";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";



const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Hero: React.FC = () => {
  return (
    <div className="pb-20 pt-36">
      
      {/**
       * UI: Spotlights
       * Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       * UI: grid
       */}
      <div
        className="h-screen w-full 
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <ParticlesComponent />
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-lg text-center text-white-200 max-w-80">
            OSPC
          </p>

          {/**
           * Link: https://ui.aceternity.com/components/text-generate-effect
           */}
          <TextGenerateEffect
            words="Open Source Programming Club VIT Chennai"
            className=" text-white-100 text-center text-[40px] md:text-5xl lg:text-6xl "
          />

          <p className=" text-white-200 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Promoting awareness and adoption of Free and Open Source Software (FOSS) and empowering students with Git and GitHub expertise at OSPC VIT, Chennai.
          </p>

          <a href="#about">
            <MagicButton
              title="About OSPC"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};




const AboutSection = () => (
  <motion.section
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative text-white py-16 backdrop-blur-sm"
  >
    <div className="max-w-3xl mx-auto px-6">
      <ParticlesComponent id="particles-background" />
      <h2 className=" text-white-100 text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        About OPSC
      </h2>
      <p className="mb-4 text-lg leading-relaxed">
        The Open Source Programming Club (OSPC) at VIT is a student-driven initiative aimed at fostering a culture of open-source development. Our mission is to empower members with practical skills, community-driven projects, and insights into collaborative software development.
      </p>
      <p className="mb-8 text-lg leading-relaxed">
        We believe in the power of open-source to bring about positive change and innovation. Whether you&apos;re an experienced developer or just getting started, join us in building a world where knowledge is freely shared, and everyone has the opportunity to contribute!
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none"
        >
          Explore OSPC
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
  const scrollY = useThrottledScroll();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowAnimation(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      setShowAnimation(false);
    }
  }, []);

  if (showAnimation) {
    return <EntryAnimation onComplete={() => setShowAnimation(false)} />;
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-dark-800 to-purple-400">
      <Spotlight />
      <Hero />
      <Terminal />
      <AboutSection />
    </main>
  );
}
