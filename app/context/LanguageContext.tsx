// ...existing code...
'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Translations = Record<string, unknown>;

type LanguageContextType = {
  language: 'en' | 'fr' | 'ar';
  translations: Translations;
  changeLanguage: (lang: 'en' | 'fr' | 'ar') => void;
  t: (key: string) => string;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'fr' | 'ar'>('en');
  const [translations, setTranslations] = useState<Translations>({});
  const [isRTL, setIsRTL] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang =
      (typeof window !== 'undefined' ? (localStorage.getItem('language') as 'en' | 'fr' | 'ar' | null) : null) ||
      'en';
    setLanguage(savedLang);
    setIsRTL(savedLang === 'ar');
    void loadTranslations(savedLang);
  }, []);

  // Update document when language changes
  useEffect(() => {
    void loadTranslations(language);
    setIsRTL(language === 'ar');

    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const loadTranslations = async (lang: 'en' | 'fr' | 'ar') => {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      const data: unknown = await response.json();
      if (typeof data === 'object' && data !== null) {
        setTranslations(data as Translations);
      } else {
        console.warn('Translations file did not return an object:', data);
      }
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  };

  const changeLanguage = (lang: 'en' | 'fr' | 'ar') => {
    setLanguage(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
        break;
      }
    }

    if (typeof value === 'string') return value;
    if (value === undefined) return key;
    try {
      return String(value);
    } catch {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
// ...existing code...