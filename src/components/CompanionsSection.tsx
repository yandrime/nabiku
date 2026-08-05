'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CompanionItem } from '../types';

interface CompanionsSectionProps {
  searchQuery: string;
}

export const CompanionsSection: React.FC<CompanionsSectionProps> = ({ searchQuery }) => {
  const { data } = useLanguage();
  const compData = data.companions;
  const companionsList = compData.items as CompanionItem[];

  const matchesSearch = (item: CompanionItem) => {
    if (!searchQuery) return true;
    const plain = `${item.n} ${item.d}`.toLowerCase();
    return plain.includes(searchQuery.toLowerCase());
  };

  const filteredCompanions = companionsList.filter(matchesSearch);

  if (searchQuery && filteredCompanions.length === 0) {
    return null;
  }

  return (
    <section className="sec" id="sahabat">
      <div className="sec__head">
        <span className="sec__kicker">{compData.kicker}</span>
        <h2 className="sec__h">{compData.title}</h2>
        <p className="sec__intro">{compData.intro}</p>
        <div className="rule"></div>
      </div>

      <div className="grid grid--3">
        {filteredCompanions.map((c, idx) => (
          <div key={idx} className="card">
            <div className="card__ttl" style={{ fontSize: '17px' }}>
              {c.n}
            </div>
            <p className="card__b" style={{ fontSize: '13.8px' }}>
              {c.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
