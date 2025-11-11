/**
 * ============================================
 * PLAYGROUND.JS
 * ============================================
 * Plassering: /js/playground.js
 * 
 * Håndterer interaktiv playground section.
 * 
 * Konsepter demonstrert:
 * - Tabs system
 * - Event listeners
 * - DOM manipulation
 * - Input handling
 * - Functions
 */

/**
 * ==========================================
 * INITIALIZATION
 * ==========================================
 */

export function initPlayground() {
  console.log('🎮 Initialiserer playground...');
  
  initTabs();
  initHTMLDemo();
  initCSSDemo();
  initCodeEditor();
  initVariablesDemo();
  initFunctionsDemo();
  initArraysDemo();
  initObjectsDemo();
  initDOMDemo();
  initEventsDemo();
  initAsyncDemo();
  initStorageDemo();
  
  console.log('✅ Playground klar!');
}

/**
 * ==========================================
 * TABS SYSTEM
 * ==========================================
 */

function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Hent tab id fra data attributt
      const tabId = btn.getAttribute('data-tab');
      
      // Fjern active fra alle tabs
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Legg til active på valgt tab
      btn.classList.add('active');
      const targetTab = document.getElementById(`${tabId}-tab`);
      if (targetTab) {
        targetTab.classList.add('active');
      }
    });
  });
}

/**
 * ==========================================
 * HTML DEMO
 * ==========================================
 */

function initHTMLDemo() {
  const tagsBtn = document.getElementById('htmlTagsBtn');
  const formBtn = document.getElementById('htmlFormBtn');
  const listBtn = document.getElementById('htmlListBtn');
  const output = document.getElementById('htmlOutput');
  
  if (!output) return;
  
  // Semantic tags demo
  if (tagsBtn) {
    tagsBtn.addEventListener('click', () => {
      output.innerHTML = `
        <p><strong>Semantiske HTML5 Tags:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>&lt;header&gt;  - Toppen av siden
&lt;nav&gt;     - Navigasjon
&lt;main&gt;    - Hovedinnhold
&lt;section&gt; - Seksjon av innhold
&lt;article&gt; - Selvstendig innhold
&lt;aside&gt;   - Sidebar innhold
&lt;footer&gt;  - Bunnen av siden</code></pre>
        <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
          <header style="background: var(--primary-color); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.5rem;">
            <strong>Header</strong>
          </header>
          <main style="background: var(--secondary-color); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.5rem;">
            <strong>Main Content</strong>
          </main>
          <footer style="background: var(--accent-color); padding: 0.5rem; border-radius: 4px;">
            <strong>Footer</strong>
          </footer>
        </div>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          Semantiske tags gjør HTML mer lesbar og bedre for SEO!
        </p>
      `;
    });
  }
  
  // Form demo
  if (formBtn) {
    formBtn.addEventListener('click', () => {
      output.innerHTML = `
        <p><strong>HTML Form Elements:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>&lt;form&gt;
  &lt;label for="name"&gt;Navn:&lt;/label&gt;
  &lt;input type="text" id="name" required&gt;
  
  &lt;label for="email"&gt;E-post:&lt;/label&gt;
  &lt;input type="email" id="email"&gt;
  
  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</code></pre>
        <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
          <form style="display: grid; gap: 0.5rem;" onsubmit="event.preventDefault(); alert('Form sendt!');">
            <label style="color: var(--text-primary);">Navn: <input type="text" style="margin-left: 0.5rem; padding: 0.25rem; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary);" required></label>
            <label style="color: var(--text-primary);">E-post: <input type="email" style="margin-left: 0.5rem; padding: 0.25rem; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary);"></label>
            <button type="submit" style="padding: 0.5rem; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Send</button>
          </form>
        </div>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          Forms samler brukerinput. Prøv å sende formen!
        </p>
      `;
    });
  }
  
  // Lists demo
  if (listBtn) {
    listBtn.addEventListener('click', () => {
      output.innerHTML = `
        <p><strong>HTML Lists:</strong></p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
          <div>
            <p style="color: var(--primary-color); font-weight: bold;">Unordered List (ul):</p>
            <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; font-size: 0.85rem;"><code>&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
              <li>Kaffe</li>
              <li>Te</li>
              <li>Juice</li>
            </ul>
          </div>
          <div>
            <p style="color: var(--secondary-color); font-weight: bold;">Ordered List (ol):</p>
            <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; font-size: 0.85rem;"><code>&lt;ol&gt;
  &lt;li&gt;First&lt;/li&gt;
  &lt;li&gt;Second&lt;/li&gt;
&lt;/ol&gt;</code></pre>
            <ol style="margin-left: 1.5rem; color: var(--text-secondary);">
              <li>Først</li>
              <li>Andre</li>
              <li>Tredje</li>
            </ol>
          </div>
        </div>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          Bruk &lt;ul&gt; for punktlister og &lt;ol&gt; for nummererte lister.
        </p>
      `;
    });
  }
}

