# Bilder & Ikoner Plan

**Prosjekt:** Min Første Website v2  
**Formål:** Oversikt over nødvendige bilder og ikoner

---

## 🎨 Nødvendige Assets

### Logo & Branding

#### 1. Logo/Ikon
- **Filnavn:** `logoNordisk.png`
- **Plassering:** `assets/icons/logoNordisk.png`
- **Størrelse:** 200x200px
- **Beskrivelse:** Hovedlogo for nettsiden, brukes i header
- **Farger:** Passer med mørk bakgrunn
- **Status:** ✅ Ferdig

#### 2. Favicon
- **Filnavn:** `logoNordisk.png`
- **Plassering:** `assets/icons/logoNordisk.png`
- **Størrelse:** Bruker samme som logo
- **Beskrivelse:** Ikon som vises i browser tab
- **Status:** ✅ Ferdig (bruker logo)

---

### Hero Section

#### 3. Hero Bakgrunnsbilde/Illustrasjon
- **Filnavn:** `hero-bg.svg`
- **Plassering:** `assets/images/hero-bg.svg`
- **Størrelse:** SVG (skalerbar)
- **Beskrivelse:** Moderne kode-tema illustrasjon med:
  - Gradient bakgrunn
  - Glow effekter i brand farger (lilla, cyan, amber)
  - Kode snippets (HTML, CSS, JavaScript)
  - Geometriske former og mønstre
  - Grid pattern og dots
  - Floating code blocks
- **Implementering:** Floating animasjon med opacity 0.15
- **Status:** ✅ Ferdig og optimalisert!

