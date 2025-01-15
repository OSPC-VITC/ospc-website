"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Leads", href: "/leads" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/galary" },
  ];

  // Control navbar visibility based on scroll
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`relative top-0 left-0 z-50 w-full h-[60px] flex justify-between items-center px-6 md:px-16 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-transparent`}
    >
      <div className="flex flex-row gap-2 items-center">
        <Link href="/">
          <div className="flex flex-row gap-2 items-center">
            {/* Logo Image */}
            <Image
              src="/logo.webp"
              alt="Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <h1 className="text-white text-[20px] font-semibold">
              OSPC{" "}
              <span className="text-transparent">
                {/* Make this text transparent */}
                VITC
              </span>
            </h1>
          </div>
        </Link>
      </div>



      {/* Desktop Menu */}
      <nav className="hidden md:flex flex-row gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white text-sm hover:text-purple-500 transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-[60px] left-0 w-full bg-black p-6 md:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-lg hover:text-purple-500 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
