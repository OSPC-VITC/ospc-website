import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className="relative">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black z-10"/>
    <footer className="relative bg-gradient-to-b from-black/90 to-black text-white py-5">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"/>
      <div className="relative z-10">
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a655f8]">Important Links</h3>
            <ul className="space-y-2">
              {["Leads", "Leaderboard", "Events"].map((link) => (
                <li key={link}>
                  <button className="hover:text-yellow-500 transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a655f8]">Contact Us</h3>
            <ul className="space-y-2 text-sm">
            <li> 
              <strong>Location:</strong> <br /> 
              <a href="https://maps.app.goo.gl/gxKGvktZy1tV1j3Q9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"> VIT Chennai Campus, Tamil Nadu, India </a>
              </li>
              <li>
                <strong>Email:</strong> <br />
                <a href="mailto:opensourceprogrammingclub.vitc@gmail.com" className="hover:underline hover:text-yellow-500">
                opensourceprogrammingclub.vitc@gmail.com
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          <div>
  <h3 className="text-lg font-semibold mb-4 text-[#a655f8]">Follow Us</h3>
  <ul className="space-y-2">
    {[
      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/ospc_vitc/" },
      { icon: "linkedin-in", label: "LinkedIn", url: "https://www.linkedin.com/company/opensource-programming-club-vitc/posts/?feedView=all" },
      { icon: "github", label: "Github", url: "https://github.com/OSPC-VITC" }
    ].map(({ icon, label, url }) => (
      <li key={label}>
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
          <i className={`fab fa-${icon} text-[#a655f8]`}></i> {label}
        </a>
      </li>
    ))}
  </ul>
</div>

        </section>

        <div className="border-t border-gray-700/50 mt-10 pt-4">
          <p className="text-center text-sm text-[#a655f8]">
            © {new Date().getFullYear()} Open Source Programming Club (OSPC) - VIT Chennai. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;