/**
 * ==========================================
 * CSS DEMO
 * ==========================================
 */

function initCSSDemo() {
  const flexBtn = document.getElementById('cssFlexBtn');
  const gridBtn = document.getElementById('cssGridBtn');
  const animBtn = document.getElementById('cssAnimBtn');
  const output = document.getElementById('cssOutput');
  
  if (!output) return;
  
  // Flexbox demo
  if (flexBtn) {
    flexBtn.addEventListener('click', () => {
      output.innerHTML = `
        <p><strong>CSS Flexbox:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}</code></pre>
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px; min-height: 100px;">
          <div style="width: 60px; height: 60px; background: var(--primary-color); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">1</div>
          <div style="width: 60px; height: 60px; background: var(--secondary-color); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">2</div>
          <div style="width: 60px; height: 60px; background: var(--accent-color); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">3</div>
        </div>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          Flexbox er perfekt for 1-dimensjonale layouts (rad eller kolonne).
        </p>
      `;
    });
  }
  
  // Grid demo
  if (gridBtn) {
    gridBtn.addEventListener('click', () => {
      output.innerHTML = `
        <p><strong>CSS Grid:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}</code></pre>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: 8px;">
          <div style="padding: 1rem; background: var(--primary-color); border-radius: 8px; text-align: center; color: white; font-weight: bold;">1</div>
          <div style="padding: 1rem; background: var(--secondary-color); border-radius: 8px; text-align: center; color: white; font-weight: bold;">2</div>
          <div style="padding: 1rem; background: var(--accent-color); border-radius: 8px; text-align: center; color: white; font-weight: bold;">3</div>
          <div style="padding: 1rem; background: var(--accent-color); border-radius: 8px; text-align: center; color: white; font-weight: bold;">4</div>
          <div style="padding: 1rem; background: var(--primary-color); border-radius: 8px; text-align: center; color: white; font-weight: bold;">5</div>
          <div style="padding: 1rem; background: var(--secondary-color); border-radius: 8px; text-align: center; color: white; font-weight: bold;">6</div>
        </div>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          Grid er perfekt for 2-dimensjonale layouts (rader og kolonner).
        </p>
      `;
    });
  }
  
  // Animation demo
  if (animBtn) {
    animBtn.addEventListener('click', () => {
      output.innerHTML = `
        <p><strong>CSS Animation:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.box {
  animation: bounce 1s infinite;
}</code></pre>
        <div style="display: flex; justify-content: center; margin-top: 1rem; padding: 2rem; background: var(--bg-tertiary); border-radius: 8px;">
          <div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 12px; animation: bounce 1s ease-in-out infinite;"></div>
        </div>
        <style>
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        </style>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          CSS animations gjør nettsider levende med smooth bevegelser!
        </p>
      `;
    });
  }
}

