'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body style={{ backgroundColor: '#0B1729', color: '#e2e8f0', padding: '80px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '28px', marginBottom: '12px' }}>Terjadi Kesalahan Sistem</h2>
        <p style={{ color: '#94a3b8', marginBottom: '28px', fontSize: '16px' }}>
          Terjadi kendala pada aplikasi. Sila muat ulang halaman.
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: '12px 24px',
            backgroundColor: '#D4AF37',
            color: '#0B1729',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          Muat Ulang Halaman
        </button>
      </body>
    </html>
  );
}
