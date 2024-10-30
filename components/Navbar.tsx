"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Leads", href: "/leads" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" }
  ];

  // Control navbar visibility based on scroll
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // Hide navbar when scrolling down, show when scrolling up or at top
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

  return (
    <div
      className={`relative top-0 left-0 z-50 w-full h-[60px] flex justify-between items-center px-6 md:px-16 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-transparent`} // Make the background transparent
    >
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
          <span className="text-transparent"> {/* Make this text transparent */}
            VITC
          </span>
        </h1>
      </div>

      <nav className="hidden md:flex flex-row gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white text-sm hover:text-purple-500 transition-colors duration-300" // Keep link text white and change on hover
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white">
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
    </div>
  );
};

export default Navbar;