/**
 * ==========================================
 * CODE EDITOR
 * ==========================================
 */

function initCodeEditor() {
  const editorTabBtns = document.querySelectorAll('.editor-tab-btn');
  const codeEditors = document.querySelectorAll('.code-editor');
  const htmlCode = document.getElementById('html-code');
  const cssCode = document.getElementById('css-code');
  const jsCode = document.getElementById('js-code');
  const runBtn = document.getElementById('runCodeBtn');
  const resetBtn = document.getElementById('resetCodeBtn');
  const copyBtn = document.getElementById('copyCodeBtn');
  const previewFrame = document.getElementById('preview-frame');
  
  if (!htmlCode) return;
  
  // Default code
  const defaultCode = {
    html: htmlCode.value,
    css: cssCode.value,
    js: jsCode.value
  };
  
  // Editor tabs switching
  editorTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      
      // Update active states
      editorTabBtns.forEach(b => b.classList.remove('active'));
      codeEditors.forEach(e => e.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(`${lang}-editor`).classList.add('active');
    });
  });
  
  // Update line numbers
  function updateLineNumbers(textarea, lineNumbersEl) {
    const lines = textarea.value.split('\n').length;
    lineNumbersEl.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('\n');
  }
  
  // Initialize line numbers
  updateLineNumbers(htmlCode, document.getElementById('html-line-numbers'));
  updateLineNumbers(cssCode, document.getElementById('css-line-numbers'));
  updateLineNumbers(jsCode, document.getElementById('js-line-numbers'));
  
  // Update line numbers on input
  htmlCode.addEventListener('input', () => updateLineNumbers(htmlCode, document.getElementById('html-line-numbers')));
  cssCode.addEventListener('input', () => updateLineNumbers(cssCode, document.getElementById('css-line-numbers')));
  jsCode.addEventListener('input', () => updateLineNumbers(jsCode, document.getElementById('js-line-numbers')));
  
  // Tab key support (insert 2 spaces)
  [htmlCode, cssCode, jsCode].forEach(textarea => {
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }
    });
  });
  
  // Run code
  if (runBtn) {
    runBtn.addEventListener('click', () => {
      const html = htmlCode.value;
      const css = `<style>${cssCode.value}</style>`;
      const js = `<script>${jsCode.value}<\/script>`;
      
      const fullCode = html + css + js;
      
      // Update iframe
      const iframe = previewFrame.contentDocument || previewFrame.contentWindow.document;
      iframe.open();
      iframe.write(fullCode);
      iframe.close();
      
      // Visual feedback
      runBtn.textContent = '✓ Kjørt!';
      runBtn.style.background = 'var(--success-color)';
      setTimeout(() => {
        runBtn.textContent = '▶ Kjør Kode';
        runBtn.style.background = '';
      }, 1500);
    });
  }
  
  // Reset code
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Er du sikker på at du vil resette koden?')) {
        htmlCode.value = defaultCode.html;
        cssCode.value = defaultCode.css;
        jsCode.value = defaultCode.js;
        
        updateLineNumbers(htmlCode, document.getElementById('html-line-numbers'));
        updateLineNumbers(cssCode, document.getElementById('css-line-numbers'));
        updateLineNumbers(jsCode, document.getElementById('js-line-numbers'));
        
        // Clear preview
        const iframe = previewFrame.contentDocument || previewFrame.contentWindow.document;
        iframe.open();
        iframe.write('');
        iframe.close();
      }
    });
  }
  
  // Copy code
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      // Find active editor
      const activeEditor = document.querySelector('.code-editor.active textarea');
      if (activeEditor) {
        activeEditor.select();
        document.execCommand('copy');
        
        // Visual feedback
        copyBtn.textContent = '✓ Kopiert!';
        setTimeout(() => {
          copyBtn.textContent = '📋 Kopier';
        }, 1500);
      }
    });
  }
}

