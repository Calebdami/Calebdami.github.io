/* Home page: renders every data-driven section, re-renders on language change. */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const { esc, icon } = UI;
  const t = (k) => I18N.t(k), L = (v) => I18N.L(v);
  const $ = (s) => document.querySelector(s);

  const flagships = D.projects.filter((p) => p.tier === "flagship");
  const featured = D.projects.filter((p) => p.tier === "featured");
  const archive = D.projects.filter((p) => p.tier === "archive");
  const byId = Object.fromEntries(D.projects.map((p) => [p.id, p]));

  const FILTERS = [
    { key: "all", test: () => true },
    { key: "laravel", test: (p) => p.tags.includes("laravel") },
    { key: "vue", test: (p) => p.tags.includes("vue") },
    { key: "react", test: (p) => p.tags.includes("react") },
    { key: "node", test: (p) => p.tags.includes("node") },
    { key: "python", test: (p) => p.tags.includes("python") },
    { key: "php", test: (p) => p.tags.includes("php") || p.tags.includes("laravel") },
    { key: "realtime", test: (p) => p.tags.includes("realtime") },
    { key: "live", test: (p) => p.status === "live" }
  ];
  let activeFilter = "all";

  /* ---------- hero ---------- */
  function renderHero() {
    $("#hero-title").innerHTML = heroTitle();
    $("#hero-intro").textContent = L(D.profile.intro);
    $("#hero-role").textContent = L(D.profile.title);
  }
  function heroTitle() {
    // emphasise the last clause of the headline
    const h = L(D.profile.headline);
    const cut = I18N.lang === "fr" ? h.lastIndexOf(", jusqu") : h.lastIndexOf(", all the way");
    if (cut < 0) return esc(h);
    return `${esc(h.slice(0, cut + 1))} <em>${esc(h.slice(cut + 2))}</em>`;
  }

  let termTimer;
  function renderTerminal() {
    const fr = I18N.lang === "fr";
    const lines = [
      ["cmd", "whoami"],
      ["out", `${D.profile.name} — ${L(D.profile.title).toLowerCase()}`],
      ["cmd", 'git log --author="Caleb" --no-merges --oneline | wc -l'],
      ["acc", D.stats[0].value],
      ["cmd", fr ? "ls projets/phares" : "ls projects/featured"],
      ["out", flagships.map((p) => p.id).join("  ")],
      ["cmd", "cat stack.txt"],
      ["out", "Laravel · Django · FastAPI · NestJS · Express"],
      ["out", "Vue · React · Next.js · TypeScript · PostgreSQL"]
    ];
    const body = $("#term-body");
    $("#term-title").textContent = t("term.title");
    clearTimeout(termTimer);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lineHTML = ([k, s]) => k === "cmd" ? `<span><span class="acc">$</span> ${esc(s)}</span>` : `<span class="${k === "acc" ? "acc" : "muted"}">${esc(s)}</span>`;
    if (reduce) { body.innerHTML = lines.map(lineHTML).join("") + '<span><span class="acc">$</span> <span class="caret"></span></span>'; return; }
    body.innerHTML = "";
    let i = 0;
    const next = () => {
      if (i >= lines.length) { body.insertAdjacentHTML("beforeend", '<span><span class="acc">$</span> <span class="caret"></span></span>'); return; }
      const [k, s] = lines[i++];
      if (k !== "cmd") { body.insertAdjacentHTML("beforeend", lineHTML([k, s])); termTimer = setTimeout(next, 140); return; }
      const el = document.createElement("span");
      el.innerHTML = '<span class="acc">$</span> <span class="typed"></span><span class="caret"></span>';
      body.appendChild(el);
      const typed = el.querySelector(".typed"); let c = 0;
      const type = () => {
        typed.textContent = s.slice(0, ++c);
        if (c < s.length) termTimer = setTimeout(type, 18 + Math.random() * 30);
        else { el.querySelector(".caret").remove(); termTimer = setTimeout(next, 260); }
      };
      termTimer = setTimeout(type, 300);
    };
    next();
  }

  /* ---------- stats + marquee ---------- */
  function renderStats() {
    $("#stats").innerHTML = D.stats.map((s) => UI.stat(s.value, L(s.label))).join("");
    $("#hero-badge-value").textContent = D.stats[0].value;
  }
  function renderMarquee() {
    const tech = ["Laravel", "Django", "FastAPI", "NestJS", "Express", "Vue.js", "React", "Next.js", "TypeScript", "PostgreSQL", "MySQL", "MongoDB", "Redis", "WebSockets", "Docker", "Tailwind CSS", "Prisma", "Inertia.js"];
    const row = tech.map((x) => `<span class="marquee__item">${esc(x)}</span>`).join("");
    $("#marquee").innerHTML = `<div class="marquee__track" aria-hidden="true">${row}${row}</div><p class="sr-only">${esc(tech.join(", "))}</p>`;
  }

  /* ---------- projects ---------- */
  function renderCases() {
    $("#cases").innerHTML = flagships.map((p, i) => UI.caseRow(p, i, flagships.length)).join("");
  }
  function renderFilters() {
    $("#filters").innerHTML = FILTERS.map((f) => {
      const n = featured.filter(f.test).length;
      return n ? `<button type="button" data-filter="${f.key}" aria-pressed="${f.key === activeFilter}">${esc(t("filter." + f.key))}<span class="count">${n}</span></button>` : "";
    }).join("");
    $("#filters").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => { activeFilter = b.dataset.filter; applyFilter(); }));
  }
  function applyFilter() {
    const f = FILTERS.find((x) => x.key === activeFilter);
    let shown = 0;
    $("#grid").querySelectorAll(".card").forEach((el, i) => {
      const ok = f.test(featured[i]); el.hidden = !ok; if (ok) { shown++; el.classList.add("is-in"); }
    });
    $("#grid-empty").hidden = shown > 0;
    $("#filters").querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === activeFilter)));
  }
  function renderGrid() {
    $("#grid").innerHTML = featured.map(UI.card).join("");
    $("#grid-empty").textContent = t("grid.empty");
    renderFilters(); applyFilter();
  }
  function renderArchive() {
    $("#archive-title").textContent = `${t("archive.title")} · ${archive.length}`;
    $("#archive-list").innerHTML = archive.map((p) => `
      <li><b>${esc(UI.title(p))}</b><span>${esc(L(p.tagline))}</span>
      ${p.links && p.links.repo ? `<a href="${esc(p.links.repo)}" target="_blank" rel="noopener" aria-label="${esc(t("case.repo"))} ${esc(UI.title(p))}">${icon("code")}</a>` : "<span></span>"}</li>`).join("");
  }

  /* ---------- skills ---------- */
  function renderSkills() {
    const max = Math.max(...D.skills.flatMap((g) => g.items.map((i) => i.projects.length)));
    $("#skills").innerHTML = D.skills.map((g) => `
      <div class="skill-group reveal">
        <h3>${esc(L(g.label))}<small>${g.items.length}</small></h3>
        ${g.items.map((it) => {
          const n = it.projects.length;
          const names = it.projects.filter((id) => byId[id]).map((id) => `<a href="${UI.url(byId[id])}">${esc(UI.title(byId[id]))}</a>`).join(", ");
          return `<div class="skill">
            <span class="skill__name">${esc(it.name)}</span>
            <span class="skill__count">${n} ${esc(n > 1 ? t("skills.projects") : t("skills.project"))}</span>
            <span class="skill__bar" aria-hidden="true"><i style="--w:${Math.max(8, Math.round((n / max) * 100))}%"></i></span>
            <span class="skill__where">${names}</span>
          </div>`;
        }).join("")}
      </div>`).join("");
    $("#strengths").innerHTML = (D.strengths || []).map((s, i) => `
      <div class="strength"><span class="n">${String(i + 1).padStart(2, "0")}</span><b>${esc(L(s.title))}</b><p>${esc(L(s.text))}</p></div>`).join("");
  }

  /* ---------- about ---------- */
  function renderAbout() {
    $("#about-text").innerHTML = L(D.profile.about).map((p) => `<p>${esc(p)}</p>`).join("");
    $("#about-langs").innerHTML = D.profile.languages.map((l) => `<span class="chip">${esc(L(l))}</span>`).join("");
    $("#timeline").innerHTML = D.timeline.map((e) => `
      <div class="tl tl--${e.kind} reveal">
        <span class="tl__date">${esc(e.date)}</span>
        <span class="tl__title">${esc(L(e.title))}</span>
        ${e.org ? `<span class="tl__org">${esc(L(e.org))}</span>` : ""}
        ${L(e.text) ? `<span class="tl__text">${esc(L(e.text))}</span>` : ""}
      </div>`).join("");
  }

  /* ---------- contact ---------- */
  function renderContact() {
    const P = D.profile;
    $("#contact-list").innerHTML = `
      <div class="contact__item"><span>${esc(t("contact.mail"))}</span><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></div>
      <div class="contact__item"><span>${esc(t("contact.phone"))}</span><a href="tel:${esc(P.phones[0].replace(/\s/g, ""))}">${esc(P.phones[0])}</a></div>
      <div class="contact__item"><span>LinkedIn</span><a href="${esc(P.linkedin)}" target="_blank" rel="noopener">${esc(UI.host(P.linkedin))}</a></div>
      <div class="contact__item"><span>GitHub</span><a href="${esc(P.github)}" target="_blank" rel="noopener">${esc(UI.host(P.github))}</a></div>
      ${P.codewars ? `<div class="contact__item"><span>Codewars</span><a href="${esc(P.codewars.url)}" target="_blank" rel="noopener">${esc(L(P.codewars.label))}</a></div>` : ""}`;
    $("#contact-mail").setAttribute("href", "mailto:" + P.email);
    $("#contact-wa").setAttribute("href", "https://wa.me/" + P.whatsapp);
    $("#contact-li").setAttribute("href", P.linkedin);
    $("#footer-gh").setAttribute("href", P.github);
    $("#footer-li").setAttribute("href", P.linkedin);
  }

  function bindCopy() {
    $("#contact-copy").addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(D.profile.email); UI.toast(t("contact.copied")); }
      catch (e) { location.href = "mailto:" + D.profile.email; }
    });
  }

  /* active nav link while scrolling */
  function spy() {
    const links = [...document.querySelectorAll(".nav a[href^='#']")];
    const secs = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((ens) => {
      ens.forEach((en) => { if (en.isIntersecting) links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id)); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach((s) => io.observe(s));
  }

  function renderAll() {
    renderHero(); renderTerminal(); renderStats(); renderMarquee(); renderCases(); renderGrid(); renderArchive(); renderSkills(); renderAbout(); renderContact();
    UI.observeReveal();
  }

  UI.initChrome();
  renderAll();
  bindCopy();
  spy();
  I18N.onChange(renderAll);
  document.getElementById("year").textContent = new Date().getFullYear();
})();
