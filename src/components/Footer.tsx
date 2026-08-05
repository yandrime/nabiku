'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { data } = useLanguage();
  const ui = data.ui;

  return (
    <footer className="foot">
      <div className="foot__in">
        <div className="foot__t">{ui.footerTitle}</div>
        <p>{ui.footerTagline}</p>
        <div className="foot__meta">
          {ui.footerMeta}
        </div>
      </div>
    </footer>
  );
};