/**
 * ==========================================
 * VARIABLES DEMO
 * ==========================================
 */

function initVariablesDemo() {
  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');
  const greetOutput = document.getElementById('greetOutput');
  
  if (!greetBtn) return;
  
  greetBtn.addEventListener('click', () => {
    // Hent verdi fra input
    const name = nameInput.value.trim();
    
    if (!name) {
      greetOutput.innerHTML = '<p style="color: var(--error-color);">⚠️ Vennligst skriv inn et navn!</p>';
      return;
    }
    
    // Lag hilsen med template literal
    const greeting = `Hei, ${name}! 👋 Velkommen til JavaScript!`;
    
    // Vis i output
    greetOutput.innerHTML = `
      <p style="color: var(--success-color); font-size: 1.2rem; font-weight: bold;">
        ${greeting}
      </p>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
        Dette ble laget med en <code>const</code> variabel og template literal!
      </p>
    `;
  });
  
  // Enter key support
  if (nameInput) {
    nameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        greetBtn.click();
      }
    });
  }
}

/**
 * ==========================================
 * FUNCTIONS DEMO
 * ==========================================
 */

function initFunctionsDemo() {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const calculateBtn = document.getElementById('calculateBtn');
  const calculateOutput = document.getElementById('calculateOutput');
  
  if (!calculateBtn) return;
  
  calculateBtn.addEventListener('click', () => {
    // Hent verdier og konverter til tall
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    
    // Kall funksjoner
    const sum = add(num1, num2);
    const product = multiply(num1, num2);
    const difference = subtract(num1, num2);
    
    // Vis resultater
    calculateOutput.innerHTML = `
      <div style="display: grid; gap: 0.5rem;">
        <p><strong>Addisjon:</strong> ${num1} + ${num2} = <span style="color: var(--primary-color);">${sum}</span></p>
        <p><strong>Subtraksjon:</strong> ${num1} - ${num2} = <span style="color: var(--secondary-color);">${difference}</span></p>
        <p><strong>Multiplikasjon:</strong> ${num1} × ${num2} = <span style="color: var(--accent-color);">${product}</span></p>
      </div>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 1rem;">
        Disse beregningene ble gjort med gjenbrukbare funksjoner! 🧮
      </p>
    `;
  });
}

/**
 * Matematikk funksjoner
 */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

/**
 * ==========================================
 * DOM MANIPULATION DEMO
 * ==========================================
 */

function initDOMDemo() {
  const changeColorBtn = document.getElementById('changeColorBtn');
  const changeTextBtn = document.getElementById('changeTextBtn');
  const demoBox = document.getElementById('demoBox');
  
  if (!demoBox) return;
  
  // Array med farger
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  ];
  
  // Array med tekster
  const texts = [
    'Jeg kan endres! 🎨',
    'JavaScript er kult! 🚀',
    'DOM manipulation! 💪',
    'Se på meg! 👀',
    'Klikk igjen! 🔄'
  ];
  
  let colorIndex = 0;
  let textIndex = 0;
  
  // Endre farge
  if (changeColorBtn) {
    changeColorBtn.addEventListener('click', () => {
      colorIndex = (colorIndex + 1) % colors.length;
      demoBox.style.background = colors[colorIndex];
      demoBox.style.transform = 'scale(1.05)';
      setTimeout(() => {
        demoBox.style.transform = 'scale(1)';
      }, 200);
    });
  }
  
  // Endre tekst
  if (changeTextBtn) {
    changeTextBtn.addEventListener('click', () => {
      textIndex = (textIndex + 1) % texts.length;
      demoBox.textContent = texts[textIndex];
      demoBox.style.transform = 'rotate(5deg)';
      setTimeout(() => {
        demoBox.style.transform = 'rotate(0deg)';
      }, 200);
    });
  }
}

/**
 * ==========================================
 * EVENTS DEMO
 * ==========================================
 */

