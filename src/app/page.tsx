'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { SidebarRail } from '@/components/SidebarRail';
import { Hero } from '@/components/Hero';
import { NasabSection } from '@/components/NasabSection';
import { BaniHasyimSection } from '@/components/BaniHasyimSection';
import { FamilySection } from '@/components/FamilySection';
import { TimelineSection } from '@/components/TimelineSection';
import { WarsSection } from '@/components/WarsSection';
import { CompanionsSection } from '@/components/CompanionsSection';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const [isRailOpen, setIsRailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useLanguage();
  const ui = data.ui;

  return (
    <>
      <TopBar
        isOpen={isRailOpen}
        onToggle={() => setIsRailOpen(!isRailOpen)}
        title={ui.appTitle}
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
              placeholder={ui.searchPlaceholder}
              aria-label={ui.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <span className="finder__c" id="qc">
                {ui.searchActive}
              </span>
            )}
          </div>
        </div>

        <div className="wrap">
          {/* I — NASAB */}
          <NasabSection searchQuery={searchQuery} />

          {/* II — BANI HASYIM */}
          <BaniHasyimSection searchQuery={searchQuery} />

          {/* III & IV — ISTRI-ISTRI & PUTRA-PUTRI */}
          <FamilySection searchQuery={searchQuery} />

          {/* V — SEBELUM KENABIAN */}
          <TimelineSection
            id="sebelum"
            sectionKey="sebelum"
            searchQuery={searchQuery}
          />

          {/* VI — HIJRAH KE MADINAH */}
          <TimelineSection
            id="hijrah"
            sectionKey="hijrah"
            searchQuery={searchQuery}
          />

          {/* VII — SELURUH PEPERANGAN */}
          <WarsSection searchQuery={searchQuery} />

          {/* VIII — SAHABAT */}
          <CompanionsSection searchQuery={searchQuery} />

          {/* IX — WAFAT RASULULLAH */}
          <TimelineSection
            id="wafat"
            sectionKey="wafat"
            searchQuery={searchQuery}
          />
        </div>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
