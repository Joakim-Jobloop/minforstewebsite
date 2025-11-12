# Min Første Website - v2 Arbeidsplan

**Dato opprettet:** 11. november 2025  
**Prosjekt:** Oppgradering fra v1 til v2  
**Mål:** Lage en moderne, lærsom "Min Første Website" med 100x forbedringer

---

## 📋 Overordnet Mål

Oppgradere eksisterende website med fokus på:
- ✨ Moderne UI/UX med mørkt tema og behagelige farger
- 📚 Lærerik kode med omfattende kommentarer
- 🎯 Vise frem typiske HTML, CSS og JavaScript konsepter
- 🏗️ Profesjonell struktur og organisering
- 🎨 Interaktive elementer og smooth animasjoner

---

## 🎨 Design Prinsipper

- **Farger:** Mørk bakgrunn, behagelige kontraster (ikke hvit/lys skjerm)
- **Typografi:** Tydelig hierarki, lesbar tekst
- **Animasjoner:** Subtile og meningsfulle (ikke overbrukt)
- **Responsivt:** Fungerer på alle skjermstørrelser
- **Tilgjengelighet:** God kontrast og semantisk HTML

---

## 📁 Prosjektstruktur

```
/
├── index.html
├── css/
│   ├── main.css
│   ├── base.css
│   ├── variables.css (NY)
│   ├── header.css
│   ├── footer.css (NY)
│   ├── sections/
│   │   ├── heroSection.css
│   │   ├── aboutSection.css (NY)
│   │   ├── featuresSection.css (NY)
│   │   ├── playgroundSection.css (NY)
│   │   └── contactSection.css (NY)
│   ├── components/
│   │   ├── cards.css
│   │   ├── buttons.css (NY)
│   │   ├── forms.css (NY)
│   │   ├── modal.css (NY)
│   │   └── tabs.css (NY)
│   └── utils/
│       ├── scrollToTopButton.css
│       ├── animations.css (NY)
│       └── utilities.css (NY)
├── js/
│   ├── main.js (NY - hovedfil)
│   ├── script.js (eksisterende eksempler)
│   ├── cards.js
│   ├── loops.js
│   ├── modal.js (NY)
│   ├── tabs.js (NY)
│   ├── form.js (NY)
│   ├── filter.js (NY)
│   └── playground.js (NY)
├── data/
│   └── people.json
├── assets/
│   ├── images/ (NY)
│   └── icons/ (NY)
└── docs/
    ├── ARBEIDSPLAN.md
    ├── ENDRINGER.md (NY)
    └── BILDER_PLAN.md (NY)
```

---

## 🚀 Implementeringsplan

### Fase 1: Grunnlag & Struktur ✅
- [x] Opprett docs mappe med arbeidsplan
- [x] Opprett manglende mapper (assets/images, assets/icons)
- [x] Lag variables.css med fargepalett og design tokens
- [x] Oppdater base.css med bedre resets og defaults
- [x] Lag utilities.css med hjelpeklasser

### Fase 2: HTML Struktur ✅
- [x] Oppdater index.html med semantisk HTML5
- [x] Legg til meta tags (description, keywords, author)
- [x] Strukturer sections: Hero, About, Features, Playground, People, Contact
- [x] Legg til footer med informasjon
- [x] Forbedre accessibility (ARIA labels, alt tekster)

### Fase 3: CSS Styling ✅
- [x] Implementer moderne fargepalett (mørk tema)
- [x] Style header med bedre navigasjon
- [x] Style hero section med moderne design
- [x] Lag about section med info om prosjektet
- [x] Lag features section (grid layout med cards)
- [x] Style playground section (interaktiv demo-område)
- [x] Forbedre people cards med bedre design
- [x] Lag contact section med form
- [x] Style footer
- [x] Legg til responsive breakpoints
- [x] Implementer subtile animasjoner

### Fase 4: JavaScript Funksjonalitet ✅
- [x] Lag main.js som koordinerer alt
- [x] Implementer smooth scroll navigation
- [x] Lag modal system (for å vise detaljer)
- [x] Implementer tabs (for code examples)
- [x] Lag filter/søk for people cards
- [x] Implementer form validering
- [x] Lag interactive playground (live code editor?)
- [x] Legg til localStorage eksempel
- [x] Forbedre scroll-to-top button
- [x] Legg til loading states

### Fase 5: Innhold & Læring ✅
- [x] Skriv omfattende kommentarer i alle filer
- [x] Legg til code examples i playground
- [x] Dokumenter HTML konsepter
- [x] Dokumenter CSS konsepter
- [x] Dokumenter JavaScript konsepter
- [x] Lag header/footer kommentarer i alle filer

### Fase 6: Bilder & Assets ✅
- [x] Planlegg nødvendige bilder/ikoner
- [x] Lag placeholder referanser
- [x] Dokumenter hva som trengs i BILDER_PLAN.md

### Fase 7: Testing & Polering
- [ ] Test på ulike skjermstørrelser
- [ ] Test alle interaktive elementer
- [ ] Sjekk accessibility
- [ ] Valider HTML/CSS
- [ ] Optimaliser ytelse
- [ ] Dokumenter endringer i ENDRINGER.md

---

## 📚 Konsepter å Demonstrere

### HTML
- Semantiske tags (header, nav, main, section, article, footer)
- Forms (input types, labels, validation)
- Lists (ul, ol)
- Links og navigasjon
- Images og alt tekster
- Meta tags

### CSS
- Selectors (class, id, element, pseudo)
- Box model (margin, padding, border)
- Flexbox
- Grid
- Positioning (relative, absolute, fixed, sticky)
- Transitions & animations
- Media queries (responsive design)
- CSS Variables
- Pseudo-classes (:hover, :active, :focus)
- Pseudo-elements (::before, ::after)

### JavaScript
- Variables (const, let)
- Data types (string, number, boolean, array, object)
- Functions (regular, arrow)
- DOM manipulation (querySelector, createElement, etc.)
- Event listeners
- Loops (for, forEach, map)
- Conditionals (if/else, ternary)
- Fetch API
- Async/await
- Array methods (map, filter, find)
- Template literals
- localStorage
- JSON

---

## 🎯 Suksesskriterier

- ✅ Koden er godt kommentert og forklarende
- ✅ Moderne og behagelig design
- ✅ Alle interaktive elementer fungerer
- ✅ Responsivt design
- ✅ Lærerik for nybegynnere
- ✅ Profesjonell struktur
- ✅ God ytelse

---

## 📝 Notater

- Bruk norske kommentarer for bedre forståelse
- Hold koden enkel og lesbar
- Prioriter læring over kompleksitet
- Test underveis
