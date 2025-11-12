/**
 * ============================================
 * CARDS.JS
 * ============================================
 * Plassering: /js/cards.js
 * 
 * Håndterer person cards - henting, visning, filter og søk.
 * 
 * Konsepter demonstrert:
 * - Fetch API (hente data fra JSON)
 * - Async/await
 * - Array methods (map, filter)
 * - Template literals
 * - DOM manipulation
 * - Event listeners
 */

/**
 * ==========================================
 * GLOBAL VARIABLES
 * ==========================================
 */

// DOM Elements
const cardContainer = document.getElementById('cardContainer');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

// Data storage
let allPeople = []; // Lagrer alle personer
let filteredPeople = []; // Lagrer filtrerte personer

/**
 * ==========================================
 * INITIALIZATION
 * ==========================================
 */

/**
 * Initialiserer cards funksjonalitet
 * Kalles fra main.js
 */
export async function initCards() {
  console.log('📇 Initialiserer cards...');
  
  try {
    // Hent data fra JSON fil
    allPeople = await fetchPeople();
    filteredPeople = allPeople;
    
    // Vis cards
    renderCards(allPeople);
    
    // Sett opp event listeners
    setupEventListeners();
    
    console.log(`✅ Lastet ${allPeople.length} personer`);
  } catch (error) {
    console.error('❌ Feil ved lasting av personer:', error);
    showError();
  }
}

/**
 * ==========================================
 * FETCH DATA
 * ==========================================
 */

/**
 * Henter personer fra JSON fil
 * Async function - returnerer et Promise
 */
async function fetchPeople() {
  // Vis loading state
  showLoading();
  
  try {
    // Fetch - henter data fra server/fil
    const response = await fetch('data/people.json');
    
    // Sjekk om request var vellykket
    if (!response.ok) {
      throw new Error('Kunne ikke laste personer');
    }
    
    // Parse JSON data
    const data = await response.json();
    
    // Skjul loading state
    hideLoading();
    
    return data;
  } catch (error) {
    hideLoading();
    throw error;
  }
}

/**
 * ==========================================
 * RENDER CARDS
 * ==========================================
 */

/**
 * Viser cards i DOM
 * @param {Array} people - Array med person objekter
 */
function renderCards(people) {
  // Tøm container
  cardContainer.innerHTML = '';
  
  // Hvis ingen personer, vis empty state
  if (people.length === 0) {
    showEmpty();
    return;
  }
  
  // Skjul empty state
  hideEmpty();
  
  // Loop gjennom personer og lag cards
  // forEach() - kjører funksjon for hvert element
  people.forEach(person => {
    const card = createCard(person);
    cardContainer.appendChild(card);
  });
}

/**
 * Lager et card element
 * @param {Object} person - Person objekt
 * @returns {HTMLElement} - Card element
 */
function createCard(person) {
  // createElement - lager nytt HTML element
  const card = document.createElement('div');
  card.classList.add('card');
  
  // Velg avatar basert på kjønn (med spesiell håndtering for Joakim)
  let avatarSrc;
  let genderText;
  let ageText;
  
  if (person.isMale === 'goblin') {
    // Spesiell håndtering for Joakim
    avatarSrc = '/assets/images/goblin-avatar.png';
    genderText = '🧙‍♂️ Mystisk Goblin';
    ageText = person.age; // "too old"
  } else {
    avatarSrc = person.isMale 
      ? '/assets/images/avatar-man.png' 
      : '/assets/images/avatar-kvinne.png';
    genderText = person.isMale ? 'Mann' : 'Kvinne';
    ageText = `${person.age} år`;
  }
  
  // Template literal - string med variabler
  card.innerHTML = `
    <div class="card-avatar ${person.isMale === 'goblin' ? 'goblin-avatar' : ''}">
      <img src="${avatarSrc}" alt="${person.name} avatar" />
    </div>
    <h2 class="cardHeading">${person.name}</h2>
    <p><strong>Alder:</strong> ${ageText}</p>
    <p><strong>Kjønn:</strong> ${genderText}</p>
    <p><strong>Hobbyer:</strong> ${person.hobbies.join(', ')}</p>
  `;
  
  // Legg til click event for å vise detaljer i modal
  card.addEventListener('click', () => {
    showPersonDetails(person);
  });
  
  // Legg til hover effekt med data attributt
  const genderAttr = person.isMale === 'goblin' ? 'goblin' : (person.isMale ? 'male' : 'female');
  card.setAttribute('data-gender', genderAttr);
  
  return card;
}

/**
 * ==========================================
 * FILTER & SEARCH
 * ==========================================
 */

