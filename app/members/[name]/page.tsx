"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ParticlesComponent from "@/components/Particles";

interface Member {
  Name: string;
  Department: string;
  Picture: string | null;
  Describe: string | null;
  Instagram: string | null;
  LinkedIn: string | null;
  GitHub: string | null;
}

const MemberDetailsPage = () => {
  const params = useParams();
  const [member, setMember] = useState<Member | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        if (params && params.name) {
          const decodedName = decodeURIComponent(params.name as string).trim();
          const response = await fetch('/api/members');
          const result = await response.json();
          
          if (result.data) {
            const foundMember = result.data.find(
              (m: Member) => m.Name.toLowerCase() === decodedName.toLowerCase()
            );
            setMember(foundMember || null);
          }
        }
      } catch (error) {
        console.error('Error fetching member:', error);
        setMember(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMember();
  }, [params?.name]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <p className="text-xl mb-4">Member not found!</p>
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
      <div className="flex flex-col items-center justify-center space-y-8 py-16 z-10 relative">
        <div className="flex flex-col items-center space-y-6 text-center max-w-2xl px-4">
          {member.Picture ? (
            <img
              src={member.Picture}
              alt={member.Name}
              className="w-40 h-40 rounded-full border-4 border-gray-600 object-cover transition-transform transform hover:scale-110 shadow-lg"
            />
          ) : (
            <div className="w-40 h-40 rounded-full border-4 border-gray-600 bg-gray-700 flex items-center justify-center text-4xl">
              {member.Name.charAt(0)}
            </div>
          )}
          
          <h1 className="text-5xl font-extrabold leading-tight text-neon-gradient glow-effect">
            {member.Name}
          </h1>
          <p className="text-xl text-gray-200">{member.Department}</p>
          
          {member.Describe && (
            <p className="text-lg text-gray-300 max-w-lg">{member.Describe}</p>
          )}

          <div className="flex justify-center space-x-6 mt-6 text-3xl">
            {member.Instagram && (
              <a
                href={member.Instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>
            )}
            {member.LinkedIn && (
              <a
                href={member.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
            )}
            {member.GitHub && (
              <a
                href={member.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition duration-300"
              >
                <FaGithub />
              </a>
            )}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsPage;