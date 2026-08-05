'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', fontFamily: 'var(--f-sans, sans-serif)', color: '#e2e8f0' }}>
      <h2 style={{ color: '#D4AF37', fontSize: '28px', marginBottom: '12px' }}>Terjadi Kesalahan</h2>
      <p style={{ color: '#94a3b8', marginBottom: '28px', fontSize: '16px' }}>
        Maaf, terjadi kendala saat memuat halaman ini.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
          Coba Lagi
        </button>
        <Link
          href="/"
          style={{
            padding: '12px 24px',
            backgroundColor: 'transparent',
            color: '#D4AF37',
            border: '1px solid #D4AF37',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
            display: 'inline-block',
          }}
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
