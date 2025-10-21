'use client';
import { useState, use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PRODUCTS } from '@/data/products';
import { Star, ShoppingBag, Heart, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

interface CartItem {
  productId: string;
  quantity: number;
}


export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t, isRTL } = useLanguage();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  // WhatsApp phone number (replace with your actual number)
  const WHATSAPP_NUMBER = '+212702446580';

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl">{t('product.notFound') || 'Product not found'}</p>
        </div>
        <Footer />
      </>
    );
  }

  // Get translated product information
  const translatedName = t(`products.${product.id}.name`);
  const translatedFullDescription = t(`products.${product.id}.fullDescription`);
  const translatedIngredients = t(`products.${product.id}.ingredients`);
  const translatedSkinType = t(`products.${product.id}.skinType`);
  const translatedUsage = t(`products.${product.id}.usage`);

  // Parse translated arrays
  const ingredientsList = Array.isArray(translatedIngredients) 
    ? translatedIngredients 
    : product.ingredients;
  
  const skinTypeList = Array.isArray(translatedSkinType)
    ? translatedSkinType
    : product.skinType;

 const handleAddToCart = () => {
  const cart: CartItem[] = JSON.parse(localStorage.getItem('beauty-cart') || '[]');
  const existing = cart.find((item) => item.productId === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId: product.id, quantity });
  }

  localStorage.setItem('beauty-cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cart-updated'));
  alert(t('product.addedToCart') || 'Added to cart!');
};


  const handleWhatsAppOrder = () => {
    const productUrl = window.location.href;
    const msg = {
      greeting: t('product.whatsappMessage.greeting') || "Hello! I'm interested in ordering:",
      product: t('product.whatsappMessage.product') || 'Product',
      price: t('product.whatsappMessage.price') || 'Price',
      quantity: t('product.whatsappMessage.quantity') || 'Quantity',
      total: t('product.whatsappMessage.total') || 'Total',
      productLink: t('product.whatsappMessage.productLink') || 'Product Link',
      closing: t('product.whatsappMessage.closing') || 'Please help me complete my order. Thank you!'
    };
    
    const message = `${msg.greeting}\n\n` +
                   `📦 ${msg.product}: ${translatedName}\n` +
                   `💰 ${msg.price}: ${t('currency')}${product.price}\n` +
                   `📊 ${msg.quantity}: ${quantity}\n` +
                   `💵 ${msg.total}: ${t('currency')}${(product.price * quantity).toFixed(2)}\n\n` +
                   `${msg.productLink}: ${productUrl}\n\n` +
                   `${msg.closing}`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="mb-8 flex gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition">{t('nav.home') || 'Home'}</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-gray-900 transition">{t('nav.shop') || 'Shop'}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{translatedName}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Gallery */}
            <div>
              <div className="mb-4 rounded-2xl overflow-hidden bg-gray-100 aspect-[4/5] relative shadow-lg">
                <Image
                  src={product.images[selectedImage]}
                  alt={translatedName}
                  fill
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                      selectedImage === i 
                        ? 'border-gray-900 shadow-md ring-2 ring-gray-900 ring-offset-2' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <Image src={img} width={200} height={200} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">{translatedName}</h1>
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.reviews} {t('product.reviews') || 'reviews'})</span>
                </div>
                <p className="text-3xl font-bold luxury-gold mb-6">{t('currency')}{product.price}</p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{translatedFullDescription}</p>

              {/* Options */}
              <div className="mb-8 space-y-6">
                {ingredientsList && (
                  <div>
                    <h3 className="font-semibold mb-3 text-gray-900">{t('product.keyIngredients') || 'Key Ingredients'}</h3>
                    <div className="flex flex-wrap gap-2">
                     {ingredientsList.map((ing: string, index: number) => (
  <span key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-gray-300 transition">
    {ing}
  </span>
))}

                    </div>
                  </div>
                )}

                {skinTypeList && (
                  <div>
                    <h3 className="font-semibold mb-3 text-gray-900">{t('product.bestFor') || 'Best For'}</h3>
                    <p className="text-gray-600">{Array.isArray(skinTypeList) ? skinTypeList.join(', ') : skinTypeList}</p>
                  </div>
                )}

                {translatedUsage && (
                  <div>
                    <h3 className="font-semibold mb-3 text-gray-900">{t('product.usage') || 'Usage'}</h3>
                    <p className="text-gray-600 leading-relaxed">{translatedUsage}</p>
                  </div>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="mb-6 flex gap-3">
                <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden hover:border-gray-400 transition">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-5 py-3 hover:bg-gray-100 transition font-semibold text-gray-700"
                  >
                    −
                  </button>
                  <span className="px-6 py-3 font-semibold text-gray-900 min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-5 py-3 hover:bg-gray-100 transition font-semibold text-gray-700"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-gray-800 hover:to-gray-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {t('product.addToCart') || 'Add to Cart'}
                </button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`px-6 py-3 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${
                    liked 
                      ? 'border-red-500 bg-red-50 shadow-md' 
                      : 'border-gray-300 hover:border-red-300 hover:bg-red-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 transition-all ${liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>

              {/* WhatsApp Order Button */}
             <button
  onClick={handleWhatsAppOrder}
  className="w-full ios-gradient-green bg-green-600 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl mb-6 relative z-[999]"
>
  <MessageCircle className="w-6 h-6" />
  <span className="text-lg">{t('product.orderWhatsApp') || 'Order via WhatsApp'}</span>
</button>


              <div className="space-y-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-200">
               
                <p className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  {t('product.returns') || '30-day returns'}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  {t('product.crueltyFree') || 'Cruelty-free & vegan ingredients'}
                </p>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mb-16 border-t pt-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">{t('product.customerReviews') || 'Customer Reviews'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { rating: 5, text: t('product.review1') || 'Absolutely love this product! My skin has never looked better.', author: 'Alex M.' },
                { rating: 5, text: t('product.review2') || 'Premium quality, fast shipping, and amazing results!', author: 'Jordan T.' },
                { rating: 4, text: t('product.review3') || 'Great product but a bit pricey. Worth the investment though.', author: 'Sam K.' },
              ].map((review, i) => (
                <div key={i} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-3 italic">&quot;{review.text}&quot;</p>

                  {/* <p className="text-sm font-semibold text-gray-900">{review.author}</p> */}
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="border-t pt-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">{t('product.youMayAlsoLike') || 'You May Also Like'}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map(p => {
                  const relatedTranslatedName = t(`products.${p.id}.name`);
                  return (
                    <Link key={p.id} href={`/product/${p.id}`}>
                      <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        <div className="relative h-48 bg-gray-100">
                          <Image src={p.image} width={200} height={100} alt={relatedTranslatedName} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold mb-2 line-clamp-2 text-gray-900">{relatedTranslatedName}</h4>
                          <span className="text-lg font-bold luxury-gold">{t('currency')}{p.price}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}