import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ProfileCard = ({ name, designation, image, socialHandles }) => {
  return (
    <div className="max-w-md w-full rounded-lg border border-white bg-gradient-to-br from-gray-900 to-black shadow-lg p-6 text-center text-white">
      {/* Profile Image */}
      <div className="mb-6 flex justify-center">
        <img
          src={image || 'placeholder.png'}
          alt={name}
          className="h-32 w-32 rounded-full border-4 border-gray-700 object-cover"
        />
      </div>

      {/* Name and Designation */}
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-sm italic text-gray-300 mb-4">{designation}</p>

      {/* Social Handles */}
      <div className="mt-4 flex justify-center space-x-6 text-2xl">
        {socialHandles.instagram && (
          <a href={socialHandles.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500" />
          </a>
        )}
        {socialHandles.linkedin && (
          <a href={socialHandles.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500" />
          </a>
        )}
        {socialHandles.x && (
          <a href={socialHandles.x} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400" />
          </a>
        )}
        {socialHandles.github && (
          <a href={socialHandles.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;