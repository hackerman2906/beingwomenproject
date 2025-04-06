import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative flex items-center">
        <span className="absolute right-full mr-4 px-3 py-1 bg-secondary text-primary text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
        <div className="bg-secondary text-primary p-4 rounded-full shadow-lg hover:bg-secondary/90 transition-colors">
          <MessageCircle className="h-6 w-6" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;