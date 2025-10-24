
"use client";

import React, { useState } from "react";
import ParticlesComponent from "@/components/Particles";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type EventDetails = {
  name: string;
  date: string;
  posterUrl: string | null;
  posterSize: { height: number; width: number };
  description: string;
  whatsappUrl: string | null;
  websiteUrl: string | null;
  registrationUrl: string | null;
};

const EVENTS: EventDetails[] = [
  {
    name: "Agentic MCP",
    date: "27 Oct",
    posterUrl: "/technovit/agentic-mcp.jpeg",
    posterSize: { height: 544, width: 384 },
    description:
      "A hands-on workshop by OSPC × BIC, VIT Chennai, focused on creating AI systems that can think, plan, and act autonomously using the MCP framework. Participants will explore agentic AI fundamentals, understand MCP's role in autonomy, and build an intelligent agent capable of solving real-world tasks.",
    whatsappUrl: "https://chat.whatsapp.com/CjlknyMmo6JBmJVCspVe8g?mode=wwc",
    websiteUrl: null,
    registrationUrl: "https://chennaievents.vit.ac.in/technovit/",
  },
  {
    name: "Stranger Clues",
    date: "29 Oct",
    posterUrl: "/technovit/stranger-clues.jpeg",
    posterSize: { height: 544, width: 384 },
    description:
      "Stranger Clues is a tech and logic-based treasure hunt accessed via a dedicated event app. Participants solve coding challenges, puzzles, and cryptic clues to progress through levels. Teams compete using reasoning, creativity, and precision to uncover the hidden treasure.",
    whatsappUrl: "https://chat.whatsapp.com/GhEJHYP0nW80H31wViVwf2",
    websiteUrl: null,
    registrationUrl: "https://chennaievents.vit.ac.in/technovit/",
  },
  {
    name: "CraftMySite",
    date: "31 Oct",
    posterUrl: "/technovit/craft-my-site.jpeg",
    posterSize: { height: 544, width: 384 },
    description:
      "A workshop followed by a contest to create stunning personal portfolio websites. Participants will learn to use and leverage AI-powered design tools or code their sites from scratch.",
    whatsappUrl: "https://chat.whatsapp.com/G9KLeDv8Pqg6FF54Z766Le?mode=wwc",
    websiteUrl: null,
    registrationUrl: "https://chennaievents.vit.ac.in/technovit/",
  },
  {
    name: "Game Jam",
    date: "1 Nov",
    posterUrl: "/technovit/game-jam.jpeg",
    posterSize: { height: 544, width: 384 },
    description:
      "A one-day intensive Game Jam where participants design and build games from scratch. Teams brainstorm, develop, and refine gameplay, visuals, and sound with mentor guidance. The event ends with final demos, feedback, and awards for creativity and execution.",
    whatsappUrl: "https://chat.whatsapp.com/LJ64zce3J78972L4b33tgS",
    websiteUrl: null,
    registrationUrl: "https://chennaievents.vit.ac.in/technovit/",
  },
];

const Page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % EVENTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + EVENTS.length) % EVENTS.length);
  };

  const handlePrevClick = (e: React.MouseEvent | React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollY = window.scrollY;
    setTimeout(() => {
      prevSlide();
      window.scrollTo(0, scrollY);
    }, 0);
  };

  const handleNextClick = (e: React.MouseEvent | React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollY = window.scrollY;
    setTimeout(() => {
      nextSlide();
      window.scrollTo(0, scrollY);
    }, 0);
  };

  const handleDotClick = (index: number) => (e: React.MouseEvent | React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollY = window.scrollY;
    setTimeout(() => {
      setCurrentIndex(index);
      window.scrollTo(0, scrollY);
    }, 0);
  };

  const currentEvent = EVENTS[currentIndex];

  return (
    <div className="min-h-dvh p-8">
      <ParticlesComponent id="particles-background" />
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Event poster"
            width={800}
            height={1067}
            className="max-h-[90vh] w-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <div className="relative container mx-auto md:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          TechnoVIT Events
        </h1>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Poster - Top on mobile, Left on desktop */}
            <div className="w-full md:w-auto flex-shrink-0 flex justify-center relative">
              {currentEvent.posterUrl === null ? (
                <div className="w-full max-w-xs md:w-80 aspect-[9/12.75] flex items-center justify-center bg-black/5 backdrop-blur-sm outline outline-white outline-[1px]">
                  <p className="text-white text-2xl font-bold">Coming Soon!</p>
                </div>
              ) : (
                <div className="w-full max-w-xs md:w-80 aspect-[9/12.75] relative">
                  <Image
                    alt={`${currentEvent.name} poster`}
                    src={currentEvent.posterUrl}
                    fill
                    className="object-cover cursor-pointer"
                    onClick={() => setSelectedImage(currentEvent.posterUrl)}
                  />
                </div>
              )}
            </div>

            {/* Description - Bottom on mobile, Right on desktop */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {currentEvent.name}
                  </h2>
                  <span className="bg-black border border-white text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {currentEvent.date}
                  </span>
                </div>
                <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                  {currentEvent.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                {currentEvent.whatsappUrl && (
                  <Button href={currentEvent.whatsappUrl}>Whatsapp</Button>
                )}
                {currentEvent.websiteUrl && (
                  <Button href={currentEvent.websiteUrl}>More Info</Button>
                )}
                {currentEvent.registrationUrl && (
                  <Button href={currentEvent.registrationUrl}>Register</Button>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handlePrevClick}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 border border-white/30 z-10 hidden md:flex items-center justify-center"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleNextClick}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 border border-white/30 z-10 hidden md:flex items-center justify-center"
            aria-label="Next event"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              type="button"
              onPointerDown={handlePrevClick}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 border border-white/30 touch-none"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onPointerDown={handleNextClick}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 border border-white/30 touch-none"
              aria-label="Next event"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {EVENTS.map((_, index) => (
              <button
                type="button"
                key={index}
                onPointerDown={handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 touch-none ${index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

type ButtonProps = { children: string; href: string };

const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="flex flex-row gap-2 items-center text-white underline underline-offset-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M1.33333 0C0.604625 0 0 0.604625 0 1.33333V10.6667C0 11.3954 0.604625 12 1.33333 12H10.6667C11.3954 12 12 11.3954 12 10.6667V6H10.6667V10.6667H1.33333V1.33333H6V0H1.33333ZM7.33333 0V1.33333H9.72396L3.52865 7.52865L4.47135 8.47135L10.6667 2.27604V4.66667H12V0H7.33333Z"
          fill="white"
        />
      </svg>
      <span>{children}</span>
    </Link>
  );
};
