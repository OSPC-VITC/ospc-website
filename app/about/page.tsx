"use client";

import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ospcLogo from "../assets/4d65cf8ce6b53faae1a02aaa100cd4ad.png";
import codeImage from "../assets/351e842a2504756bef8fcb6bc1307ff5.jpg";
import pheniox from "../assets/phoenix-irish-whiskey-logo-s0le9avnj0faa0uu.gif";
import Image from "next/image";

function About() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: { value: "transparent" },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 0.8,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out",
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
      opacity: {
        value: 0.4,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #000000 0%, #000000 100%)",
      }}
    >
      <div className="flex-grow relative min-h-screen overflow-hidden">
        {/* Particle Effect */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0"
        />

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-12 mb-20"
            >
              <div className="w-full md:w-2/3 text-white">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                  Get To Know Us
                </h1>
                <h1 className="text-2xl ">
                  Open source is about collabrating; not competing
                </h1>
              </div>
              <motion.div
                className="w-full md:w-1/1 h-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div >
                  <div className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <Image
                    src={phenioxc}
                    alt="Pheniox Logo"
                    className="relative rounded-lg w-full"
                    width={500}
                    height={600}
                    layout="intrinsic"
                  />
                </div>
            
              </motion.div>
            </motion.div>
            <hr className="w-full border-gray-500 my-8" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-12 mb-20"
            >
              <motion.div
                className="w-full md:w-1/3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <Image
                    src={ospcLogo}
                    alt="Open Source Programming Club Logo"
                    className="relative rounded-full w-full"
                    width={500}
                    height={300}
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-2/3 text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  About OSPC
                </h1>
                <p className="text-lg leading-relaxed text-gray-300">
                  The Open Source Programming Club (OSPC) of VIT Chennai is one
                  of the oldest clubs at Vellore Institute of Technology,
                  Chennai. Established with a mission to foster a culture of
                  innovation and collaboration, the club empowers students to
                  explore, contribute to, and create impactful open-source
                  projects. At OSPC, we are also dedicated to spreading
                  awareness about Free and Open Source Software (FOSS),
                  encouraging a community-driven approach to technology that
                  emphasizes accessibility, transparency, and collaboration.
                  One of our notable contributions is{" "}
                  <a
                    href="https://vitchennaievents.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-yellow-500"
                  >
                    vitchennaievents.com
                  </a>
                  , a dynamic platform developed by OSPC to manage and showcase
                  the events happening across VIT Chennai.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col-reverse md:flex-row items-center gap-12"
            >
              <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold mb-8 text-white">
                  What We Do?
                </h2>
                <motion.ul className="space-y-4">
                  {[
                    "We organize workshops, hackathons, and seminars to inspire learning and innovation.",
                    "We work on impactful projects and cutting-edge research across various fields.",
                    "We contribute to Open Source, fostering collaboration and community growth.",
                    "We build a platform for skill development and idea exchange.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <span className="text-purple-400">❯</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                className="w-full md:w-1/3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <Image
                    src={codeImage}
                    alt="Code Editor Visual"
                    className="relative rounded-lg w-full"
                    width={500}
                    height={300}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
