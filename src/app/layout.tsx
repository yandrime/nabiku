import type { Metadata, Viewport } from 'next';
import { Amiri, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import React from 'react';

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-amiri',
});

const ibmSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-sans',
});

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
});

export const metadata: Metadata = {
  title: 'Sirah Nabawiyah — Perjalanan Hidup Rasulullah ﷺ',
  description:
    'Ringkasan interaktif perjalanan hidup Rasulullah ﷺ dari nasab, keluarga Bani Hasyim, kenabian, hijrah, peperangan, hingga wafatnya beliau berdasarkan berbagai sumber rujukan sirah nabawiyah.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1729',
};

import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${amiri.variable} ${ibmSans.variable} ${ibmMono.variable}`}
    >
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

