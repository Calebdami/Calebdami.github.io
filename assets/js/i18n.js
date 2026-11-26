/* UI strings + language / theme preferences. Content strings live in data.js. */
(function () {
  "use strict";
  const STR = {
    fr: {
      "skip": "Aller au contenu",
      "nav.projects": "Projets", "nav.skills": "Compétences", "nav.about": "Parcours", "nav.contact": "Contact",
      "nav.menu": "Menu", "nav.cv": "CV", "theme.toggle": "Changer de thème", "lang.label": "Langue",
      "hero.status": "Disponible pour un poste ou une mission",
      "hero.cta.projects": "Voir mes projets", "hero.cta.cv": "Télécharger le CV", "hero.cta.contact": "Me contacter",
      "hero.badge": "commits en 2026",
      "term.title": "caleb@dev: ~/projets",
      "flag.eyebrow": "Projets phares",
      "flag.title": "Six projets qui montrent comment je travaille",
      "flag.text": "Du SaaS en entreprise au bot de trading en solo : le contexte, ma part exacte, les choix techniques.",
      "grid.eyebrow": "Autres réalisations",
      "grid.title": "Et tout ce que j'ai construit d'autre",
      "grid.text": "Sites en ligne, projets d'équipe, outils internes. Filtrez par technologie.",
      "filter.all": "Tous", "filter.laravel": "Laravel", "filter.vue": "Vue", "filter.react": "React", "filter.node": "Node.js",
      "filter.python": "Python", "filter.php": "PHP", "filter.realtime": "Temps réel", "filter.live": "En ligne",
      "grid.empty": "Aucun projet pour ce filtre.",
      "archive.title": "Premiers pas", "archive.hint": "Exercices du début de formation",
      "skills.eyebrow": "Compétences",
      "skills.title": "Une stack vérifiée dans le code",
      "skills.text": "Chaque compétence est reliée aux projets où je l'ai réellement utilisée, commits à l'appui.",
      "skills.used": "Utilisé dans", "skills.projects": "projets", "skills.project": "projet",
      "strengths.title": "Ce que j'apporte à une équipe",
      "about.eyebrow": "Parcours",
      "about.title": "De la microbiologie au code",
      "contact.eyebrow": "Contact",
      "contact.title": "Construisons quelque chose de solide.",
      "contact.text": "Un poste, une mission, un projet à reprendre ou à lancer ? Je réponds rapidement.",
      "contact.email": "Écrire un email", "contact.copy": "Copier l'adresse", "contact.copied": "Adresse copiée",
      "contact.whatsapp": "WhatsApp", "contact.phone": "Téléphone", "contact.mail": "Email",
      "footer.made": "Site fait main, sans framework ni dépendance.", "footer.top": "Haut de page",
      "ctx.work": "Entreprise", "ctx.training": "Formation", "ctx.personal": "Personnel",
      "st.live": "En ligne", "st.public": "Code public", "st.private": "Code privé",
      "case.read": "Lire l'étude de cas", "case.demo": "Voir en ligne", "case.repo": "Code source", "case.details": "Détails",
      "p.back": "Tous les projets", "p.period": "Période", "p.team": "Équipe", "p.share": "Ma contribution", "p.role": "Rôle", "p.status": "Statut",
      "p.problem": "Contexte", "p.built": "Ce que j'ai construit", "p.challenges": "Défis techniques", "p.arch": "Architecture",
      "p.stack": "Stack", "p.metrics": "En chiffres", "p.summary": "En bref", "p.prev": "Projet précédent", "p.next": "Projet suivant",
      "p.private": "Code privé (projet d'entreprise ou d'équipe) : démonstration possible sur demande.", "p.private.personal": "Code privé : démonstration possible sur demande.",
      "p.notfound": "Projet introuvable.", "p.visual": "Visuel d'illustration : pas de capture publique pour ce projet."
    },
    en: {
      "skip": "Skip to content",
      "nav.projects": "Projects", "nav.skills": "Skills", "nav.about": "Background", "nav.contact": "Contact",
      "nav.menu": "Menu", "nav.cv": "Resume", "theme.toggle": "Toggle theme", "lang.label": "Language",
      "hero.status": "Open to a job or contract",
      "hero.cta.projects": "See my work", "hero.cta.cv": "Download resume", "hero.cta.contact": "Get in touch",
      "hero.badge": "commits in 2026",
      "term.title": "caleb@dev: ~/projects",
      "flag.eyebrow": "Featured work",
      "flag.title": "Six projects that show how I work",
      "flag.text": "From a company SaaS to a solo trading bot: the context, my exact contribution, the technical choices.",
      "grid.eyebrow": "More projects",
      "grid.title": "Everything else I've built",
      "grid.text": "Live sites, team projects, internal tools. Filter by technology.",
      "filter.all": "All", "filter.laravel": "Laravel", "filter.vue": "Vue", "filter.react": "React", "filter.node": "Node.js",
      "filter.python": "Python", "filter.php": "PHP", "filter.realtime": "Real-time", "filter.live": "Live",
      "grid.empty": "No project for this filter.",
      "archive.title": "First steps", "archive.hint": "Early training exercises",
      "skills.eyebrow": "Skills",
      "skills.title": "A stack proven in code",
      "skills.text": "Every skill links to the projects where I actually used it, backed by commits.",
      "skills.used": "Used in", "skills.projects": "projects", "skills.project": "project",
      "strengths.title": "What I bring to a team",
      "about.eyebrow": "Background",
      "about.title": "From microbiology to code",
      "contact.eyebrow": "Contact",
      "contact.title": "Let's build something solid.",
      "contact.text": "A job, a contract, a project to take over or to start? I reply quickly.",
      "contact.email": "Send an email", "contact.copy": "Copy address", "contact.copied": "Address copied",
      "contact.whatsapp": "WhatsApp", "contact.phone": "Phone", "contact.mail": "Email",
      "footer.made": "Hand-made site, no framework, no dependency.", "footer.top": "Back to top",
      "ctx.work": "Company", "ctx.training": "Training", "ctx.personal": "Personal",
      "st.live": "Live", "st.public": "Public code", "st.private": "Private code",
      "case.read": "Read the case study", "case.demo": "View live", "case.repo": "Source code", "case.details": "Details",
      "p.back": "All projects", "p.period": "Period", "p.team": "Team", "p.share": "My contribution", "p.role": "Role", "p.status": "Status",
      "p.problem": "Context", "p.built": "What I built", "p.challenges": "Technical challenges", "p.arch": "Architecture",
      "p.stack": "Stack", "p.metrics": "In numbers", "p.summary": "Overview", "p.prev": "Previous project", "p.next": "Next project",
      "p.private": "Private code (company or team project): demo available on request.", "p.private.personal": "Private code: demo available on request.",
      "p.notfound": "Project not found.", "p.visual": "Illustration: no public screenshot for this project."
    }
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  function initialLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "fr" || q === "en") return q;
    const saved = store.get("lang");
    if (saved === "fr" || saved === "en") return saved;
    return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  const I18N = {
    lang: initialLang(),
    listeners: [],
    t(key) { return (STR[this.lang] && STR[this.lang][key]) || STR.fr[key] || key; },
    /* localise a content value: {fr, en} object, or a plain string */
    L(v) {
      if (v == null) return "";
      if (typeof v === "string") return v;
      return v[this.lang] != null && v[this.lang] !== "" ? v[this.lang] : (v.fr || "");
    },
    setLang(l) {
      if (l === this.lang) return;
      this.lang = l; store.set("lang", l);
      this.apply();
      this.listeners.forEach((fn) => fn(l));
    },
    onChange(fn) { this.listeners.push(fn); },
    apply(root) {
      root = root || document;
      document.documentElement.lang = this.lang;
      root.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = this.t(el.dataset.i18n); });
      root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
        el.dataset.i18nAttr.split(";").forEach((pair) => { const [a, k] = pair.split(":"); el.setAttribute(a, this.t(k)); });
      });
      document.querySelectorAll("[data-lang-btn]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.langBtn === this.lang)));
    }
  };

  const Theme = {
    get() { return document.documentElement.dataset.theme || "dark"; },
    set(t) { document.documentElement.dataset.theme = t; store.set("theme", t); this.sync(); },
    toggle() { this.set(this.get() === "dark" ? "light" : "dark"); },
    sync() {
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", this.get() === "dark" ? "#0a0b0f" : "#f4f3ee");
      document.querySelectorAll("[data-theme-btn]").forEach((b) => b.setAttribute("aria-pressed", String(this.get() === "light")));
    }
  };

  window.I18N = I18N;
  window.Theme = Theme;
})();
