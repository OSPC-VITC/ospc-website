'use client';

import { motion } from "framer-motion";
import ParticlesComponent from "@/components/Particles";


const GalleryPage = () => {
  const images = [
    { id: 1, url: "https://cdn.prod.website-files.com/646caab5700fe0d1824a61b9/65170c1e01c86d489de784dd_hackathon.png"},
    { id: 2, url: "https://cdn.prod.website-files.com/646caab5700fe0d1824a61b9/65170c1e01c86d489de784dd_hackathon.png" },
    { id: 3, url: "https://cdn.prod.website-files.com/646caab5700fe0d1824a61b9/65170c1e01c86d489de784dd_hackathon.png" },
    { id: 4, url: "https://cdn.prod.website-files.com/646caab5700fe0d1824a61b9/65170c1e01c86d489de784dd_hackathon.png"},
    { id: 5, url: "https://cdn.prod.website-files.com/646caab5700fe0d1824a61b9/65170c1e01c86d489de784dd_hackathon.png" },
    { id: 6, url: "https://cdn.prod.website-files.com/646caab5700fe0d1824a61b9/65170c1e01c86d489de784dd_hackathon.png" },
  ];

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

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={image.url}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;