/**
 * Setter opp event listeners for filter og søk
 */
function setupEventListeners() {
  // Search input - lytt til input event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      searchCards(searchTerm);
    });
  }
  
  // Filter buttons - lytt til click event
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Fjern active fra alle knapper
      filterButtons.forEach(b => b.classList.remove('active'));
      
      // Legg til active på klikket knapp
      btn.classList.add('active');
      
      // Hent filter verdi
      const filter = btn.getAttribute('data-filter');
      filterCards(filter);
    });
  });
}

/**
 * Filtrerer cards basert på kjønn
 * @param {string} filter - 'all', 'male', eller 'female'
 */
export function filterCards(filter) {
  if (filter === 'all') {
    filteredPeople = allPeople;
  } else if (filter === 'male') {
    // filter() - lager nytt array med elementer som matcher condition
    filteredPeople = allPeople.filter(person => person.isMale === true);
  } else if (filter === 'female') {
    filteredPeople = allPeople.filter(person => person.isMale === false);
  }
  
  // Hvis det er søk aktiv, søk i filtrerte resultater
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  if (searchTerm) {
    searchCards(searchTerm);
  } else {
    renderCards(filteredPeople);
  }
}

/**
 * Søker i cards basert på navn
 * @param {string} searchTerm - Søkeord
 */
export function searchCards(searchTerm) {
  if (!searchTerm) {
    renderCards(filteredPeople);
    return;
  }
  
  // Søk i filtrerte personer
  const searchResults = filteredPeople.filter(person => 
    person.name.toLowerCase().includes(searchTerm)
  );
  
  renderCards(searchResults);
}

/**
 * ==========================================
 * PERSON DETAILS MODAL
 * ==========================================
 */

/**
 * Viser person detaljer i modal
 * @param {Object} person - Person objekt
 */
function showPersonDetails(person) {
  // Import modal funksjon
  import('./modal.js').then(module => {
    let avatarSrc;
    let genderText;
    let ageText;
    let borderColor = 'var(--primary-color)';
    
    if (person.isMale === 'goblin') {
      avatarSrc = '/assets/images/goblin-avatar.png';
      genderText = '🧙‍♂️ Mystisk Goblin fra Eldoria';
      ageText = person.age;
      borderColor = 'var(--accent-color)';
    } else {
      avatarSrc = person.isMale 
        ? '/assets/images/avatar-man.png' 
        : '/assets/images/avatar-kvinne.png';
      genderText = person.isMale ? 'Mann' : 'Kvinne';
      ageText = `${person.age} år`;
    }
    
    const content = `
      <div style="text-align: center;">
        <div style="width: 120px; height: 120px; margin: 0 auto 1.5rem; border-radius: 50%; overflow: hidden; border: 4px solid ${borderColor};">
          <img src="${avatarSrc}" alt="${person.name}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <h2>${person.name}</h2>
      </div>
      <div style="margin-top: 1.5rem;">
        <p><strong>Alder:</strong> ${ageText}</p>
        <p><strong>Kjønn:</strong> ${genderText}</p>
        <p><strong>Hobbyer:</strong></p>
        <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary);">
          ${person.hobbies.map(hobby => `<li>${hobby}</li>`).join('')}
        </ul>
      </div>
    `;
    module.openModal(content);
  });
}

/**
 * ==========================================
 * LOADING & EMPTY STATES
 * ==========================================
 */

function showLoading() {
  if (loadingState) loadingState.style.display = 'block';
  if (cardContainer) cardContainer.style.display = 'none';
}

function hideLoading() {
  if (loadingState) loadingState.style.display = 'none';
  if (cardContainer) cardContainer.style.display = 'grid';
}

function showEmpty() {
  if (emptyState) emptyState.style.display = 'block';
}

function hideEmpty() {
  if (emptyState) emptyState.style.display = 'none';
}

function showError() {
  cardContainer.innerHTML = `
    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--error-color);">
      <p>❌ Kunne ikke laste personer. Prøv igjen senere.</p>
    </div>
  `;
}

/**
 * ============================================
 * SLUTT PÅ CARDS.JS
 * ============================================
 * 
 * Funksjoner implementert:
 * ✅ Fetch data fra JSON
 * ✅ Render cards dynamisk
 * ✅ Filter basert på kjønn
 * ✅ Søk basert på navn
 * ✅ Vis detaljer i modal
 * ✅ Loading og empty states
 * 
 * Konsepter vist:
 * - Async/await
 * - Fetch API
 * - Array methods (map, filter, forEach)
 * - Template literals
 * - Event listeners
 * - DOM manipulation
 */
