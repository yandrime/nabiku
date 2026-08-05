import idUi from './id/ui.json';
import enUi from './en/ui.json';

import idHero from './id/hero.json';
import enHero from './en/hero.json';

import idNasab from './id/nasab.json';
import enNasab from './en/nasab.json';

import idBaniHasyim from './id/bani_hasyim.json';
import enBaniHasyim from './en/bani_hasyim.json';

import idTimeline from './id/timeline.json';
import enTimeline from './en/timeline.json';

import idWars from './id/wars.json';
import enWars from './en/wars.json';

import idFamily from './id/family.json';
import enFamily from './en/family.json';

import idCompanions from './id/companions.json';
import enCompanions from './en/companions.json';

import idSumber from './id/sumber.json';
import enSumber from './en/sumber.json';

export type Language = 'id' | 'en';

export const getData = (lang: Language) => {
  const isEn = lang === 'en';
  return {
    ui: isEn ? enUi : idUi,
    hero: isEn ? enHero : idHero,
    nasab: isEn ? enNasab : idNasab,
    baniHasyim: isEn ? enBaniHasyim : idBaniHasyim,
    timeline: isEn ? enTimeline : idTimeline,
    wars: isEn ? enWars : idWars,
    family: isEn ? enFamily : idFamily,
    companions: isEn ? enCompanions : idCompanions,
    sumber: isEn ? enSumber : idSumber,
  };
};

export {
  idUi, enUi,
  idHero, enHero,
  idNasab, enNasab,
  idBaniHasyim, enBaniHasyim,
  idTimeline, enTimeline,
  idWars, enWars,
  idFamily, enFamily,
  idCompanions, enCompanions,
  idSumber, enSumber,
};
