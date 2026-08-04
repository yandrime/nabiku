'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { SidebarRail } from '@/components/SidebarRail';
import { Hero } from '@/components/Hero';
import { NasabSection } from '@/components/NasabSection';
import { BaniHasyimSection } from '@/components/BaniHasyimSection';
import { TimelineSection } from '@/components/TimelineSection';
import { WarsSection } from '@/components/WarsSection';
import { FamilySection } from '@/components/FamilySection';
import { CompanionsSection } from '@/components/CompanionsSection';
import { Footer } from '@/components/Footer';
import { TL_SEBELUM, TL_HIJRAH, TL_WAFAT } from '@/data/timeline';

export default function Home() {
  const [isRailOpen, setIsRailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <TopBar
        isOpen={isRailOpen}
        onToggle={() => setIsRailOpen(!isRailOpen)}
        title="Sirah Nabawiyah"
      />
      <SidebarRail
        isOpen={isRailOpen}
        onClose={() => setIsRailOpen(false)}
      />

      <main className="main">
        {/* HERO */}
        <Hero />

        {/* PENCARIAN (Sticky Search Box) */}
        <div className="finder">
          <div className="finder__in">
            <input
              type="search"
              id="q"
              placeholder="Cari nama, peristiwa, atau tahun — misalnya “Khandaq”, “Hamzah”, “6 H”"
              aria-label="Cari isi sirah"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <span className="finder__c" id="qc">
                Pencarian aktif
              </span>
            )}
          </div>
        </div>

        <div className="wrap">
          {/* I — NASAB */}
          <NasabSection searchQuery={searchQuery} />

          {/* II — BANI HASYIM */}
          <BaniHasyimSection searchQuery={searchQuery} />

          {/* IV — SEBELUM KENABIAN */}
          <TimelineSection
            id="sebelum"
            kicker="Bagian IV"
            title="Sebelum Kenabian"
            intro="Empat puluh tahun pertama sebelum diangkat menjadi Rasulullah. Al-Mubarakfuri mencatat bagian ini sebagai masa pembentukan akhlak agung, kejujuran (al-Amin), dan pemeliharaan Allah dari tradisi jahiliah."
            data={TL_SEBELUM}
            searchQuery={searchQuery}
          />

          {/* VI — HIJRAH KE MADINAH */}
          <TimelineSection
            id="hijrah"
            kicker="Bagian VI"
            title="Hijrah ke Madinah"
            intro="Peristiwa sejarah paling menentukan yang menjadi titik awal penanggalan Hijriah. Strategi matang, kerahasiaan ketat, dan pertolongan Allah mengubah jalan sejarah dari titik paling rawan di Mekah menuju pusat peradaban baru."
            data={TL_HIJRAH}
            searchQuery={searchQuery}
          />

          {/* VII — SELURUH PEPERANGAN */}
          <WarsSection searchQuery={searchQuery} />

          {/* VIII & IX — ISTRI-ISTRI & PUTRA-PUTRI */}
          <FamilySection searchQuery={searchQuery} />

          {/* X — SAHABAT */}
          <CompanionsSection searchQuery={searchQuery} />

          {/* XI — WAFAT RASULULLAH */}
          <TimelineSection
            id="wafat"
            kicker="Bagian XI"
            title="Wafat Rasulullah ﷺ"
            intro="Hari-hari terakhir manusia teragung setelah menuntaskan penyampaian risalah selama dua puluh tiga tahun. Peristiwa paling memilukan bagi para sahabat yang sekaligus menjadi penguji keteguhan iman mereka."
            data={TL_WAFAT}
            searchQuery={searchQuery}
          />
        </div>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
