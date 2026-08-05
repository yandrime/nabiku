'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { NasabItem } from '../types';

interface NasabSectionProps {
  searchQuery: string;
}

export const NasabSection: React.FC<NasabSectionProps> = ({ searchQuery }) => {
  const { data } = useLanguage();
  const nasab = data.nasab;

  const [openAccordion, setOpenAccordion] = useState<Record<string, boolean>>({
    disepakati: true,
    diperselisihkan: false,
    tanpaRujukan: false,
  });

  const [openNodes, setOpenNodes] = useState<Record<string, boolean>>({});

  const toggleAccordion = (key: string) => {
    setOpenAccordion((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleNode = (nodeId: string) => {
    setOpenNodes((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const matchesSearch = (item: NasabItem) => {
    if (!searchQuery) return true;
    const searchAttr = `${item.n} ${item.note || ''}`.toLowerCase();
    return searchAttr.includes(searchQuery.toLowerCase());
  };

  const disepakatiItems = nasab.disepakati.items as NasabItem[];
  const diperselisihkanItems = nasab.diperselisihkan.items as NasabItem[];
  const tanpaRujukanItems = nasab.tanpaRujukan.items as NasabItem[];

  const disepakatiMatches = disepakatiItems.filter(matchesSearch);
  const diperselisihkanMatches = diperselisihkanItems.filter(matchesSearch);
  const tanpaRujukanMatches = tanpaRujukanItems.filter(matchesSearch);

  const sectionHasHits =
    !searchQuery ||
    disepakatiMatches.length > 0 ||
    diperselisihkanMatches.length > 0 ||
    tanpaRujukanMatches.length > 0;

  // Penomoran Generasi Berkelanjutan
  const offsetI = 0;
  const offsetII = disepakatiItems.length - 1;
  const offsetIII = offsetII + diperselisihkanItems.length - 1;

  if (!sectionHasHits) return null;

  return (
    <section className="sec" id="nasab">
      <div className="sec__head">
        <span className="sec__kicker">{nasab.kicker}</span>
        <h2 className="sec__h">{nasab.title}</h2>
        <p className="sec__intro">{nasab.intro}</p>
        <div className="rule"></div>
      </div>

      <div className="acc-group">
        {/* ACCORDION 1: DISEPAKATI */}
        {(searchQuery === '' || disepakatiMatches.length > 0) && (
          <div
            className={`acc-item ${
              openAccordion.disepakati || searchQuery !== '' ? 'is-open' : ''
            }`}
            id="accDisepakati"
          >
            <button
              className="acc-header"
              type="button"
              aria-expanded={openAccordion.disepakati}
              onClick={() => toggleAccordion('disepakati')}
            >
              <div className="acc-header__left">
                <span className="acc-header__badge acc-header__badge--gold">
                  {nasab.disepakati.badge}
                </span>
                <h3 className="acc-header__title">{nasab.disepakati.title}</h3>
              </div>
              <div className="acc-header__right">
                <span>{nasab.disepakati.meta}</span>
                <svg
                  className="acc-header__icon"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="acc-body" id="panelDisepakati">
              <p className="acc-body__desc">{nasab.disepakati.desc}</p>
              <ul className="chain">
                {disepakatiItems.map((x, i) => {
                  if (!matchesSearch(x)) return null;
                  const nodeId = `disepakati-${i}`;
                  const isOpenNode = openNodes[nodeId];
                  const genNum = offsetI + i + 1;
                  return (
                    <li
                      key={nodeId}
                      className={`node ${x.key ? 'is-key' : ''} ${
                        isOpenNode ? 'is-open' : ''
                      }`}
                    >
                      <span className="node__dot" aria-hidden="true"></span>
                      <button
                        className="node__btn"
                        type="button"
                        style={{ cursor: x.note ? 'pointer' : 'default' }}
                        aria-expanded={isOpenNode}
                        onClick={() => x.note && toggleNode(nodeId)}
                      >
                        <span className="node__num">
                          {nasab.genLabel} {genNum}
                        </span>
                        {i > 0 && (
                          <span style={{ opacity: 0.5, fontSize: '0.82em' }}>
                            {nasab.bin}
                          </span>
                        )}
                        {x.n}
                        {x.note && (
                          <span className="node__hint">{nasab.clickDetail}</span>
                        )}
                      </button>
                      {x.note && (
                        <div
                          className="node__note"
                          dangerouslySetInnerHTML={{ __html: x.note }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {/* ACCORDION 2: DIPERSELISIHKAN */}
        {(searchQuery === '' || diperselisihkanMatches.length > 0) && (
          <div
            className={`acc-item ${
              openAccordion.diperselisihkan || searchQuery !== '' ? 'is-open' : ''
            }`}
            id="accDiperselisihkan"
          >
            <button
              className="acc-header"
              type="button"
              aria-expanded={openAccordion.diperselisihkan}
              onClick={() => toggleAccordion('diperselisihkan')}
            >
              <div className="acc-header__left">
                <span className="acc-header__badge acc-header__badge--warn">
                  {nasab.diperselisihkan.badge}
                </span>
                <h3 className="acc-header__title">{nasab.diperselisihkan.title}</h3>
              </div>
              <div className="acc-header__right">
                <span>{nasab.diperselisihkan.meta}</span>
                <svg
                  className="acc-header__icon"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="acc-body" id="panelDiperselisihkan">
              <p className="acc-body__desc">{nasab.diperselisihkan.desc}</p>
              <ul className="chain">
                {diperselisihkanItems.map((x, i) => {
                  if (!matchesSearch(x)) return null;
                  const nodeId = `diperselisihkan-${i}`;
                  const isOpenNode = openNodes[nodeId];
                  const genNum = offsetII + i + 1;
                  return (
                    <li
                      key={nodeId}
                      className={`node ${x.key ? 'is-key' : ''} ${
                        isOpenNode ? 'is-open' : ''
                      }`}
                    >
                      <span className="node__dot" aria-hidden="true"></span>
                      <button
                        className="node__btn"
                        type="button"
                        style={{ cursor: x.note ? 'pointer' : 'default' }}
                        aria-expanded={isOpenNode}
                        onClick={() => x.note && toggleNode(nodeId)}
                      >
                        <span className="node__num">
                          {nasab.genLabel} {genNum}
                        </span>
                        {i > 0 && (
                          <span style={{ opacity: 0.5, fontSize: '0.82em' }}>
                            {nasab.bin}
                          </span>
                        )}
                        {x.n}
                        {x.note && (
                          <span className="node__hint">{nasab.clickDetail}</span>
                        )}
                      </button>
                      {x.note && (
                        <div
                          className="node__note"
                          dangerouslySetInnerHTML={{ __html: x.note }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {/* ACCORDION 3: TANPA RUJUKAN PASTI */}
        {(searchQuery === '' || tanpaRujukanMatches.length > 0) && (
          <div
            className={`acc-item ${
              openAccordion.tanpaRujukan || searchQuery !== '' ? 'is-open' : ''
            }`}
            id="accTanpaRujukan"
          >
            <button
              className="acc-header"
              type="button"
              aria-expanded={openAccordion.tanpaRujukan}
              onClick={() => toggleAccordion('tanpaRujukan')}
            >
              <div className="acc-header__left">
                <span className="acc-header__badge acc-header__badge--muted">
                  {nasab.tanpaRujukan.badge}
                </span>
                <h3 className="acc-header__title">{nasab.tanpaRujukan.title}</h3>
              </div>
              <div className="acc-header__right">
                <span>{nasab.tanpaRujukan.meta}</span>
                <svg
                  className="acc-header__icon"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="acc-body" id="panelTanpaRujukan">
              <p className="acc-body__desc">{nasab.tanpaRujukan.desc}</p>
              <ul className="chain">
                {tanpaRujukanItems.map((x, i) => {
                  if (!matchesSearch(x)) return null;
                  const nodeId = `tanpaRujukan-${i}`;
                  const isOpenNode = openNodes[nodeId];
                  const genNum = offsetIII + i + 1;
                  return (
                    <li
                      key={nodeId}
                      className={`node ${x.key ? 'is-key' : ''} ${
                        isOpenNode ? 'is-open' : ''
                      }`}
                    >
                      <span className="node__dot" aria-hidden="true"></span>
                      <button
                        className="node__btn"
                        type="button"
                        style={{ cursor: x.note ? 'pointer' : 'default' }}
                        aria-expanded={isOpenNode}
                        onClick={() => x.note && toggleNode(nodeId)}
                      >
                        <span className="node__num">
                          {nasab.genLabel} {genNum}
                        </span>
                        {i > 0 && (
                          <span style={{ opacity: 0.5, fontSize: '0.82em' }}>
                            {nasab.bin}
                          </span>
                        )}
                        {x.n}
                        {x.note && (
                          <span className="node__hint">{nasab.clickDetail}</span>
                        )}
                      </button>
                      {x.note && (
                        <div
                          className="node__note"
                          dangerouslySetInnerHTML={{ __html: x.note }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div
        className="note"
        dangerouslySetInnerHTML={{
          __html: `${nasab.note}<div class="src" style="margin-top: 8px;">${nasab.source}</div>`,
        }}
      />
    </section>
  );
};
