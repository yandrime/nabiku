'use client';

import React from 'react';

interface TopBarProps {
  isOpen: boolean;
  onToggle: () => void;
  title?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ isOpen, onToggle, title = "Sirah Nabawiyah" }) => {
  return (
    <header className="topbar">
      <button
        className="topbar__btn"
        id="menuBtn"
        aria-expanded={isOpen}
        aria-controls="rail"
        onClick={onToggle}
      >
        Daftar isi
      </button>
      <span className="topbar__t">{title}</span>
    </header>
  );
};
