'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TopBarProps {
  isOpen: boolean;
  onToggle: () => void;
  title?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ isOpen, onToggle, title }) => {
  const { language, setLanguage, data } = useLanguage();
  const displayTitle = title || data.ui.appTitle;

  return (
    <header className="topbar">
      <div className="topbar__left">
        <button
          className="topbar__btn"
          id="menuBtn"
          aria-expanded={isOpen}
          aria-controls="rail"
          onClick={onToggle}
        >
          {data.ui.menuBtn}
        </button>
      </div>

      <span className="topbar__t">{displayTitle}</span>

      <div className="topbar__right">
        <div className="lang-switcher" role="group" aria-label="Switch Language">
          <button
            type="button"
            className={`lang-btn ${language === 'id' ? 'is-active' : ''}`}
            onClick={() => setLanguage('id')}
            aria-label="Bahasa Indonesia"
          >
            ID
          </button>
          <button
            type="button"
            className={`lang-btn ${language === 'en' ? 'is-active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-label="English"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};
