# Bilder & Ikoner Plan

**Prosjekt:** Min Første Website v2  
**Formål:** Oversikt over nødvendige bilder og ikoner

---

## 🎨 Nødvendige Assets

### Logo & Branding

#### 1. Logo/Ikon
- **Filnavn:** `logo.svg` eller `logo.png`
- **Plassering:** `assets/images/`
- **Størrelse:** 200x200px (SVG foretrukket)
- **Beskrivelse:** Hovedlogo for nettsiden, brukes i header
- **Farger:** Skal passe med mørk bakgrunn
- **Status:** 🔴 Må lages

#### 2. Favicon
- **Filnavn:** `favicon.ico` + `favicon.svg`
- **Plassering:** rot-mappen
- **Størrelse:** 32x32px (ico), skalerbar (svg)
- **Beskrivelse:** Ikon som vises i browser tab
- **Status:** 🔴 Må lages

---

### Hero Section

#### 3. Hero Bakgrunnsbilde/Illustrasjon
- **Filnavn:** `hero-bg.svg` eller `hero-illustration.svg`
- **Plassering:** `assets/images/`
- **Størrelse:** 1920x1080px (eller SVG)
- **Beskrivelse:** Dekorativ bakgrunn eller illustrasjon for hero section
- **Forslag:** Abstrakt gradient, geometriske former, eller kode-relatert illustrasjon
- **Status:** 🔴 Må lages

---

### Feature Ikoner

#### 4. HTML Ikon
- **Filnavn:** `icon-html.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 64x64px (SVG)
- **Beskrivelse:** Representerer HTML konsepter
- **Status:** 🔴 Må lages

#### 5. CSS Ikon
- **Filnavn:** `icon-css.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 64x64px (SVG)
- **Beskrivelse:** Representerer CSS konsepter
- **Status:** 🔴 Må lages

#### 6. JavaScript Ikon
- **Filnavn:** `icon-javascript.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 64x64px (SVG)
- **Beskrivelse:** Representerer JavaScript konsepter
- **Status:** 🔴 Må lages

#### 7. Responsive Ikon
- **Filnavn:** `icon-responsive.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 64x64px (SVG)
- **Beskrivelse:** Representerer responsive design
- **Status:** 🔴 Må lages

#### 8. Interactive Ikon
- **Filnavn:** `icon-interactive.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 64x64px (SVG)
- **Beskrivelse:** Representerer interaktivitet
- **Status:** 🔴 Må lages

#### 9. Modern Ikon
- **Filnavn:** `icon-modern.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 64x64px (SVG)
- **Beskrivelse:** Representerer moderne design
- **Status:** 🔴 Må lages

---

### People Cards

#### 10. Avatar Placeholder
- **Filnavn:** `avatar-placeholder.svg`
- **Plassering:** `assets/images/`
- **Størrelse:** 200x200px (SVG)
- **Beskrivelse:** Standard avatar for people cards
- **Forslag:** Enkel silhuett eller initialer
- **Status:** 🔴 Må lages

#### 11. Avatar Bilder (valgfritt)
- **Filnavn:** `avatar-[navn].jpg/png`
- **Plassering:** `assets/images/avatars/`
- **Størrelse:** 200x200px
- **Beskrivelse:** Individuelle avatars for hver person i people.json
- **Antall:** 11 personer
- **Status:** 🟡 Valgfritt (kan bruke placeholder)

---

### Dekorative Elementer

#### 12. Geometriske Former
- **Filnavn:** `shape-circle.svg`, `shape-triangle.svg`, etc.
- **Plassering:** `assets/images/shapes/`
- **Størrelse:** Varierende (SVG)
- **Beskrivelse:** Dekorative former for bakgrunner
- **Status:** 🟡 Valgfritt

#### 13. Kode Snippet Illustrasjon
- **Filnavn:** `code-illustration.svg`
- **Plassering:** `assets/images/`
- **Størrelse:** Varierende (SVG)
- **Beskrivelse:** Stilisert kode-snippet som dekorasjon
- **Status:** 🟡 Valgfritt

---

### UI Ikoner

#### 14. Meny Ikon (Hamburger)
- **Filnavn:** `icon-menu.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 24x24px (SVG)
- **Beskrivelse:** Hamburger meny for mobil
- **Status:** 🔴 Må lages

#### 15. Lukk Ikon (X)
- **Filnavn:** `icon-close.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 24x24px (SVG)
- **Beskrivelse:** Lukk knapp for modal/meny
- **Status:** 🔴 Må lages

#### 16. Søk Ikon
- **Filnavn:** `icon-search.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 24x24px (SVG)
- **Beskrivelse:** Søk ikon for filter funksjon
- **Status:** 🔴 Må lages

#### 17. Filter Ikon
- **Filnavn:** `icon-filter.svg`
- **Plassering:** `assets/icons/`
- **Størrelse:** 24x24px (SVG)
- **Beskrivelse:** Filter ikon
- **Status:** 🔴 Må lages

---

## 🎨 Fargepalett for Assets

Alle ikoner og bilder bør følge denne fargepaletten:

```css
Primær: #7c3aed (lilla/purple)
Sekundær: #06b6d4 (cyan)
Accent: #f59e0b (amber)
Bakgrunn: #0f172a (mørk blå)
Tekst: #e2e8f0 (lys grå)
```

---

## 📐 Design Retningslinjer

### SVG Ikoner
- Bruk enkle, rene linjer
- Konsistent stroke width (2-3px)
- Rounded corners for moderne look
- Transparent bakgrunn
- Optimaliser filstørrelse

### Bilder
- Bruk WebP format for beste kompresjon (med PNG fallback)
- Optimaliser for web (ikke for store filer)
- Bruk lazy loading attributt i HTML

### Farger
- Sørg for god kontrast mot mørk bakgrunn
- Bruk gradient effekter sparsomt
- Hold deg til fargepaletten

---

## ✅ Prioritering

### Høy Prioritet (Må ha)
1. Logo/Ikon
2. Favicon
3. HTML/CSS/JS ikoner
4. Avatar placeholder
5. Meny/Lukk ikoner

### Medium Prioritet (Bør ha)
6. Hero illustrasjon
7. Feature ikoner (responsive, interactive, modern)
8. Søk/Filter ikoner

### Lav Prioritet (Nice to have)
9. Individuelle avatars
10. Dekorative elementer
11. Kode illustrasjoner

---

## 📝 Notater

- SVG format er foretrukket for ikoner (skalerbart, lite filstørrelse)
- Kan bruke placeholder bilder midlertidig under utvikling
- Vurder å bruke icon libraries som fallback (Font Awesome, Heroicons)
- Alle bilder skal ha beskrivende alt-tekster i HTML

---

## 🔗 Ressurser for Inspirasjon

- **Ikoner:** Heroicons, Lucide, Feather Icons
- **Illustrasjoner:** unDraw, Storyset, Blush
- **Farger:** Coolors.co, Adobe Color
- **Gradienter:** CSS Gradient, uiGradients
