'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { Trash2 } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import Image from 'next/image';

export default function Cart() {
  const { t, isRTL } = useLanguage();
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('beauty-cart') || '[]');
    setCartItems(cart);
  }, []);

  const updateQuantity = (productId: string, quantity: number) => {
    const updated = cartItems
      .map(item => item.productId === productId ? { ...item, quantity: Math.max(0, quantity) } : item)
      .filter(item => item.quantity > 0);
    setCartItems(updated);
    localStorage.setItem('beauty-cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const removeItem = (productId: string) => {
    const updated = cartItems.filter(item => item.productId !== productId);
    setCartItems(updated);
    localStorage.setItem('beauty-cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const getProduct = (id: string) => PRODUCTS.find(p => p.id === id);
  const getTranslatedProductName = (id: string) => t(`products.${id}.name`) || getProduct(id)?.name;
  
  const subtotal = cartItems.reduce((sum, item) => {
    const product = getProduct(item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">{t('cart.title')}</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-6">{t('cart.empty')}</p>
              <Link
                href="/shop"
                className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {t('cart.continueShopping')}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map(item => {
                  const product = getProduct(item.productId);
                  if (!product) return null;
                  const translatedName = getTranslatedProductName(product.id);
                  const translatedType = t(`shop.types.${product.type}`) || product.type;
                  
                  return (
                    <div key={product.id} className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                          <Image
                            src={product.image}
                            width={200}
                            height={200}
                            alt={translatedName || product.name || ''}
                            className="w-32 h-40 sm:w-44 sm:h-54 object-cover rounded"
                          />
                        </div>
                        
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between items-start gap-2 mb-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-base sm:text-lg">{translatedName}</h3>
                              <p className="text-gray-600 text-sm mb-2 sm:mb-4">{translatedType}</p>
                            </div>
                            <button
                              onClick={() => removeItem(product.id)}
                              className="text-red-500 hover:text-red-700 transition flex-shrink-0"
                              title={t('cart.remove')}
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          
                          {/* Quantity and Price */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-auto">
                            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                              <button
                                onClick={() => updateQuantity(product.id, item.quantity - 1)}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all duration-150"
                              >
                                −
                              </button>
                              <span className="px-5 py-2 text-gray-800 font-medium bg-white">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(product.id, item.quantity + 1)}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all duration-150"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-bold luxury-gold text-lg">{t('currency')}{(product.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 lg:h-fit lg:sticky lg:top-24">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">{t('cart.orderSummary')}</h2>
                <div className="space-y-4 mb-6 border-b pb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>{t('cart.subtotal')}</span>
                    <span>{t('currency')}{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>{t('cart.shipping')}</span>
                    <span>{shipping === 0 ? t('cart.free') : `${t('currency')}${shipping.toFixed(2)}`}</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                  <span>{t('cart.total')}</span>
                  <span className="luxury-gold">{t('currency')}{total.toFixed(2)}</span>
                </div>

                {/* Improved button styling */}
                <Link
                  href="/checkout"
                  className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-black to-gray-800 text-white font-semibold hover:from-gray-800 hover:to-black transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  {t('cart.checkout')}
                </Link>
                <Link
                  href="/shop"
                  className="block w-full text-center mt-3 px-6 py-3 rounded-lg border border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {t('cart.continueShopping')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
