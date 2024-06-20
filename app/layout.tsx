// src/app/layout.tsx
'use client';

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { Footer } from '@/components/footer';
import { Inter } from 'next/font/google';
import './globals.css';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
