'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { Star, ArrowRight, ShoppingBag, Eye, Sparkles, Check } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import imageHero from '@/images/image6.png'
import image1 from '@/images/image7.png'
import image2 from '@/images/image3.png'
import image3 from '@/images/Beauty_Tools.png'
import imageLux from '@/images/imgLux.png'
import { useMemo } from 'react';

export default function Home() {
const { t, isRTL } = useLanguage();
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 3);
  const newest = PRODUCTS.filter(p => p.new).slice(0, 4);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  // {list of testimonials removed from json}
  // const testimonials = [
  //   { name: 'Sarah M.', text: 'The quality is unmatched. I feel like a luxury hotel guest every time I use these products.', avatar: '✨' },
  //   { name: 'Emma L.', text: 'Best investment for my skincare routine. The results are visible within weeks.', avatar: '🌸' },
  //   { name: 'Jessica K.', text: 'The packaging alone is worth it. Feels premium, performs premium.', avatar: '💎' },
  // ];

const testimonials = useMemo(() => [
  { name: t('testimonials.customer1Name'), text: t('testimonials.customer1Text'), avatar: '✨' },
  { name: t('testimonials.customer2Name'), text: t('testimonials.customer2Text'), avatar: '🌸' },
  { name: t('testimonials.customer3Name'), text: t('testimonials.customer3Text'), avatar: '💎' },
], [t]); // recompute whenever `t` changes

  const getTranslatedName = (productId: number, fallbackName: string) => {
  try {
    const translated = t(`products.${productId}.name`);
    return translated !== `products.${productId}.name` ? translated : fallbackName;
  } catch {
    return fallbackName;
  }
};
 


