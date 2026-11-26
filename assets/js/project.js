/* Case-study page: projet.html#<id> */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const { esc, icon } = UI;
  const t = (k) => I18N.t(k), L = (v) => I18N.L(v);
  const order = D.projects.filter((p) => p.tier !== "archive");
  const all = D.projects;
  const root = document.getElementById("project");

  const section = (id, titleKey, html) => html ? `<section class="p-section reveal" id="${id}"><h2>${esc(t(titleKey))}</h2>${html}</section>` : "";
  const list = (items) => items && items.length ? `<ol class="p-list">${items.map((x) => `<li><span>${esc(x)}</span></li>`).join("")}</ol>` : "";

  function gallery(p) {
    const imgs = p.images || [];
    const desk = imgs.filter((i) => !i.mobile);
    const mob = imgs.find((i) => i.mobile);
    if (desk.length) {
      const addr = p.links && p.links.demo ? UI.host(p.links.demo) : UI.title(p).toLowerCase().replace(/\s+/g, "-") + ".local";
      return desk.map((img, i) => `<div class="p-gallery__row reveal">${UI.frame(img, addr)}${i === 0 && mob ? UI.phone(mob) : ""}</div>`).join("");
    }
    if (p.terminal) return `<div class="p-gallery__row reveal">${UI.terminal(p.terminal, p.id + ".log")}</div>`;
    return `<div class="p-gallery__row reveal">${UI.poster(p, { arch: true })}</div><p class="p-note">${esc(t("p.visual"))}</p>`;
  }

  function render() {
    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    const p = all.find((x) => x.id === id);
    if (!p) {
      root.innerHTML = `<div class="container p-hero"><a class="p-back" href="index.html#projets">${icon("arrow")} ${esc(t("p.back"))}</a><h1 class="p-title">${esc(t("p.notfound"))}</h1></div>`;
      I18N.apply(); return;
    }
    const name = UI.title(p);
    document.title = `${name} · ${D.profile.name}`;
    const md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", L(p.tagline));

    const meta = [
      ["p.period", L(p.period)], ["p.team", L(p.team)], ["p.share", L(p.share)], ["p.role", L(p.role)],
      ["p.status", p.status ? t("st." + p.status) : ""]
    ].filter(([, v]) => v);

    const idx = order.indexOf(p);
    const prev = idx >= 0 ? order[(idx - 1 + order.length) % order.length] : null;
    const next = idx >= 0 ? order[(idx + 1) % order.length] : null;

    const built = L(p.built);
    const challenges = L(p.challenges);
    const toc = [
      ["p-summary", "p.summary", L(p.summary)],
      ["p-problem", "p.problem", L(p.problem)],
      ["p-built", "p.built", built && built.length],
      ["p-challenges", "p.challenges", challenges && challenges.length],
      ["p-arch", "p.arch", p.arch],
      ["p-stack", "p.stack", p.stack],
      ["p-metrics", "p.metrics", p.metrics]
    ].filter((x) => x[2]);

    root.style.setProperty("--pa", p.accent);
    root.innerHTML = `
      <header class="p-hero">
        <div class="bg-grid"></div>
        <div class="container">
          <a class="p-back" href="index.html#projets">${icon("arrow")} ${esc(t("p.back"))}</a>
          <div class="cluster" style="margin-top:var(--s-6)">${UI.badgeCtx(p)}${UI.badgeStatus(p)}</div>
          <h1 class="p-title">${esc(name)}</h1>
          <p class="p-tagline">${esc(L(p.tagline))}</p>
          <dl class="p-meta">${meta.map(([k, v]) => `<div><dt>${esc(t(k))}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
          <div class="p-actions cluster">${UI.linksHTML(p)}</div>
          ${p.status === "private" ? `<p class="p-note">${esc(t(p.context === "personal" ? "p.private.personal" : "p.private"))}</p>` : ""}
        </div>
      </header>
      <div class="container">
        <div class="p-gallery">${gallery(p)}</div>
        <div class="p-body">
          <nav class="p-toc" aria-label="Sommaire">${toc.map(([sid, k]) => `<a href="#${sid}" data-toc>${esc(t(k))}</a>`).join("")}</nav>
          <div>
            ${section("p-summary", "p.summary", L(p.summary) ? `<p>${esc(L(p.summary))}</p>` : "")}
            ${section("p-problem", "p.problem", L(p.problem) ? `<p>${esc(L(p.problem))}</p>` : "")}
            ${section("p-built", "p.built", list(built))}
            ${section("p-challenges", "p.challenges", challenges && challenges.length ? `<div class="p-challenges">${challenges.map((c) => `<div>${esc(c)}</div>`).join("")}</div>` : "")}
            ${section("p-arch", "p.arch", p.arch ? `<div class="p-arch" style="--pa:${esc(p.accent)}">${UI.arch(p.arch)}</div>` : "")}
            ${section("p-stack", "p.stack", p.stack ? `<div class="cluster">${UI.chips(p.stack)}</div>` : "")}
            ${section("p-metrics", "p.metrics", p.metrics ? `<div class="p-metrics">${p.metrics.map((m) => UI.stat(m.value, L(m.label))).join("")}</div>` : "")}
          </div>
        </div>
        ${prev && next ? `<nav class="p-nav" aria-label="Projets">
          <a href="${UI.url(prev)}"><span>← ${esc(t("p.prev"))}</span><b>${esc(UI.title(prev))}</b></a>
          <a href="${UI.url(next)}"><span>${esc(t("p.next"))} →</span><b>${esc(UI.title(next))}</b></a>
        </nav>` : ""}
      </div>`;

    // TOC links must not change the project hash
    root.querySelectorAll("[data-toc]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault(); document.getElementById(a.getAttribute("href").slice(1)).scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    const tocLinks = [...root.querySelectorAll("[data-toc]")];
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((ens) => ens.forEach((en) => {
        if (en.isIntersecting) tocLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
      }), { rootMargin: "-30% 0px -60% 0px" });
      root.querySelectorAll(".p-section").forEach((s) => io.observe(s));
    }
    I18N.apply();
    UI.observeReveal(root);
  }

  UI.initChrome();
  render();
  addEventListener("hashchange", () => { render(); scrollTo({ top: 0 }); });
  I18N.onChange(render);
  document.getElementById("year").textContent = new Date().getFullYear();
})();
