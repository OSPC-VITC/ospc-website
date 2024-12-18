import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black-900 text-white py-10">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="company-info">
          <h3 className="text-lg font-semibold mb-4">About OPSC</h3>
          <p className="text-sm leading-relaxed">
            The Open Source Programming Club (OSPC) at VIT Chennai is a student-driven initiative dedicated to promoting the power of Free and Open Source Software (FOSS).
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <button className="hover:text-yellow-500 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button className="hover:text-yellow-500 transition-colors">
                About Us
              </button>
            </li>
            <li>
              <button className="hover:text-yellow-500 transition-colors">
                Leads
              </button>
            </li>
            <li>
              <button className="hover:text-yellow-500 transition-colors">
                Leaderboard
              </button>
            </li>
            <li>
              <button className="hover:text-yellow-500 transition-colors">
                Events
              </button>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Location:</strong> <br />
              VIT Chennai Campus, Tamil Nadu, India
            </li>
            <li>
              <strong>Email:</strong> <br />
              <a 
                href="mailto:opsc@vitc.ac.in" 
                className="hover:underline hover:text-yellow-500"
              >
                opsc@vitc.ac.in
              </a>
            </li>
            <li>
              <strong>Join Us:</strong> <br />
              <a 
                href="https://join.opscvitc.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-yellow-500"
              >
                Become a Member
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://www.github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

      </section>

      <div className="border-t border-gray-700 mt-10 pt-4">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Open Source Programming Club (OPSC) - VIT Chennai. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
