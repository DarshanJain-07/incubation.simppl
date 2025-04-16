import React from 'react';
import Image from 'next/image';

// TODO: Replace with the actual path to your diagram image in the public folder
const diagramImagePath = '/ideal-approach-details.png'; 

const DiagramDisplay = () => {
  return (
    <div className="mb-8">
      <Image
        src={diagramImagePath}
        alt="Ideal Approach Details Diagram"
        width={800} // Provide an approximate width for layout calculation
        height={600} // Provide an approximate height for layout calculation
        className="w-full h-auto object-contain rounded-md border border-gray-200 shadow-sm"
        priority // Load this image faster if it's above the fold
      />
      {/* Note: The controls seen in the screenshot (like zoom/pan) 
          seem to be part of the image itself or a specific embedding tool (like Google Slides).
          Recreating those controls would require a different approach (e.g., a JS library).
          This component just displays the static image. */}
    </div>
  );
};

export default DiagramDisplay;
