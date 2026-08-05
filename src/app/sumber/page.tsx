'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/TopBar';
import { SidebarRail } from '@/components/SidebarRail';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function SumberPage() {
  const [isRailOpen, setIsRailOpen] = useState(false);
  const { data } = useLanguage();
  const s = data.sumber;

  return (
    <>
      <TopBar
        isOpen={isRailOpen}
        onToggle={() => setIsRailOpen(!isRailOpen)}
        title={s.h1}
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
              <span className="hero__eyebrow">{s.eyebrow}</span>
              <div className="hero__ar">{s.ar}</div>
              <h1 className="hero__h1">{s.h1}</h1>
              <p className="hero__lead">{s.lead}</p>
              <div style={{ marginTop: '20px' }}>
                <Link
                  href="/"
                  className="chip is-on"
                  style={{ display: 'inline-block', padding: '10px 20px', fontSize: '14px', textDecoration: 'none' }}
                >
                  {s.backBtn}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap" style={{ paddingTop: '40px' }}>
          <section className="sec">
            <div className="sec__head">
              <span className="sec__kicker">{s.kicker}</span>
              <h2 className="sec__h">{s.title}</h2>
              <p className="sec__intro">{s.intro}</p>
              <div className="rule"></div>
            </div>

            <div className="grid grid--2" style={{ gap: '24px' }}>
              {s.cards.map((c, idx) => (
                <div key={idx} className="card card--gold">
                  <div className="card__meta">{c.meta}</div>
                  <div className="card__ttl">{c.ttl}</div>
                  <p className="card__b"><strong>Author:</strong> {c.author}</p>
                  <p className="card__b" dangerouslySetInnerHTML={{ __html: c.desc }} />
                </div>
              ))}
            </div>

            <div className="note" style={{ marginTop: '32px' }}>
              <h4 style={{ color: 'var(--gold-bright)', marginBottom: '8px', fontFamily: 'var(--f-display)', fontSize: '17px' }}>
                {s.methodology.title}
              </h4>
              {s.methodology.points.map((pt, idx) => (
                <p key={idx}>{pt}</p>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
