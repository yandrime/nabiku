'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface BaniHasyimSectionProps {
  searchQuery: string;
}

export const BaniHasyimSection: React.FC<BaniHasyimSectionProps> = ({ searchQuery }) => {
  const { data } = useLanguage();
  const bh = data.baniHasyim;

  if (searchQuery && !bh.treeContent.toLowerCase().includes(searchQuery.toLowerCase())) {
    return null;
  }

  return (
    <section className="sec" id="bani-hasyim">
      <div className="sec__head">
        <span className="sec__kicker">{bh.kicker}</span>
        <h2 className="sec__h">{bh.title}</h2>
        <p className="sec__intro">{bh.intro}</p>
        <div className="rule"></div>
      </div>

      <div className="tree">
        <div className="tree__lvl">
          <div className="tree__lbl">{bh.gen1Label}</div>
          <div className="tree__row">
            <span className="pill pill--k">{bh.gen1Name}</span>
            <span className="pill">{bh.gen1Spouse}</span>
          </div>
        </div>
        <div className="tree__lvl">
          <div className="tree__lbl">{bh.gen2Label}</div>
          <div className="tree__row">
            <span className="pill pill--k">{bh.gen2Name}</span>
            <span className="pill">{bh.gen2Note}</span>
          </div>
        </div>
        <div className="tree__lvl">
          <div className="tree__lbl">{bh.gen3Label}</div>

          <div className="tree__sublbl">{bh.sonsLabel}</div>
          <div className="tree__row">
            {bh.sons.map((son, idx) => {
              const pillClass = son.variant === 'g' ? 'pill pill--g' : son.variant === 'r' ? 'pill pill--r' : 'pill';
              return (
                <span key={idx} className={pillClass}>
                  {son.name}
                  {son.meta && <span dangerouslySetInnerHTML={{ __html: ` ${son.meta}` }} />}
                </span>
              );
            })}
          </div>

          <div className="tree__sublbl" style={{ marginTop: '14px' }}>{bh.daughtersLabel}</div>
          <div className="tree__row">
            {bh.daughters.map((dau, idx) => {
              const pillClass = dau.variant === 'g' ? 'pill pill--g' : 'pill';
              return (
                <span key={idx} className={pillClass}>
                  {dau.name}
                  {dau.meta && <span dangerouslySetInnerHTML={{ __html: ` ${dau.meta}` }} />}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
