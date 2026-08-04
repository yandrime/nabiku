import React from 'react';
import { COMPANIONS } from '../data/companions';
import { CompanionItem } from '../types';

interface CompanionsSectionProps {
  searchQuery: string;
}

export const CompanionsSection: React.FC<CompanionsSectionProps> = ({ searchQuery }) => {
  const matchesSearch = (item: CompanionItem) => {
    if (!searchQuery) return true;
    const plain = `${item.n} ${item.d}`.toLowerCase();
    return plain.includes(searchQuery.toLowerCase());
  };

  const filteredCompanions = COMPANIONS.filter(matchesSearch);

  if (searchQuery && filteredCompanions.length === 0) {
    return null;
  }

  return (
    <section className="sec" id="sahabat">
      <div className="sec__head">
        <span className="sec__kicker">Bagian X</span>
        <h2 className="sec__h">Hubungan dengan Sahabat</h2>
        <p className="sec__intro">
          Generasi pertama yang dididik langsung oleh Rasulullah ﷺ — para sahabat yang menyertai perjuangan beliau, meriwayatkan sunnah, dan menanggung pengorbanan terbesar dalam menegakkan Islam.
        </p>
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
