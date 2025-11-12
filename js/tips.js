/**
 * ============================================
 * TIPS.JS
 * ============================================
 * Plassering: /js/tips.js
 * 
 * Tips og tricks for webutvikling.
 * Viser nyttige tips i console og på siden.
 */

/**
 * ==========================================
 * TIPS SYSTEM
 * ==========================================
 */

const tips = [
  {
    category: 'HTML',
    tip: 'Bruk semantiske HTML tags som <header>, <nav>, <main>, <section> for bedre SEO og accessibility.',
    icon: '📄'
  },
  {
    category: 'HTML',
    tip: 'Alltid inkluder alt-tekst på bilder for skjermlesere: <img src="..." alt="Beskrivelse">',
    icon: '🖼️'
  },
  {
    category: 'CSS',
    tip: 'Bruk CSS Variables for å gjøre det enkelt å endre farger og spacing: var(--primary-color)',
    icon: '🎨'
  },
  {
    category: 'CSS',
    tip: 'Flexbox er perfekt for 1-dimensjonale layouts (rad eller kolonne), Grid for 2-dimensjonale.',
    icon: '📐'
  },
  {
    category: 'CSS',
    tip: 'Mobile-first approach: Start med mobil styling, legg til desktop styles med media queries.',
    icon: '📱'
  },
  {
    category: 'JavaScript',
    tip: 'Bruk const som standard, let kun når verdien skal endres. Unngå var.',
    icon: '💡'
  },
  {
    category: 'JavaScript',
    tip: 'Array methods (map, filter, reduce) er kraftigere og mer lesbare enn for-loops.',
    icon: '🔄'
  },
  {
    category: 'JavaScript',
    tip: 'Async/await gjør asynkron kode mer lesbar enn .then() chains.',
    icon: '⏳'
  },
  {
    category: 'Performance',
    tip: 'Optimaliser bilder: Bruk WebP format og lazy loading for bedre ytelse.',
    icon: '⚡'
  },
  {
    category: 'Performance',
    tip: 'Minifiser CSS og JavaScript før produksjon for raskere lasting.',
    icon: '🚀'
  },
  {
    category: 'Accessibility',
    tip: 'Test siden med kun keyboard navigasjon (Tab, Enter, Escape).',
    icon: '⌨️'
  },
  {
    category: 'Accessibility',
    tip: 'Sørg for god kontrast mellom tekst og bakgrunn (minimum 4.5:1 ratio).',
    icon: '👁️'
  },
  {
    category: 'Best Practices',
    tip: 'Kommenter koden din! Fremtidig deg vil takke deg.',
    icon: '📝'
  },
  {
    category: 'Best Practices',
    tip: 'Bruk konsistente naming conventions: camelCase for JS, kebab-case for CSS.',
    icon: '✍️'
  },
  {
    category: 'DevTools',
    tip: 'Bruk console.table() for å vise arrays og objekter på en fin måte.',
    icon: '🔍'
  },
  {
    category: 'DevTools',
    tip: 'Trykk F12 for å åpne DevTools. Inspiser elementer med høyreklikk → Inspect.',
    icon: '🛠️'
  }
];

/**
 * Henter tilfeldig tip
 */
export function getRandomTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  return tips[randomIndex];
}

/**
 * Henter tips basert på kategori
 */
export function getTipsByCategory(category) {
  return tips.filter(tip => tip.category === category);
}

/**
 * Viser tip i console
 */
export function showTipInConsole() {
  const tip = getRandomTip();
  console.log(
    `%c${tip.icon} ${tip.category} Tip`,
    'background: linear-gradient(135deg, #7c3aed, #06b6d4); color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold;'
  );
  console.log(`%c${tip.tip}`, 'color: #06b6d4; font-size: 14px; padding: 8px 0;');
}

/**
 * Viser tip på siden
 */
export function showTipOnPage() {
  const tip = getRandomTip();
  
  // Sjekk om tip allerede vises
  const existingTip = document.querySelector('.tip-banner');
  if (existingTip) {
    existingTip.remove();
  }
  
  // Lag tip banner
  const tipBanner = document.createElement('div');
  tipBanner.className = 'tip-banner';
  tipBanner.innerHTML = `
    <div class="tip-content">
      <span class="tip-icon">${tip.icon}</span>
      <div class="tip-text">
        <strong>${tip.category} Tip:</strong>
        <p>${tip.tip}</p>
      </div>
      <button class="tip-close" aria-label="Lukk tip">×</button>
    </div>
  `;
  
  // Styling
  tipBanner.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    max-width: 600px;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.95), rgba(6, 182, 212, 0.95));
    backdrop-filter: blur(10px);
    color: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    z-index: 999;
    animation: slideUp 0.3s ease-out;
  `;
  
  // Legg til i DOM
  document.body.appendChild(tipBanner);
  
  // Lukk knapp
  const closeBtn = tipBanner.querySelector('.tip-close');
  closeBtn.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  `;
  
  closeBtn.addEventListener('click', () => {
    tipBanner.style.animation = 'slideDown 0.3s ease-out';
    setTimeout(() => tipBanner.remove(), 300);
  });
  
  // Auto-lukk etter 10 sekunder
  setTimeout(() => {
    if (tipBanner.parentElement) {
      tipBanner.style.animation = 'slideDown 0.3s ease-out';
      setTimeout(() => tipBanner.remove(), 300);
    }
  }, 10000);
}

/**
 * Initialiserer tip system
 */
export function initTips() {
  // Vis tip i console ved lasting
  showTipInConsole();
  
  // Vis tip på siden etter 5 sekunder
  setTimeout(() => {
    showTipOnPage();
  }, 5000);
  
  // Vis ny tip hver 60. sekund
  setInterval(() => {
    showTipInConsole();
  }, 60000);
}

// Legg til CSS animasjoner
if (!document.getElementById('tip-styles')) {
  const style = document.createElement('style');
  style.id = 'tip-styles';
  style.textContent = `
    @keyframes slideUp {
      from {
        transform: translateY(100px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slideDown {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(100px);
        opacity: 0;
      }
    }
    .tip-content {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }
    .tip-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }
    .tip-text {
      flex: 1;
    }
    .tip-text strong {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    .tip-text p {
      margin: 0;
      line-height: 1.5;
      opacity: 0.95;
    }
    .tip-close:hover {
      background: rgba(255, 255, 255, 0.3) !important;
    }
    @media (max-width: 768px) {
      .tip-banner {
        left: 10px !important;
        right: 10px !important;
        bottom: 10px !important;
        padding: 1rem !important;
      }
      .tip-icon {
        font-size: 1.5rem !important;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * ============================================
 * SLUTT PÅ TIPS.JS
 * ============================================
 * 
 * Tips system som viser nyttige råd for webutvikling.
 * 
 * Bruk:
 * - initTips() for å starte automatisk tips
 * - showTipInConsole() for å vise tip i console
 * - showTipOnPage() for å vise tip på siden
 * - getRandomTip() for å hente tilfeldig tip
 */
