'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/app/context/LanguageContext';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Tag, X, Clock, Share2 } from 'lucide-react';

// Import images
import image1 from '@/public/images/image37.png';
import image2 from '@/public/images/image38.png';
import image3 from '@/public/images/image39.png';
import image4 from '@/public/images/image40.png';
import image5 from '@/public/images/image41.png';
import image6 from '@/public/images/image42.png';
import image7 from '@/public/images/image43.png';

const BLOG_POSTS = [
  {
    id: 'marigold-cream',
    image: image1,
    category: 'skincare',
    date: '2024-10-15',
    author: 'Beauty Expert',
    readTime: 5
  },
  {
    id: 'aloe-eye-care',
    image: image2,
    category: 'eyecare',
    date: '2024-10-12',
    author: 'Skin Specialist',
    readTime: 4
  },
  {
    id: 'bio-day-cream',
    image: image3,
    category: 'organic',
    date: '2024-10-10',
    author: 'Beauty Expert',
    readTime: 6
  },
  {
    id: 'urea-eye-cream',
    image: image4,
    category: 'eyecare',
    date: '2024-10-08',
    author: 'Dermatologist',
    readTime: 5
  },
  {
    id: 'oriental-hand-cream',
    image: image5,
    category: 'handcare',
    date: '2024-10-05',
    author: 'Beauty Expert',
    readTime: 4
  },
  {
    id: 'chamomile-hand-balm',
    image: image6,
    category: 'handcare',
    date: '2024-10-03',
    author: 'Skin Specialist',
    readTime: 5
  },
  {
    id: 'deep-moisture-lotion',
    image: image7,
    category: 'bodycare',
    date: '2024-09-30',
    author: 'Beauty Expert',
    readTime: 6
  },
];

const CATEGORIES = ['all', 'skincare', 'eyecare', 'organic', 'handcare', 'bodycare', 'cleansing'];

export default function BlogPage() {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      t(`blog.${post.id}.title`).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(`blog.${post.id}.excerpt`).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (post: typeof BLOG_POSTS[0]) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  const handleShare = () => {
    if (selectedPost && navigator.share) {
      navigator.share({
        title: t(`blog.${selectedPost.id}.title`),
        text: t(`blog.${selectedPost.id}.excerpt`),
        url: window.location.href,
      });
    }
  };

  // Get related posts for modal
  const getRelatedPosts = (currentPost: typeof BLOG_POSTS[0]) => {
    return BLOG_POSTS.filter(
      p => p.category === currentPost.category && p.id !== currentPost.id
    ).slice(0, 3);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {t('blog.heroTitle')}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t('blog.heroSubtitle')}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder={t('blog.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:ring-4 focus:ring-gray-100 transition-all outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {t(`blog.categories.${category}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => {
              const title = t(`blog.${post.id}.title`);
              const excerpt = t(`blog.${post.id}.excerpt`);
              const category = t(`blog.categories.${post.category}`);

              return (
                <article
                  key={post.id}
                  onClick={() => handleOpenModal(post)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-96 overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                      <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-lg">
                        <Tag className="w-4 h-4" />
                        {category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString(isRTL ? 'ar-MA' : 'en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                      {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {post.readTime} {t('blog.minRead')}
                      </span>
                      <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-4 transition-all">
                        {t('blog.readMore')}
                        <ArrowRight className={`w-5 h-5 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform`} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Tag className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('blog.noResults')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('blog.noResultsDesc')}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl"
              >
                {t('blog.resetFilters')}
              </button>
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}>
            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
              <div 
                className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className={`sticky top-4 ${isRTL ? 'left-4' : 'right-4'} float-${isRTL ? 'left' : 'right'} z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all`}
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      <Tag className="w-4 h-4" />
                      {t(`blog.categories.${selectedPost.category}`)}
                    </span>
                    
                    {/* Share Button */}
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-full hover:border-gray-900 transition-all"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="font-medium">{t('blog.share') || 'مشاركة'}</span>
                    </button>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {t(`blog.${selectedPost.id}.title`)}
                  </h2>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{selectedPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>
                        {new Date(selectedPost.date).toLocaleDateString(isRTL ? 'ar-MA' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{selectedPost.readTime} {t('blog.minRead')}</span>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative h-96 md:h-[900px] rounded-2xl overflow-hidden mb-12 shadow-xl">
                    <Image
                      src={selectedPost.image}
                      alt={t(`blog.${selectedPost.id}.title`)}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    {/* Excerpt */}
                    <div className={`text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-gray-50 rounded-xl border-${isRTL ? 'r' : 'l'}-4 border-gray-900`}>
                      {t(`blog.${selectedPost.id}.excerpt`)}
                    </div>

                    {/* Main Content */}
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p className="text-lg">
                        اكتشف الفوائد المذهلة والنصائح الاستخدامية لهذا المنتج الرائع. 
                        لقد قام خبراؤنا بإعداد هذه المعلومات بعناية لمساعدتك في الحصول على 
                        أفضل النتائج من روتين العناية بالبشرة الخاص بك.
                      </p>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                        الفوائد الرئيسية
                      </h3>
                      <p className="text-lg">
                        يقدم هذا المنتج العديد من المزايا لصحة وجمال بشرتك. 
                        تم تركيبه بمكونات طبيعية تعمل بشكل متآزر لتوفير نتائج مثالية. 
                        الاستخدام المنتظم يمكن أن يؤدي إلى تحسينات ملحوظة في نسيج البشرة 
                        ولونها ومظهرها العام.
                      </p>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                        طريقة الاستخدام
                      </h3>
                      <p className="text-lg">
                        للحصول على أفضل النتائج، استخدم المنتج حسب التوجيهات. 
                        الانتظام هو المفتاح لتحقيق النتائج المرجوة. تأكد من اتباع 
                        جدول التطبيق الموصى به واستخدام الكمية المناسبة لنوع بشرتك.
                      </p>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                        نصائح الخبراء
                      </h3>
                      <p className="text-lg">
                        يوصي أخصائيو العناية بالبشرة لدينا بدمج هذا المنتج في 
                        روتينك اليومي لتحقيق أقصى فعالية. اجمعه مع منتجات تكميلية 
                        أخرى من مجموعتنا للحصول على نتائج محسّنة.
                      </p>
                      
                      <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg my-8">
                        <p className="text-lg font-semibold text-blue-900 mb-2">
                          💡 نصيحة احترافية
                        </p>
                        <p className="text-blue-800">
                          قم دائمًا بإجراء اختبار على منطقة صغيرة قبل استخدام أي منتج 
                          جديد للعناية بالبشرة. ضع كمية صغيرة على الساعد الداخلي وانتظر 
                          24 ساعة للتحقق من عدم وجود أي ردود فعل سلبية.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Related Posts */}
                  {getRelatedPosts(selectedPost).length > 0 && (
                    <div className="mt-16 pt-16 border-t border-gray-200">
                      <h3 className="text-3xl font-bold text-gray-900 mb-8">
                        مقالات ذات صلة
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {getRelatedPosts(selectedPost).map(relatedPost => (
                          <div
                            key={relatedPost.id}
                            onClick={() => {
                              setSelectedPost(relatedPost);
                            }}
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                          >
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                              <Image
                                src={relatedPost.image}
                                alt={t(`blog.${relatedPost.id}.title`)}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-4">
                              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                {t(`blog.categories.${relatedPost.category}`)}
                              </span>
                              <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                                {t(`blog.${relatedPost.id}.title`)}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}