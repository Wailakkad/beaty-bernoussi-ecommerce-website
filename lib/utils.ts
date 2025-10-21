export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const getCartFromStorage = () => {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem('beauty-cart');
  return cart ? JSON.parse(cart) : [];
};

export const saveCartToStorage = (cart: any[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('beauty-cart', JSON.stringify(cart));
  }
};