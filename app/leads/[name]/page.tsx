"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import leads from "../../../seeds/leads";
import core from "../../../seeds/core";
import ParticlesComponent from "@/components/Particles";

interface SocialHandles {
  instagram: string;
  linkedin: string;
  github: string;
}

interface Lead {
  name: string;
  designation: string;
  department: string;
  image: string;
  socialHandles: SocialHandles;
}

const LeadDetailsPage = () => {
  const params = useParams();
  const [lead, setLead] = useState<Lead | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params && params.name) {
      const decodedName = decodeURIComponent(params.name as string).trim();
      
      // Combine all lead sources
      const allLeads = [...leads, ...core];

      // Find the lead and provide default values for missing properties
      const foundLead = allLeads.find(
        (l) => l.name.toLowerCase() === decodedName.toLowerCase()
      );

      // If foundLead is null, ensure the default values are applied
      if (foundLead) {
        setLead({
          name: foundLead.name,
          designation: foundLead.designation || "No Designation", // Default value
          department: foundLead.department || "No Department",   // Default value
          image: foundLead.image,
          socialHandles: foundLead.socialHandles || {            // Default social handles
            instagram: "#",
            linkedin: "#",
            github: "#",
          },
        });
      } else {
        setLead(null);
      }
      
      setIsLoading(false);
    }
  }, [params?.name]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <p className="text-xl mb-4">Lead not found!</p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-lg shadow-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-700 via-blue-600 to-pink-500 text-white overflow-hidden">
      <ParticlesComponent id="particles-background" />
      <div className="flex flex-col items-center justify-center space-y-8 py-16 z-10">
        <div className="flex flex-col items-center space-y-6 text-center max-w-2xl px-4">
          <img
            src={`/${lead.image}`}
            alt={lead.name}
            className="w-40 h-40 rounded-full border-4 border-gray-600 object-cover transition-transform transform hover:scale-110 shadow-lg"
          />
          <h1 className="text-5xl font-extrabold leading-tight text-neon-gradient glow-effect">
            {lead.name}
          </h1>
          <p className="text-xl text-gray-200">{lead.designation}</p>
          <p className="text-lg text-gray-300">{lead.department}</p>

          <div className="flex justify-center space-x-6 mt-6 text-3xl">
            {lead.socialHandles.instagram !== "#" && (
              <a
                href={lead.socialHandles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>
            )}
            {lead.socialHandles.linkedin !== "#" && (
              <a
                href={lead.socialHandles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
            )}
            {lead.socialHandles.github !== "#" && (
              <a
                href={lead.socialHandles.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition duration-300"
              >
                <FaGithub />
              </a>
            )}
          </div>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 text-lg shadow-lg"
          >
            Leads Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsPage;
