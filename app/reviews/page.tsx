'use client';
import { useState, useEffect, FormEvent, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PRODUCTS } from '@/data/products';
import { Star, ChevronDown, ChevronUp, Heart, Check } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import Image from 'next/image';

// Define the Review interface
interface Review {
  id: string | number;
  productId: string | number;
  rating: number;
  text: string;
  author: string;
  date: string;
  verified?: boolean;
}

// Skeleton loader component
const ReviewSkeleton = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm animate-pulse border border-pink-100">
    <div className="flex gap-4 mb-4">
      <div className="h-4 bg-gray-200 rounded w-24"></div>
      <div className="h-4 bg-gray-200 rounded w-16 ml-auto"></div>
    </div>
    <div className="h-3 bg-gray-200 rounded w-full mb-3"></div>
    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
  </div>
);

export default function Reviews() {
  const { t, isRTL } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0].id);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]); // Fixed: Using Review type
  const [expandedStates, setExpandedStates] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Fixed: Wrapped in useCallback
  const fetchReviews = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/reviews');
      const data = await response.json();

      if (data.success) {
        setReviews(data.data);
      } else {
        console.error('Error fetching reviews:', data.message);
        showToast(t('reviews.errorLoad'), 'error');
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      showToast(t('reviews.errorLoad'), 'error');
    } finally {
      setIsLoading(false);
    }
  }, [t]); // Added t as dependency

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]); // Fixed: Added fetchReviews to dependency array



  const handleSubmitReview = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!reviewText.trim() || !authorName.trim()) {
      showToast(t('reviews.errorFill'), 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: selectedProduct,
          rating,
          text: reviewText,
          author: authorName,
        }),
      });

      const data = await response.json();

      if (data.success) {
        await fetchReviews();

        setReviewText('');
        setAuthorName('');
        setRating(5);

        showToast(t('reviews.successSubmit'), 'success');
      } else {
        showToast('Error: ' + data.message, 'error');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      showToast(t('reviews.errorSubmit'), 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const product = PRODUCTS.find(p => p.id === selectedProduct);
  const productReviews = reviews.filter(r => r.productId === selectedProduct);
  const isExpanded = expandedStates[selectedProduct] || false;
  const displayedReviews = isExpanded ? productReviews : productReviews.slice(0, 3);
  const hasMoreReviews = productReviews.length > 3;

  const toggleExpanded = () => {
    setExpandedStates(prev => ({
      ...prev,
      [selectedProduct]: !prev[selectedProduct],
    }));
  };

  const averageRating = productReviews.length > 0
    ? parseFloat((productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length).toFixed(1))
    : 0;

  type StarRatingProps = {
    count: number;
    size?: 'sm' | 'md';
  };

  const StarRating = ({ count, size = 'md' }: StarRatingProps) => {
    const sizeClasses = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses} ${i < Math.floor(count) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} transition-colors`}
          />
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
              <div className="h-12 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <ReviewSkeleton />
              </div>
              <div className="lg:col-span-2">
                <ReviewSkeleton />
                <ReviewSkeleton />
                <ReviewSkeleton />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Get translated product name
  const translatedProductName = t(`products.${product?.id}.name`) || product?.name;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{t('reviews.title')}</h1>
            <p className="text-gray-600">{t('reviews.subtitle')}</p>
          </div>

          {/* Toast Notification */}
          {toast && (
            <div className={`fixed top-6 ${isRTL ? 'left-6' : 'right-6'} px-6 py-3 rounded-lg shadow-lg font-medium transition-all duration-300 z-50 ${
              toast.type === 'success'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`} style={{ animation: 'fadeIn 0.3s ease-out' }}>
              {toast.message}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Review Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 sticky top-24 shadow-md border border-pink-100 transition-all duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-500" />
                  {t('reviews.formTitle')}
                </h2>
                <p className="text-sm text-gray-600 mb-6">{t('reviews.formDescription')}</p>

                <form onSubmit={handleSubmitReview} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('reviews.selectProduct')}</label>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full border-2 border-pink-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      {PRODUCTS.map(p => (
                        <option key={p.id} value={p.id}>
                          {t(`products.${p.id}.name`) || p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('reviews.yourName')}</label>
                    <input
                      type="text"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder={t('reviews.namePlaceholder')}
                      disabled={isSubmitting}
                      className="w-full border-2 border-pink-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">{t('reviews.rating')}</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          disabled={isSubmitting}
                          className="focus:outline-none transition-all duration-200 hover:scale-125 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Star
                            className={`w-8 h-8 transition-all duration-200 ${
                              star <= rating
                                ? 'fill-yellow-400 text-yellow-400 scale-110'
                                : 'text-gray-300 hover:text-yellow-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('reviews.yourReview')}</label>
                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder={t('reviews.reviewPlaceholder')}
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full border-2 border-pink-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t('reviews.submitting')}
                      </span>
                    ) : (
                      t('reviews.submitBtn')
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Reviews Display */}
            <div className="lg:col-span-2">
              {/* Product Summary Card */}
              {product && (
                <div className="mb-8 bg-white rounded-2xl p-8 shadow-md border border-pink-100 animate-fade-in transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Image
                      src={product.image}
                      width={200}
                      height={200}
                      alt={translatedProductName || ''}
                      className="w-68 h-98 object-cover rounded-xl border-2 border-pink-200 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">{translatedProductName}</h2>
                      <div className="flex items-center gap-3 mb-4">
                        <StarRating count={product.rating} size="md" />
                        <span className="text-sm font-semibold text-gray-700">
                          {averageRating > 0 ? `${averageRating}` : t('reviews.noRating')} · {productReviews.length} {productReviews.length === 1 ? t('reviews.review') : t('reviews.reviews')}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{t(`products.${product.id}.description`) || product.description}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews List */}
              <div className="space-y-4">
                {productReviews.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center shadow-md border border-pink-100">
                    <Heart className="w-12 h-12 text-pink-300 mx-auto mb-3" />
                    <p className="text-lg font-semibold text-gray-700 mb-2">{t('reviews.noReviews')}</p>
                    <p className="text-gray-600">{t('reviews.noReviewsDesc')}</p>
                  </div>
                ) : (
                  <>
                    {displayedReviews.map((review, idx) => (
                      <div
                        key={review.id}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100 hover:shadow-md transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-gray-900">{review.author}</h3>
                              {review.verified && (
                                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                                  <Check className="w-3 h-3" />
                                  {t('reviews.verified')}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                          <StarRating count={review.rating} size="sm" />
                        </div>
                        <p className="text-gray-800 leading-relaxed">{review.text}</p>
                      </div>
                    ))}

                    {hasMoreReviews && (
                      <button
                        onClick={toggleExpanded}
                        className="w-full bg-gradient-to-r from-pink-50 to-pink-50 hover:from-pink-100 hover:to-pink-100 text-gray-800 font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 border-2 border-pink-200 hover:border-pink-300"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-5 h-5 text-pink-600" />
                            {t('reviews.showLess')}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-5 h-5 text-pink-600" />
                            {`${t('reviews.seeAllReviews')} (${productReviews.length})`}
                          </>
                        )}
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}