function initEventsDemo() {
  const clickCountBtn = document.getElementById('clickCountBtn');
  const clickCountSpan = document.getElementById('clickCount');
  
  if (!clickCountBtn) return;
  
  let count = 0;
  
  clickCountBtn.addEventListener('click', () => {
    count++;
    clickCountSpan.textContent = count;
    
    // Animasjon
    clickCountSpan.style.transform = 'scale(1.5)';
    clickCountSpan.style.color = 'var(--primary-color)';
    
    setTimeout(() => {
      clickCountSpan.style.transform = 'scale(1)';
      clickCountSpan.style.color = 'var(--text-primary)';
    }, 200);
    
    // Spesiell melding ved visse tall
    if (count === 10) {
      showAchievement('🎉 Gratulerer! Du har klikket 10 ganger!');
    } else if (count === 50) {
      showAchievement('🔥 Wow! 50 klikk! Du er dedikert!');
    } else if (count === 100) {
      showAchievement('🏆 LEGENDARISK! 100 klikk! Du er en mester!');
    }
  });
}

/**
 * ==========================================
 * ACHIEVEMENT SYSTEM
 * ==========================================
 */

/**
 * Viser achievement melding
 * @param {string} message - Achievement melding
 */
function showAchievement(message) {
  // Lag achievement element
  const achievement = document.createElement('div');
  achievement.className = 'achievement-toast';
  achievement.textContent = message;
  achievement.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow-xl);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
    font-weight: bold;
  `;
  
  // Legg til i DOM
  document.body.appendChild(achievement);
  
  // Fjern etter 3 sekunder
  setTimeout(() => {
    achievement.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      achievement.remove();
    }, 300);
  }, 3000);
}

// Legg til CSS animasjoner
if (!document.getElementById('achievement-styles')) {
  const style = document.createElement('style');
  style.id = 'achievement-styles';
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * ==========================================
 * ARRAYS DEMO
 * ==========================================
 */

function initArraysDemo() {
  const mapBtn = document.getElementById('arrayMapBtn');
  const filterBtn = document.getElementById('arrayFilterBtn');
  const reduceBtn = document.getElementById('arrayReduceBtn');
  const output = document.getElementById('arrayOutput');
  
  if (!output) return;
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Map demo
  if (mapBtn) {
    mapBtn.addEventListener('click', () => {
      const doubled = numbers.map(n => n * 2);
      output.innerHTML = `
        <p><strong>Original array:</strong> [${numbers.join(', ')}]</p>
        <p><strong>Map (doble alle):</strong> [${doubled.join(', ')}]</p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto;"><code>const doubled = numbers.map(n => n * 2);</code></pre>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          <code>map()</code> lager et nytt array ved å kjøre en funksjon på hvert element.
        </p>
      `;
    });
  }
  
  // Filter demo
  if (filterBtn) {
    filterBtn.addEventListener('click', () => {
      const evens = numbers.filter(n => n % 2 === 0);
      output.innerHTML = `
        <p><strong>Original array:</strong> [${numbers.join(', ')}]</p>
        <p><strong>Filter (kun partall):</strong> [${evens.join(', ')}]</p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto;"><code>const evens = numbers.filter(n => n % 2 === 0);</code></pre>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          <code>filter()</code> lager et nytt array med kun elementer som matcher condition.
        </p>
      `;
    });
  }
  
  // Reduce demo
  if (reduceBtn) {
    reduceBtn.addEventListener('click', () => {
      const sum = numbers.reduce((total, n) => total + n, 0);
      output.innerHTML = `
        <p><strong>Original array:</strong> [${numbers.join(', ')}]</p>
        <p><strong>Reduce (sum):</strong> ${sum}</p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto;"><code>const sum = numbers.reduce((total, n) => total + n, 0);</code></pre>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          <code>reduce()</code> reduserer et array til én verdi ved å akkumulere resultater.
        </p>
      `;
    });
  }
}

/**
 * ==========================================
 * OBJECTS DEMO
 * ==========================================
 */

function initObjectsDemo() {
  const createBtn = document.getElementById('createObjectBtn');
  const destructureBtn = document.getElementById('destructureBtn');
  const spreadBtn = document.getElementById('spreadBtn');
  const output = document.getElementById('objectOutput');
  
  if (!output) return;
  
  const person = {
    name: 'Ola Nordmann',
    age: 25,
    city: 'Oslo',
    hobbies: ['koding', 'gaming', 'fotball']
  };
  
  // Create object demo
  if (createBtn) {
    createBtn.addEventListener('click', () => {
      output.innerHTML = `
        <p><strong>Person object:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>${JSON.stringify(person, null, 2)}</code></pre>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          Objects lagrer relatert data sammen med key-value pairs.
        </p>
      `;
    });
  }
  
  // Destructuring demo
  if (destructureBtn) {
    destructureBtn.addEventListener('click', () => {
      const { name, age, city } = person;
      output.innerHTML = `
        <p><strong>Destructuring:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>const { name, age, city } = person;

