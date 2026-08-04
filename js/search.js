/**
 * Modul Logika Pencarian Real-Time
 */
import { $, $$ } from './render.js';

export function initSearch() {
  const q = $("#q");
  const counter = $("#qc");
  if (!q) return;

  const items = () => $$("[data-search]");
  let timer;

  q.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const v = q.value.trim().toLowerCase();

      if (!v) {
        items().forEach(el => el.classList.remove("hidden"));
        $$(".sec").forEach(s => s.classList.remove("hidden"));
        if (counter) counter.textContent = "";
        return;
      }

      let count = 0;
      items().forEach(el => {
        const searchAttr = el.getAttribute("data-search") || "";
        const hit = searchAttr.includes(v);
        el.classList.toggle("hidden", !hit);
        if (hit) {
          count++;
          if (el.tagName === "DETAILS") el.open = true;
        }
      });

      $$(".sec").forEach(s => {
        const anyHit = $$("[data-search]", s).some(el => !el.classList.contains("hidden"));
        s.classList.toggle("hidden", !anyHit);
      });

      if (counter) {
        counter.textContent = count + " hasil";
      }
    }, 140);
  });
}
