/**
 * Main Application Entry Point — Sirah Nabawiyah
 */
import { NASAB } from './data/nasab.js';
import { TL_SEBELUM, TL_HIJRAH, TL_WAFAT } from './data/timeline.js';
import { WARS } from './data/wars.js';
import { WIVES, KIDS } from './data/family.js';
import { COMPANIONS } from './data/companions.js';

import {
  $,
  renderNasab,
  renderTimeline,
  renderWars,
  renderWives,
  renderKids,
  renderCompanions
} from './render.js';

import { initSearch } from './search.js';
import { initNavigation } from './nav.js';

document.addEventListener("DOMContentLoaded", () => {
  // Render Komponen
  renderNasab($("#chain"), NASAB);
  renderTimeline($("#tlSebelum"), TL_SEBELUM);
  renderTimeline($("#tlHijrah"), TL_HIJRAH);
  renderTimeline($("#tlWafat"), TL_WAFAT);
  renderWars($("#warList"), $("#warChips"), WARS);
  renderWives($("#wives"), WIVES);
  renderKids($("#kids"), KIDS);
  renderCompanions($("#companions"), COMPANIONS);

  // Inisialisasi Fitur
  initSearch();
  initNavigation();
});
