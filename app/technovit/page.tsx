"use client";

import React from "react";
import ParticlesComponent from "@/components/Particles";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type EventDetails = {
  name: string;
  posterUrl: string | null;
  posterSize: { height: number; width: number };
  description: string;
  whatsappUrl: string | null;
  websiteUrl: string | null;
  registrationUrl: string | null;
};

const EVENTS: EventDetails[] = [
  {
    name: "VØID: v1",
    posterUrl: "/technovit/void-v1.jpeg",
    posterSize: { height: 486, width: 384 },
    description:
      "VØID:v1 is built for the restless. The ones who refuse to just watch the future and instead choose to hack it into existence. Happening on 28th & 29th October 2025, this 24-hour national hackathon is where ideas roar louder than Wall Street, where code meets chaos, and where teams don’t just build projects, they build movements.",
    whatsappUrl: "https://chat.whatsapp.com/Ds8sANxSoFPHwJcNkWTjNZ?mode=wwc",
    websiteUrl: "https://voidv1.devfolio.co/overview",
    registrationUrl: "https://voidv1.devfolio.co/overview",
  },
  {
    name: "Stranger Clues",
    posterUrl: "/technovit/stranger-clues.jpeg",
    posterSize: { height: 544, width: 384 },
    description:
      "Stranger Clues is a tech and logic-based treasure hunt accessed via a dedicated event app. Participants solve coding challenges, puzzles, and cryptic clues to progress through levels. Teams compete using reasoning, creativity, and precision to uncover the hidden treasure.",
    whatsappUrl: null,
    websiteUrl: null,
    registrationUrl: "https://chennaievents.vit.ac.in/technovit/",
  },
  {
    name: "CraftMySite",
    posterUrl: "/technovit/craft-my-site.jpeg",
    posterSize: { height: 543, width: 384 },
    description:
      "A workshop followed by a contest to create stunning personal portfolio websites. Participants will learn to use and leverage AI-powered design tools or code their sites from scratch.",
    whatsappUrl: "https://chat.whatsapp.com/G9KLeDv8Pqg6FF54Z766Le?mode=wwc",
    websiteUrl: "https://viteventhub.com",
    registrationUrl: "https://chennaievents.vit.ac.in/technovit/",
  },
  {
    name: "Game Jam",
    posterUrl: null,
    posterSize: { height: 500, width: 300 },
    description:
      "A one-day intensive Game Jam where participants design and build games from scratch. Teams brainstorm, develop, and refine gameplay, visuals, and sound with mentor guidance. The event ends with final demos, feedback, and awards for creativity and execution.",
    whatsappUrl: null,
    websiteUrl: null,
    registrationUrl: "https://chennaievents.vit.ac.in/technovit/",
  },
];

const Page: React.FC = () => {
  return (
    <div className="min-h-dvh p-8">
      <ParticlesComponent id="particles-background" />
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
          <div className="relative mt-72 hidden md:flex flex-col items-center">
            <div className="bottom-0 absolute w-[110%] h-px bg-white" />
            <div className="absolute size-4 rounded-full bottom-[-0.5rem] right-[-0.5rem] bg-white" />
          </div>
          {EVENTS.map(
            (
              {
                name,
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
                  <Event
                    name={name}
                    posterUrl={posterUrl}
                    posterSize={posterSize}
                    description={description}
                    whatsappUrl={whatsappUrl}
                    websiteUrl={websiteUrl}
                    registrationUrl={registrationUrl}
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
          <div className="h-72 hidden md:block" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Page;

type EventProps = EventDetails;

const Event: React.FC<EventProps> = ({
  name,
  posterUrl,
  description,
  whatsappUrl,
  websiteUrl,
  registrationUrl,
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
          className="h-auto w-full max-w-80 mb-8"
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
