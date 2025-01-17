import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

interface SocialHandles {
  instagram?: string;
  linkedin?: string;
  github?: string;
}

interface ProfileCardProps {
  name: string;
  designation?: string;
  image?: string;
  socialHandles?: SocialHandles;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  designation = '',
  image,
  socialHandles = {}
}) => {
  return (
    <div className="max-w-md w-full rounded-lg border border-white bg-gradient-to-br from-gray-900 to-black shadow-lg p-6 text-center text-white transform transition-all duration-300 hover:scale-105 opacity-75 transition duration-1000 group-hover:duration-200">
      <Link href={`/leads/${encodeURIComponent(name)}`} className="block">
        <div className="mb-6 flex justify-center">
          <img
            src={image || 'placeholder.png'}
            alt={name}
            className="h-32 w-32 rounded-full border-4 border-gray-700 object-cover transition-all duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        {designation && <p className="text-sm italic text-gray-300 mb-4">{designation}</p>}
      </Link>
      <div className="mt-4 flex justify-center space-x-6 text-2xl">
        {socialHandles?.instagram && (
          <a
            href={socialHandles.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        )}
        {socialHandles?.linkedin && (
          <a
            href={socialHandles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
        )}
        {socialHandles?.github && (
          <a
            href={socialHandles.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:text-gray-400"
          >
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;