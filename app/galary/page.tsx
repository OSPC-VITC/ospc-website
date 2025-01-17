"use client";

import { motion } from "framer-motion";
import ParticlesComponent from "@/components/Particles";

const GalleryPage = () => {
    // const images: imageType[] = [];

    return (
        <div className="min-h-screen bg-black  py-16 px-4">
            <ParticlesComponent id="particles-background" />

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-6xl mb-10 p-1 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100"
            >
                Gallery
            </motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-2xl mb-10 p-1 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100"
            >
                Coming Soon
            </motion.h1>
        </div>
    );
};

export default GalleryPage;
