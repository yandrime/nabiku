'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/TopBar';
import { SidebarRail } from '@/components/SidebarRail';
import { Footer } from '@/components/Footer';

export default function SumberPage() {
  const [isRailOpen, setIsRailOpen] = useState(false);

  return (
    <>
      <TopBar
        isOpen={isRailOpen}
        onToggle={() => setIsRailOpen(!isRailOpen)}
        title="Sumber & Rujukan"
      />
      <SidebarRail
        isOpen={isRailOpen}
        onClose={() => setIsRailOpen(false)}
      />

      <main className="main">
        {/* HERO */}
        <section className="hero" id="top">
          <svg className="hero__pat" aria-hidden="true" width="100%" height="100%">
            <defs>
              <pattern id="khatam" width="76" height="76" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
                <g fill="none" stroke="#C6A15B" strokeWidth="1">
                  <rect x="14" y="14" width="48" height="48"/>
                  <rect x="14" y="14" width="48" height="48" transform="rotate(45 38 38)"/>
                  <circle cx="38" cy="38" r="7"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#khatam)"/>
          </svg>
          <div className="hero__inner">
            <div className="hero__frame">
              <span className="hero__eyebrow">Dokumentasi &amp; Metodologi</span>
              <div className="hero__ar">المَصَادِر وَالمَرَاجِع</div>
              <h1 className="hero__h1">Sumber &amp; Rujukan Sirah</h1>
              <p className="hero__lead">
                Aplikasi Sirah Nabawiyah ini menyadur riwayat, data kronologi, silsilah, dan peristiwa-peristiwa penting dari berbagai kitab sirah induk dan rujukan yang shahih dan diakui oleh para ulama.
              </p>
              <div style={{ marginTop: '20px' }}>
                <Link
                  href="/"
                  className="chip is-on"
                  style={{ display: 'inline-block', padding: '10px 20px', fontSize: '14px', textDecoration: 'none' }}
                >
                  ← Kembali ke Aplikasi Utama
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap" style={{ paddingTop: '40px' }}>
          <section className="sec">
            <div className="sec__head">
              <span className="sec__kicker">Rujukan Utama</span>
              <h2 className="sec__h">Kitab-Kitab Rujukan yang Disadur</h2>
              <p className="sec__intro">Berikut adalah rincian kitab-kitab sejarah dan hadits yang menjadi landasan materi dalam aplikasi ini:</p>
              <div className="rule"></div>
            </div>

            <div className="grid grid--2" style={{ gap: '24px' }}>
              {/* CARD 1 */}
              <div className="card card--gold">
                <div className="card__meta">Rujukan Utama Kronologi</div>
                <div className="card__ttl">Ar-Rahiq al-Makhtum</div>
                <p className="card__b"><strong>Karya:</strong> Syaikh Shafiyurrahman al-Mubarakfuri</p>
                <p className="card__b">Kitab sirah pemenang peringkat pertama Sayembara Penulisan Sirah Nabawiyah Internasional yang diselenggarakan oleh <em>Rabithah Alam Islami</em> (Muslim World League) di Makkah Al-Mukarramah. Menjadi rujukan utama alur kronologi dan sistematika bab dalam aplikasi ini.</p>
              </div>

              {/* CARD 2 */}
              <div className="card card--gold">
                <div className="card__meta">Kitab Sirah Klasik Induk</div>
                <div className="card__ttl">Sirah Nabawiyah Ibnu Hisyam</div>
                <p className="card__b"><strong>Karya:</strong> Abu Muhammad Abdul Malik bin Hisyam (w. 218 H)</p>
                <p className="card__b">Ringkasan dan penyempurnaan dari <em>Kitab al-Maghazi</em> karya Ibnu Ishaq. Kitab ini merupakan karya sirah paling awal dan paling otoritatif yang sampai kepada kita hari ini secara utuh.</p>
              </div>

              {/* CARD 3 */}
              <div className="card card--gold">
                <div className="card__meta">Petunjuk &amp; Hukum Sirah</div>
                <div className="card__ttl">Zadul Ma&apos;ad fi Hadyi Khairil Ibad</div>
                <p className="card__b"><strong>Karya:</strong> Imam Ibnu Qayyim al-Jauziyyah (w. 751 H)</p>
                <p className="card__b">Karya monumental yang menghimpun seluruh petunjuk, hukum, tata cara ibadah, kepemimpinan, dan etika Rasulullah ﷺ dalam kehidupan sehari-hari maupun dalam peperangan.</p>
              </div>

              {/* CARD 4 */}
              <div className="card card--gold">
                <div className="card__meta">Kitab Hadits Shahih</div>
                <div className="card__ttl">Shahih al-Bukhari &amp; Shahih Muslim</div>
                <p className="card__b"><strong>Karya:</strong> Imam al-Bukhari &amp; Imam Muslim</p>
                <p className="card__b">Himpunan hadits-hadits dengan sanad paling shahih yang menjadi rujukan utama untuk memverifikasi riwayat peristiwa, khutbah, sifat-sifat fisik, serta hubungan Rasulullah ﷺ dengan para sahabat.</p>
              </div>

              {/* CARD 5 */}
              <div className="card card--gold">
                <div className="card__meta">Sejarah Induk</div>
                <div className="card__ttl">Tarikh ar-Rusul wal Muluk (Tarikh at-Thabari)</div>
                <p className="card__b"><strong>Karya:</strong> Imam Abu Ja&apos;far Muhammad bin Jarir at-Thabari (w. 310 H)</p>
                <p className="card__b">Enciklopedia sejarah induk Islam yang merekam riwayat-riwayat awal kronologi perjalanan para nabi, garis keturunan bangsa Arab, serta peristiwa sejarah awal umat Islam.</p>
              </div>

              {/* CARD 6 */}
              <div className="card card--gold">
                <div className="card__meta">Enslikopedia Sirah Komprehensif</div>
                <div className="card__ttl">Subul al-Huda wa ar-Rasyad</div>
                <p className="card__b"><strong>Karya:</strong> Muhammad bin Yusuf as-Shalihi ash-Syami (w. 942 H)</p>
                <p className="card__b">Salah satu mahakarya ensiklopedia sirah paling luas yang menghimpun dan menyatukan riwayat-riwayat dari ratusan kitab sirah terdahulu.</p>
              </div>
            </div>

            <div className="note" style={{ marginTop: '32px' }}>
              <h4 style={{ color: 'var(--gold-bright)', marginBottom: '8px', fontFamily: 'var(--f-display)', fontSize: '17px' }}>Catatan Metodologi Penyaduran</h4>
              <p>1. Seluruh materi disadur ulang dengan kalimat yang ringkas dan lugas agar mudah dibaca pada perangkat digital.</p>
              <p>2. Nomor halaman atau referensi spesifik yang dicantumkan pada beberapa bagian mengacu pada edisi terjemahan Indonesia karya terpercaya.</p>
              <p>3. Aplikasi ini berfungsi sebagai sarana perkenalan dan pengenalan umum. Untuk pendalaman hukum dan riwayat sanad yang lebih rinci, pembaca sangat dianjurkan untuk merujuk langsung kepada kitab-kitab aslinya bersama bimbingan para ulama.</p>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
