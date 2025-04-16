'use client';

import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'; // Using solid icons

const BackButton = () => {
  // In a real app, this would likely use Next.js router `useRouter().back()`
  const handleClick = () => {
    // Placeholder action - in a real app, navigate back
    console.log('Navigate back clicked');
    // Example with Next.js router (uncomment if router is set up):
    // import { useRouter } from 'next/navigation';
    // const router = useRouter();
    // router.back();
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
    >
      <ArrowLeftIcon className="mr-2 h-4 w-4" aria-hidden="true" />
      Back to Projects
    </button>
  );
};

export default BackButton;
