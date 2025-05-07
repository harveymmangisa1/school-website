import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, excerpt, date, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[220px] object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={16} className="mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <Link
          to={`/news/${id}`}
          className="text-blue-700 font-medium inline-flex items-center hover:text-blue-800"
        >
          Read More
          <svg
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;