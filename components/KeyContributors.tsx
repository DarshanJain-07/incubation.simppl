import React from 'react';
import ContributorCard from './ContributorCard';

// Placeholder data - replace with actual contributors
// Ensure avatar images are placed in the /public directory
const contributors = [
  { name: 'John Doe', avatarUrl: '/avatars/john-doe.jpg' }, // Example path
  { name: 'Jane Smith', avatarUrl: '/avatars/jane-smith.jpg' },
  { name: 'Alex Johnson', avatarUrl: '/avatars/alex-johnson.jpg' },
  { name: 'Sam Williams', avatarUrl: '/avatars/sam-williams.jpg' },
  // Add more contributors as needed
];

const KeyContributors = () => {
  // Only show the first 4 contributors based on the screenshot
  const displayedContributors = contributors.slice(0, 4);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Key Contributors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {displayedContributors.map((contributor, index) => (
          <ContributorCard
            key={index}
            name={contributor.name}
            avatarUrl={contributor.avatarUrl}
            // Pass specific social links if available
            // linkedInUrl="..."
            // otherUrl="..."
          />
        ))}
      </div>
    </div>
  );
};

export default KeyContributors;
