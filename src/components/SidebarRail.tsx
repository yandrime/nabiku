'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

interface SidebarRailProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarRail: React.FC<SidebarRailProps> = ({ isOpen, onClose }) => {
  const { data } = useLanguage();
  const navLinks = data.ui.navLinks;
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('#beranda');

  useEffect(() => {
    if (pathname === '/sumber') {
      setActiveSection('/sumber');
      return;
    }

    const sections = navLinks
      .filter((l) => l.href.startsWith('#'))
      .map((l) => document.getElementById(l.href.slice(1)))
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
  }, [pathname, navLinks]);

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
          <div className="rail__title">{data.ui.appTitle}</div>
        </div>
        <div className="rail__nav" id="railNav">
          {navLinks.map((link) => {
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
            ? data.ui.railFooterSumber
            : data.ui.railFooterHome}
        </div>
      </nav>
    </>
  );
};
