/**
 * Modul Renderer Komponen DOM
 */

export const $ = (s, c) => (c || document).querySelector(s);
export const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

/**
 * Render Silsilah Nasab
 */
export function renderNasab(ul, data) {
  if (!ul) return;
  ul.innerHTML = "";
  data.forEach((x, i) => {
    const li = document.createElement("li");
    li.className = "node" + (x.key ? " is-key" : "");
    li.setAttribute("data-search", x.n.toLowerCase());
    li.innerHTML =
      '<span class="node__dot" aria-hidden="true"></span>' +
      '<button class="node__btn" type="button" aria-expanded="false">' +
        (i > 0 ? '<span style="opacity:.5;font-size:.82em;">bin </span>' : '') + x.n +
      '</button>' +
      (x.note ? '<div class="node__note">' + x.note + '</div>' : '');

    const btn = $(".node__btn", li);
    if (x.note) {
      btn.addEventListener("click", () => {
        const open = li.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    } else {
      btn.style.cursor = "default";
    }
    ul.appendChild(li);
  });
}

/**
 * Render Linimasa Generik
 */
export function renderTimeline(el, data) {
  if (!el) return;
  el.innerHTML = data.map(x =>
    '<li class="tl__i' + (x.gold ? " tl__i--gold" : "") + '" data-search="' + (x.t + " " + x.d + " " + x.y).toLowerCase().replace(/"/g, '') + '">' +
      '<span class="tl__yr">' + x.y + '</span>' +
      '<p class="tl__t">' + x.t + '</p>' +
      '<p class="tl__d">' + x.d + '</p>' +
    '</li>'
  ).join("");
}

/**
 * Render Peperangan & Chip Filter
 */
export function renderWars(list, chips, data) {
  if (!list || !chips) return;

  const years = ["Semua"].concat([...new Set(data.map(w => w.y))]);
  chips.innerHTML = years.map((y, i) =>
    '<button class="chip' + (i === 0 ? " is-on" : "") + '" data-y="' + y + '" type="button">' +
      (y === "Semua" ? "Semua tahun" : y) +
    '</button>'
  ).join("");

  list.innerHTML = data.map(w => {
    const tyClass = w.ty === "sariyyah" ? "war__ty--s" : "war__ty--g";
    const tyLabel = w.ty === "sariyyah" ? "Sariyyah" : (w.ty === "campuran" ? "Rangkaian" : "Ghazwah");
    const plain = (w.nm + " " + w.sub + " " + w.p.join(" ") + " " + w.y).replace(/<[^>]+>/g, "").toLowerCase().replace(/"/g, '');
    return '<details class="war" data-y="' + w.y + '" data-search="' + plain + '">' +
      '<summary>' +
        '<span class="war__yr">' + w.y + '</span>' +
        '<span class="war__nm">' + w.nm + '<small>' + w.sub + '</small></span>' +
        '<span class="war__ty ' + tyClass + '">' + tyLabel + '</span>' +
      '</summary>' +
      '<div class="war__body">' + w.p.map(p => '<p>' + p + '</p>').join("") + '</div>' +
    '</details>';
  }).join("");

  chips.addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    $$(".chip", chips).forEach(c => c.classList.remove("is-on"));
    b.classList.add("is-on");
    const y = b.dataset.y;
    let shown = 0;
    $$(".war", list).forEach(d => {
      const ok = (y === "Semua" || d.dataset.y === y);
      d.classList.toggle("hidden", !ok);
      if (ok) shown++;
    });
    const emptyEl = $("#warEmpty");
    if (emptyEl) emptyEl.classList.toggle("hidden", shown > 0);
  });
}

/**
 * Render Istri-Istri Nabi
 */
export function renderWives(container, data) {
  if (!container) return;
  container.innerHTML = data.map((w, i) => {
    const plain = (w.n + " " + w.meta + " " + w.b.join(" ")).replace(/<[^>]+>/g, "").toLowerCase().replace(/"/g, '');
    return '<div class="card card--' + w.ph + '" data-search="' + plain + '">' +
      '<div class="card__meta">' + String(i + 1).padStart(2, "0") + ' · ' + w.meta + '</div>' +
      '<div class="card__ttl">' + w.n + '</div>' +
      w.b.map(t => '<p class="card__b">' + t + '</p>').join("") +
    '</div>';
  }).join("");
}

/**
 * Render Putra-Putri Nabi
 */
export function renderKids(container, data) {
  if (!container) return;
  container.innerHTML = data.map(k => {
    const plain = (k.n + " " + k.meta + " " + k.b.join(" ")).replace(/<[^>]+>/g, "").toLowerCase().replace(/"/g, '');
    return '<div class="card card--gold" data-search="' + plain + '">' +
      '<div class="card__meta">' + k.meta + '</div>' +
      '<div class="card__ttl">' + k.n + '</div>' +
      k.b.map(t => '<p class="card__b">' + t + '</p>').join("") +
    '</div>';
  }).join("");
}

/**
 * Render Sahabat-Sahabat Nabi
 */
export function renderCompanions(container, data) {
  if (!container) return;
  container.innerHTML = data.map(c =>
    '<div class="card" data-search="' + (c.n + " " + c.d).toLowerCase().replace(/"/g, '') + '">' +
      '<div class="card__ttl" style="font-size:17px;">' + c.n + '</div>' +
      '<p class="card__b" style="font-size:13.8px;">' + c.d + '</p>' +
    '</div>'
  ).join("");
}
