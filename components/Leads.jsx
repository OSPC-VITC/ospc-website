import React from 'react';
import ProfileCard from './ProfileCard';
import leads from '../seeds/leads';

const Leads = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-800 container mx-auto px-6 py-8 h-auto w-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Leads</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {leads.map((lead, index) => (
          <ProfileCard
            key={index}
            name={lead.name}
            designation={lead.designation}
            image={lead.image}
            socialHandles={lead.socialHandles}
          />
        ))}
      </div>
    </div>
  );
};

export default Leads;
