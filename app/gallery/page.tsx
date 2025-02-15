"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesComponent from "@/components/Particles";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Search, X } from "lucide-react";

interface GalleryImage {
  img_url: string;
  event_name?: string;
}

const GalleryPage = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [, setIsLoading] = useState(false);

  const filteredImages = images.filter((image) =>
    image.event_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/gallery");
        const { data, error } = await res.json();
        if (error) throw error;
        setImages(data || []);
      } catch (err) {
        setError("Failed to load gallery images. Please try again later.");
        console.error("Error:", err);
      } finally {
        setLoading(false);
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 px-4">
      <ParticlesComponent id="particles-background" />
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl mb-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-2"
        >
          Gallery
        </motion.h1>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Error State */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-md mx-auto p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-8"
        >
          <p className="text-center text-red-400">{error}</p>
        </motion.div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-72 rounded-xl bg-gray-800/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/10 to-transparent animate-shimmer" />
            </Skeleton>
          ))}
        </div>
      ) : filteredImages.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-xl text-gray-400">
            {searchQuery ? "No matching images found" : "No images available"}
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.img_url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.img_url}
                  alt={image.event_name || "Gallery Image"}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                  priority={index < 6}
                />
                {image.event_name && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-lg font-medium">{image.event_name}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-gray-900/95 border-gray-800">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-gray-900 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-800">
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <DialogTitle className="text-lg font-medium text-gray-100 mb-4">
            {selectedImage?.event_name || "Gallery Image"}
          </DialogTitle>
          {selectedImage && (
            <div className="relative aspect-video w-full">
              <Image
                src={selectedImage.img_url}
                alt={selectedImage.event_name || "Gallery Image"}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
              {selectedImage.event_name && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-xl font-medium">{selectedImage.event_name}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;