'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { WarItem } from '../types';

interface WarsSectionProps {
  searchQuery: string;
}

export const WarsSection: React.FC<WarsSectionProps> = ({ searchQuery }) => {
  const { data } = useLanguage();
  const warsData = data.wars;
  const warsList = warsData.items as WarItem[];

  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const years = ['ALL', ...Array.from(new Set(warsList.map((w) => w.y)))];

  const matchesSearch = (w: WarItem) => {
    if (!searchQuery) return true;
    const plain = `${w.nm} ${w.sub} ${w.p.join(' ')} ${w.y}`.replace(/<[^>]+>/g, '').toLowerCase();
    return plain.includes(searchQuery.toLowerCase());
  };

  const matchesYear = (w: WarItem) => {
    if (selectedYear === 'ALL') return true;
    return w.y === selectedYear;
  };

  const filteredWars = warsList.filter((w) => matchesSearch(w) && matchesYear(w));
  const hasHits = warsList.some(matchesSearch);

  if (searchQuery && !hasHits) {
    return null;
  }

  return (
    <section className="sec" id="perang">
      <div className="sec__head">
        <span className="sec__kicker">{warsData.kicker}</span>
        <h2 className="sec__h">{warsData.title}</h2>
        <p className="sec__intro">{warsData.intro}</p>
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
            {y === 'ALL' ? warsData.filterAll : y}
          </button>
        ))}
      </div>

      {/* War List */}
      <div id="warList">
        {filteredWars.map((w, idx) => {
          const tyClass = w.ty === 'sariyyah' ? 'war__ty--s' : 'war__ty--g';
          const tyLabel = warsData.labels[w.ty] || w.ty;
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
            {warsData.emptyMessage}
          </div>
        )}
      </div>
    </section>
  );
};