useEffect(() => {
  setActiveTestimonial(0); // reset when language changes
  const interval = setInterval(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, 5000);
  return () => clearInterval(interval);
}, [testimonials]);


  return (
    <>
      <Header />
      <main dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-white via-pink-50 to-green-50 overflow-hidden flex items-center">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>

          <div className="absolute top-32 right-20 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-32 left-20 w-16 h-16 bg-green-300 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-22 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">{t('hero.tagline')}</p>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    <span className="block">{t('hero.title1')}</span>
                    <span className="block">
                      <span className="luxury-gold">{t('hero.title2')}</span>
                    </span>
                    <span className="block text-gray-900">{t('hero.title3')}</span>
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-gray-600 max-w-md leading-relaxed">
                  {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/shop"
                    className="inline-flex items-center justify-center btn-primary px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
                  >
                    {t('hero.btnExplore')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all">
                    <Link href="/Blog">
                       {t('hero.btnLearn')}
                    </Link>
                  </button>
                </div>

                <div className="flex gap-8 pt-8 border-t border-gray-200">
                  <div>
                    <p className="text-2xl font-bold luxury-gold">{t('hero.stats1')}</p>
                    <p className="text-sm text-gray-600">{t('hero.stats1Text')}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold luxury-gold">{t('hero.stats2')}</p>
                    <p className="text-sm text-gray-600">{t('hero.stats2Text')}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold luxury-gold">{t('hero.stats3')}</p>
                    <p className="text-sm text-gray-600">{t('hero.stats3Text')}</p>
                  </div>
                </div>
              </div>

              <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border border-white/50 animate-float">
                    <Image
                      src={imageHero}
                      alt="Beauty Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-300 to-green-100 rounded-full shadow-lg opacity-70 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="w-full h-full flex items-center justify-center text-3xl">🌿</div>
                  </div>
                  <div className="absolute top-1/2 -right-16 w-24 h-24 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-xl shadow-lg opacity-60 animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="w-full h-full flex items-center justify-center text-2xl">💎</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-pink-50/30 to-green-50/30 overflow-hidden">
          <div className="absolute top-10 left-20 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-56 h-56 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">{t('categories.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: t('categories.skincare'), key: 'skincare', image: image1 },
                { name: t('categories.makeup'), key: 'makeup', image: image2 },
                { name: t('categories.tools'), key: 'tools', image: image3 }
              ].map((cat) => (
                <Link
                  key={cat.key}
                  href={`/shop?category=${cat.key}`}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 group-hover:to-black/40 transition" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{cat.name}</h4>
                      <span className="flex items-center text-white text-sm font-semibold drop-shadow-lg">
                        {t('categories.shopNow')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-pink-50/10 to-white overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow" style={{ animationDelay: '3s' }}></div>
          
          <div className="absolute top-40 left-1/4 text-pink-300/30 animate-pulse" style={{ animationDuration: '3s' }}>
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute bottom-40 right-1/4 text-amber-300/30 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-amber-100 text-sm font-semibold text-gray-700 mb-4">
                <Sparkles className="w-4 h-4" />
                {t('bestsellers.badge')}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('bestsellers.title')}
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {t('bestsellers.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((product, index) => {
                const translatedName = getTranslatedName(Number(product.id), product.name)
                return (
                   <div 
                  key={product.id} 
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3">
                    
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {t('bestsellers.topRated')}
                      </span>
                    </div>

                    <div className="relative h-80 bg-gradient-to-br from-pink-50 via-white to-amber-50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />

                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <Link 
                          href={`/product/${product.id}`}
                          className="p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                        >
                          <Eye className="w-5 h-5 text-gray-900" />
                        </Link>
                        <button className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300">
                          <ShoppingBag className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6 relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
                      
                      <h4 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                        {translatedName}
                      </h4>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 transition-all duration-300 ${
                                i < Math.floor(product.rating) 
                                  ? 'fill-current scale-100' 
                                  : 'text-gray-300 scale-90'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-amber-600 bg-clip-text text-transparent">
                             {t('currency')}{product.price}
                          </span>
                        </div>
                        <Link
                          href={`/product/${product.id}`}
                          className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                          {t('bestsellers.view')}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
                )
                
               
})}
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-pink-50/50 via-white to-green-50/50 overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{t('story.title')}</h3>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-pink-100/30 shadow-lg">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('story.text1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('story.text2')}
              </p>
            </div>
          </div>
        </section>

        {/* Natural Beauty Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" style={{ animationDelay: '2s' }}></div>
          
          <div className="absolute top-40 right-1/4 text-purple-300/30 animate-pulse" style={{ animationDuration: '3s' }}>
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute bottom-40 left-1/4 text-pink-300/30 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div className="space-y-8 animate-fade-in-left">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ios-gradient-fix"
                       style={{ backgroundColor: '#f4e2ff' }} >
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-sm font-semibold text-gray-700 border border-purple-200/50">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>{t('natural.badge')}</span>
                          </div>
                  </div>

                

                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('natural.title1')}
                    <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                      {t('natural.title2')}
                    </span>
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('natural.description')}
                </p>

                <div className="space-y-4">
                  {[
                    t('natural.feature1'),
                    t('natural.feature2'),
                    t('natural.feature3'),
                    t('natural.feature4')
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 group animate-fade-in-left"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Link href="/shop">
                        {t('natural.btnDiscover')}
                      </Link>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </button>
                  
                  <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105">
                    <Link href="/Blog">
                        {t('natural.btnView')}
                      </Link>
                  </button>
                </div>
              </div>

              <div className="relative animate-fade-in-right">
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
                      <Image
                        src={imageLux}
                        alt="Natural Beauty Product"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
                    </div>

                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl animate-float-slow">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></div>
                        <span className="text-sm font-bold text-gray-900">{t('natural.badgeText')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-60 blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full opacity-60 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                  <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50 animate-float-slow max-w-[200px]" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-2xl">
                        🌸
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Premium</p>
                        <p className="text-sm font-bold text-gray-900">Lavender</p>
                        <div className="flex text-yellow-400 text-xs mt-1">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/4 -right-4 w-20 h-20 rounded-full border-4 border-purple-300/30 animate-ping-slow"></div>
                  <div className="absolute bottom-1/4 -left-4 w-16 h-16 rounded-full border-4 border-pink-300/30 animate-ping-slow" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-green-50/30 to-white overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">{t('arrivals.title')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newest.map((product) => {
                const translatedName = getTranslatedName(Number(product.id), product.name)
                return (
                   <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="product-card-hover bg-white rounded-2xl overflow-hidden border border-green-100/30 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-98 bg-gradient-to-br from-pink-100 to-green-100 overflow-hidden group">
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-red-400 text-white text-xs px-3 py-1 rounded-full font-semibold z-10">{t('arrivals.badge')}</div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-sm mb-2 text-gray-900">{translatedName}</h4>
                      <span className="text-xl font-bold luxury-gold">{t('currency')}{product.price}</span>
                    </div>
                  </div>
                </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-pink-900/40 to-gray-900 animate-gradient"></div>
          
          <div className="absolute top-10 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-slow" style={{ animationDelay: '1.5s' }}></div>

          <div className="absolute top-20 left-1/4 text-pink-400/30 animate-pulse" style={{ animationDuration: '3s' }}>
            <Sparkles className="w-10 h-10" />
          </div>
          <div className="absolute bottom-20 right-1/4 text-amber-400/30 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-10 md:p-16 border border-white/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-amber-400 to-green-400 animate-shimmer"></div>

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-3xl shadow-xl animate-float-slow">
                  ✨
                </div>
              </div>

              <div className="text-center text-white">
                <h3 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                  {t('newsletter.title')}
                </h3>
                <p className="text-lg text-gray-200 mb-10 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {t('newsletter.description')}
                </p>

                {!isSubscribed ? (
                  <form 
                    className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" 
                    style={{ animationDelay: '0.4s' }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsSubscribed(true);
                    }}
                  >
                    <div className="flex-1 relative group">
                      <input
                        type="email"
                        placeholder={t('newsletter.placeholder')}
                        className="w-full px-6 py-4 rounded-xl text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-amber-400/50 transition-all duration-300 placeholder:text-gray-400 font-medium"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-amber-400 opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
                    </div>
                    <button
                      type="submit"
                      className="relative px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-gray-900 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {t('newsletter.btnSubscribe')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <div className="absolute inset-0 rounded-xl bg-amber-300 animate-pulse-slow opacity-0 group-hover:opacity-20"></div>
                    </button>
                  </form>
                ) : (
                  <div className="animate-fade-in-scale text-center py-6">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-xl">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center animate-bounce">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white font-bold text-lg">{t('newsletter.thankYou')}</span>
                    </div>
                    <p className="text-gray-300 mt-4">{t('newsletter.checkInbox')}</p>
                  </div>
                )}

                <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0110 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{t('newsletter.secure')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>{t('newsletter.noSpam')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{t('newsletter.unsubscribe')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-green-50/20 to-pink-50/20 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('testimonials.title')}
              </h3>
              <p className="text-gray-600 text-lg">
                {t('testimonials.subtitle')}
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0 px-4 mb-20"
                    >
                      <div className="max-w-3xl mx-auto">
                        <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/50 shadow-2xl overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-green-400"></div>
                          
                          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-20 blur-2xl"></div>
                          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 blur-2xl"></div>

                          <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 flex items-center justify-center text-4xl shadow-lg animate-float-slow">
                              {testimonial.avatar}
                            </div>
                          </div>

                          <div className="flex justify-center text-amber-400 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className="w-5 h-5 fill-current animate-star-twinkle"
                                style={{ animationDelay: `${i * 0.1}s` }}
                              />
                            ))}
                          </div>

                          <div className="relative">
                            <svg className="absolute -top-4 -left-2 w-10 h-10 text-pink-200 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                            </svg>
                            
                            <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 relative z-10 font-light italic">
                              {testimonial.text}
                            </p>
                          </div>

                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-gray-500 mt-1">{t('testimonials.verifiedCustomer')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`transition-all duration-500 rounded-full ${
                      index === activeTestimonial
                        ? 'w-12 h-3 bg-gradient-to-r from-pink-500 to-rose-500'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes star-twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.9);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }
        
        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        
        .animate-star-twinkle {
          animation: star-twinkle 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}