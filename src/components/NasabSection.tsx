'use client';

import React, { useState } from 'react';
import { NASAB_DISEPAKATI, NASAB_DIPERSELISIHKAN, NASAB_TANPA_RUJUKAN } from '../data/nasab';
import { NasabItem } from '../types';

interface NasabSectionProps {
  searchQuery: string;
}

export const NasabSection: React.FC<NasabSectionProps> = ({ searchQuery }) => {
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

  const disepakatiMatches = NASAB_DISEPAKATI.filter(matchesSearch);
  const diperselisihkanMatches = NASAB_DIPERSELISIHKAN.filter(matchesSearch);
  const tanpaRujukanMatches = NASAB_TANPA_RUJUKAN.filter(matchesSearch);

  const sectionHasHits = !searchQuery || disepakatiMatches.length > 0 || diperselisihkanMatches.length > 0 || tanpaRujukanMatches.length > 0;

  if (!sectionHasHits) return null;

  return (
    <section className="sec" id="nasab">
      <div className="sec__head">
        <span className="sec__kicker">Bagian I</span>
        <h2 className="sec__h">Nasab Rasulullah ﷺ</h2>
        <p className="sec__intro">
          Al-Mubarakfuri membagi nasab beliau menjadi tiga penggal. Penggal pertama — dari Muhammad sampai Adnan — disepakati seluruh ahli nasab. Penggal kedua, dari Adnan sampai Ismail, diperselisihkan. Penggal ketiga, dari Ibrahim sampai Adam, bersumber dari Ahli Kitab dan sengaja tidak dibahas penulis karena datanya tidak dapat dipastikan.
        </p>
        <div className="rule"></div>
      </div>

      <div className="acc-group">
        {/* ACCORDION 1: DISEPAKATI */}
        {(searchQuery === '' || disepakatiMatches.length > 0) && (
          <div className={`acc-item ${openAccordion.disepakati || searchQuery !== '' ? 'is-open' : ''}`} id="accDisepakati">
            <button
              className="acc-header"
              type="button"
              aria-expanded={openAccordion.disepakati}
              onClick={() => toggleAccordion('disepakati')}
            >
              <div className="acc-header__left">
                <span className="acc-header__badge acc-header__badge--gold">Penggal I</span>
                <h3 className="acc-header__title">Silsilah yang Disepakati</h3>
              </div>
              <div className="acc-header__right">
                <span>21 Generasi · Muhammad ﷺ → Adnan</span>
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
              <p className="acc-body__desc">
                Penggal pertama disepakati secara ijma&apos; oleh seluruh ulama, ahli sejarah, dan ahli nasab tanpa perselisihan. Urutan 21 generasi dari Rasulullah ﷺ hingga Adnan tercatat secara pasti dan shahih.
              </p>
              <ul className="chain">
                {NASAB_DISEPAKATI.map((x, i) => {
                  if (!matchesSearch(x)) return null;
                  const nodeId = `disepakati-${i}`;
                  const isOpenNode = openNodes[nodeId];
                  return (
                    <li key={nodeId} className={`node ${x.key ? 'is-key' : ''} ${isOpenNode ? 'is-open' : ''}`}>
                      <span className="node__dot" aria-hidden="true"></span>
                      <button
                        className="node__btn"
                        type="button"
                        style={{ cursor: x.note ? 'pointer' : 'default' }}
                        aria-expanded={isOpenNode}
                        onClick={() => x.note && toggleNode(nodeId)}
                      >
                        <span className="node__num">Generasi {i + 1}</span>
                        {i > 0 && <span style={{ opacity: 0.5, fontSize: '0.82em' }}>bin </span>}
                        {x.n}
                        {x.note && <span className="node__hint">(klik detail)</span>}
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
          <div className={`acc-item ${openAccordion.diperselisihkan || searchQuery !== '' ? 'is-open' : ''}`} id="accDiperselisihkan">
            <button
              className="acc-header"
              type="button"
              aria-expanded={openAccordion.diperselisihkan}
              onClick={() => toggleAccordion('diperselisihkan')}
            >
              <div className="acc-header__left">
                <span className="acc-header__badge acc-header__badge--warn">Penggal II</span>
                <h3 className="acc-header__title">Silsilah yang Diperselisihkan</h3>
              </div>
              <div className="acc-header__right">
                <span>Adnan → Nabi Ismail a.s.</span>
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
              <p className="acc-body__desc">
                Penggal kedua diperselisihkan oleh para ahli nasab mengenai jumlah generasi dan ejaan nama (berkisar antara 7, 9, 15 hingga 40 nama). Namun seluruh ulama sepakat bahwa Adnan adalah keturunan langsung dari Nabi Ismail a.s.
              </p>
              <ul className="chain">
                {NASAB_DIPERSELISIHKAN.map((x, i) => {
                  if (!matchesSearch(x)) return null;
                  const nodeId = `diperselisihkan-${i}`;
                  const isOpenNode = openNodes[nodeId];
                  return (
                    <li key={nodeId} className={`node ${x.key ? 'is-key' : ''} ${isOpenNode ? 'is-open' : ''}`}>
                      <span className="node__dot" aria-hidden="true"></span>
                      <button
                        className="node__btn"
                        type="button"
                        style={{ cursor: x.note ? 'pointer' : 'default' }}
                        aria-expanded={isOpenNode}
                        onClick={() => x.note && toggleNode(nodeId)}
                      >
                        <span className="node__num">Generasi {i + 1}</span>
                        {i > 0 && <span style={{ opacity: 0.5, fontSize: '0.82em' }}>bin </span>}
                        {x.n}
                        {x.note && <span className="node__hint">(klik detail)</span>}
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
          <div className={`acc-item ${openAccordion.tanpaRujukan || searchQuery !== '' ? 'is-open' : ''}`} id="accTanpaRujukan">
            <button
              className="acc-header"
              type="button"
              aria-expanded={openAccordion.tanpaRujukan}
              onClick={() => toggleAccordion('tanpaRujukan')}
            >
              <div className="acc-header__left">
                <span className="acc-header__badge acc-header__badge--muted">Penggal III</span>
                <h3 className="acc-header__title">Silsilah yang Tidak Ada Rujukan Pastinya</h3>
              </div>
              <div className="acc-header__right">
                <span>Nabi Ismail a.s. → Nabi Adam a.s.</span>
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
              <p className="acc-body__desc">
                Penggal ketiga bersumber utama dari tradisi Ahli Kitab (Israiliyat). Tidak ada nash shahih Al-Qur&apos;an atau Hadits yang memastikannya, sehingga Syaikh al-Mubarakfuri dan mayoritas ulama memilih untuk tidak menguraikannya sebagai kepastian hukum.
              </p>
              <ul className="chain">
                {NASAB_TANPA_RUJUKAN.map((x, i) => {
                  if (!matchesSearch(x)) return null;
                  const nodeId = `tanpaRujukan-${i}`;
                  const isOpenNode = openNodes[nodeId];
                  return (
                    <li key={nodeId} className={`node ${x.key ? 'is-key' : ''} ${isOpenNode ? 'is-open' : ''}`}>
                      <span className="node__dot" aria-hidden="true"></span>
                      <button
                        className="node__btn"
                        type="button"
                        style={{ cursor: x.note ? 'pointer' : 'default' }}
                        aria-expanded={isOpenNode}
                        onClick={() => x.note && toggleNode(nodeId)}
                      >
                        <span className="node__num">Generasi {i + 1}</span>
                        {i > 0 && <span style={{ opacity: 0.5, fontSize: '0.82em' }}>bin </span>}
                        {x.n}
                        {x.note && <span className="node__hint">(klik detail)</span>}
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

      <div className="note">
        Beberapa nama dalam silsilah punya dua penyebutan: <strong>Abdul Muthalib</strong> bernama asli Syaibah, <strong>Hasyim</strong> bernama asli Amr, <strong>Abdu Manaf</strong> bernama asli al-Mughirah, <strong>Qushay</strong> bernama asli Zaid, <strong>Nadhar</strong> bernama asli Qais, dan <strong>Mudrikah</strong> bernama asli Amir. Adapun <strong>Fihr</strong> adalah leluhur yang dijuluki Quraisy — dari sinilah nama kabilah itu berasal.
        <div className="src" style={{ marginTop: '8px' }}>Ar-Rahiq al-Makhtum, bab I bagian IV, hlm. 56–57</div>
      </div>
    </section>
  );
};
