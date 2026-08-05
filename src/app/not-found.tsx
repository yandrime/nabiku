import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: '#0B1729', minHeight: '100vh', color: '#e2e8f0', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#D4AF37', fontSize: '64px', margin: '0 0 16px 0', fontWeight: 'bold' }}>404</h1>
      <h2 style={{ fontSize: '24px', marginBottom: '12px', color: '#f8fafc' }}>Halaman Tidak Ditemukan</h2>
      <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '16px' }}>
        Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#D4AF37',
          color: '#0B1729',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '14px',
          display: 'inline-block',
        }}
      >
        ← Kembali ke Beranda Utama
      </Link>
    </div>
  );
}
