# 🎮 Playground Utvidelsesplan

**Prosjekt:** Min Første Website - Playground v2  
**Formål:** Utvide playground til en omfattende, interaktiv læringsplattform  
**Dato:** 11. november 2025

---

## 🎯 Overordnet Visjon

Gjøre Playground til en **mini code academy** hvor brukere kan:
- Lære grunnleggende og avanserte konsepter
- Teste kode live
- Se eksempler fra populære frameworks
- Få instant feedback
- Bygge små prosjekter

---

## 📚 Innholdsstruktur

### Nivå 1: Grunnleggende (Nåværende + Utvidelser)

#### 1.1 HTML Basics
- **Semantiske tags** - header, nav, main, section, article, footer
- **Forms** - input types, labels, validation
- **Lists** - ul, ol, dl
- **Tables** - struktur og styling
- **Media** - img, video, audio
- **Links** - internal, external, anchors
- **Accessibility** - ARIA, alt tekster, semantic HTML

#### 1.2 CSS Basics
- **Selectors** - class, id, element, pseudo
- **Box Model** - margin, padding, border
- **Colors** - hex, rgb, hsl, gradients
- **Typography** - fonts, sizes, weights
- **Positioning** - static, relative, absolute, fixed, sticky
- **Display** - block, inline, inline-block, none
- **Flexbox** - layout med flex
- **Grid** - 2D layouts
- **Transitions** - smooth changes
- **Animations** - keyframes
- **Media Queries** - responsive design
- **CSS Variables** - custom properties

#### 1.3 JavaScript Basics (Nåværende + Utvidelser)
- **Variables** - const, let, var ✅
- **Data Types** - string, number, boolean, array, object
- **Functions** - regular, arrow, parameters ✅
- **Conditionals** - if/else, switch, ternary
- **Loops** - for, while, forEach, map, filter
- **DOM Manipulation** - querySelector, createElement, etc. ✅
- **Events** - click, input, submit, keyboard ✅
- **Array Methods** - map, filter, reduce, find, some, every
- **Object Methods** - keys, values, entries, destructuring
- **Promises** - async/await, fetch
- **Error Handling** - try/catch
- **LocalStorage** - lagre data lokalt

---

### Nivå 2: Moderne Verktøy & Frameworks

#### 2.1 TypeScript
- **Type Annotations** - string, number, boolean
- **Interfaces** - definere objektstrukturer
- **Types vs Interfaces** - når bruke hva
- **Generics** - gjenbrukbare typer
- **Enums** - konstanter
- **Type Guards** - type checking
- **Utility Types** - Partial, Pick, Omit

#### 2.2 React
- **Components** - functional components
- **JSX** - JavaScript XML syntax
- **Props** - passing data
- **State** - useState hook
- **Effects** - useEffect hook
- **Events** - onClick, onChange
- **Conditional Rendering** - if/else i JSX
- **Lists** - map over arrays
- **Forms** - controlled components
- **Custom Hooks** - gjenbrukbar logic

#### 2.3 Next.js
- **Pages** - file-based routing
- **App Router** - ny routing system
- **Server Components** - RSC
- **Client Components** - 'use client'
- **Data Fetching** - fetch, cache
- **API Routes** - backend endpoints
- **Image Optimization** - next/image
- **Metadata** - SEO
- **Layouts** - shared UI

#### 2.4 Vue.js
- **Templates** - Vue syntax
- **Data** - reactive data
- **Methods** - functions
- **Computed** - derived state
- **Watchers** - observe changes
- **Components** - reusable pieces
- **Props** - parent to child
- **Events** - child to parent
- **v-if/v-show** - conditional rendering
- **v-for** - lists

#### 2.5 Angular
- **Components** - TypeScript classes
- **Templates** - HTML with directives
- **Data Binding** - one-way, two-way
- **Directives** - *ngIf, *ngFor
- **Services** - shared logic
- **Dependency Injection** - DI pattern
- **Routing** - navigation
- **Forms** - template-driven, reactive
- **HTTP** - HttpClient

#### 2.6 Tailwind CSS
- **Utility Classes** - flex, grid, p-4, m-2
- **Responsive** - sm:, md:, lg:, xl:
- **Colors** - bg-blue-500, text-red-600
- **Spacing** - padding, margin scale
- **Typography** - text sizes, weights
- **Flexbox** - flex utilities
- **Grid** - grid utilities
- **Hover/Focus** - state variants
- **Dark Mode** - dark: prefix
- **Custom Config** - tailwind.config.js

#### 2.7 Sass/SCSS
- **Variables** - $primary-color
- **Nesting** - nested selectors
- **Mixins** - reusable styles
- **Functions** - custom functions
- **Partials** - @import
- **Extend** - @extend
- **Operators** - math operations

---

### Nivå 3: Backend & Fullstack

#### 3.1 Node.js
- **Modules** - require, import
- **File System** - fs module
- **HTTP Server** - http module
- **Express** - web framework
- **Middleware** - request processing
- **Routing** - endpoints
- **Environment Variables** - .env

