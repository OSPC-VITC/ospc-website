"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from "@/components/Particles";


function NotFound404() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
              <ParticlesComponent id="particles-background"/>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content container with glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center p-12 max-w-2xl mx-4"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-gray-200 bg-clip-text bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 leading-none">
            404
          </h1>
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The page you&apos;re looking for seems to have wandered off into the digital void.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.history.back()}
          >
            Go Back
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-purple-400 text-slate-100 font-semibold rounded-full hover:bg-purple-400 hover:text-slate-300 transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
            }}
            onClick={() => window.location.href = '/'}
          >
            Home
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-sm" />
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-purple-400 rounded-lg opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-pink-400 rounded-full opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default NotFound404;