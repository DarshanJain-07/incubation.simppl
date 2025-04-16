import React from 'react';
import Image from 'next/image';
// Assuming you might use SVGs or a library for social icons
// For now, using simple text placeholders

interface ContributorCardProps {
  name: string;
  avatarUrl: string;
  linkedInUrl?: string;
  otherUrl?: string; // Example for another link
}

const ContributorCard: React.FC<ContributorCardProps> = ({
  name,
  avatarUrl,
  linkedInUrl = '#',
  otherUrl = '#',
}) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200 transition-shadow hover:shadow-lg">
      <Image
        src={avatarUrl}
        alt={`Avatar of ${name}`}
        width={64} // Corresponds to w-16
        height={64} // Corresponds to h-16
        className="w-16 h-16 rounded-full mb-2 object-cover border-2 border-white shadow-sm"
      />
      <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate w-full px-1">{name}</h3>
      <div className="flex space-x-2 text-gray-500 mt-auto pt-2">
        {/* Replace with actual icons later */}
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" title="LinkedIn">
          {/* Placeholder for LinkedIn Icon */}
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> {/* Example inline SVG */} 
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href={otherUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700" title="Other Link">
          {/* Placeholder for Other Icon (e.g., a generic link icon) */}
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> {/* Example inline SVG */} 
             <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
        </a>
        {/* Add more icons as needed */}
      </div>
    </div>
  );
};

export default ContributorCard;