implementering eksempel (kan forbedres/perfeksjoneres):
.hero {
  position: relative;
  min-height: 60vh;
  background:
    /* animert overlay */
    linear-gradient(120deg, rgba(233, 166, 117, 0.12), rgba(143, 191, 115, 0.03), rgba(231, 222, 194, 0)) 0 0 / 200% 200% no-repeat,
    url("/assets/images/hero-bg.svg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #e2e8f0;
  overflow: hidden;
}

@keyframes heroFlow {
  0% {
    background-position: 0% 0%, center;
  }
  100% {
    background-position: 200% 0%, center;
  }
}

.hero {
  animation: heroFlow 18s linear infinite;
}

<section class="hero">
  <div class="hero-content">
    <h1>Min Første Website</h1>
    <p>Litt norsk inspirasjon, litt kode, mye kontroll.</p>
    <a href="#projects" class="btn">Se mer</a>
  </div>
</section>


---

### Feature Ikoner

#### 4. HTML Ikon
- **Filnavn:** `html.png`
- **Plassering:** `assets/icons/html.png`
- **Størrelse:** 64x64px (PNG)
- **Beskrivelse:** Representerer HTML konsepter
- **Bruk:** About section
- **Status:** ✅ Ferdig

#### 5. CSS Ikon
- **Filnavn:** `css.png`
- **Plassering:** `assets/icons/css.png`
- **Størrelse:** 64x64px (PNG)
- **Beskrivelse:** Representerer CSS konsepter
- **Bruk:** About section
- **Status:** ✅ Ferdig

#### 6. JavaScript Ikon
- **Filnavn:** `javascript.png`
- **Plassering:** `assets/icons/javascript.png`
- **Størrelse:** 64x64px (PNG)
- **Beskrivelse:** Representerer JavaScript konsepter
- **Bruk:** About section
- **Status:** ✅ Ferdig

#### 7. Responsive Ikon
- **Filnavn:** `responsive.png`
- **Plassering:** `assets/icons/responsive.png`
- **Størrelse:** 64x64px (PNG)
- **Beskrivelse:** Representerer responsive design
- **Bruk:** Features section
- **Status:** ✅ Ferdig

#### 8. Interactive Ikon
- **Filnavn:** `interactive.png`
- **Plassering:** `assets/icons/interactive.png`
- **Størrelse:** 64x64px (PNG)
- **Beskrivelse:** Representerer interaktivitet
- **Bruk:** Features section
- **Status:** ✅ Ferdig

#### 9. Modern Ikon
- **Filnavn:** `modern.png`
- **Plassering:** `assets/icons/modern.png`
- **Størrelse:** 64x64px (PNG)
- **Beskrivelse:** Representerer moderne design
- **Bruk:** Features section
- **Status:** ✅ Ferdig

---

### People Cards

#### 10. Avatar Mann
- **Filnavn:** `avatar-man.png`
- **Plassering:** `assets/images/avatar-man.png`
- **Størrelse:** 200x200px (PNG)
- **Beskrivelse:** Avatar for mannlige personer
- **Bruk:** People cards (dynamisk basert på kjønn)
- **Status:** ✅ Ferdig

#### 11. Avatar Kvinne
- **Filnavn:** `avatar-kvinne.png`
- **Plassering:** `assets/images/avatar-kvinne.png`
- **Størrelse:** 200x200px (PNG)
- **Beskrivelse:** Avatar for kvinnelige personer
- **Bruk:** People cards (dynamisk basert på kjønn)
- **Status:** ✅ Ferdig

#### 12. Goblin Avatar (Easter Egg)
- **Filnavn:** `goblin-avatar.png`
- **Plassering:** `assets/images/goblin-avatar.png`
- **Størrelse:** 200x200px (PNG)
- **Beskrivelse:** Spesiell avatar for Joakim - mystisk goblin fra Eldoria
- **Bruk:** People cards (Joakim med spesiell styling og animasjon)
- **Status:** ✅ Ferdig og implementert!

---

### UI Ikoner

#### 13. Meny Ikon (Hamburger)
- **Filnavn:** `menu.png`
- **Plassering:** `assets/icons/menu.png`
- **Størrelse:** 24x24px (PNG)
- **Beskrivelse:** Hamburger meny for mobil
- **Bruk:** Mobile navigation button
- **Status:** ✅ Ferdig

#### 14. Lukk Ikon (X)
- **Filnavn:** `close.png`
- **Plassering:** `assets/icons/close.png`
- **Størrelse:** 24x24px (PNG)
- **Beskrivelse:** Lukk knapp for modal/meny
- **Bruk:** Mobile navigation (når åpen)
- **Status:** ✅ Ferdig

#### 15. Søk Ikon
- **Filnavn:** `search.png`
- **Plassering:** `assets/icons/search.png`
- **Størrelse:** 24x24px (PNG)
- **Beskrivelse:** Søk ikon for filter funksjon
- **Bruk:** People section search box
- **Status:** ✅ Ferdig

#### 16. Filter Ikon
- **Filnavn:** `filter.png`
- **Plassering:** `assets/icons/filter.png`
- **Størrelse:** 24x24px (PNG)
- **Beskrivelse:** Filter ikon
- **Bruk:** People section filter buttons
- **Status:** ✅ Ferdig

#### 17. Wheelchair Ikon
- **Filnavn:** `wheel-chair.png`
- **Plassering:** `assets/icons/wheel-chair.png`
- **Størrelse:** 64x64px (PNG)
- **Beskrivelse:** Tilgjengelighet ikon
- **Bruk:** Features section (Accessibility)
- **Status:** ✅ Ferdig

#### 18. Books Ikon
- **Filnavn:** `books.png`
- **Plassering:** `assets/icons/books.png`
- **Størrelse:** 64x64px (PNG)
- **Beskrivelse:** Dokumentasjon ikon
- **Bruk:** Features section (Godt Dokumentert)
- **Status:** ✅ Ferdig

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

## ✅ Status Oppsummering

### ✅ Ferdig (18 assets)
1. ✅ Logo/Ikon (logoNordisk.png) - Header, favicon OG hero section
2. ✅ Favicon (bruker logo)
3. ✅ Hero illustrasjon (hero-bg.svg)
4. ✅ HTML ikon (html.png)
5. ✅ CSS ikon (css.png)
6. ✅ JavaScript ikon (javascript.png)
7. ✅ Responsive ikon (responsive.png)
8. ✅ Interactive ikon (interactive.png)
9. ✅ Modern ikon (modern.png)
10. ✅ Wheelchair ikon (wheel-chair.png) - NY!
11. ✅ Books ikon (books.png) - NY!
12. ✅ Avatar mann (avatar-man.png)
13. ✅ Avatar kvinne (avatar-kvinne.png)
14. ✅ Goblin avatar (goblin-avatar.png) - Easter egg for Joakim!
15. ✅ Meny ikon (menu.png)
16. ✅ Lukk ikon (close.png)
17. ✅ Søk ikon (search.png) - Også brukt i features!
18. ✅ Filter ikon (filter.png)

### 🎉 Alle assets er på plass og implementert!

**Implementert i koden:**
- Logo i header, favicon OG stor versjon i hero section med floating animasjon
- Hero illustrasjon med floating animasjon
- HTML/CSS/JS ikoner i about section
- Feature ikoner i features section (inkl. wheelchair, books, search)
- Avatars i people cards (dynamisk basert på kjønn + spesiell goblin for Joakim)
- UI ikoner (menu, close, search, filter)
- Spesiell goblin styling med pulserende animasjon for Joakim

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
