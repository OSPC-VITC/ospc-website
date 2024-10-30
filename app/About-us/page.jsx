"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";


const AboutMe = () => {
  const [isClicked, setIsClicked] = useState(false);

  const textControls = useAnimation();
  const imageControls = useAnimation();
  const slideTextControls = useAnimation();

  const handleClick = () => {
    setIsClicked(true);
    imageControls.start({ scale: 1.4, x: "30%" });
    textControls.start({ x: "-190%" });
    slideTextControls.start({ scale: 1.2, x: "-60%" });
  };

  const handleBackClick = () => {
    const timeout = setTimeout(() => {
      setIsClicked(false);
    }, 1350);

    imageControls.start({ scale: 1, x: "0%" });
    textControls.start({ x: "0%" });
    slideTextControls.start({ scale: 1, x: "190%" });
  };
  return (
    <>
      <motion.div
        className="flex flex-col gap-6 pt-[120px] absolute left-72 max-w-[400px]"
        animate={textControls}
        transition={{ duration: 2 }}
      >
        <h1 className="text-6xl text-[#FFD700]">About Us</h1>
        <p className="text-gray-200 text-[18px] max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
        <button
          className="bg-[#FFD700] p-4 rounded-xl text-white"
          onClick={handleClick}
        >
          Learn more
        </button>
      </motion.div>
      <motion.img
        src="/coder.png"
        alt="coder"
        width={476}
        height={476}
        animate={imageControls}
        transition={{ duration: 2 }}
        className="absolute right-72 pt-[120px]"
      />
      

       
    </>
  );
};

export default AboutMe;