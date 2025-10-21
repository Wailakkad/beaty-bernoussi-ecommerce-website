'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { useState } from 'react';

interface Language {
  code: 'en' | 'fr' | 'ar';
  name: string;
  flag: string;
}

// ✅ Make sure this is a default export
export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 min-w-40 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm font-medium transition flex items-center gap-2 ${
                language === lang.code
                  ? 'bg-pink-100 text-pink-900'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
