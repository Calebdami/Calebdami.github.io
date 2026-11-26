# Portfolio — Caleb KPANOU

Site statique bilingue (FR/EN), **sans framework ni dépendance** : HTML, CSS et JavaScript natifs.
Aucun `npm install`, aucune étape de build. On ouvre `index.html` dans un navigateur et le site fonctionne.

## Structure

```
index.html            accueil (hero, projets phares, réalisations, compétences, parcours, contact)
projet.html           étude de cas : projet.html#<id-du-projet>
assets/js/data.js     ★ SOURCE UNIQUE du contenu : profil, projets, compétences, parcours (FR + EN)
assets/js/i18n.js     textes de l'interface + langue + thème
assets/js/ui.js       composants (badge, carte, cadre navigateur, terminal, schéma d'architecture…)
assets/js/home.js     rendu de l'accueil
assets/js/project.js  rendu d'une étude de cas
assets/css/           design system en couches : tokens → base → components → sections
assets/img/projects/  captures par projet (WebP)
assets/cv/            CV PDF (FR et EN)
```

## Modifier le contenu

Tout se fait dans `assets/js/data.js`. Le fichier reste du JSON valide après `window.PORTFOLIO =` : guillemets doubles, pas de virgule finale.

- **Ajouter une capture** : déposer `assets/img/projects/<id>/nom.webp`, puis ajouter dans `images` du projet :
  `{ "src": "assets/img/projects/<id>/nom.webp", "alt": { "fr": "…", "en": "…" } }`.
  Ajouter `"mobile": true` pour une capture de téléphone : elle s'affiche dans un cadre de smartphone.
- **Mettre un lien de démo** : `"links": { "demo": "https://…", "repo": "https://github.com/…" }`, puis `"status": "live"`.
- **Changer de catégorie** : `"tier"` vaut `flagship` (étude de cas), `featured` (carte) ou `archive` (premiers pas).

## Mise en ligne

Le site est publié avec GitHub Pages : **https://calebdami.github.io** (dépôt `Calebdami.github.io`, branche `main`, dossier racine).
Chaque `git push` sur `main` republie le site en une à deux minutes. Le fichier `.nojekyll` demande à GitHub Pages de servir les fichiers tels quels.
