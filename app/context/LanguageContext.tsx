'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageContextType = {
  language: 'en' | 'fr' | 'ar';
  translations: any;
  changeLanguage: (lang: 'en' | 'fr' | 'ar') => void;
  t: (key: string) => string;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'fr' | 'ar'>('en');
  const [translations, setTranslations] = useState<any>({});
  const [isRTL, setIsRTL] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = (localStorage.getItem('language') as 'en' | 'fr' | 'ar') || 'en';
    setLanguage(savedLang);
    setIsRTL(savedLang === 'ar');
    loadTranslations(savedLang);
  }, []);

  // Update document when language changes
  useEffect(() => {
    loadTranslations(language);
    setIsRTL(language === 'ar');
    
    // Update HTML attributes
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const loadTranslations = async (lang: 'en' | 'fr' | 'ar') => {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  };

  const changeLanguage = (lang: 'en' | 'fr' | 'ar') => {
    setLanguage(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
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