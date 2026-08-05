'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CardItem } from '../types';

interface FamilySectionProps {
  searchQuery: string;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ searchQuery }) => {
  const { data } = useLanguage();
  const wivesData = data.family.wives;
  const kidsData = data.family.kids;

  const wivesList = wivesData.items as CardItem[];
  const kidsList = kidsData.items as CardItem[];

  const matchesSearch = (item: CardItem) => {
    if (!searchQuery) return true;
    const plain = `${item.n} ${item.meta} ${item.b.join(' ')}`.replace(/<[^>]+>/g, '').toLowerCase();
    return plain.includes(searchQuery.toLowerCase());
  };

  const filteredWives = wivesList.filter(matchesSearch);
  const filteredKids = kidsList.filter(matchesSearch);

  const showWives = !searchQuery || filteredWives.length > 0;
  const showKids = !searchQuery || filteredKids.length > 0;

  if (!showWives && !showKids) return null;

  return (
    <>
      {/* SECTION VIII — ISTRI-ISTRI */}
      {showWives && (
        <section className="sec" id="istri">
          <div className="sec__head">
            <span className="sec__kicker">{wivesData.kicker}</span>
            <h2 className="sec__h">{wivesData.title}</h2>
            <p className="sec__intro">{wivesData.intro}</p>
            <div className="rule"></div>
          </div>

          <div className="grid grid--2">
            {filteredWives.map((w, idx) => (
              <div key={idx} className={`card card--${w.ph}`}>
                <div className="card__meta">
                  {String(idx + 1).padStart(2, '0')} · {w.meta}
                </div>
                <div className="card__ttl">{w.n}</div>
                {w.b.map((paragraph, pIdx) => (
                  <p key={pIdx} className="card__b" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION IX — PUTRA-PUTRI */}
      {showKids && (
        <section className="sec" id="anak">
          <div className="sec__head">
            <span className="sec__kicker">{kidsData.kicker}</span>
            <h2 className="sec__h">{kidsData.title}</h2>
            <p className="sec__intro">{kidsData.intro}</p>
            <div className="rule"></div>
          </div>

          <div className="grid grid--2">
            {filteredKids.map((k, idx) => (
              <div key={idx} className="card card--gold">
                <div className="card__meta">{k.meta}</div>
                <div className="card__ttl">{k.n}</div>
                {k.b.map((paragraph, pIdx) => (
                  <p key={pIdx} className="card__b" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
