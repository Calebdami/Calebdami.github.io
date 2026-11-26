/* Shared UI: icons, atoms/molecules (pure functions returning HTML strings), page chrome behaviours. */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const { t, L } = { t: (k) => I18N.t(k), L: (v) => I18N.L(v) };

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- icons (simple strokes, drawn for this site) ---------- */
  const PATHS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
    chat: '<path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.5 5.5 2.8 5.5 2.8a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.2c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21"/>'
  };
  const icon = (n, cls) => `<svg class="icon ${cls || ""}" viewBox="0 0 24 24" aria-hidden="true">${PATHS[n] || ""}</svg>`;

  /* ---------- helpers ---------- */
  const title = (p) => (I18N.lang === "en" && p.titleEn) ? p.titleEn : p.title;
  const glyph = (p) => {
    if (p.glyph) return L(p.glyph);
    const first = p.title.split(/\s+/)[0];
    if (/^[A-Z0-9]{2,4}$/.test(first)) return first;
    const caps = (p.title.match(/[A-Z0-9]/g) || []).join("");
    if (caps.length >= 2) return caps.slice(0, 3);
    return p.title.slice(0, 2).toUpperCase();
  };
  const url = (p) => `projet.html#${p.id}`;
  const host = (u) => { try { return new URL(u).host.replace(/^www\./, "") + new URL(u).pathname.replace(/\/$/, ""); } catch (e) { return u; } };

  /* ---------- atoms ---------- */
  const badgeCtx = (p) => `<span class="badge badge--${p.context}">${esc(t("ctx." + p.context))}</span>`;
  const badgeStatus = (p) => p.status ? `<span class="badge badge--${p.status}">${esc(t("st." + p.status))}</span>` : "";
  const chips = (list, max) => {
    const items = (list || []).slice(0, max || 99).map((s) => `<span class="chip">${esc(s)}</span>`);
    if (max && list && list.length > max) items.push(`<span class="chip">+${list.length - max}</span>`);
    return items.join("");
  };
  const stat = (value, label) => `<div class="stat"><span class="stat__value">${esc(value)}</span><span class="stat__label">${esc(label)}</span></div>`;

  /* ---------- molecules ---------- */
  const frame = (img, address) => `
    <figure class="frame">
      <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span class="frame__url">${esc(address || "")}</span></div>
      <img src="${esc(img.src)}" alt="${esc(L(img.alt))}" loading="lazy" decoding="async">
    </figure>`;

  const phone = (img) => `<figure class="phone"><img src="${esc(img.src)}" alt="${esc(L(img.alt))}" loading="lazy" decoding="async"></figure>`;

  const arch = (layers) => `<div class="arch">${(layers || []).map((l) => `<div class="arch__layer">${esc(L(l))}</div>`).join("")}</div>`;

  const poster = (p, opts) => {
    opts = opts || {};
    const body = opts.arch && p.arch ? arch(p.arch) : `<div class="card__stack">${chips(p.stack, 5)}</div>`;
    return `
      <div class="poster" style="--pa:${esc(p.accent)}" role="img" aria-label="${esc(title(p) + " · " + (p.stack || []).slice(0, 4).join(", "))}">
        <div class="poster__head"><span>${esc(t("ctx." + p.context))}</span><span>${esc(L(p.period))}</span></div>
        <div class="poster__glyph" aria-hidden="true">${esc(glyph(p))}</div>
        ${body}
      </div>`;
  };

  const terminal = (term, titleText) => `
    <figure class="term">
      <div class="term__bar" aria-hidden="true"><i></i><i></i><i></i><span>${esc(titleText || "bot.log")}</span></div>
      <div class="term__body">${term.lines.map(([cls, txt]) => `<span class="${esc(cls)}">${esc(L(txt))}</span>`).join("")}</div>
      ${term.caption ? `<figcaption class="term__caption">${esc(L(term.caption))}</figcaption>` : ""}
    </figure>`;

  /* visual for a project: screenshot(s) > terminal > typographic poster */
  const visual = (p, opts) => {
    opts = opts || {};
    const imgs = p.images || [];
    const desk = imgs.find((i) => !i.mobile);
    const mob = imgs.find((i) => i.mobile);
    if (desk) return frame(desk, p.links && p.links.demo ? host(p.links.demo) : (title(p).toLowerCase().replace(/\s+/g, "-") + ".local")) + (mob && opts.phone !== false ? phone(mob) : "");
    if (p.terminal) return terminal(p.terminal, p.id + ".log");
    return poster(p, { arch: opts.arch });
  };

  const linksHTML = (p, small) => {
    const out = [];
    if (p.links && p.links.demo) out.push(`<a ${small ? "" : 'class="btn btn--sm"'} href="${esc(p.links.demo)}" target="_blank" rel="noopener">${icon("external")}<span>${esc(t("case.demo"))}</span></a>`);
    if (p.links && p.links.repo) out.push(`<a ${small ? "" : 'class="btn btn--sm btn--ghost"'} href="${esc(p.links.repo)}" target="_blank" rel="noopener">${icon("code")}<span>${esc(t("case.repo"))}</span></a>`);
    return out.join("");
  };

  /* featured card */
  const card = (p) => {
    const img = (p.images || []).find((i) => !i.mobile);
    const media = img ? `<img src="${esc(img.src)}" alt="${esc(L(img.alt))}" loading="lazy" decoding="async">` : poster(p);
    return `
      <article class="card reveal" style="--pa:${esc(p.accent)}" data-tags="${esc((p.tags || []).join(" "))}">
        <div class="card__media">${media}</div>
        <div class="card__body">
          <div class="card__meta">${badgeCtx(p)}${badgeStatus(p)}</div>
          <h3 class="card__title"><a href="${url(p)}">${esc(title(p))}</a></h3>
          <p class="card__text">${esc(L(p.tagline))}</p>
          <div class="card__stack">${chips(p.stack, 5)}</div>
          ${p.links && (p.links.demo || p.links.repo) ? `<div class="card__links">${linksHTML(p, true)}</div>` : ""}
        </div>
      </article>`;
  };

  /* flagship row */
  const caseRow = (p, i, total) => `
    <article class="case reveal" style="--pa:${esc(p.accent)}" id="case-${esc(p.id)}">
      <div class="case__visual">${visual(p, { arch: true })}</div>
      <div class="case__content">
        <div class="case__index mono"><b>${String(i + 1).padStart(2, "0")}</b> / ${String(total).padStart(2, "0")}</div>
        <div class="cluster" style="margin-top:var(--s-3)">${badgeCtx(p)}${badgeStatus(p)}<span class="chip">${esc(L(p.period))}</span></div>
        <h3 class="case__title">${esc(title(p))}</h3>
        <p class="case__tagline">${esc(L(p.tagline))}</p>
        <p class="case__role">${esc(L(p.role))} · ${esc(L(p.team))}</p>
        ${p.metrics ? `<div class="case__metrics">${p.metrics.map((m) => stat(m.value, L(m.label))).join("")}</div>` : ""}
        <div class="case__stack card__stack">${chips(p.stack, 7)}</div>
        <div class="case__cta">
          <a class="btn btn--primary" href="${url(p)}">${esc(t("case.read"))} ${icon("arrow")}</a>
          ${linksHTML(p)}
        </div>
      </div>
    </article>`;

  /* ---------- page chrome ---------- */
  function toast(msg) {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg; el.classList.add("is-on");
    clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("is-on"), 2200);
  }

  function observeReveal(root) {
    const els = (root || document).querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((e) => io.observe(e));
  }

  function initChrome() {
    document.documentElement.classList.remove("no-js");
    const header = document.querySelector(".site-header");
    const onScroll = () => header && header.classList.toggle("is-scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();

    document.querySelectorAll("[data-lang-btn]").forEach((b) => b.addEventListener("click", () => I18N.setLang(b.dataset.langBtn)));
    document.querySelectorAll("[data-theme-btn]").forEach((b) => b.addEventListener("click", () => Theme.toggle()));

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");
    if (menuBtn && nav) {
      const setOpen = (o) => { nav.classList.toggle("is-open", o); menuBtn.setAttribute("aria-expanded", String(o)); menuBtn.innerHTML = icon(o ? "close" : "menu"); };
      menuBtn.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
      nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
      addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
    }

    // CV links point to the right language file
    const cvSync = () => document.querySelectorAll("[data-cv]").forEach((a) => a.setAttribute("href", L(D.profile.cv)));
    cvSync(); I18N.onChange(cvSync);

    I18N.apply(); Theme.sync();
  }

  window.UI = { esc, icon, title, glyph, url, host, badgeCtx, badgeStatus, chips, stat, frame, phone, arch, poster, terminal, visual, linksHTML, card, caseRow, toast, observeReveal, initChrome };
})();
