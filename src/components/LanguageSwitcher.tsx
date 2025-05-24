import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'gu', name: 'ગુજરાતી' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center text-secondary hover:text-secondary/80 transition-colors">
        <Globe className="h-5 w-5" />
      </button>
      <div className="absolute right-0 mt-2 w-40 py-2 bg-neutral rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left hover:bg-secondary/10 ${
              i18n.language === lang.code ? 'text-secondary font-medium' : 'text-secondary/80'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;