console.log(name);  // "${name}"
console.log(age);   // ${age}
console.log(city);  // "${city}"</code></pre>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          Destructuring lar deg pakke ut properties fra et object.
        </p>
      `;
    });
  }
  
  // Spread demo
  if (spreadBtn) {
    spreadBtn.addEventListener('click', () => {
      const updatedPerson = { ...person, age: 26, country: 'Norge' };
      output.innerHTML = `
        <p><strong>Spread operator:</strong></p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>const updatedPerson = {
  ...person,
  age: 26,
  country: 'Norge'
};

// Result:
${JSON.stringify(updatedPerson, null, 2)}</code></pre>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          Spread operator (...) kopierer properties og lar deg overskrive/legge til nye.
        </p>
      `;
    });
  }
}

/**
 * ==========================================
 * ASYNC DEMO
 * ==========================================
 */

function initAsyncDemo() {
  const fetchBtn = document.getElementById('fetchDataBtn');
  const asyncBtn = document.getElementById('asyncAwaitBtn');
  const output = document.getElementById('asyncOutput');
  
  if (!output) return;
  
  // Simulate API call
  function fakeAPICall() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: 'Data hentet!',
          data: ['Item 1', 'Item 2', 'Item 3'],
          timestamp: new Date().toLocaleTimeString('no-NO')
        });
      }, 1500);
    });
  }
  
  // Fetch demo
  if (fetchBtn) {
    fetchBtn.addEventListener('click', () => {
      output.innerHTML = '<p style="color: var(--accent-color);">⏳ Henter data...</p>';
      
      fakeAPICall().then(result => {
        output.innerHTML = `
          <p style="color: var(--success-color);">✅ ${result.message}</p>
          <p><strong>Data:</strong> ${result.data.join(', ')}</p>
          <p><strong>Tid:</strong> ${result.timestamp}</p>
          <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto;"><code>fakeAPICall()
  .then(result => {
    console.log(result);
  });</code></pre>
          <p style="color: var(--text-muted); margin-top: 1rem;">
            Promises håndterer asynkrone operasjoner med <code>.then()</code>
          </p>
        `;
      });
    });
  }
  
  // Async/await demo
  if (asyncBtn) {
    asyncBtn.addEventListener('click', async () => {
      output.innerHTML = '<p style="color: var(--accent-color);">⏳ Henter data med async/await...</p>';
      
      try {
        const result = await fakeAPICall();
        output.innerHTML = `
          <p style="color: var(--success-color);">✅ ${result.message}</p>
          <p><strong>Data:</strong> ${result.data.join(', ')}</p>
          <p><strong>Tid:</strong> ${result.timestamp}</p>
          <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto;"><code>async function getData() {
  const result = await fakeAPICall();
  console.log(result);
}

