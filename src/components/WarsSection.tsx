'use client';

import React, { useState } from 'react';
import { WARS } from '../data/wars';
import { WarItem } from '../types';

interface WarsSectionProps {
  searchQuery: string;
}

export const WarsSection: React.FC<WarsSectionProps> = ({ searchQuery }) => {
  const [selectedYear, setSelectedYear] = useState<string>('Semua');
  const years = ['Semua', ...Array.from(new Set(WARS.map((w) => w.y)))];

  const matchesSearch = (w: WarItem) => {
    if (!searchQuery) return true;
    const plain = `${w.nm} ${w.sub} ${w.p.join(' ')} ${w.y}`.replace(/<[^>]+>/g, '').toLowerCase();
    return plain.includes(searchQuery.toLowerCase());
  };

  const matchesYear = (w: WarItem) => {
    if (selectedYear === 'Semua') return true;
    return w.y === selectedYear;
  };

  const filteredWars = WARS.filter((w) => matchesSearch(w) && matchesYear(w));
  const hasHits = WARS.some(matchesSearch);

  if (searchQuery && !hasHits) {
    return null;
  }

  return (
    <section className="sec" id="perang">
      <div className="sec__head">
        <span className="sec__kicker">Bagian VII</span>
        <h2 className="sec__h">Seluruh Peperangan</h2>
        <p className="sec__intro">
          Dalam kurun sepuluh tahun Madinah, Rasulullah memimpin langsung 27 ghazwah dan mengutus puluhan sariyyah. Syaikh al-Mubarakfuri menegaskan bahwa sasaran utama peperangan dalam Islam bukan menghancurkan musuh, melainkan mencabut fitnah dan membuka jalan dakwah.
        </p>
        <div className="rule"></div>
      </div>

      {/* Filter Chips */}
      <div className="chips">
        {years.map((y) => (
          <button
            key={y}
            className={`chip ${selectedYear === y ? 'is-on' : ''}`}
            type="button"
            onClick={() => setSelectedYear(y)}
          >
            {y === 'Semua' ? 'Semua tahun' : y}
          </button>
        ))}
      </div>

      {/* War List */}
      <div id="warList">
        {filteredWars.map((w, idx) => {
          const tyClass = w.ty === 'sariyyah' ? 'war__ty--s' : 'war__ty--g';
          const tyLabel = w.ty === 'sariyyah' ? 'Sariyyah' : w.ty === 'campuran' ? 'Rangkaian' : 'Ghazwah';
          const isOpen = searchQuery !== '';

          return (
            <details key={idx} className="war" open={isOpen}>
              <summary>
                <span className="war__yr">{w.y}</span>
                <span className="war__nm">
                  {w.nm}
                  <small dangerouslySetInnerHTML={{ __html: w.sub }} />
                </span>
                <span className={`war__ty ${tyClass}`}>{tyLabel}</span>
              </summary>
              <div className="war__body">
                {w.p.map((paragraph, pIdx) => (
                  <p key={pIdx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </details>
          );
        })}

        {filteredWars.length === 0 && (
          <div className="empty">
            Tidak ada data peperangan pada filter tahun ini.
          </div>
        )}
      </div>
    </section>
  );
};
