'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Checkout() {
  const { t, isRTL } = useLanguage();
  const [cart, setCart] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  
  // Helper function to get translated product name
  const getTranslatedName = (productId: string | number, fallbackName: string): string => {
    try {
      const translated = t(`products.${productId}.name`);
      return translated !== `products.${productId}.name` ? translated : fallbackName;
    } catch {
      return fallbackName;
    }
  };
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);

  // Load cart from localStorage on client side only
  useEffect(() => {
    const storedCart = localStorage.getItem('beauty-cart');
    const parsedCart = JSON.parse(storedCart || '[]');
    setCart(parsedCart);
    setIsLoading(false);

    // Check if cart is empty
    if (parsedCart.length === 0) {
      // Optionally redirect to shop or show empty cart message
      console.log('Cart is empty');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const subtotal = cart.reduce((sum: number, item: any) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate cart is not empty
    if (cart.length === 0) {
      setError(t('checkout.emptyCart') || 'Your cart is empty');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare order data with product details
      const orderData = {
        customer: formData,
        items: cart.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        subtotal: parseFloat(subtotal.toFixed(2)),
        shipping: parseFloat(shipping.toFixed(2)),
        tax: parseFloat(tax.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        timestamp: new Date().toISOString(),
      };

      console.log('Submitting order:', orderData);

      // Send to backend API
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || responseData.details || 'Failed to submit order');
      }

      console.log('Order submitted successfully:', responseData);

      // Store order ID
      if (responseData.orderId) {
        setOrderId(responseData.orderId);
      }

      // Clear cart
      localStorage.setItem('beauty-cart', '[]');
      window.dispatchEvent(new Event('cart-updated'));
      
      setSubmitted(true);

      // Redirect to home after 3 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      console.error('Order submission error:', error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred';
      
      setError(errorMessage);
      
      // Show alert as backup
      alert(t('checkout.errorSubmit') || errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
            <p className="text-gray-600">{t('checkout.loading') || 'Loading...'}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Show empty cart message
  if (cart.length === 0 && !submitted) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-3xl font-bold mb-4">{t('checkout.emptyCart') || 'Your cart is empty'}</h2>
            <p className="text-gray-600 mb-6">
              {t('checkout.emptyCartMessage') || 'Add some products to your cart before checkout'}
            </p>
            <Link href="/shop" className="btn-primary inline-block">
              {t('checkout.continueShopping') || 'Continue Shopping'}
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (submitted) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">{t('checkout.thankYou') || 'Thank You!'}</h2>
            {orderId && (
              <p className="text-sm text-gray-500 mb-2">
                {t('checkout.orderNumber') || 'Order #'}{orderId}
              </p>
            )}
            <p className="text-gray-600 mb-6">
              {t('checkout.confirmationMessage') || 'Your order has been received! We will contact you shortly to confirm the details.'}
            </p>
            <div className="space-y-3">
              <Link href="/" className="btn-primary inline-block w-full">
                {t('checkout.returnHome') || 'Return to Home'}
              </Link>
              <Link href="/shop" className="btn-secondary inline-block w-full">
                {t('checkout.continueShopping') || 'Continue Shopping'}
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-12">{t('checkout.title') || 'Checkout'}</h1>

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">{t('checkout.shippingInfo') || 'Shipping Information'}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('checkout.firstName') || 'First Name'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('checkout.lastName') || 'Last Name'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('checkout.email') || 'Email'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('checkout.phone') || 'Phone'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+212 6XX XXX XXX"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('checkout.address') || 'Address'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('checkout.city') || 'City'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('checkout.region') || 'Region'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('checkout.postalCode') || 'Postal Code'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || cart.length === 0}
                  className="btn-primary w-full mt-8 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('checkout.processing') || 'Processing...'}
                    </>
                  ) : (
                    t('checkout.placeOrder') || 'Place Order'
                  )}
                </button>
              </form>
            </div>

            {/* Order Review */}
            <div>
              <div className="bg-white rounded-lg p-8 sticky top-24 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">{t('checkout.orderReview') || 'Order Review'}</h2>
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {cart.map((item: any) => {
                    const product = PRODUCTS.find(p => p.id === item.productId);
                    if (!product) return null;
                    const translatedName = getTranslatedName(product.id, product.name);
                    return (
                      <div key={product.id} className="flex gap-4 pb-4 border-b last:border-b-0">
                        <Image 
                          src={product.image} 
                          width={80} 
                          height={80} 
                          alt={translatedName} 
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{translatedName}</h4>
                          <p className="text-sm text-gray-600">
                            {t('checkout.qty') || 'Qty'}: {item.quantity} × {product.price.toFixed(2)} {t('currency') || 'MAD'}
                          </p>
                          <p className="font-bold luxury-gold mt-1">
                            {(product.price * item.quantity).toFixed(2)} {t('currency') || 'MAD'}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-3 border-t pt-6">
                  <div className="flex justify-between text-gray-600">
                    <span>{t('checkout.subtotal') || 'Subtotal'}</span>
                    <span>{subtotal.toFixed(2)} {t('currency') || 'MAD'}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>{t('checkout.shipping') || 'Shipping'}</span>
                    <span>{shipping === 0 ? (t('checkout.free') || 'FREE') : `${shipping.toFixed(2)} ${t('currency') || 'MAD'}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>{t('checkout.tax') || 'Tax'} (8%)</span>
                    <span>{tax.toFixed(2)} {t('currency') || 'MAD'}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold text-gray-900 pt-6 border-t">
                    <span>{t('checkout.total') || 'Total'}</span>
                    <span className="luxury-gold">{total.toFixed(2)} {t('currency') || 'MAD'}</span>
                  </div>
                </div>

                {subtotal > 500 && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                    🎉 {t('checkout.freeShippingEarned') || 'You qualify for free shipping!'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}