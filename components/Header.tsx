'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/app/context/LanguageContext';
import { CartItem, getCartFromStorage } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { isRTL, t } = useLanguage();

  useEffect(() => {
    const updateCount = () => {
      const items: CartItem[] = getCartFromStorage();
      const count = items.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    window.addEventListener('cart-updated', updateCount);

    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('cart-updated', updateCount);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-white/0 backdrop-blur-sm border-b border-gray-100/0"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <span className="luxury-gold">Beauty</span>
              <span className="text-gray-900">Bernoussi</span>
            </h1>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:luxury-gold transition text-sm font-medium">
              {t('nav.home')}
            </Link>
            <Link href="/shop" className="hover:luxury-gold transition text-sm font-medium">
              {t('nav.shop')}
            </Link>
            <Link href="/reviews" className="hover:luxury-gold transition text-sm font-medium">
              {t('nav.reviews')}
            </Link>
            <Link href="/Blog" className="hover:luxury-gold transition text-sm font-medium">
              {t('nav.blog')}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition"
              title={t('nav.cart')}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium">
              {t('nav.home')}
            </Link>
            <Link href="/shop" className="text-sm font-medium">
              {t('nav.shop')}
            </Link>
            <Link href="/reviews" className="text-sm font-medium">
              {t('nav.reviews')}
            </Link>
            <Link href="/Blog" className="text-sm font-medium">
              {t('nav.blog')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
