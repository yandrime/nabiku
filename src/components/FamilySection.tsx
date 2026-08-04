import React from 'react';
import { WIVES, KIDS } from '../data/family';
import { CardItem } from '../types';

interface FamilySectionProps {
  searchQuery: string;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ searchQuery }) => {
  const matchesSearch = (item: CardItem) => {
    if (!searchQuery) return true;
    const plain = `${item.n} ${item.meta} ${item.b.join(' ')}`.replace(/<[^>]+>/g, '').toLowerCase();
    return plain.includes(searchQuery.toLowerCase());
  };

  const filteredWives = WIVES.filter(matchesSearch);
  const filteredKids = KIDS.filter(matchesSearch);

  const showWives = !searchQuery || filteredWives.length > 0;
  const showKids = !searchQuery || filteredKids.length > 0;

  if (!showWives && !showKids) return null;

  return (
    <>
      {/* SECTION VIII — ISTRI-ISTRI */}
      {showWives && (
        <section className="sec" id="istri">
          <div className="sec__head">
            <span className="sec__kicker">Bagian VIII</span>
            <h2 className="sec__h">Istri-Istri Rasulullah ﷺ</h2>
            <p className="sec__intro">
              Sebelas Ummahatul Mu&apos;minin (Ibu Kaum Beriman) yang mendampingi kehidupan rumah tangga Rasulullah. Setiap pernikahan mengandung hikmah kemanusiaan, dakwah, perlindungan sosial, atau pengukuhan ikatan kabilah.
            </p>
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
            <span className="sec__kicker">Bagian IX</span>
            <h2 className="sec__h">Putra-Putri Rasulullah ﷺ</h2>
            <p className="sec__intro">
              Tujuh putra-putri beliau — tiga putra dan empat putri. Seluruhnya lahir dari Ibunda Khadijah binti Khuwailid, kecuali Ibrahim yang lahir dari Mariyah al-Qibthiyah. Ketiga putra wafat sewaktu masih kanak-kanak.
            </p>
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
