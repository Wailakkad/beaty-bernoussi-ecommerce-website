'use client';
import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { Star } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Shop() {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('popularity');

  const types: Record<string, string[]> = {
    skincare: ['Shampooings', 'Crèmes de nuit', 'Huiles végétales', 'Protection chaleur'],
    makeup: ['Foundations', 'Lipsticks'],
    tools: ['Brushes'],
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...PRODUCTS];

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    if (selectedType) {
      filtered = filtered.filter(p => p.type === selectedType);
    }
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, selectedType, priceRange, sortBy]);

  // Helper function to get translated product info
  const getTranslatedProduct = (productId: string) => {
    const translatedName = t(`products.${productId}.name`);
    const translatedDescription = t(`products.${productId}.description`);
    return { translatedName, translatedDescription };
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white via-pink-50/10 to-green-50/10" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-50/50 via-white to-green-50/50 py-12 overflow-hidden">
          <div className="absolute top-10 left-20 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('shop.title')} 
              </h1>
              <p className="text-lg text-gray-600">{t('shop.subtitle')}</p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block">
              <div className="space-y-6 sticky top-24">
                {/* Category Filter */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-100/30 shadow-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">{t('shop.category')}</h3>
                  <div className="space-y-3">
                    {['skincare', 'makeup', 'tools'].map(cat => (
                      <label key={cat} className="flex items-center cursor-pointer hover:text-pink-600 transition">
                        <input
                          type="checkbox"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                          className="rounded w-4 h-4 accent-pink-400"
                        />
                        <span className="ml-3 text-sm font-medium">{t(`shop.categories.${cat}`)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                {selectedCategory && (
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100/30 shadow-lg">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">{t('shop.type')}</h3>
                    <div className="space-y-3">
                      {types[selectedCategory]?.map(type => (
                        <label key={type} className="flex items-center cursor-pointer hover:text-green-600 transition">
                          <input
                            type="checkbox"
                            checked={selectedType === type}
                            onChange={() => setSelectedType(selectedType === type ? null : type)}
                            className="rounded w-4 h-4 accent-green-400"
                          />
                          <span className="ml-3 text-sm font-medium">{t(`shop.types.${type}`)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Range */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-100/30 shadow-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">{t('shop.priceRange')}</h3>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full accent-yellow-400"
                  />
                  <div className="text-sm text-gray-600 mt-4 font-semibold">
                    {t('currency')}{priceRange[0]} - <span className="luxury-gold">{t('currency')}{priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-green-400"></div>
                  <p className="text-gray-700 font-semibold">
                    {filteredProducts.length} <span className="text-gray-600">{t('shop.products')}</span>
                  </p>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-pink-300"
                >
                  <option value="popularity">{t('shop.popularity')}</option>
                  <option value="newest">{t('shop.newest')}</option>
                  <option value="price-low">{t('shop.priceLow')}</option>
                  <option value="price-high">{t('shop.priceHigh')}</option>
                </select>
              </div>

              {/* Product Grid */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-24 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100/50">
                  <p className="text-lg text-gray-600 font-medium">{t('shop.noProducts')}</p>
                  <p className="text-sm text-gray-500">{t('shop.tryAdjusting')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map(product => {
                    const { translatedName, translatedDescription } = getTranslatedProduct(product.id);
                    
                    return (
                      <Link key={product.id} href={`/product/${product.id}`}>
                        <div className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-pink-100/30 shadow-lg hover:shadow-2xl cursor-pointer h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:bg-white/90">
                          <div className="relative h-96 bg-gradient-to-br from-pink-100 to-green-100 overflow-hidden">
                            {product.new && (
                              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-red-400 text-white text-xs px-3 py-1 rounded-full z-10 font-semibold shadow-lg">
                                {t('shop.new')}
                              </div>
                            )}
                            <Image
                              width={300}
                              height={500}
                              src={product.image}
                              alt={translatedName}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition line-clamp-2">
                                {translatedName}
                              </h4>
                              <p className="text-sm text-gray-600 mb-2 font-medium line-clamp-2">
                                {translatedDescription}
                              </p>
                              <p className="text-xs text-gray-500 mb-4 font-medium">{t(`shop.types.${product.type}`)}</p>
                              <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-600 ml-2 font-semibold">({product.reviews})</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-pink-100/30">
                              <span className="text-2xl font-bold luxury-gold">{t('currency')}{product.price}</span>
                              <button className="bg-gradient-to-r from-pink-300 to-green-300 text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg transition-all text-sm font-semibold group-hover:scale-105">
                                {t('shop.view')}
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}