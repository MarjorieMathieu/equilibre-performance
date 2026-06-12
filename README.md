# IFSU Équilibre — ifsu-equilibre.be

Site de Marjorie Mathieu — Yoga Viniyoga & Méditation Védique IFSU  
Ath, Hainaut, Belgique

---

## Structure

```
/
├── index.html          # Accueil — résumés + liens vers chaque section
├── yoga.html           # Yoga Viniyoga — horaires, tarifs, qui suis-je
├── meditation.html     # Méditation Védique IFSU — méthode, parcours, FAQ
├── ateliers.html       # Ateliers 3h, Solstice, Causeries mensuelles
├── retraite.html       # Retraite novembre 2026 — Koningsteen
├── style.css           # Feuille de style partagée
└── images/
    ├── seance-individuelle.jpg   # Photo séance yoga (max-height 320px dans le CSS)
    ├── koningsteen-1.jpg         # Photo extérieure Koningsteen
    └── koningsteen-2.jpg         # Salle de pratique Koningsteen
```

---

## Déploiement GitHub Pages

1. Pusher tous les fichiers à la racine du dépôt
2. Dans les Settings du dépôt → Pages → Source : `main` / `root`
3. Le domaine personnalisé `ifsu-equilibre.be` est configuré via le fichier `CNAME`

```
# CNAME (à créer si absent)
ifsu-equilibre.be
```

---

## Typo & palette

| Rôle | Valeur |
|------|--------|
| Titres / citations | Cormorant Garamond (Google Fonts) |
| Corps / labels | DM Sans (Google Fonts) |
| `--ardoise` | `#4A6274` |
| `--ardoise-dark` | `#2C3F52` |
| `--lin` | `#F7F3EE` |
| `--terracotta` | `#C4714A` |
| `--gold` | `#C9A84C` |
| `--anthracite` | `#2C2C2C` |
| `--gris-bleuté` | `#7A9AB0` |

---

## Photos

Les balises `<img>` ont un attribut `onerror="this.style.display='none'"` — si une image est absente, elle disparaît proprement sans casser la mise en page.

Placer les photos dans le dossier `images/` avec les noms exacts listés ci-dessus.

---

## Modifier le contenu

Chaque page est autonome. Le CSS partagé est dans `style.css`.  
La navigation et le footer sont répétés dans chaque fichier HTML — modifier les deux si besoin.

**Règle de déploiement :** ne jamais modifier `style.css` sans tester les 5 pages.

---

## Contact

ifsu@etik.com · 0477 09 18 03  
[facebook.com/IFSU.Yoga.Meditation.Ath](https://facebook.com/IFSU.Yoga.Meditation.Ath)  
[mastodon.social/@IFSUYogameditation](https://mastodon.social/@IFSUYogameditation)
