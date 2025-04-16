import React from 'react';
import { LinkPreview } from "@/components/ui/link-preview";

// Placeholder data - replace with actual links
// Ensure these URLs work for the preview to function correctly
const links = [
  { text: 'Link for documentation of the SimPPL documentation page.', href: 'https://ui.aceternity.com' }, // Example working link
  { text: 'Another SimPPL documentation link.', href: 'https://google.com' }, // Example working link
  { text: 'Yet another SimPPL documentation link.', href: 'https://github.com' }, // Example working link
];

const ImportantLinks = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Important Links</h2>
      <div className="space-y-2 flex flex-col items-start">
        {links.map((link, index) => (
          <LinkPreview
            key={index}
            url={link.href}
            className="block text-blue-600 hover:text-blue-800 text-sm hover:underline"
          >
            {link.text}
          </LinkPreview>
        ))}
      </div>
    </div>
  );
};

export default ImportantLinks;
