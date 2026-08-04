'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarRailProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: '#beranda', num: '—', label: 'Beranda' },
  { href: '#nasab', num: 'I', label: 'Nasab Rasulullah' },
  { href: '#bani-hasyim', num: 'II', label: 'Keluarga Bani Hasyim' },
  { href: '#ayah-ibu', num: 'III', label: 'Ayah, Ibu, Kakek, Paman' },
  { href: '#sebelum', num: 'IV', label: 'Sebelum Kenabian' },
  { href: '#kenabian', num: 'V', label: 'Kenabian & Dakwah Mekah' },
  { href: '#hijrah', num: 'VI', label: 'Hijrah ke Madinah' },
  { href: '#perang', num: 'VII', label: 'Seluruh Peperangan' },
  { href: '#istri', num: 'VIII', label: 'Istri-Istri Rasulullah' },
  { href: '#anak', num: 'IX', label: 'Putra-Putri Rasulullah' },
  { href: '#sahabat', num: 'X', label: 'Hubungan dengan Sahabat' },
  { href: '#wafat', num: 'XI', label: 'Wafat Rasulullah' },
  { href: '/sumber', num: '—', label: 'Sumber' },
];

export const SidebarRail: React.FC<SidebarRailProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('#beranda');

  useEffect(() => {
    if (pathname === '/sumber') {
      setActiveSection('/sumber');
      return;
    }

    const sections = NAV_LINKS.filter(l => l.href.startsWith('#'))
      .map(l => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    if ('IntersectionObserver' in window && sections.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection('#' + entry.target.id);
            }
          });
        },
        { rootMargin: '-25% 0px -68% 0px' }
      );

      sections.forEach((sec) => observer.observe(sec));
      return () => observer.disconnect();
    }
  }, [pathname]);

  const handleLinkClick = () => {
    if (window.innerWidth <= 1000) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={`scrim ${isOpen ? 'is-on' : ''}`}
        id="scrim"
        onClick={onClose}
      />
      <nav
        className={`rail ${isOpen ? 'is-open' : ''}`}
        id="rail"
        aria-label="Navigasi bab"
      >
        <div className="rail__brand">
          <div className="rail__ar">سيرة نبوية</div>
          <div className="rail__title">Sirah Nabawiyah</div>
        </div>
        <div className="rail__nav" id="railNav">
          {pathname === '/sumber' ? (
            <>
              <Link
                className="rail__link"
                href="/#beranda"
                onClick={handleLinkClick}
              >
                <span className="rail__num">←</span> Beranda Utama
              </Link>
              <Link
                className="rail__link"
                href="/#nasab"
                onClick={handleLinkClick}
              >
                <span className="rail__num">I</span> Nasab Rasulullah
              </Link>
              <Link
                className="rail__link"
                href="/#bani-hasyim"
                onClick={handleLinkClick}
              >
                <span className="rail__num">II</span> Keluarga Bani Hasyim
              </Link>
              <Link
                className="rail__link"
                href="/#sebelum"
                onClick={handleLinkClick}
              >
                <span className="rail__num">IV</span> Sebelum Kenabian
              </Link>
              <Link
                className="rail__link"
                href="/#kenabian"
                onClick={handleLinkClick}
              >
                <span className="rail__num">V</span> Kenabian &amp; Dakwah
              </Link>
              <Link
                className="rail__link"
                href="/#hijrah"
                onClick={handleLinkClick}
              >
                <span className="rail__num">VI</span> Hijrah ke Madinah
              </Link>
              <Link
                className="rail__link"
                href="/#perang"
                onClick={handleLinkClick}
              >
                <span className="rail__num">VII</span> Peperangan
              </Link>
              <Link
                className="rail__link"
                href="/#sahabat"
                onClick={handleLinkClick}
              >
                <span className="rail__num">X</span> Hubungan Sahabat
              </Link>
              <Link
                className="rail__link"
                href="/#wafat"
                onClick={handleLinkClick}
              >
                <span className="rail__num">XI</span> Wafat Rasulullah
              </Link>
              <Link
                className="rail__link is-active"
                href="/sumber"
                onClick={handleLinkClick}
              >
                <span className="rail__num">—</span> Halaman Sumber
              </Link>
            </>
          ) : (
            NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              const isExternal = link.href.startsWith('/');
              return isExternal ? (
                <Link
                  key={link.href}
                  className={`rail__link ${isActive ? 'is-active' : ''}`}
                  href={link.href}
                  onClick={handleLinkClick}
                >
                  <span className="rail__num">{link.num}</span> {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  className={`rail__link ${isActive ? 'is-active' : ''}`}
                  href={link.href}
                  onClick={handleLinkClick}
                >
                  <span className="rail__num">{link.num}</span> {link.label}
                </a>
              );
            })
          )}
        </div>
        <div className="rail__foot">
          {pathname === '/sumber'
            ? 'Dokumentasi sumber rujukan sirah nabawiyah.'
            : 'Media edukasi perjalanan hidup Rasulullah ﷺ.'}
        </div>
      </nav>
    </>
  );
};
