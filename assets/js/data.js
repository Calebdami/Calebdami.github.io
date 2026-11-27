/* Contenu du portfolio — source unique (FR/EN).
   Pour ajouter une capture : déposer l'image dans assets/img/projects/<id>/ puis l'ajouter dans "images".
   Ce fichier reste du JSON valide après "window.PORTFOLIO =" (pas de virgule finale, guillemets doubles). */
window.PORTFOLIO = {
 "profile": {
  "name": "Caleb KPANOU",
  "initials": "CK",
  "title": {
   "fr": "Développeur Full-Stack",
   "en": "Full-Stack Developer"
  },
  "location": {
   "fr": "Bénin · disponible en remote",
   "en": "Benin · open to remote"
  },
  "email": "calebdamikpanou@gmail.com",
  "phones": [
   "+229 01 96 54 14 63",
   "+229 01 47 24 51 02",
   "+229 01 58 02 01 63"
  ],
  "whatsapp": "2290196541463",
  "linkedin": "https://www.linkedin.com/in/calebbytes",
  "github": "https://github.com/Calebdami",
  "cv": {
   "fr": "assets/cv/CV_Caleb_KPANOU.pdf",
   "en": "assets/cv/CV_Caleb_KPANOU_EN.pdf"
  },
  "headline": {
   "fr": "Je construis des applications web complètes, de la base de données à l'interface, jusqu'à la mise en production.",
   "en": "I build complete web applications, from the database to the interface, all the way to production."
  },
  "intro": {
   "fr": "SaaS de paie multi-entreprises, plateformes de formation, jeux temps réel, bot de trading : plus de 20 projets livrés en dix mois, sur Laravel, Django, FastAPI, NestJS, Vue et React.",
   "en": "Multi-tenant payroll SaaS, training platforms, real-time games, a trading bot: 20+ projects shipped in ten months, on Laravel, Django, FastAPI, NestJS, Vue and React."
  },
  "about": {
   "fr": [
    "Biologiste de formation (Master 1 en microbiologie moléculaire et médicale), j'ai basculé vers le développement web en 2025. J'ai gardé du laboratoire le goût de la méthode : comprendre le système, poser une hypothèse, tester, documenter.",
    "Depuis, je code tous les jours. En entreprise, je participe à un SaaS de paie où se jouent la sécurité des données, les paiements et le temps réel. En formation intensive à l'Université HIGHFIVE (VIPP Interstis), j'ai travaillé en équipe, sous délais serrés, sur des plateformes utilisées par des dizaines de personnes.",
    "Ce qui me motive : les systèmes où la rigueur compte vraiment, comme l'isolation des données entre clients, les WebSockets, la facturation ou l'anti-triche, et les interfaces qui restent simples malgré la complexité derrière."
   ],
   "en": [
    "Trained as a biologist (first-year Master's in molecular and medical microbiology), I moved into web development in 2025. From the lab I kept a taste for method: understand the system, form a hypothesis, test, document.",
    "Since then I have coded every day. At work, I contribute to a payroll SaaS where data security, payments and real-time features are critical. During an intensive programme at HIGHFIVE University (VIPP Interstis), I worked in teams, under tight deadlines, on platforms used by dozens of people.",
    "What drives me: systems where rigour really matters, such as tenant isolation, WebSockets, billing or anti-cheat, and interfaces that stay simple despite the complexity behind them."
   ]
  },
  "languages": [
   {
    "fr": "Français : courant",
    "en": "French: fluent"
   },
   {
    "fr": "Anglais : intermédiaire",
    "en": "English: intermediate"
   }
  ],
  "site": "https://calebdami.github.io/",
  "codewars": {
   "url": "https://www.codewars.com/users/Caleb_Dami",
   "label": {
    "fr": "3 kyu · top 2 % · 183 katas",
    "en": "3 kyu · top 2% · 183 kata"
   }
  }
 },
 "stats": [
  {
   "value": "660",
   "label": {
    "fr": "commits personnels",
    "en": "personal commits"
   }
  },
  {
   "value": "23",
   "label": {
    "fr": "projets livrés",
    "en": "projects shipped"
   }
  },
  {
   "value": "141",
   "label": {
    "fr": "jours de commit en 2026",
    "en": "commit days in 2026"
   }
  },
  {
   "value": "6",
   "label": {
    "fr": "frameworks backend",
    "en": "backend frameworks"
   }
  }
 ],
 "skills": [
  {
   "id": "front",
   "label": {
    "fr": "Frontend",
    "en": "Frontend"
   },
   "items": [
    {
     "name": "Vue.js 3",
     "projects": [
      "gestion-formation",
      "cityplay",
      "meded",
      "rh-centre-appels",
      "messenger",
      "smartrecruit",
      "agrotrack",
      "hospital",
      "quotes",
      "shop-vue",
      "week-schedule"
     ]
    },
    {
     "name": "React",
     "projects": [
      "gestion-paie",
      "ferme-avicole",
      "site-ong",
      "blog",
      "vitropro",
      "azriel"
     ]
    },
    {
     "name": "TypeScript",
     "projects": [
      "gestion-paie",
      "gestion-formation",
      "quizland",
      "site-ong",
      "vitropro",
      "azriel"
     ]
    },
    {
     "name": "Next.js",
     "projects": [
      "azriel"
     ]
    },
    {
     "name": "Inertia.js",
     "projects": [
      "cityplay",
      "rh-centre-appels",
      "messenger",
      "ferme-avicole"
     ]
    },
    {
     "name": "Tailwind CSS",
     "projects": [
      "gestion-paie",
      "gestion-formation",
      "cityplay",
      "rh-centre-appels",
      "site-ong",
      "smartrecruit",
      "ferme-avicole",
      "azriel"
     ]
    },
    {
     "name": "Pinia · TanStack Query",
     "projects": [
      "gestion-paie",
      "messenger",
      "smartrecruit",
      "agrotrack",
      "hospital"
     ]
    },
    {
     "name": "Three.js · GSAP · Framer Motion",
     "projects": [
      "azriel",
      "cityplay"
     ]
    },
    {
     "name": "HTML · CSS · JavaScript",
     "projects": [
      "geogenius",
      "product-cart"
     ]
    }
   ]
  },
  {
   "id": "back",
   "label": {
    "fr": "Backend",
    "en": "Backend"
   },
   "items": [
    {
     "name": "Laravel",
     "projects": [
      "gestion-formation",
      "cityplay",
      "meded",
      "rh-centre-appels",
      "messenger",
      "ferme-avicole",
      "azriel"
     ]
    },
    {
     "name": "Node.js · Express",
     "projects": [
      "v75-bot",
      "smartrecruit",
      "agrotrack",
      "hospital",
      "quotes"
     ]
    },
    {
     "name": "Django · DRF",
     "projects": [
      "gestion-paie"
     ]
    },
    {
     "name": "FastAPI",
     "projects": [
      "gestion-academique",
      "blog"
     ]
    },
    {
     "name": "NestJS · Prisma",
     "projects": [
      "quizland"
     ]
    },
    {
     "name": "PHP natif (MVC maison)",
     "projects": [
      "vision-fc"
     ]
    },
    {
     "name": "API REST · OpenAPI",
     "projects": [
      "gestion-paie",
      "gestion-academique",
      "quizland",
      "smartrecruit",
      "meded"
     ]
    }
   ]
  },
  {
   "id": "data",
   "label": {
    "fr": "Données",
    "en": "Data"
   },
   "items": [
    {
     "name": "PostgreSQL",
     "projects": [
      "gestion-paie",
      "quizland",
      "gestion-academique",
      "smartrecruit",
      "blog"
     ]
    },
    {
     "name": "MySQL",
     "projects": [
      "vision-fc",
      "gestion-formation",
      "rh-centre-appels",
      "cityplay"
     ]
    },
    {
     "name": "MongoDB",
     "projects": [
      "agrotrack",
      "quotes"
     ]
    },
    {
     "name": "SQLite",
     "projects": [
      "hospital",
      "ferme-avicole"
     ]
    },
    {
     "name": "Redis",
     "projects": [
      "gestion-paie",
      "smartrecruit"
     ]
    }
   ]
  },
  {
   "id": "realtime",
   "label": {
    "fr": "Temps réel & intégrations",
    "en": "Real-time & integrations"
   },
   "items": [
    {
     "name": "WebSockets (Reverb, Channels, Socket.io)",
     "projects": [
      "gestion-paie",
      "gestion-formation",
      "quizland",
      "cityplay",
      "messenger",
      "blog"
     ]
    },
    {
     "name": "WebRTC",
     "projects": [
      "messenger"
     ]
    },
    {
     "name": "Paiements (FedaPay, Stripe)",
     "projects": [
      "gestion-paie"
     ]
    },
    {
     "name": "API IA (Anthropic Claude)",
     "projects": [
      "meded"
     ]
    },
    {
     "name": "MetaAPI · MT5",
     "projects": [
      "v75-bot"
     ]
    },
    {
     "name": "Judge0 · WebContainer · Codewars",
     "projects": [
      "gestion-formation"
     ]
    }
   ]
  },
  {
   "id": "security",
   "label": {
    "fr": "Sécurité",
    "en": "Security"
   },
   "items": [
    {
     "name": "JWT · Sanctum · sessions HttpOnly",
     "projects": [
      "gestion-paie",
      "quizland",
      "meded",
      "smartrecruit",
      "hospital"
     ]
    },
    {
     "name": "OAuth Google · 2FA (OTP/TOTP)",
     "projects": [
      "ferme-avicole",
      "blog",
      "messenger",
      "smartrecruit",
      "azriel"
     ]
    },
    {
     "name": "RBAC · Policies Laravel",
     "projects": [
      "gestion-paie",
      "gestion-formation",
      "rh-centre-appels",
      "vision-fc"
     ]
    },
    {
     "name": "PostgreSQL Row-Level Security",
     "projects": [
      "gestion-paie"
     ]
    },
    {
     "name": "LDAP",
     "projects": [
      "gestion-paie"
     ]
    }
   ]
  },
  {
   "id": "ops",
   "label": {
    "fr": "DevOps & qualité",
    "en": "DevOps & quality"
   },
   "items": [
    {
     "name": "Git · GitHub · GitLab",
     "projects": [
      "gestion-paie",
      "gestion-formation",
      "quizland",
      "gestion-academique"
     ]
    },
    {
     "name": "Docker · nginx",
     "projects": [
      "messenger"
     ]
    },
    {
     "name": "Render · Vercel · alwaysdata",
     "projects": [
      "messenger",
      "geogenius",
      "site-ong"
     ]
    },
    {
     "name": "Tests (PHPUnit, Pytest, Vitest)",
     "projects": [
      "gestion-paie",
      "gestion-formation",
      "gestion-academique",
      "quizland"
     ]
    },
    {
     "name": "Celery · tâches planifiées",
     "projects": [
      "gestion-paie"
     ]
    }
   ]
  }
 ],
 "timeline": [
  {
   "date": "2026 →",
   "kind": "work",
   "title": {
    "fr": "Développeur full-stack · projets en entreprise",
    "en": "Full-stack developer · company projects"
   },
   "org": {
    "fr": "Gestion académique · Gestion de paie en entreprise",
    "en": "Academic management · Enterprise payroll"
   },
   "text": {
    "fr": "Applications web sécurisées de bout en bout pour des besoins commerciaux et financiers : conception, déploiement, maintenance.",
    "en": "End-to-end secure web applications for commercial and financial needs: design, deployment, maintenance."
   }
  },
  {
   "date": "2025 →",
   "kind": "edu",
   "title": {
    "fr": "Formation intensive en développement web",
    "en": "Intensive web development programme"
   },
   "org": {
    "fr": "Université HIGHFIVE · VIPP Interstis",
    "en": "HIGHFIVE University · VIPP Interstis"
   },
   "text": {
    "fr": "HTML, CSS, Tailwind, JavaScript, PHP, Python, C#, Vue.js, Node.js, Express, Laravel, FastAPI, Django, React, NestJS, Next.js, PostgreSQL, MySQL, MongoDB. Grosses fonctionnalités livrées en équipe, sous délais serrés.",
    "en": "HTML, CSS, Tailwind, JavaScript, PHP, Python, C#, Vue.js, Node.js, Express, Laravel, FastAPI, Django, React, NestJS, Next.js, PostgreSQL, MySQL, MongoDB. Large features shipped in teams under tight deadlines."
   }
  },
  {
   "date": "2023",
   "kind": "edu",
   "title": {
    "fr": "Master 1 · Microbiologie moléculaire et médicale",
    "en": "First-year Master's · Molecular and medical microbiology"
   },
   "org": "",
   "text": {
    "fr": "Rigueur expérimentale, analyse de données, démarche scientifique.",
    "en": "Experimental rigour, data analysis, scientific method."
   }
  },
  {
   "date": "2022",
   "kind": "edu",
   "title": {
    "fr": "Atelier « Conçois ton Intelligence Artificielle »",
    "en": "“Build your own AI” workshop"
   },
   "org": "Bourse MTN Bénin",
   "text": {
    "fr": "Initiation au machine learning avec Kaggle.",
    "en": "Introduction to machine learning with Kaggle."
   }
  },
  {
   "date": "2022",
   "kind": "edu",
   "title": {
    "fr": "Licence en Analyses biomédicales",
    "en": "Bachelor's in Biomedical Analysis"
   },
   "org": "",
   "text": {
    "fr": "",
    "en": ""
   }
  },
  {
   "date": "2019",
   "kind": "edu",
   "title": {
    "fr": "Baccalauréat scientifique, série C",
    "en": "Scientific baccalaureate (Maths & Physics)"
   },
   "org": "",
   "text": {
    "fr": "",
    "en": ""
   }
  }
 ],
 "projects": [
  {
   "id": "gestion-paie",
   "tier": "flagship",
   "title": "Gestion de paie en entreprise",
   "titleEn": "Enterprise Payroll Management",
   "glyph": {
    "fr": "Paie",
    "en": "Pay"
   },
   "accent": "#C8FF4D",
   "context": "work",
   "period": {
    "fr": "oct. → nov. 2026 · en cours",
    "en": "Oct → Nov 2026 · ongoing"
   },
   "team": {
    "fr": "Équipe de 8",
    "en": "Team of 8"
   },
   "share": {
    "fr": "186 commits (87 back · 99 front)",
    "en": "186 commits (87 back · 99 front)"
   },
   "role": {
    "fr": "Développeur full-stack · plateforme SaaS, facturation, temps réel",
    "en": "Full-stack developer · SaaS platform, billing, real-time"
   },
   "status": "private",
   "tagline": {
    "fr": "Un SaaS de paie multi-entreprises où chaque client ne voit que ses données, garanti par la base elle-même.",
    "en": "A multi-tenant payroll SaaS where each client only sees its own data, enforced by the database itself."
   },
   "summary": {
    "fr": "Logiciel de gestion de la paie (FCFA) multi-pays : salariés, plan de paie versionné, calcul côté serveur, bulletins, abonnements et paiement en ligne.",
    "en": "Multi-country payroll software (FCFA): employees, versioned pay plan, server-side computation, payslips, subscriptions and online payment."
   },
   "problem": {
    "fr": "Les entreprises clientes partagent la même base de données. Il faut un cloisonnement strict entre elles, une facturation SaaS souple (offres, périodicités, essais, Mobile Money) et des écrans qui se mettent à jour sans rechargement pour toutes les personnes connectées.",
    "en": "Client companies share the same database. It needs strict tenant isolation, flexible SaaS billing (plans, billing cycles, trials, Mobile Money) and screens that update live for every connected user."
   },
   "built": {
    "fr": [
     "Facturation et abonnements : offres versionnées (grandfathering), 5 périodicités, prix mensuels/annuels, tarification par région, activation en libre-service (assistant de paiement, proforma), renouvellement J-14.",
     "Paiement en ligne : connecteur FedaPay (Mobile Money et carte), connecteur Stripe Checkout, comptes de collecte par opérateur, webhooks.",
     "Temps réel : socle WebSocket Django Channels + Redis, diffusion des événements métier, tâches de fond avec progression, client React qui rafraîchit les écrans automatiquement.",
     "Isolation multi-tenant par Row-Level Security PostgreSQL, indexation composite et requêtes optimisées (comptages annotés en une seule requête).",
     "Console d'administration de la plateforme : cycle de vie des organisations, conversion en compte annuaire LDAP, rôles opérateurs (support, finance) étanches vis-à-vis des rôles entreprise.",
     "Référentiels pays pilotés par la donnée (schémas d'identifiants nationaux, plans de démarrage Bénin/Togo), import du plan de paie avec comparateur de différences et glisser-déposer, exports Excel/CSV personnalisables, journal d'audit filtrable."
    ],
    "en": [
     "Billing & subscriptions: versioned plans (grandfathering), 5 billing cycles, monthly/yearly prices, regional pricing, self-service activation (checkout wizard, pro-forma), D-14 renewal alert.",
     "Online payment: FedaPay connector (Mobile Money and card), Stripe Checkout connector, per-operator collection accounts, webhooks.",
     "Real-time: Django Channels + Redis WebSocket layer, business event broadcasting, background jobs with progress, React client that refreshes screens automatically.",
     "Multi-tenant isolation with PostgreSQL Row-Level Security, composite indexes and optimised queries (annotated counts in a single query).",
     "Platform admin console: organisation lifecycle, LDAP directory account conversion, operator roles (support, finance) sealed off from company roles.",
     "Data-driven country referentials (national ID schemas, Benin/Togo starter plans), pay-plan import with diff viewer and drag-and-drop, customisable Excel/CSV exports, filterable audit log."
    ]
   },
   "challenges": {
    "fr": [
     "Garantir qu'aucune requête ne puisse lire les données d'une autre entreprise, même en cas d'oubli de filtre dans le code : l'isolation est appliquée au niveau de PostgreSQL (RLS).",
     "Gérer les paiements Mobile Money de façon fiable : webhooks signés, états d'abonnement intermédiaires (PENDING, activation différée), conflits concurrents.",
     "Diffuser en temps réel uniquement aux bonnes personnes : abonnement WebSocket par entreprise, déconnexion forcée lors d'un changement de rôle ou de mot de passe."
    ],
    "en": [
     "Guarantee that no query can read another company's data, even if a filter is forgotten in code: isolation is enforced by PostgreSQL itself (RLS).",
     "Reliable Mobile Money payments: signed webhooks, intermediate subscription states (PENDING, deferred activation), concurrent conflicts.",
     "Broadcast in real time only to the right people: per-company WebSocket subscription, forced disconnect on role or password change."
    ]
   },
   "arch": [
    {
     "fr": "React 19 · TypeScript · TanStack Query · zod",
     "en": "React 19 · TypeScript · TanStack Query · zod"
    },
    {
     "fr": "API Django REST Framework · Channels (WebSocket)",
     "en": "Django REST Framework API · Channels (WebSocket)"
    },
    {
     "fr": "Services métier : paie, facturation, plateforme, audit",
     "en": "Domain services: payroll, billing, platform, audit"
    },
    {
     "fr": "PostgreSQL (Row-Level Security) · Redis · Celery",
     "en": "PostgreSQL (Row-Level Security) · Redis · Celery"
    },
    {
     "fr": "FedaPay · Stripe · LDAP",
     "en": "FedaPay · Stripe · LDAP"
    }
   ],
   "stack": [
    "Django 5.2",
    "DRF",
    "Channels",
    "Celery",
    "Redis",
    "PostgreSQL",
    "React 19",
    "TypeScript",
    "TanStack Query",
    "Tailwind 4",
    "Vitest",
    "Pytest",
    "FedaPay",
    "LDAP"
   ],
   "tags": [
    "python",
    "react",
    "realtime",
    "saas",
    "work"
   ],
   "metrics": [
    {
     "value": "186",
     "label": {
      "fr": "commits personnels",
      "en": "personal commits"
     }
    },
    {
     "value": "10",
     "label": {
      "fr": "apps Django",
      "en": "Django apps"
     }
    },
    {
     "value": "75",
     "label": {
      "fr": "fichiers de tests",
      "en": "test files"
     }
    }
   ],
   "links": {},
   "images": []
  },
  {
   "id": "gestion-formation",
   "tier": "flagship",
   "title": "Plateforme de gestion de formation",
   "titleEn": "Training Management Platform",
   "glyph": "LMS",
   "accent": "#7C9CFF",
   "context": "training",
   "period": {
    "fr": "juin → oct. 2026",
    "en": "Jun → Oct 2026"
   },
   "team": {
    "fr": "41 contributeurs",
    "en": "41 contributors"
   },
   "share": {
    "fr": "248 commits · 3ᵉ contributeur",
    "en": "248 commits · 3rd contributor"
   },
   "role": {
    "fr": "Développeur full-stack · classes virtuelles, quiz, exécution de code, UI",
    "en": "Full-stack developer · virtual classes, quizzes, code execution, UI"
   },
   "status": "private",
   "tagline": {
    "fr": "La plateforme qui gère tout le parcours d'un apprenant : recrutement, formation, quiz, défis de code et classes virtuelles.",
    "en": "The platform that runs a learner's whole journey: recruitment, training, quizzes, coding challenges and virtual classes."
   },
   "summary": {
    "fr": "Plateforme interne de formation et de recrutement : candidatures, plannings, cours en auto-formation, quiz, Codewars, appels supervisés, cotisations.",
    "en": "Internal training and recruitment platform: applications, schedules, self-paced courses, quizzes, Codewars, supervised calls, contributions."
   },
   "problem": {
    "fr": "Un centre de formation doit recruter, former et évaluer des promotions entières : suivre chaque candidat, faire passer des quiz et des défis de code, animer des classes à distance, tout au même endroit.",
    "en": "A training centre must recruit, train and assess whole cohorts: track each applicant, run quizzes and coding challenges, host remote classes, all in one place."
   },
   "built": {
    "fr": [
     "Socle du système d'appels supervisés et de classes virtuelles (Laravel Reverb) : sessions, chat en direct, groupes dédiés, participants dynamiques, notification temps réel au démarrage d'un cours, filtrage par rôle. Le système a ensuite été enrichi par l'équipe.",
     "Commande Artisan de simulation de bout en bout (call:simulate-e2e) et tests Feature du système d'appels.",
     "Extraction automatique de quiz à partir de documents PDF (QuizExtractionService).",
     "Exécution de code dans le navigateur avec WebContainer (HTML, CSS, JavaScript) côté admin et apprenant, intégration Judge0 et module Codewars par niveaux (co-développés).",
     "Création et modification de quiz : cases à noircir, soumissions multiples, cartes pliables, affichage continu, corrections et notes.",
     "Policies et Form Requests sur l'ensemble de mes routes, refonte des relations et migrations.",
     "Dark mode et responsive sur toute l'interface d'administration (agenda, plannings, événements, recrutement, création de quiz)."
    ],
    "en": [
     "Foundation of the supervised calls and virtual classes system (Laravel Reverb): sessions, live chat, dedicated groups, dynamic participants, real-time notification when a class starts, role-based filtering. The team then extended it.",
     "End-to-end simulation Artisan command (call:simulate-e2e) and Feature tests for the call system.",
     "Automatic quiz extraction from PDF documents (QuizExtractionService).",
     "In-browser code execution with WebContainer (HTML, CSS, JavaScript) for admins and learners, Judge0 integration and level-based Codewars module (co-developed).",
     "Quiz creation and editing: fill-in bubbles, multiple submissions, collapsible cards, continuous display, grading.",
     "Policies and Form Requests across all my routes, relationship and migration refactoring.",
     "Dark mode and responsive design across the whole admin interface (calendar, schedules, events, recruitment, quiz builder)."
    ]
   },
   "challenges": {
    "fr": [
     "Synchroniser des dizaines de participants dans une même classe virtuelle (présence, chat, groupes) sans perdre d'événements.",
     "Exécuter le code des apprenants en toute sécurité : dans le navigateur (WebContainer) ou dans un bac à sable distant (Judge0), jamais sur le serveur de l'application.",
     "Intervenir dans une base de code de plus de 2 400 commits et 41 contributeurs, avec des fusions quotidiennes."
    ],
    "en": [
     "Keep dozens of participants in sync in one virtual class (presence, chat, groups) without losing events.",
     "Run learners' code safely: in the browser (WebContainer) or in a remote sandbox (Judge0), never on the application server.",
     "Work inside a codebase of 2,400+ commits and 41 contributors, with daily merges."
    ]
   },
   "arch": [
    {
     "fr": "Vue 3 · TypeScript · Tailwind · CodeMirror · Editor.js",
     "en": "Vue 3 · TypeScript · Tailwind · CodeMirror · Editor.js"
    },
    {
     "fr": "API Laravel 10 · Sanctum · Policies",
     "en": "Laravel 10 API · Sanctum · Policies"
    },
    {
     "fr": "Laravel Reverb (WebSocket) · événements de classe",
     "en": "Laravel Reverb (WebSocket) · class events"
    },
    {
     "fr": "MySQL · 114 modèles · 191 migrations",
     "en": "MySQL · 114 models · 191 migrations"
    },
    {
     "fr": "Judge0 · WebContainer · API Codewars · parsing PDF",
     "en": "Judge0 · WebContainer · Codewars API · PDF parsing"
    }
   ],
   "stack": [
    "Laravel 10",
    "Reverb",
    "Sanctum",
    "MySQL",
    "Vue 3",
    "TypeScript",
    "Tailwind",
    "WebContainer",
    "Judge0",
    "PHPUnit"
   ],
   "tags": [
    "laravel",
    "vue",
    "realtime",
    "training"
   ],
   "metrics": [
    {
     "value": "248",
     "label": {
      "fr": "commits personnels",
      "en": "personal commits"
     }
    },
    {
     "value": "114",
     "label": {
      "fr": "modèles Eloquent",
      "en": "Eloquent models"
     }
    },
    {
     "value": "105",
     "label": {
      "fr": "vues Vue",
      "en": "Vue views"
     }
    }
   ],
   "links": {},
   "images": []
  },
  {
   "id": "quizland",
   "tier": "flagship",
   "title": "QuizLand",
   "accent": "#FF8A3D",
   "context": "training",
   "period": {
    "fr": "sept. → oct. 2026",
    "en": "Sep → Oct 2026"
   },
   "team": {
    "fr": "25 contributeurs",
    "en": "25 contributors"
   },
   "share": {
    "fr": "48 commits backend",
    "en": "48 backend commits"
   },
   "role": {
    "fr": "Développeur backend · authentification, infrastructure, temps réel",
    "en": "Backend developer · authentication, infrastructure, real-time"
   },
   "status": "private",
   "tagline": {
    "fr": "Des quiz en duel, en solo ou en compétition, synchronisés à la milliseconde, avec anti-triche.",
    "en": "Quizzes in duels, solo or competitions, synced to the millisecond, with anti-cheat."
   },
   "summary": {
    "fr": "Plateforme de quiz compétitifs : modes solo, duo 1v1, compétition et « Dev en herbe », tirages, guildes, marketplace et extraction de questions par IA.",
    "en": "Competitive quiz platform: solo, 1v1 duel, competition and “Dev en herbe” modes, draws, guilds, marketplace and AI question extraction."
   },
   "problem": {
    "fr": "Deux joueurs ou plus doivent recevoir les mêmes questions au même instant, sans pouvoir tricher en changeant d'appareil ou d'onglet. L'API doit tenir la charge et rester cohérente.",
    "en": "Two or more players must get the same questions at the same moment, without cheating by switching device or tab. The API must scale and stay consistent."
   },
   "built": {
    "fr": [
     "AuthModule NestJS : inscription, connexion, refresh token, logout, guards JWT, durées de vie des jetons.",
     "Schéma Prisma (entités manquantes) et seeders de démonstration ; migrations et seeds rejouables sans effacer les données.",
     "Infrastructure transverse : HttpExceptionFilter, LoggingInterceptor, TransformInterceptor, configuration CORS.",
     "Mode duo 1v1 (en binôme) : création de partie privée, cycle de vie du lobby, synchronisation WebSocket.",
     "Anti-triche : verrouillage de l'appareil pendant un match, détection via WebSocket et alertes à l'administrateur.",
     "Plan de correction « senior » du backend (1 700+ lignes) : diagnostic et priorisation des dettes techniques."
    ],
    "en": [
     "NestJS AuthModule: sign-up, login, refresh token, logout, JWT guards, token lifetimes.",
     "Prisma schema (missing entities) and demo seeders; migrations and seeds that can be replayed without erasing data.",
     "Cross-cutting infrastructure: HttpExceptionFilter, LoggingInterceptor, TransformInterceptor, CORS configuration.",
     "1v1 duel mode (pair programming): private game creation, lobby lifecycle, WebSocket synchronisation.",
     "Anti-cheat: device lock during a match, WebSocket-based detection and admin alerts.",
     "Senior-level correction plan for the backend (1,700+ lines): diagnosis and prioritisation of technical debt."
    ]
   },
   "challenges": {
    "fr": [
     "Résoudre des cycles de dépendances entre modules ESM NestJS (Match ↔ Auth) sans casser l'injection.",
     "Gérer les conflits de fusion sur un schéma Prisma partagé par 25 développeurs."
    ],
    "en": [
     "Resolve ESM dependency cycles between NestJS modules (Match ↔ Auth) without breaking injection.",
     "Handle merge conflicts on a Prisma schema shared by 25 developers."
    ]
   },
   "arch": [
    {
     "fr": "Next.js 16 · React 19 · Socket.io client (équipe front)",
     "en": "Next.js 16 · React 19 · Socket.io client (front team)"
    },
    {
     "fr": "NestJS 12 · Guards JWT · Interceptors · Filters",
     "en": "NestJS 12 · JWT guards · Interceptors · Filters"
    },
    {
     "fr": "Gateways Socket.io : match, lobby, anti-triche",
     "en": "Socket.io gateways: match, lobby, anti-cheat"
    },
    {
     "fr": "Prisma 7 · PostgreSQL",
     "en": "Prisma 7 · PostgreSQL"
    }
   ],
   "stack": [
    "NestJS",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Socket.io",
    "Vitest",
    "Next.js 16"
   ],
   "tags": [
    "node",
    "realtime",
    "training"
   ],
   "metrics": [
    {
     "value": "48",
     "label": {
      "fr": "commits personnels",
      "en": "personal commits"
     }
    },
    {
     "value": "65",
     "label": {
      "fr": "fichiers de tests (projet)",
      "en": "test files (project)"
     }
    },
    {
     "value": "4",
     "label": {
      "fr": "modes de jeu",
      "en": "game modes"
     }
    }
   ],
   "links": {},
   "images": [
    {
     "src": "assets/img/projects/quizland/modes.webp",
     "alt": {
      "fr": "Illustrations des modes de jeu QuizLand (frontend de l'équipe)",
      "en": "QuizLand game mode artwork (team frontend)"
     }
    }
   ]
  },
  {
   "id": "v75-bot",
   "tier": "flagship",
   "title": "V75 Trading Bot",
   "accent": "#3DDC97",
   "context": "personal",
   "period": {
    "fr": "juil. → nov. 2026",
    "en": "Jul → Nov 2026"
   },
   "team": {
    "fr": "Solo",
    "en": "Solo"
   },
   "share": {
    "fr": "40 commits sur 41",
    "en": "40 of 41 commits"
   },
   "role": {
    "fr": "Conception, développement, tests en conditions réelles",
    "en": "Design, development, live testing"
   },
   "status": "private",
   "tagline": {
    "fr": "Un bot qui trade seul sur MetaTrader 5, calibré pour protéger un petit capital.",
    "en": "A bot that trades on its own on MetaTrader 5, tuned to protect a small account."
   },
   "summary": {
    "fr": "Bot de trading algorithmique sur le Volatility 75 Index, connecté à MetaTrader 5 via MetaAPI, avec gestion du risque et alertes en temps réel.",
    "en": "Algorithmic trading bot on the Volatility 75 Index, connected to MetaTrader 5 through MetaAPI, with risk management and real-time alerts."
   },
   "problem": {
    "fr": "Trader manuellement un indice très volatil demande une discipline difficile à tenir. Il faut un système qui n'entre que sur des signaux confirmés, limite les pertes et continue de surveiller les positions même quand le poste est éteint.",
    "en": "Manually trading a very volatile index takes discipline that is hard to keep. It needs a system that only enters on confirmed signals, caps losses and keeps watching positions even when the computer is off."
   },
   "built": {
    "fr": [
     "Connexion cloud MT5 (RPC + streaming WebSocket) via le SDK MetaAPI.",
     "Stratégie multi-indicateurs : RSI 14, SMA 20/50, filtre de tendance SMA 100, bandes de Bollinger, ATR, confirmation par la couleur de la bougie.",
     "Gestion du risque : stop-loss placé derrière les swings + marge ATR, plancher broker, break-even, trailing stop, ratio 2:1, une position à la fois, kill switch journalier à 10 % du capital.",
     "Synchronisation bidirectionnelle avec MT5 : prise en compte des SL/TP modifiés à la main, adoption des positions existantes au démarrage, persistance de l'état sur disque.",
     "Backtest intégrant spread et commissions sur données historiques.",
     "Alertes Telegram, WhatsApp et Messenger : rapport toutes les 30 minutes, battement de cœur toutes les 15 minutes, file d'attente anti-quota."
    ],
    "en": [
     "MT5 cloud connection (RPC + WebSocket streaming) through the MetaAPI SDK.",
     "Multi-indicator strategy: RSI 14, SMA 20/50, SMA 100 trend filter, Bollinger Bands, ATR, candle colour confirmation.",
     "Risk management: stop-loss behind swings + ATR buffer, broker floor, break-even, trailing stop, 2:1 ratio, one position at a time, daily kill switch at 10% of capital.",
     "Two-way MT5 sync: manually edited SL/TP are respected, existing positions adopted at start-up, state persisted to disk.",
     "Backtest including spread and commissions on historical data.",
     "Telegram, WhatsApp and Messenger alerts: report every 30 minutes, heartbeat every 15 minutes, anti-quota queue."
    ]
   },
   "challenges": {
    "fr": [
     "Les ordres étaient rejetés (« Invalid stops ») : lecture du minimum exigé par le broker dans le message d'erreur et nouvelle tentative automatique avec la bonne distance.",
     "Cinq jours de tests en continu pour éliminer les positions fantômes et les crashs du terminal."
    ],
    "en": [
     "Orders were rejected (“Invalid stops”): the bot parses the broker's minimum from the error message and retries automatically with the right distance.",
     "Five days of continuous testing to eliminate ghost positions and terminal crashes."
    ]
   },
   "arch": [
    {
     "fr": "Signaux : technicalindicators (RSI, SMA, Bollinger, ATR)",
     "en": "Signals: technicalindicators (RSI, SMA, Bollinger, ATR)"
    },
    {
     "fr": "Exécuteur : risque, SL/TP dynamiques, trailing stop",
     "en": "Executor: risk, dynamic SL/TP, trailing stop"
    },
    {
     "fr": "Client MetaAPI : RPC + streaming WebSocket MT5",
     "en": "MetaAPI client: RPC + MT5 WebSocket streaming"
    },
    {
     "fr": "État JSON · logs quotidiens · notifier multi-canal",
     "en": "JSON state · daily logs · multi-channel notifier"
    }
   ],
   "stack": [
    "Node.js",
    "MetaAPI SDK",
    "WebSocket",
    "technicalindicators",
    "Telegram API",
    "CallMeBot"
   ],
   "tags": [
    "node",
    "personal"
   ],
   "metrics": [
    {
     "value": "5",
     "label": {
      "fr": "indicateurs combinés",
      "en": "combined indicators"
     }
    },
    {
     "value": "10 %",
     "label": {
      "fr": "kill switch journalier",
      "en": "daily kill switch"
     }
    },
    {
     "value": "3",
     "label": {
      "fr": "canaux d'alerte",
      "en": "alert channels"
     }
    }
   ],
   "links": {},
   "images": [],
   "terminal": {
    "caption": {
     "fr": "Journal du bot (illustration du format réel)",
     "en": "Bot log (illustration of the real format)"
    },
    "lines": [
     [
      "dim",
      "[09:30:02]"
     ],
     [
      "",
      {
       "fr": "▶ Connexion MetaAPI… OK (London, streaming actif)",
       "en": "▶ MetaAPI connection… OK (London, streaming on)"
      }
     ],
     [
      "dim",
      "[09:30:04]"
     ],
     [
      "",
      {
       "fr": "↻ Synchro MT5 : 0 position, état restauré",
       "en": "↻ MT5 sync: 0 position, state restored"
      }
     ],
     [
      "dim",
      "[09:45:00]"
     ],
     [
      "muted",
      {
       "fr": "♥ Heartbeat · équité 50.00 $ · pertes du jour 0 %",
       "en": "♥ Heartbeat · equity $50.00 · daily loss 0%"
      }
     ],
     [
      "dim",
      "[10:12:17]"
     ],
     [
      "",
      {
       "fr": "RSI 27.4 · SMA20 > SMA50 · prix > SMA100 · bougie verte",
       "en": "RSI 27.4 · SMA20 > SMA50 · price > SMA100 · green candle"
      }
     ],
     [
      "dim",
      "[10:12:18]"
     ],
     [
      "ok",
      {
       "fr": "✓ BUY 0.01 V75 · SL swing + 0.4 ATR · TP 2:1",
       "en": "✓ BUY 0.01 V75 · SL swing + 0.4 ATR · TP 2:1"
      }
     ],
     [
      "dim",
      "[10:31:40]"
     ],
     [
      "warn",
      {
       "fr": "⇡ Break-even activé à +1.50 $",
       "en": "⇡ Break-even armed at +$1.50"
      }
     ],
     [
      "dim",
      "[10:58:03]"
     ],
     [
      "warn",
      {
       "fr": "⇡ Trailing stop déplacé",
       "en": "⇡ Trailing stop moved"
      }
     ],
     [
      "dim",
      "[11:04:22]"
     ],
     [
      "ok",
      {
       "fr": "✓ Position clôturée en gain → Telegram · WhatsApp",
       "en": "✓ Position closed in profit → Telegram · WhatsApp"
      }
     ]
    ]
   }
  },
  {
   "id": "cityplay",
   "tier": "flagship",
   "title": "CityPlay",
   "accent": "#FFC93D",
   "context": "training",
   "period": {
    "fr": "mai → juin 2026",
    "en": "May → Jun 2026"
   },
   "team": {
    "fr": "Équipe de 3",
    "en": "Team of 3"
   },
   "share": {
    "fr": "25 commits sur 68",
    "en": "25 of 68 commits"
   },
   "role": {
    "fr": "Développeur full-stack · moteur de jeu et vue joueur",
    "en": "Full-stack developer · game engine and player view"
   },
   "status": "public",
   "tagline": {
    "fr": "Une chasse au trésor dans les rues de la ville : énigmes, carte, GPS et classement en direct.",
    "en": "A treasure hunt through the city streets: riddles, map, GPS and a live leaderboard."
   },
   "summary": {
    "fr": "Jeu urbain géolocalisé : le joueur rejoint une partie, résout des énigmes liées à des lieux réels et valide sa présence sur place par GPS.",
    "en": "Location-based city game: players join a session, solve riddles tied to real places and confirm they are there by GPS."
   },
   "problem": {
    "fr": "Faire découvrir une ville de façon ludique : il faut une carte, des énigmes liées à des lieux, une validation fiable de la position et une progression partagée entre joueurs.",
    "en": "Make city discovery playful: it needs a map, place-based riddles, reliable location checks and progress shared between players."
   },
   "built": {
    "fr": [
     "Vue joueur complète : lobby, énigme active, indices, progression, classement.",
     "Moteur de jeu : sessions, tentatives par énigme, validation GPS avec marge configurable par lieu.",
     "Verrouillage d'énigme diffusé en temps réel aux autres joueurs (événement Reverb).",
     "Effets sonores en jeu, seeders de données de jeu, migrations remises en ordre."
    ],
    "en": [
     "Complete player view: lobby, active riddle, hints, progress, leaderboard.",
     "Game engine: sessions, per-riddle attempts, GPS validation with a per-place configurable margin.",
     "Riddle lock broadcast in real time to other players (Reverb event).",
     "In-game sound effects, game data seeders, migrations put back in order."
    ]
   },
   "challenges": {
    "fr": [
     "Valider une position GPS imprécise sans frustrer le joueur : marge de validation réglable par lieu.",
     "Éviter que deux joueurs résolvent la même énigme en même temps : verrou diffusé en temps réel."
    ],
    "en": [
     "Validate an imprecise GPS position without frustrating players: validation margin set per place.",
     "Prevent two players from solving the same riddle at once: lock broadcast in real time."
    ]
   },
   "arch": [
    {
     "fr": "Vue 3 · Inertia · Leaflet · GSAP · PrimeVue",
     "en": "Vue 3 · Inertia · Leaflet · GSAP · PrimeVue"
    },
    {
     "fr": "Laravel 12 · GameEngineController · Admin",
     "en": "Laravel 12 · GameEngineController · Admin"
    },
    {
     "fr": "Laravel Reverb · Echo (événements de jeu)",
     "en": "Laravel Reverb · Echo (game events)"
    },
    {
     "fr": "Villes · lieux · énigmes · sessions · scores",
     "en": "Cities · places · riddles · sessions · scores"
    }
   ],
   "stack": [
    "Laravel 12",
    "Inertia",
    "Vue 3",
    "Reverb",
    "Leaflet",
    "GSAP",
    "PrimeVue",
    "Tailwind"
   ],
   "tags": [
    "laravel",
    "vue",
    "realtime",
    "training"
   ],
   "metrics": [
    {
     "value": "12",
     "label": {
      "fr": "modèles",
      "en": "models"
     }
    },
    {
     "value": "30",
     "label": {
      "fr": "pages Inertia",
      "en": "Inertia pages"
     }
    },
    {
     "value": "GPS",
     "label": {
      "fr": "validation sur place",
      "en": "on-site validation"
     }
    }
   ],
   "links": {
    "repo": "https://github.com/Eg0ss/cityplay/tree/feature/main_taken"
   },
   "images": [
    {
     "src": "assets/img/projects/cityplay/cover.webp",
     "alt": {
      "fr": "Porte du Non-Retour, Ouidah : un des lieux du jeu",
      "en": "Door of No Return, Ouidah: one of the game's places"
     }
    }
   ]
  },
  {
   "id": "meded",
   "tier": "flagship",
   "title": "MedEd Platform",
   "accent": "#FF5C8A",
   "context": "training",
   "period": {
    "fr": "mai → juin 2026",
    "en": "May → Jun 2026"
   },
   "team": {
    "fr": "Équipe de 13",
    "en": "Team of 13"
   },
   "share": {
    "fr": "18 commits · module IA",
    "en": "18 commits · AI module"
   },
   "role": {
    "fr": "Développeur full-stack · génération d'examens par IA, espace enseignant",
    "en": "Full-stack developer · AI exam generation, teacher area"
   },
   "status": "private",
   "tagline": {
    "fr": "Des QCM médicaux générés par IA : là où ma formation en biologie rencontre le code.",
    "en": "AI-generated medical MCQs: where my biology background meets code."
   },
   "summary": {
    "fr": "Plateforme d'apprentissage et de QCM médicaux : cours, leçons, examens chronométrés, abonnements enseignants, statistiques et certifications.",
    "en": "Medical learning and MCQ platform: courses, lessons, timed exams, teacher subscriptions, analytics and certifications."
   },
   "problem": {
    "fr": "Rédiger des examens de qualité prend des heures aux enseignants. L'IA peut proposer des questions, à condition de garder l'enseignant maître de ce qui est publié et de pouvoir tester le tout sans payer l'API.",
    "en": "Writing good exams takes teachers hours. AI can draft questions, as long as the teacher stays in control of what gets published and everything can be tested without paying for the API."
   },
   "built": {
    "fr": [
     "Service d'intégration de l'API Anthropic (Claude Sonnet) et service de génération d'examens par IA.",
     "Service mock pour développer et tester sans appel réel à l'API.",
     "Espace enseignant : création, gestion et publication des examens, historique."
    ],
    "en": [
     "Anthropic API (Claude Sonnet) integration service and AI exam generation service.",
     "Mock service to develop and test without real API calls.",
     "Teacher area: exam creation, management and publishing, history."
    ]
   },
   "challenges": {
    "fr": [
     "Obtenir de l'IA des questions exploitables et structurées, puis les convertir en examens éditables.",
     "Isoler l'appel externe derrière un service remplaçable (mock) pour les tests."
    ],
    "en": [
     "Get structured, usable questions from the AI, then turn them into editable exams.",
     "Isolate the external call behind a swappable service (mock) for testing."
    ]
   },
   "arch": [
    {
     "fr": "Vue 3 · PrimeVue · Chart.js · Vue Router",
     "en": "Vue 3 · PrimeVue · Chart.js · Vue Router"
    },
    {
     "fr": "API Laravel 12 · Sanctum · Socialite",
     "en": "Laravel 12 API · Sanctum · Socialite"
    },
    {
     "fr": "AiExamService → AnthropicService | MockAnthropicService",
     "en": "AiExamService → AnthropicService | MockAnthropicService"
    },
    {
     "fr": "Cours · examens · tentatives · abonnements (25 modèles)",
     "en": "Courses · exams · attempts · subscriptions (25 models)"
    }
   ],
   "stack": [
    "Laravel 12",
    "Sanctum",
    "Vue 3",
    "PrimeVue",
    "Chart.js",
    "Anthropic API"
   ],
   "tags": [
    "laravel",
    "vue",
    "ai",
    "training"
   ],
   "metrics": [
    {
     "value": "IA",
     "label": {
      "fr": "génération d'examens",
      "en": "exam generation"
     }
    },
    {
     "value": "25",
     "label": {
      "fr": "modèles",
      "en": "models"
     }
    },
    {
     "value": "45",
     "label": {
      "fr": "vues",
      "en": "views"
     }
    }
   ],
   "links": {},
   "images": [],
   "glyph": "Med+"
  },
  {
   "id": "messenger",
   "tier": "featured",
   "title": "Messenger temps réel",
   "titleEn": "Real-time Messenger",
   "accent": "#5CC8FF",
   "context": "training",
   "period": {
    "fr": "mai → août 2026",
    "en": "May → Aug 2026"
   },
   "team": {
    "fr": "Binôme",
    "en": "Pair"
   },
   "share": {
    "fr": "23 commits sur 30",
    "en": "23 of 30 commits"
   },
   "role": {
    "fr": "Développeur full-stack et déploiement",
    "en": "Full-stack developer and deployment"
   },
   "status": "public",
   "tagline": {
    "fr": "Messagerie instantanée avec appels audio/vidéo, conteneurisée et déployée.",
    "en": "Instant messaging with audio/video calls, containerised and deployed."
   },
   "summary": {
    "fr": "Conversations en temps réel, réactions, accusés de lecture, emojis, appels WebRTC et connexion Google. Image Docker avec nginx en reverse proxy : web et WebSocket sur un seul port.",
    "en": "Real-time conversations, reactions, read receipts, emojis, WebRTC calls and Google sign-in. Docker image with nginx reverse proxy: web and WebSocket on a single port."
   },
   "built": {
    "fr": [
     "Messagerie temps réel (Laravel Reverb + Echo), réactions et accusés de lecture.",
     "Appels via WebRTC (simple-peer).",
     "Dockerfile pour Render, reverse proxy nginx web + WebSocket sur un seul port, trustProxies HTTPS, migrations au démarrage du conteneur."
    ],
    "en": [
     "Real-time messaging (Laravel Reverb + Echo), reactions and read receipts.",
     "Calls over WebRTC (simple-peer).",
     "Dockerfile for Render, nginx reverse proxy for web + WebSocket on one port, HTTPS trustProxies, migrations on container start."
    ]
   },
   "stack": [
    "Laravel 12",
    "Reverb",
    "Inertia",
    "Vue 3",
    "Pinia",
    "WebRTC",
    "Docker",
    "nginx"
   ],
   "tags": [
    "laravel",
    "vue",
    "realtime",
    "devops",
    "training"
   ],
   "links": {
    "repo": "https://github.com/Calebdami/MessengerApp_Websocket/tree/feature/contribute"
   },
   "images": [],
   "glyph": "Chat"
  },
  {
   "id": "rh-centre-appels",
   "tier": "featured",
   "title": "Gestion RH de centre d'appels",
   "titleEn": "Call-Centre HR Management",
   "glyph": {
    "fr": "RH",
    "en": "HR"
   },
   "accent": "#E8B931",
   "context": "training",
   "period": {
    "fr": "mai 2026",
    "en": "May 2026"
   },
   "team": {
    "fr": "Équipe de 6",
    "en": "Team of 6"
   },
   "share": {
    "fr": "46 commits sur 86",
    "en": "46 of 86 commits"
   },
   "role": {
    "fr": "Référent technique · développeur full-stack, principal contributeur",
    "en": "Technical lead · full-stack developer, main contributor"
   },
   "tagline": {
    "fr": "Gestion RH et affectations d'un centre d'appels, du chef de plateau au téléconseiller.",
    "en": "HR and staffing management for a call centre, from floor manager to agent."
   },
   "summary": {
    "fr": "Employés, contrats, campagnes, affectations hiérarchiques (chef de plateau, superviseur, téléconseiller), modèles de planning, feuilles de temps, évaluations, journal d'activité, mode maintenance.",
    "en": "Employees, contracts, campaigns, hierarchical assignments (floor manager, supervisor, agent), schedule templates, timesheets, evaluations, activity log, maintenance mode."
   },
   "built": {
    "fr": [
     "41 pages Inertia/Vue dont affectations en masse, plannings, validation et suivi.",
     "34 contrôleurs, 19 modèles, seeders réalistes.",
     "Page et mode maintenance, barres de recherche, fusion des branches de l'équipe."
    ],
    "en": [
     "41 Inertia/Vue pages including bulk assignment, schedules, validation and tracking.",
     "34 controllers, 19 models, realistic seeders.",
     "Maintenance page and mode, search bars, merging the team's branches."
    ]
   },
   "stack": [
    "Laravel 13",
    "Inertia",
    "Vue 3",
    "PrimeVue",
    "Sanctum",
    "Tailwind"
   ],
   "tags": [
    "laravel",
    "vue",
    "training"
   ],
   "links": {},
   "images": []
  },
  {
   "id": "ferme-avicole",
   "tier": "featured",
   "title": "Ferme avicole",
   "titleEn": "Poultry farm",
   "accent": "#F2B544",
   "context": "personal",
   "period": {
    "fr": "août 2026",
    "en": "Aug 2026"
   },
   "team": {
    "fr": "Solo",
    "en": "Solo"
   },
   "share": {
    "fr": "14 commits sur 14",
    "en": "14 of 14 commits"
   },
   "role": {
    "fr": "Conception, développement, déploiement",
    "en": "Design, development, deployment"
   },
   "status": "public",
   "tagline": {
    "fr": "Site vitrine d'une ferme, entièrement administrable, avec connexion Google et OTP.",
    "en": "A farm's showcase website, fully editable, with Google sign-in and OTP."
   },
   "summary": {
    "fr": "Un seul rôle administrateur gère textes, images, vidéos, catalogue de races, activités, galerie, témoignages et actualités. Mobile first, mode sombre, éditeur riche.",
    "en": "A single admin role manages texts, images, videos, breed catalogue, activities, gallery, testimonials and news. Mobile first, dark mode, rich text editor."
   },
   "built": {
    "fr": [
     "19 pages Inertia/React, 16 contrôleurs, 10 modèles.",
     "Connexion Google (Socialite) et double authentification par OTP.",
     "Éditeur riche TipTap avec mode sombre, contenus en LONGTEXT."
    ],
    "en": [
     "19 Inertia/React pages, 16 controllers, 10 models.",
     "Google sign-in (Socialite) and OTP two-factor authentication.",
     "TipTap rich text editor with dark mode, LONGTEXT content."
    ]
   },
   "stack": [
    "Laravel 12",
    "Inertia",
    "React",
    "TipTap",
    "Tailwind",
    "Socialite"
   ],
   "tags": [
    "laravel",
    "react",
    "live",
    "personal"
   ],
   "links": {
    "repo": "https://github.com/Calebdami/Ferme_animale/tree/feature/test"
   },
   "images": [],
   "glyph": "Ferme"
  },
  {
   "id": "site-ong",
   "tier": "featured",
   "title": "Site d'ONG humanitaire",
   "titleEn": "Humanitarian NGO Website",
   "glyph": {
    "fr": "ONG",
    "en": "NGO"
   },
   "accent": "#2FBF71",
   "context": "personal",
   "period": {
    "fr": "août 2026",
    "en": "Aug 2026"
   },
   "team": {
    "fr": "Solo",
    "en": "Solo"
   },
   "share": {
    "fr": "100 %",
    "en": "100%"
   },
   "role": {
    "fr": "Conception, intégration, déploiement",
    "en": "Design, build, deployment"
   },
   "status": "private",
   "tagline": {
    "fr": "Le site d'une ONG humanitaire béninoise : actions, valeurs, dons et bénévolat.",
    "en": "Website for a Beninese humanitarian NGO: actions, values, donations and volunteering."
   },
   "summary": {
    "fr": "Site mobile first et trilingue (français, anglais, fon) en React et TypeScript : actions, valeurs, déploiement, équipe, partenaires, actualités, appels au don et au bénévolat.",
    "en": "Mobile-first, trilingual (French, English, Fon) React and TypeScript site: actions, values, field deployment, team, partners, news, donation and volunteering calls to action."
   },
   "built": {
    "fr": [
     "Conception et intégration de toutes les sections.",
     "Sélecteur de langue FR / EN / FON, barre d'actions fixe sur mobile.",
     "Mise en ligne sur alwaysdata."
    ],
    "en": [
     "Design and build of every section.",
     "FR / EN / FON language switcher, sticky action bar on mobile.",
     "Deployed on alwaysdata."
    ]
   },
   "stack": [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind 4"
   ],
   "tags": [
    "react",
    "personal"
   ],
   "links": {},
   "images": []
  },
  {
   "id": "geogenius",
   "tier": "featured",
   "title": "GeoGenius",
   "accent": "#4DA3FF",
   "context": "personal",
   "period": {
    "fr": "mai 2026",
    "en": "May 2026"
   },
   "team": {
    "fr": "Solo",
    "en": "Solo"
   },
   "share": {
    "fr": "100 %",
    "en": "100%"
   },
   "role": {
    "fr": "Conception, intégration, déploiement",
    "en": "Design, build, deployment"
   },
   "status": "live",
   "tagline": {
    "fr": "Explorer les pays du monde et l'actualité internationale, en JavaScript pur.",
    "en": "Explore the world's countries and international news, in plain JavaScript."
   },
   "summary": {
    "fr": "Recherche instantanée, filtres par région, langue et population, fiche détaillée en overlay, page d'actualités filtrable. Données de l'API REST Countries.",
    "en": "Instant search, filters by region, language and population, detailed overlay card, filterable news page. Data from the REST Countries API."
   },
   "built": {
    "fr": [
     "Consommation d'API REST et rendu dynamique sans framework.",
     "Filtres combinés et tri.",
     "Déploiement Vercel."
    ],
    "en": [
     "REST API consumption and dynamic rendering without a framework.",
     "Combined filters and sorting.",
     "Deployed on Vercel."
    ]
   },
   "stack": [
    "HTML",
    "CSS",
    "JavaScript",
    "REST Countries API",
    "Vercel"
   ],
   "tags": [
    "vanilla",
    "live",
    "personal"
   ],
   "links": {
    "demo": "https://countriesexplorer-ten.vercel.app/",
    "repo": "https://github.com/Calebdami/countries_explorer"
   },
   "images": [
    {
     "src": "assets/img/projects/geogenius/explorer.webp",
     "alt": {
      "fr": "Explorateur GeoGenius : fiches pays avec drapeau, capitale, population, langues et monnaie, filtrables par région, langue et population",
      "en": "GeoGenius explorer: country cards with flag, capital, population, languages and currency, filterable by region, language and population"
     }
    },
    {
     "src": "assets/img/projects/geogenius/news.webp",
     "alt": {
      "fr": "Page Actualités du Globe, filtrable par thème",
      "en": "World news page, filterable by topic"
     }
    },
    {
     "src": "assets/img/projects/geogenius/mobile.webp",
     "alt": {
      "fr": "Version mobile",
      "en": "Mobile version"
     },
     "mobile": true
    }
   ]
  },
  {
   "id": "vision-fc",
   "tier": "featured",
   "title": "Vision FC",
   "accent": "#A06BFF",
   "context": "training",
   "period": {
    "fr": "avr. → juin 2026",
    "en": "Apr → Jun 2026"
   },
   "team": {
    "fr": "Équipe de 12",
    "en": "Team of 12"
   },
   "share": {
    "fr": "45 commits sur 76",
    "en": "45 of 76 commits"
   },
   "role": {
    "fr": "Référent technique · développeur full-stack, principal contributeur",
    "en": "Technical lead · full-stack developer, main contributor"
   },
   "status": "public",
   "tagline": {
    "fr": "Gestion complète d'un club de football, en PHP natif avec un framework MVC maison.",
    "en": "Full football club management, in plain PHP with a home-made MVC framework."
   },
   "summary": {
    "fr": "Rôles admin, coach, censeur et joueur : effectif, sanctions et amendes, caisse, objectifs, calendrier, suivi médical, inventaire, rapports et statistiques.",
    "en": "Admin, coach, disciplinary officer and player roles: squad, sanctions and fines, cash box, goals, calendar, medical follow-up, inventory, reports and analytics."
   },
   "built": {
    "fr": [
     "Dashboard admin, pages équipe, joueurs, audit, formulaires, utilisateurs, sanctions, objectifs.",
     "Routeur, migrations et seeders maison.",
     "Responsive et intégration des travaux de l'équipe."
    ],
    "en": [
     "Admin dashboard, team, players, audit, forms, users, sanctions and goals pages.",
     "Home-made router, migrations and seeders.",
     "Responsive design and merging the team's work."
    ]
   },
   "stack": [
    "PHP 8",
    "MVC maison",
    "MySQL",
    "PHPMailer"
   ],
   "tags": [
    "php",
    "training"
   ],
   "links": {
    "repo": "https://github.com/Brechou/vision_fc/tree/develop"
   },
   "images": []
  },
  {
   "id": "smartrecruit",
   "tier": "featured",
   "title": "SmartRecruit",
   "accent": "#00C2A8",
   "context": "training",
   "period": {
    "fr": "mars → avr. 2026",
    "en": "Mar → Apr 2026"
   },
   "team": {
    "fr": "Équipe de 8",
    "en": "Team of 8"
   },
   "share": {
    "fr": "17 commits sur 22",
    "en": "17 of 22 commits"
   },
   "role": {
    "fr": "Développeur full-stack · vue candidat et administration",
    "en": "Full-stack developer · candidate and admin views"
   },
   "status": "public",
   "tagline": {
    "fr": "Un logiciel de recrutement qui note et classe les candidatures automatiquement.",
    "en": "Recruitment software that scores and ranks applications automatically."
   },
   "summary": {
    "fr": "ATS prédictif : offres, candidatures, pipeline, matching, webinaires, automatisations, audit, rôles (admin, manager, recruteur, candidat), 2FA TOTP.",
    "en": "Predictive ATS: jobs, applications, pipeline, matching, webinars, automation, audit trail, roles (admin, manager, recruiter, candidate), TOTP 2FA."
   },
   "built": {
    "fr": [
     "Vue candidat complète et ménage du dashboard administrateur.",
     "Contrôleurs, routes et middleware de l'API Express.",
     "Stores Pinia, composables et layouts."
    ],
    "en": [
     "Complete candidate view and admin dashboard clean-up.",
     "Express API controllers, routes and middleware.",
     "Pinia stores, composables and layouts."
    ]
   },
   "stack": [
    "Express",
    "PostgreSQL",
    "Knex",
    "Redis",
    "JWT",
    "Swagger",
    "Vue 3",
    "Pinia",
    "Tailwind"
   ],
   "tags": [
    "node",
    "vue",
    "training"
   ],
   "links": {
    "repo": "https://github.com/Calebdami/Projet_Smart_Recruit_Ligue_2_Mars_2026/tree/develop"
   },
   "images": []
  },
  {
   "id": "gestion-academique",
   "tier": "featured",
   "title": "Gestion académique",
   "titleEn": "Academic Management",
   "glyph": {
    "fr": "Édu",
    "en": "Edu"
   },
   "accent": "#FF7A59",
   "context": "work",
   "period": {
    "fr": "août → sept. 2026",
    "en": "Aug → Sep 2026"
   },
   "team": {
    "fr": "46 contributeurs",
    "en": "46 contributors"
   },
   "share": {
    "fr": "Modules intelligence + dashboard élève",
    "en": "Intelligence modules + student dashboard"
   },
   "role": {
    "fr": "Développeur backend",
    "en": "Backend developer"
   },
   "status": "private",
   "tagline": {
    "fr": "Une plateforme éducative qui adapte le parcours de chaque élève.",
    "en": "An education platform that adapts each student's path."
   },
   "summary": {
    "fr": "Plateforme reliant élèves, parents et enseignants, avec un moteur pédagogique adaptatif. API FastAPI asynchrone en couches (routes, services, repositories).",
    "en": "Platform connecting students, parents and teachers, with an adaptive learning engine. Layered async FastAPI API (routes, services, repositories)."
   },
   "built": {
    "fr": [
     "Knowledge Model (module 2) : modélisation des acquis de l'élève.",
     "Strategy Engine (module 4) : décisions pédagogiques avec contrats Pydantic v2.",
     "Tableau de bord de l'élève, tests unitaires et d'API."
    ],
    "en": [
     "Knowledge Model (module 2): modelling what the student has mastered.",
     "Strategy Engine (module 4): teaching decisions with Pydantic v2 contracts.",
     "Student dashboard, unit and API tests."
    ]
   },
   "stack": [
    "FastAPI",
    "SQLAlchemy 2",
    "PostgreSQL",
    "Alembic",
    "Pydantic v2",
    "Pytest"
   ],
   "tags": [
    "python",
    "ai",
    "work"
   ],
   "links": {},
   "images": []
  },
  {
   "id": "blog",
   "tier": "featured",
   "title": "Blog FastAPI × React",
   "accent": "#FF6B6B",
   "context": "training",
   "period": {
    "fr": "juil. → août 2026",
    "en": "Jul → Aug 2026"
   },
   "team": {
    "fr": "Binôme",
    "en": "Pair"
   },
   "share": {
    "fr": "17 commits",
    "en": "17 commits"
   },
   "role": {
    "fr": "Développeur full-stack",
    "en": "Full-stack developer"
   },
   "status": "private",
   "tagline": {
    "fr": "Publications riches, commentaires en direct et connexion sécurisée.",
    "en": "Rich posts, live comments and secure sign-in."
   },
   "summary": {
    "fr": "Articles avec éditeur riche et galerie d'images, commentaires et réactions diffusés par WebSocket, connexion Google et 2FA par OTP.",
    "en": "Posts with a rich editor and image gallery, comments and reactions over WebSocket, Google sign-in and OTP 2FA."
   },
   "built": {
    "fr": [
     "API FastAPI (posts, commentaires, likes, réactions) et migrations Alembic.",
     "WebSocket de diffusion des commentaires à tous les lecteurs.",
     "Éditeur TipTap complet (tableaux, couleurs, alignements)."
    ],
    "en": [
     "FastAPI API (posts, comments, likes, reactions) and Alembic migrations.",
     "WebSocket broadcasting comments to every reader.",
     "Full TipTap editor (tables, colours, alignment)."
    ]
   },
   "stack": [
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "WebSocket",
    "React",
    "TipTap"
   ],
   "tags": [
    "python",
    "react",
    "realtime",
    "training"
   ],
   "links": {},
   "images": [],
   "glyph": "Blog"
  },
  {
   "id": "azriel",
   "tier": "featured",
   "title": "Azriel Studio",
   "accent": "#E87D2F",
   "context": "personal",
   "period": {
    "fr": "août 2026",
    "en": "Aug 2026"
   },
   "team": {
    "fr": "Associé · solo côté code",
    "en": "Partner · solo on code"
   },
   "share": {
    "fr": "100 %",
    "en": "100%"
   },
   "role": {
    "fr": "Développeur fullstack et associé",
    "en": "Full-stack developer and partner"
   },
   "status": "private",
   "tagline": {
    "fr": "Un studio de création 3D : vitrine animée en Three.js et back-office complet.",
    "en": "A 3D creative studio: animated Three.js showcase and full back office."
   },
   "summary": {
    "fr": "Site bilingue Next.js avec scène 3D dans le hero, et panneau d'administration Laravel + Filament (2FA, connexion Google sur invitation, rôles, médias).",
    "en": "Bilingual Next.js site with a 3D hero scene, and a Laravel + Filament admin panel (2FA, invite-only Google sign-in, roles, media)."
   },
   "built": {
    "fr": [
     "Vitrine Next.js 14 + React Three Fiber + Framer Motion, contenu FR/EN typé.",
     "Admin Filament 3 : ressources, réglages, médias, permissions Spatie.",
     "Architecture pensée pour brancher le contenu sur l'API d'admin."
    ],
    "en": [
     "Next.js 14 + React Three Fiber + Framer Motion showcase, typed FR/EN content.",
     "Filament 3 admin: resources, settings, media, Spatie permissions.",
     "Architecture designed to plug content into the admin API."
    ]
   },
   "stack": [
    "Next.js 14",
    "Three.js",
    "React Three Fiber",
    "Framer Motion",
    "Laravel 12",
    "Filament 3"
   ],
   "tags": [
    "react",
    "laravel",
    "personal"
   ],
   "links": {},
   "images": [],
   "glyph": "3D"
  },
  {
   "id": "agrotrack",
   "tier": "featured",
   "title": "AgroTrack",
   "accent": "#8BC34A",
   "context": "training",
   "period": {
    "fr": "mars → avr. 2026",
    "en": "Mar → Apr 2026"
   },
   "team": {
    "fr": "Équipe de 6",
    "en": "Team of 6"
   },
   "share": {
    "fr": "Panneau d'administration",
    "en": "Admin panel"
   },
   "role": {
    "fr": "Développeur full-stack · module admin",
    "en": "Full-stack developer · admin module"
   },
   "status": "private",
   "tagline": {
    "fr": "Piloter les campagnes d'une exploitation agricole : animaux, stocks, finances, ventes.",
    "en": "Run a farm's campaigns: animals, stock, finance, sales."
   },
   "summary": {
    "fr": "SaaS agricole multi-rôles (admin, gérant, agent) : tableaux de bord, santé animale, stocks, finances, rapports exportables en PDF et Excel, QR codes.",
    "en": "Multi-role farm SaaS (admin, manager, field agent): dashboards, animal health, stock, finance, reports exported to PDF and Excel, QR codes."
   },
   "built": {
    "fr": [
     "Vues et contrôleurs du panneau d'administration.",
     "Modèles Mongoose, routes protégées JWT, store Pinia."
    ],
    "en": [
     "Admin panel views and controllers.",
     "Mongoose models, JWT-protected routes, Pinia store."
    ]
   },
   "stack": [
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Vue 3",
    "Pinia",
    "Chart.js"
   ],
   "tags": [
    "node",
    "vue",
    "training"
   ],
   "links": {},
   "images": [],
   "glyph": "Agro"
  },
  {
   "id": "hospital",
   "tier": "featured",
   "title": "MedCore Pro",
   "accent": "#3B82F6",
   "context": "personal",
   "period": {
    "fr": "mars 2026",
    "en": "Mar 2026"
   },
   "team": {
    "fr": "Solo",
    "en": "Solo"
   },
   "share": {
    "fr": "100 %",
    "en": "100%"
   },
   "role": {
    "fr": "Conception et développement",
    "en": "Design and development"
   },
   "status": "public",
   "tagline": {
    "fr": "Gestion d'hôpital avec trois niveaux d'accès : admin, docteur, réceptionniste.",
    "en": "Hospital management with three access levels: admin, doctor, receptionist."
   },
   "summary": {
    "fr": "Patients, docteurs, rendez-vous, chambres, comptes, collaborateurs et corbeille. API REST Express + SQLite sécurisée par JWT, interface Vue 3.",
    "en": "Patients, doctors, appointments, rooms, accounts, collaborators and recycle bin. JWT-secured Express + SQLite REST API, Vue 3 interface."
   },
   "built": {
    "fr": [
     "API REST complète : 7 ressources, middleware d'authentification et de rôles.",
     "18 vues Vue 3 organisées par rôle."
    ],
    "en": [
     "Complete REST API: 7 resources, auth and role middleware.",
     "18 Vue 3 views organised by role."
    ]
   },
   "stack": [
    "Express",
    "SQLite",
    "JWT",
    "bcrypt",
    "Vue 3",
    "Pinia",
    "Tailwind"
   ],
   "tags": [
    "node",
    "vue",
    "personal"
   ],
   "links": {
    "repo": "https://github.com/Calebdami/Gestion_Hopital_ExpressJS_et_VueJS_backend_et_frontend"
   },
   "images": [
    {
     "src": "assets/img/projects/hospital/cover.webp",
     "alt": {
      "fr": "Interface MedCore Pro",
      "en": "MedCore Pro interface"
     }
    }
   ],
   "glyph": "MCP"
  },
  {
   "id": "vitropro",
   "tier": "featured",
   "title": "VitroPro",
   "accent": "#38BDF8",
   "context": "personal",
   "period": {
    "fr": "août 2026",
    "en": "Aug 2026"
   },
   "team": {
    "fr": "Solo",
    "en": "Solo"
   },
   "share": {
    "fr": "100 %",
    "en": "100%"
   },
   "role": {
    "fr": "Conception et intégration",
    "en": "Design and build"
   },
   "status": "private",
   "tagline": {
    "fr": "Site vitrine d'une entreprise de vitrerie et miroiterie, avec traduction en fon.",
    "en": "Showcase site for a glazing company, with a Fon translation."
   },
   "summary": {
    "fr": "Dérivé de la base du site d'ONG : réalisations, services, équipe, blog, fournisseurs, favicon sur mesure.",
    "en": "Built on the NGO website base: projects, services, team, blog, suppliers, custom favicon."
   },
   "built": {
    "fr": [
     "Adaptation d'une base React existante à un nouveau métier.",
     "Contenu multilingue (français, fon)."
    ],
    "en": [
     "Adapting an existing React base to a new business.",
     "Multilingual content (French, Fon)."
    ]
   },
   "stack": [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind 4"
   ],
   "tags": [
    "react",
    "personal"
   ],
   "links": {},
   "images": [],
   "glyph": "Vitro"
  },
  {
   "id": "quotes",
   "tier": "archive",
   "title": "Quote Sharing",
   "accent": "#999999",
   "context": "training",
   "period": {
    "fr": "mars 2026",
    "en": "Mar 2026"
   },
   "status": "public",
   "tagline": {
    "fr": "Partage de citations : likes, commentaires, favoris (Express, MongoDB, Redis, Vue 3).",
    "en": "Quote sharing: likes, comments, bookmarks (Express, MongoDB, Redis, Vue 3)."
   },
   "stack": [
    "Express",
    "MongoDB",
    "Vue 3"
   ],
   "tags": [
    "node",
    "vue"
   ],
   "links": {
    "repo": "https://github.com/Calebdami/Projet_Application_de_citation_et_publication"
   }
  },
  {
   "id": "shop-vue",
   "tier": "archive",
   "title": "Boutique Vue.js",
   "accent": "#999999",
   "context": "training",
   "period": {
    "fr": "févr. 2026",
    "en": "Feb 2026"
   },
   "status": "public",
   "tagline": {
    "fr": "Catalogue, fiche produit, panier et paiement simulé avec Vue 3 et Pinia.",
    "en": "Catalogue, product page, cart and mock checkout with Vue 3 and Pinia."
   },
   "stack": [
    "Vue 3",
    "Pinia",
    "Vue Router"
   ],
   "tags": [
    "vue"
   ],
   "links": {
    "repo": "https://github.com/Calebdami/Projet_Application_e_commerce_Vue_JS"
   }
  },
  {
   "id": "week-schedule",
   "tier": "archive",
   "title": "Agenda hebdomadaire",
   "titleEn": "Weekly planner",
   "accent": "#999999",
   "context": "training",
   "period": {
    "fr": "févr. 2026",
    "en": "Feb 2026"
   },
   "status": "public",
   "tagline": {
    "fr": "Agenda avec inscription, connexion et gestion d'événements, en binôme (Vue 3, Pinia, Tailwind).",
    "en": "Planner with sign-up, login and event management, built in a pair (Vue 3, Pinia, Tailwind)."
   },
   "stack": [
    "Vue 3",
    "Pinia",
    "Tailwind"
   ],
   "tags": [
    "vue"
   ],
   "links": {
    "repo": "https://github.com/Calebdami/Project_Caleb_Rogalex_Week_Schedule"
   }
  },
  {
   "id": "product-cart",
   "tier": "archive",
   "title": "Product list with cart",
   "accent": "#999999",
   "context": "training",
   "period": {
    "fr": "févr. 2026",
    "en": "Feb 2026"
   },
   "status": "public",
   "tagline": {
    "fr": "Challenge Frontend Mentor : liste de produits et panier en JavaScript pur.",
    "en": "Frontend Mentor challenge: product list and cart in plain JavaScript."
   },
   "stack": [
    "HTML",
    "CSS",
    "JavaScript"
   ],
   "tags": [
    "vanilla"
   ],
   "links": {
    "repo": "https://github.com/Calebdami/Projet_Vente_en_ligne"
   }
  }
 ],
 "strengths": [
  {
   "title": {
    "fr": "Rigueur scientifique",
    "en": "Scientific rigour"
   },
   "text": {
    "fr": "Formé en laboratoire : hypothèse, test, mesure. Je documente ce que je construis (guides, plans de correction, docs d'architecture).",
    "en": "Lab-trained: hypothesis, test, measure. I document what I build (guides, correction plans, architecture docs)."
   }
  },
  {
   "title": {
    "fr": "Apprentissage rapide",
    "en": "Fast learner"
   },
   "text": {
    "fr": "Six frameworks backend et plus de 20 projets livrés en dix mois, de Laravel à Django en passant par NestJS et FastAPI.",
    "en": "Six backend frameworks and 20+ projects shipped in ten months, from Laravel to Django, NestJS and FastAPI."
   }
  },
  {
   "title": {
    "fr": "Travail en équipe",
    "en": "Teamwork"
   },
   "text": {
    "fr": "Habitué aux grosses bases de code partagées (jusqu'à 46 contributeurs), aux branches, revues et fusions quotidiennes.",
    "en": "Used to large shared codebases (up to 46 contributors), branching, reviews and daily merges."
   }
  },
  {
   "title": {
    "fr": "Sécurité et intégrité des données",
    "en": "Security & data integrity"
   },
   "text": {
    "fr": "Isolation multi-tenant, RBAC, policies, 2FA, OAuth, webhooks signés : je pense sécurité dès la conception.",
    "en": "Multi-tenant isolation, RBAC, policies, 2FA, OAuth, signed webhooks: security by design."
   }
  },
  {
   "title": {
    "fr": "Temps réel",
    "en": "Real-time"
   },
   "text": {
    "fr": "WebSockets dans cinq stacks différentes : Reverb, Channels, Socket.io, FastAPI, plus du WebRTC.",
    "en": "WebSockets across five stacks: Reverb, Channels, Socket.io, FastAPI, plus WebRTC."
   }
  },
  {
   "title": {
    "fr": "Autonomie",
    "en": "Autonomy"
   },
   "text": {
    "fr": "Du besoin au déploiement : conception, code, tests, Docker, mise en ligne et maintenance.",
    "en": "From requirement to deployment: design, code, tests, Docker, release and maintenance."
   }
  }
 ]
};
