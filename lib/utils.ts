export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const getCartFromStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem('beauty-cart');
  return cart ? (JSON.parse(cart) as CartItem[]) : [];
};

export const saveCartToStorage = (cart: CartItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('beauty-cart', JSON.stringify(cart));
  }
};