#### 3.2 API Basics
- **REST** - GET, POST, PUT, DELETE
- **JSON** - data format
- **Fetch** - client-side requests
- **Axios** - HTTP client
- **Error Handling** - status codes
- **Authentication** - tokens, JWT
- **CORS** - cross-origin requests

#### 3.3 Database Basics
- **SQL** - SELECT, INSERT, UPDATE, DELETE
- **MongoDB** - NoSQL database
- **Prisma** - ORM
- **Queries** - filtering, sorting
- **Relations** - one-to-many, many-to-many

---

### Nivå 4: Verktøy & Best Practices

#### 4.1 Git & GitHub
- **Init** - git init
- **Add** - git add
- **Commit** - git commit
- **Push** - git push
- **Pull** - git pull
- **Branches** - git branch, git checkout
- **Merge** - git merge
- **Pull Requests** - collaboration

#### 4.2 Package Managers
- **npm** - Node Package Manager
- **yarn** - alternative package manager
- **pnpm** - fast package manager
- **package.json** - dependencies
- **Scripts** - npm run

#### 4.3 Build Tools
- **Vite** - modern build tool
- **Webpack** - module bundler
- **Babel** - JavaScript compiler
- **ESLint** - code linting
- **Prettier** - code formatting

#### 4.4 Testing
- **Jest** - testing framework
- **Vitest** - Vite-native testing
- **React Testing Library** - component testing
- **Cypress** - E2E testing
- **Unit Tests** - testing functions
- **Integration Tests** - testing features

---

## 🎨 UI/UX Design

### Layout Struktur

```
┌─────────────────────────────────────────────────┐
│  PLAYGROUND HEADER                              │
│  [Grunnleggende] [Frameworks] [Backend] [Tools]│
└─────────────────────────────────────────────────┘
┌──────────────┬──────────────────────────────────┐
│              │                                  │
│  SIDEBAR     │  MAIN CONTENT AREA              │
│              │                                  │
│  • HTML      │  ┌────────────────────────────┐ │
│  • CSS       │  │  Code Editor               │ │
│  • JS        │  │  (Editable)                │ │
│  • React     │  └────────────────────────────┘ │
│  • Next      │                                  │
│  • Vue       │  ┌────────────────────────────┐ │
│  • Angular   │  │  Live Preview              │ │
│  • Tailwind  │  │  (Real-time output)        │ │
│  • TypeScript│  └────────────────────────────┘ │
│              │                                  │
│  [Reset]     │  [Run Code] [Copy] [Share]     │
│  [Save]      │                                  │
└──────────────┴──────────────────────────────────┘
```

### Features

1. **Code Editor**
   - Syntax highlighting
   - Line numbers
   - Auto-indent
   - Tab support
   - Bracket matching

2. **Live Preview**
   - Real-time updates
   - Error messages
   - Console output
   - Responsive preview

3. **Controls**
   - Run code button
   - Reset button
   - Copy code button
   - Save to localStorage
   - Share link (future)

4. **Sidebar Navigation**
   - Kategorier
   - Søk funksjon
   - Favoritter
   - Progress tracking

---

## 🛠️ Teknisk Implementering

### Fase 1: Grunnleggende Utvidelser ✅ FULLFØRT!
- [x] Utvide eksisterende tabs med flere eksempler
- [x] Legge til HTML basics tab (semantic tags, forms, lists)
- [x] Legge til CSS basics tab (flexbox, grid, animations)
- [x] Forbedre JavaScript eksempler
- [x] Legge til Array methods eksempler (map, filter, reduce)
- [x] Legge til Object methods eksempler (create, destructure, spread)
- [x] Legge til Promises/Async eksempler (promises, async/await)
- [x] Legge til LocalStorage eksempler (save, load, clear)
- [x] Forbedre tabs UI (gradient, scrollbar, responsive)

### Fase 2: Code Editor 🔄
- [x] Implementere enkel code editor (textarea med styling)
- [x] Legge til syntax highlighting (Prism.js CDN)
- [x] Legge til line numbers
- [x] Legge til tab support (Tab key = 2 spaces)
- [x] Run button for å kjøre kode
- [ ] Live preview (iframe) - neste
- [ ] Error handling - neste

### Fase 3: Live Preview
- [ ] Implementere iframe for HTML/CSS/JS preview
- [ ] Real-time updates ved typing
- [ ] Error handling og display
- [ ] Console output capture

### Fase 4: Framework Eksempler
- [ ] React eksempler (JSX syntax, components)
- [ ] Vue eksempler (template syntax)
- [ ] TypeScript eksempler (type annotations)
- [ ] Tailwind eksempler (utility classes)

### Fase 5: Avanserte Features
- [ ] Save/Load fra localStorage
- [ ] Export code as file
- [ ] Share functionality (URL med code)
- [ ] Progress tracking
- [ ] Favoritter system
- [ ] Search functionality

