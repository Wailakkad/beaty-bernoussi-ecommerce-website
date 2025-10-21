'use client';
import { useState, useEffect } from 'react';

export function useI18n() {
  const [language, setLanguage] = useState<'en' | 'fr' | 'ar'>('en');
  const [translations, setTranslations] = useState<any>({});
  const [isRTL, setIsRTL] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'fr' | 'ar' | null;
    const lang = savedLang || 'en';
    setLanguage(lang);
    setIsRTL(lang === 'ar');
    loadTranslations(lang);
  }, []);

  // Load translations whenever language changes
  useEffect(() => {
    loadTranslations(language);
    setIsRTL(language === 'ar');
  }, [language]);

  // Load translations from JSON file
  const loadTranslations = async (lang: 'en' | 'fr' | 'ar') => {
    try {
      setIsLoading(true);
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
      
      // Apply RTL to document
      if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.lang = lang;
      }
    } catch (error) {
      console.error('Error loading translations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Change language and trigger update
  const changeLanguage = (lang: 'en' | 'fr' | 'ar') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Get translation by dot notation (e.g., "hero.title")
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { 
    language, 
    t, 
    isRTL, 
    changeLanguage,
    isLoading 
  };
}