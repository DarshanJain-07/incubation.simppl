import React from 'react';
import Image from 'next/image'; // Import Image component

const pythonLogo = '/techstacklogo/python.svg';
const javascriptLogo = '/techstacklogo/javascript.svg';
// Placeholder data - removed color property
const technologies = [
  { name: 'Python' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Tailwind' },
  { name: 'TypeScript' },
  { name: 'Other' },
];

const TechnologiesUsed = () => {
  // Show the number of items from the screenshot (seems like 6)
  const displayedTech = technologies.slice(0, 6);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used</h2>
      <div className="flex flex-wrap gap-3">
        {displayedTech.map((tech, index) => {
          // Alternate between the two logos based on index
          const logoPath = index % 2 === 0 ? pythonLogo : javascriptLogo;

          return (
            <div
              key={index}
              className="p-2 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center w-12 h-12"
              title={tech.name} // Keep the hover title
            >
              <Image
                src={logoPath}
                alt={tech.name} // Use tech name for alt text
                width={24} // Corresponds to h-6 w-6
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesUsed;
