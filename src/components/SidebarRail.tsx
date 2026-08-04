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
  { href: '/sumber', num: '—', label: 'Sumber & Rujukan' },
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

  const isSumberPage = pathname === '/sumber';

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
          {NAV_LINKS.map((link) => {
            const isActive = isSumberPage
              ? link.href === '/sumber'
              : activeSection === link.href;

            const isHashLink = link.href.startsWith('#');
            const targetHref = isSumberPage && isHashLink ? `/${link.href}` : link.href;

            return (
              <Link
                key={link.href}
                className={`rail__link ${isActive ? 'is-active' : ''}`}
                href={targetHref}
                onClick={handleLinkClick}
              >
                <span className="rail__num">{link.num}</span> {link.label}
              </Link>
            );
          })}
        </div>
        <div className="rail__foot">
          {isSumberPage
            ? 'Dokumentasi sumber rujukan sirah nabawiyah.'
            : 'Media edukasi perjalanan hidup Rasulullah ﷺ.'}
        </div>
      </nav>
    </>
  );
};