---

## 📝 Eksempel Innhold

### HTML Basics - Forms

```html
<!-- Eksempel: Kontaktskjema -->
<form id="contactForm">
  <label for="name">Navn:</label>
  <input type="text" id="name" required>
  
  <label for="email">E-post:</label>
  <input type="email" id="email" required>
  
  <label for="message">Melding:</label>
  <textarea id="message" rows="4"></textarea>
  
  <button type="submit">Send</button>
</form>

<script>
  document.getElementById('contactForm')
    .addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Skjema sendt!');
    });
</script>
```

### CSS Basics - Flexbox

```css
/* Eksempel: Sentrert layout */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.box {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

### React - Counter Component

```jsx
// Eksempel: Enkel counter
function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
```

### TypeScript - Interface

```typescript
// Eksempel: User interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional
}

function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

const user: User = {
  id: 1,
  name: "Ola Nordmann",
  email: "ola@example.com"
};

console.log(greetUser(user));
```

---

## 🎯 Prioritering

### Høy Prioritet (MVP)
1. ✅ Nåværende playground (Variables, Functions, DOM, Events)
2. 🔄 Utvide med flere JavaScript eksempler
3. 🔄 Legge til HTML basics
4. 🔄 Legge til CSS basics
5. 🔄 Enkel code editor (textarea)
6. 🔄 Live preview (iframe)

### Medium Prioritet
7. React eksempler
8. TypeScript eksempler
9. Tailwind eksempler
10. Syntax highlighting
11. Save/Load functionality
12. Better UI/UX

### Lav Prioritet (Future)
13. Vue eksempler
14. Angular eksempler
15. Next.js eksempler
16. Backend eksempler
17. Share functionality
18. Progress tracking
19. Advanced code editor features

---

## 💡 Anbefalinger & Forbedringer

### Pedagogiske Forbedringer
- **Step-by-step tutorials** - Guide brukere gjennom konsepter
- **Challenges** - Små oppgaver brukere kan løse
- **Hints system** - Hjelp når brukere står fast
- **Explanations** - Forklaring av hva koden gjør
- **Best practices** - Vis riktig måte å gjøre ting på
- **Common mistakes** - Vis vanlige feil og hvordan fikse dem

### Interaktive Features
- **Code completion** - Autocomplete for kode
- **Error highlighting** - Vis feil i koden
- **Diff view** - Sammenlign før/etter
- **Undo/Redo** - Angre endringer
- **Keyboard shortcuts** - Raskere workflow
- **Mobile support** - Fungerer på mobil

### Sosiale Features
- **Comments** - Brukere kan kommentere eksempler
- **Ratings** - Rate eksempler
- **User submissions** - Brukere kan dele egne eksempler
- **Leaderboard** - Gamification

---

## 📊 Suksesskriterier

- ✅ Minst 50 ulike code eksempler
- ✅ Dekker HTML, CSS, JavaScript grunnleggende
- ✅ Minst 3 framework eksempler (React, Vue, TypeScript)
- ✅ Fungerende code editor med syntax highlighting
- ✅ Live preview som oppdateres real-time
- ✅ Responsivt design
- ✅ Godt dokumentert kode
- ✅ Intuitivt UI

---

## 🚀 Implementeringsplan

### Sprint 1: Grunnleggende Utvidelser (1-2 dager)
- Utvide JavaScript eksempler
- Legge til HTML basics tab
- Legge til CSS basics tab
- Forbedre eksisterende UI

### Sprint 2: Code Editor (2-3 dager)
- Implementere textarea-basert editor
- Legge til syntax highlighting
- Legge til line numbers
- Implementere live preview

### Sprint 3: Framework Eksempler (2-3 dager)
- React eksempler
- TypeScript eksempler
- Tailwind eksempler
- Vue eksempler (optional)

### Sprint 4: Polish & Features (1-2 dager)
- Save/Load functionality
- Better error handling
- Responsive design
- Testing og bug fixes

---

## 📚 Ressurser

### Libraries å vurdere
- **Prism.js** - Syntax highlighting
- **CodeMirror** - Advanced code editor
- **Monaco Editor** - VS Code editor (heavy)
- **Ace Editor** - Lightweight editor
- **Highlight.js** - Syntax highlighting

### Inspirasjon
- **CodePen** - Online code editor
- **JSFiddle** - JavaScript playground
- **StackBlitz** - Online IDE
- **CodeSandbox** - Online development
- **Repl.it** - Collaborative coding

---

## 🎓 Læringsmål

Etter å ha brukt Playground skal brukere kunne:
- Skrive grunnleggende HTML, CSS og JavaScript
- Forstå moderne JavaScript konsepter
- Kjenne til populære frameworks
- Debugge enkel kode
- Bygge små interaktive prosjekter
- Føle seg komfortable med å eksperimentere

---

**Neste steg:** Velg hvilken sprint/fase vi skal starte med! 🚀
