/**
 * Modul Navigasi (Sidebar Rail, Mobile Drawer, Active Intersection Observer)
 */
import { $, $$ } from './render.js';

export function initNavigation() {
  const links = $$(".rail__link");
  const secs = links.map(a => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);

  // IntersectionObserver untuk highlight link aktif
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id));
        }
      });
    }, { rootMargin: "-25% 0px -68% 0px" });

    secs.forEach(s => io.observe(s));
  }

  // Mobile Drawer Toggle
  const rail = $("#rail");
  const btn = $("#menuBtn");
  const scrim = $("#scrim");

  function toggle(open) {
    if (!rail || !scrim || !btn) return;
    rail.classList.toggle("is-open", open);
    scrim.classList.toggle("is-on", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (btn) {
    btn.addEventListener("click", () => {
      const isCurrentlyOpen = rail ? rail.classList.contains("is-open") : false;
      toggle(!isCurrentlyOpen);
    });
  }

  if (scrim) {
    scrim.addEventListener("click", () => toggle(false));
  }

  links.forEach(l => {
    l.addEventListener("click", () => {
      if (window.innerWidth <= 1000) toggle(false);
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") toggle(false);
  });
}
