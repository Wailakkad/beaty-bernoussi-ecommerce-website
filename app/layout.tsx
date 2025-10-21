import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from './providers';
import '@/app/globals.css';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Beauty Bernoussi - Luxury Beauty Products',
  description: 'Premium beauty products from Beauty Bernoussi',
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