getData();</code></pre>
          <p style="color: var(--text-muted); margin-top: 1rem;">
            <code>async/await</code> gjør asynkron kode mer lesbar og enklere å forstå.
          </p>
        `;
      } catch (error) {
        output.innerHTML = `<p style="color: var(--error-color);">❌ Feil: ${error.message}</p>`;
      }
    });
  }
}

/**
 * ==========================================
 * STORAGE DEMO
 * ==========================================
 */

function initStorageDemo() {
  const input = document.getElementById('storageInput');
  const saveBtn = document.getElementById('saveBtn');
  const loadBtn = document.getElementById('loadBtn');
  const clearBtn = document.getElementById('clearBtn');
  const output = document.getElementById('storageOutput');
  
  if (!output) return;
  
  // Load existing data on init
  const existing = localStorage.getItem('playgroundData');
  if (existing) {
    output.innerHTML = `
      <p style="color: var(--text-secondary);">💾 Lagret data funnet:</p>
      <p style="color: var(--primary-color); font-weight: bold;">"${existing}"</p>
    `;
  }
  
  // Save
  if (saveBtn && input) {
    saveBtn.addEventListener('click', () => {
      const value = input.value.trim();
      if (!value) {
        output.innerHTML = '<p style="color: var(--error-color);">⚠️ Skriv noe først!</p>';
        return;
      }
      
      localStorage.setItem('playgroundData', value);
      output.innerHTML = `
        <p style="color: var(--success-color);">✅ Lagret til localStorage!</p>
        <p><strong>Data:</strong> "${value}"</p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto;"><code>localStorage.setItem('playgroundData', '${value}');</code></pre>
        <p style="color: var(--text-muted); margin-top: 1rem;">
          Data blir værende selv etter du lukker browseren!
        </p>
      `;
      input.value = '';
    });
  }
  
  // Load
  if (loadBtn) {
    loadBtn.addEventListener('click', () => {
      const data = localStorage.getItem('playgroundData');
      if (data) {
        output.innerHTML = `
          <p style="color: var(--success-color);">✅ Lastet fra localStorage!</p>
          <p><strong>Data:</strong> "${data}"</p>
          <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto;"><code>const data = localStorage.getItem('playgroundData');
console.log(data);  // "${data}"</code></pre>
        `;
      } else {
        output.innerHTML = '<p style="color: var(--text-muted);">📭 Ingen lagret data funnet.</p>';
      }
    });
  }
  
  // Clear
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      localStorage.removeItem('playgroundData');
      output.innerHTML = `
        <p style="color: var(--success-color);">✅ Data slettet fra localStorage!</p>
        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto;"><code>localStorage.removeItem('playgroundData');</code></pre>
      `;
    });
  }
}

/**
 * ============================================
 * SLUTT PÅ PLAYGROUND.JS
 * ============================================
 * 
 * Funksjoner implementert:
 * ✅ Tabs system
 * ✅ HTML demo (semantic tags, forms, lists)
 * ✅ CSS demo (flexbox, grid, animations)
 * ✅ Code Editor (HTML, CSS, JS med live preview)
 * ✅ Variables demo (input og output)
 * ✅ Functions demo (matematikk)
 * ✅ Arrays demo (map, filter, reduce)
 * ✅ Objects demo (create, destructure, spread)
 * ✅ DOM manipulation demo (endre styling)
 * ✅ Events demo (click counter)
 * ✅ Async demo (promises, async/await)
 * ✅ Storage demo (localStorage)
 * 
 * Konsepter vist:
 * - HTML semantic tags, forms, lists
 * - CSS flexbox, grid, animations
 * - Event listeners
 * - DOM manipulation
 * - Functions
 * - Arrays & Array methods
 * - Objects & Destructuring
 * - Conditionals
 * - Animations
 * - Promises & Async/Await
 * - LocalStorage
 */
