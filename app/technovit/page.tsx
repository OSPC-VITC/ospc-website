"use client";

import React, { useState } from "react";
import ParticlesComponent from "@/components/Particles";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
    posterSize: { height: 543, width: 384 },
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
    posterSize: { height: 683, width: 384 },
    description:
      "A one-day intensive Game Jam where participants design and build games from scratch. Teams brainstorm, develop, and refine gameplay, visuals, and sound with mentor guidance. The event ends with final demos, feedback, and awards for creativity and execution.",
    whatsappUrl: "https://chat.whatsapp.com/LJ64zce3J78972L4b33tgS",
    websiteUrl: null,
    registrationUrl: "https://chennaievents.vit.ac.in/technovit/",
  },
];

const Page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        <div className="grid grid-cols-[1px_1fr] md:grid-cols-[1fr_1px_1fr] gap-y-[-1px]">
          <br />
          {/* Vertical white line */}
          <div className="md:col-start-2 row-start-1 row-[span_100_/_span_100] bg-white" />

          {/* Starting horizontal line and dot for right side */}
          <div className="relative flex flex-col items-center">
            <div className="bottom-0 absolute w-[110%] h-px bg-white" />
            <div className="absolute size-4 rounded-full bottom-[-0.5rem] left-[-0.5rem] bg-white" />
          </div>

          {/* Starting horizontal line and dot for left side */}
          <div className="relative mt-96 hidden md:flex flex-col items-center">
            <div className="bottom-0 absolute w-[110%] h-px bg-white" />
            <div className="absolute size-4 rounded-full bottom-[-0.5rem] right-[-0.5rem] bg-white" />
          </div>
          {EVENTS.map(
            (
              {
                name,
                date,
                posterUrl,
                posterSize,
                description,
                whatsappUrl,
                websiteUrl,
                registrationUrl,
              },
              i,
            ) => {
              return (
                <div
                  key={name}
                  className="relative flex flex-col items-center justify-center row-span-2 p-8 md:p-12"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 py-2 rounded-full border border-white">
                    <p className="text-white font-semibold">{date}</p>
                  </div>
                  <Event
                    name={name}
                    date={date}
                    posterUrl={posterUrl}
                    posterSize={posterSize}
                    description={description}
                    whatsappUrl={whatsappUrl}
                    websiteUrl={websiteUrl}
                    registrationUrl={registrationUrl}
                    onImageClick={setSelectedImage}
                  />
                  {/* Bottom horizontal line and dot */}
                  <div className="bottom-0 absolute w-[110%] h-px bg-white" />
                  <div
                    className={cn(
                      "absolute size-4 rounded-full bottom-[-0.5rem] left-[-0.5rem] bg-white",
                      i & 1 ? "right-[-0.5rem] left-auto" : "md:left-[-0.5rem]",
                    )}
                  />
                </div>
              );
            },
          )}
          <div className="h-[36rem] hidden md:block" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Page;

type EventProps = EventDetails & {
  onImageClick: (url: string) => void;
};

const Event: React.FC<EventProps> = ({
  name,
  posterUrl,
  description,
  whatsappUrl,
  websiteUrl,
  registrationUrl,
  onImageClick,
}) => {
  return (
    <div className="flex flex-col items-center">
      {posterUrl === null ? (
        <div className="w-full max-w-80 aspect-[9/12] flex items-center justify-center bg-black/5 backdrop-blur-sm mb-8 outline outline-white outline-[1px]">
          <p className="text-white text-2xl font-bold">Comming Soon!</p>
        </div>
      ) : (
        <Image
          alt={`${name} poster`}
          src={posterUrl}
          width={300}
          height={400}
          className="h-auto w-full max-w-80 mb-8 cursor-pointer"
          onClick={() => onImageClick(posterUrl)}
        />
      )}
      <p className="text-white mb-6 text-center">{description}</p>
      <div className="w-full flex flex-col md:flex-row justify-end gap-4">
        {whatsappUrl === null || <Button href={whatsappUrl}>Whatsapp</Button>}
        {websiteUrl === null || <Button href={websiteUrl}>More Info</Button>}
        {registrationUrl === null || (
          <Button href={registrationUrl}>Register</Button>
        )}
      </div>
    </div>
  );
};

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