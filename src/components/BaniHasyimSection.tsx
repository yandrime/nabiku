import React from 'react';

interface BaniHasyimSectionProps {
  searchQuery: string;
}

export const BaniHasyimSection: React.FC<BaniHasyimSectionProps> = ({ searchQuery }) => {
  const treeContent = "pohon keluarga bani hasyim abdul muthalib anak abdul muthalib syaibah hasyim amr abdu manaf abdullah abu thalib hamzah abbas abu lahab harits zubair ghaidaq muqawwim dhirar";
  if (searchQuery && !treeContent.includes(searchQuery.toLowerCase())) {
    return null;
  }

  return (
    <section className="sec" id="bani-hasyim">
      <div className="sec__head">
        <span className="sec__kicker">Bagian II</span>
        <h2 className="sec__h">Keluarga Bani Hasyim</h2>
        <p className="sec__intro">Keluarga Rasulullah lazim disebut keluarga Hasyimiyah, dinisbatkan kepada kakek beliau, Hasyim bin Abdu Manaf. Inilah rumpun yang memegang hak melayani jamaah haji di Mekah dan yang kelak menanggung pemboikotan demi melindungi beliau.</p>
        <div className="rule"></div>
      </div>

      <div className="tree">
        <div className="tree__lvl">
          <div className="tree__lbl">Generasi 1</div>
          <div className="tree__row">
            <span className="pill pill--k">Hasyim (Amr) bin Abdu Manaf</span>
            <span className="pill">menikah Salma binti Amr — Bani Adi bin Najjar, Yatsrib</span>
          </div>
        </div>
        <div className="tree__lvl">
          <div className="tree__lbl">Generasi 2</div>
          <div className="tree__row">
            <span className="pill pill--k">Abdul Muthalib (Syaibah)</span>
            <span className="pill">lahir ± 497 M · penggali kembali sumur Zamzam</span>
          </div>
        </div>
        <div className="tree__lvl">
          <div className="tree__lbl">Generasi 3 — sepuluh putra Abdul Muthalib</div>
          <div className="tree__row">
            <span className="pill pill--g">Abdullah <em>(ayah Nabi)</em></span>
            <span className="pill pill--g">Abu Thalib</span>
            <span className="pill pill--g">Hamzah</span>
            <span className="pill pill--g">Abbas</span>
            <span className="pill pill--r">Abu Lahab</span>
            <span className="pill">Harits</span>
            <span className="pill">Zubair</span>
            <span className="pill">Ghaidaq</span>
            <span className="pill">Muqawwim</span>
            <span className="pill">Dhirar</span>
          </div>
        </div>
      </div>
    </section>
  );
};
