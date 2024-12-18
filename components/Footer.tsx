import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-black-900 text-white py-10">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#a655f8]" >Important Links</h3>
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
          <h3 className="text-lg font-semibold mb-4 text-[#a655f8]">Contact Us</h3>
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
          <h3 className="text-lg font-semibold mb-4 text-[#a655f8]">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-github"></i> Github
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
