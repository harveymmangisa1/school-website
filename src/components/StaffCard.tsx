import React from 'react';

interface StaffCardProps {
  name: string;
  position: string;
  imageUrl: string;
  description?: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ name, position, imageUrl, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-[280px] object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-700 font-medium mb-3">{position}</p>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default StaffCard;