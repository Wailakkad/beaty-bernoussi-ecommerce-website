import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from './providers';
import favicon from '@/images/logo.png';
import '@/app/globals.css';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Beauty Bernoussi - Luxury Beauty Products',
  description: 'Premium beauty products from Beauty Bernoussi',
  icons: {
    icon: [
      { url: favicon.src },
      { url: favicon.src, sizes: '66x66', type: 'image/png' },
      { url: favicon.src, sizes: '72x72', type: 'image/png' },
    ],
    apple: favicon.src,
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}