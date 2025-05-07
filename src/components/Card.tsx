import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] ${className}`}>
      <div className="p-6">
        {(title || icon) && (
          <div className="flex items-center mb-4">
            {icon && <div className="mr-3 text-blue-800">{icon}</div>}
            {title && <h3 className="text-xl font-semibold text-gray-900">{title}</h3>}
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;