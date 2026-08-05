'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Hero: React.FC = () => {
  const { data } = useLanguage();
  const hero = data.hero;

  return (
    <section className="hero" id="beranda">
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
          <span className="hero__eyebrow">{hero.eyebrow}</span>
          <div className="hero__ar">{hero.ar}</div>
          <h1 className="hero__h1" dangerouslySetInnerHTML={{ __html: hero.h1 }} />
          <p className="hero__lead">{hero.lead}</p>
          <div className="hero__stats">
            {hero.stats.map((s, idx) => (
              <div key={idx} className="stat">
                <div className="stat__n">{s.n}</div>
                <div className="stat__l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
