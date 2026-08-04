import React from 'react';

export const Hero: React.FC = () => {
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
          <span className="hero__eyebrow">Disadur dari Berbagai Sumber Rujukan</span>
          <div className="hero__ar">مُحَمَّد ﷺ</div>
          <h1 className="hero__h1">Perjalanan hidup Rasulullah,<br />dari nasab hingga hari terakhir.</h1>
          <p className="hero__lead">Sebelas bagian yang merangkum garis keturunan, keluarga Bani Hasyim, rumah tangga, dua puluh tiga tahun kenabian, hijrah, seluruh peperangan, pergaulan bersama para sahabat, dan wafatnya beliau — disadur dari berbagai sumber rujukan sirah nabawiyah yang shahih.</p>
          <div className="hero__stats">
            <div className="stat"><div className="stat__n">571 M</div><div className="stat__l">Tahun Gajah · kelahiran</div></div>
            <div className="stat"><div className="stat__n">40</div><div className="stat__l">Usia saat wahyu pertama</div></div>
            <div className="stat"><div className="stat__n">23</div><div className="stat__l">Tahun masa kenabian</div></div>
            <div className="stat"><div className="stat__n">11 H</div><div className="stat__l">Wafat · usia 63 tahun</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
