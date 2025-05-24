import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();

  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 group"
      aria-label={t('contact.whatsapp')}
    >
      <div className="relative flex items-center">
        <span className="absolute right-full mr-4 px-3 py-1 bg-secondary text-primary text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          {t('contact.whatsapp')}
        </span>
        <div className="bg-secondary text-primary p-3 md:p-4 rounded-full shadow-lg hover:bg-secondary/90 transition-colors">
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;