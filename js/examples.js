/**
 * ============================================
 * EXAMPLES.JS
 * ============================================
 * Plassering: /js/examples.js
 * 
 * Ekstra code examples og tutorials.
 * Denne filen inneholder mer avanserte eksempler
 * som kan brukes til læring.
 * 
 * Konsepter demonstrert:
 * - LocalStorage
 * - Array methods
 * - Object manipulation
 * - Async patterns
 */

/**
 * ==========================================
 * LOCALSTORAGE EXAMPLE
 * ==========================================
 * LocalStorage lar deg lagre data i browseren
 * Data blir værende selv etter du lukker siden
 */

/**
 * Lagrer data i localStorage
 */
export function saveToLocalStorage(key, value) {
  try {
    // Konverter til JSON string
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
    console.log(`✅ Lagret ${key} i localStorage`);
  } catch (error) {
    console.error('❌ Kunne ikke lagre til localStorage:', error);
  }
}

/**
 * Henter data fra localStorage
 */
export function getFromLocalStorage(key) {
  try {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue === null) {
      return null;
    }
    // Parse JSON string tilbake til objekt
    return JSON.parse(jsonValue);
  } catch (error) {
    console.error('❌ Kunne ikke hente fra localStorage:', error);
    return null;
  }
}

/**
 * Sletter data fra localStorage
 */
export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
  console.log(`🗑️ Slettet ${key} fra localStorage`);
}

/**
 * Eksempel bruk:
 * 
 * // Lagre brukerdata
 * saveToLocalStorage('user', { name: 'Ola', age: 25 });
 * 
 * // Hent brukerdata
 * const user = getFromLocalStorage('user');
 * console.log(user.name); // "Ola"
 * 
 * // Slett brukerdata
 * removeFromLocalStorage('user');
 */

/**
 * ==========================================
 * ARRAY METHODS EXAMPLES
 * ==========================================
 * Array methods er kraftige verktøy for å jobbe med lister
 */

/**
 * Eksempel data - array med tall
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * MAP - Transformerer hvert element
 * Lager nytt array med samme lengde
 */
export function mapExample() {
  // Dobler alle tall
  const doubled = numbers.map(num => num * 2);
  console.log('Original:', numbers);
  console.log('Doubled:', doubled);
  // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  
  return doubled;
}

/**
 * FILTER - Filtrerer elementer basert på condition
 * Lager nytt array med kun elementer som matcher
 */
export function filterExample() {
  // Finn alle partall
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log('Even numbers:', evenNumbers);
  // Output: [2, 4, 6, 8, 10]
  
  return evenNumbers;
}

/**
 * REDUCE - Reduserer array til én verdi
 * Nyttig for summer, produkter, etc.
 */
export function reduceExample() {
  // Summer alle tall
  const sum = numbers.reduce((total, num) => total + num, 0);
  console.log('Sum:', sum);
  // Output: 55
  
  return sum;
}

/**
 * FIND - Finner første element som matcher
 */
export function findExample() {
  // Finn første tall større enn 5
  const found = numbers.find(num => num > 5);
  console.log('First number > 5:', found);
  // Output: 6
  
  return found;
}

/**
 * SOME - Sjekker om minst ett element matcher
 */
export function someExample() {
  // Er det noen tall større enn 8?
  const hasLargeNumber = numbers.some(num => num > 8);
  console.log('Has number > 8:', hasLargeNumber);
  // Output: true
  
  return hasLargeNumber;
}

/**
 * EVERY - Sjekker om alle elementer matcher
 */
export function everyExample() {
  // Er alle tall positive?
  const allPositive = numbers.every(num => num > 0);
  console.log('All positive:', allPositive);
  // Output: true
  
  return allPositive;
}

/**
 * ==========================================
 * OBJECT MANIPULATION
 * ==========================================
 */

/**
 * Eksempel person objekt
 */
const person = {
  firstName: 'Ola',
  lastName: 'Nordmann',
  age: 25,
  city: 'Oslo',
  hobbies: ['fotball', 'gaming', 'koding']
};

/**
 * Object destructuring - Pakker ut properties
 */
export function destructuringExample() {
  // Pakk ut properties
  const { firstName, lastName, age } = person;
  
  console.log(`${firstName} ${lastName} er ${age} år`);
  // Output: "Ola Nordmann er 25 år"
  
  return { firstName, lastName, age };
}

/**
 * Spread operator - Kopierer og utvider objekter
 */
export function spreadExample() {
  // Lag kopi med nye properties
  const updatedPerson = {
    ...person,
    age: 26,
    country: 'Norge'
  };
  
  console.log('Original:', person);
  console.log('Updated:', updatedPerson);
  
  return updatedPerson;
}

/**
 * Object.keys, Object.values, Object.entries
 */
export function objectMethodsExample() {
  // Hent alle keys
  const keys = Object.keys(person);
  console.log('Keys:', keys);
  // Output: ['firstName', 'lastName', 'age', 'city', 'hobbies']
  
  // Hent alle values
  const values = Object.values(person);
  console.log('Values:', values);
  
  // Hent key-value pairs
  const entries = Object.entries(person);
  console.log('Entries:', entries);
  
  return { keys, values, entries };
}

/**
 * ==========================================
 * ASYNC PATTERNS
 * ==========================================
 */

/**
 * Promise example - Simulerer API call
 */
export function promiseExample() {
  return new Promise((resolve, reject) => {
    // Simuler delay
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate
      
      if (success) {
        resolve({ message: 'Success!', data: [1, 2, 3] });
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}

/**
 * Async/await example
 */
export async function asyncAwaitExample() {
  try {
    console.log('⏳ Fetching data...');
    const result = await promiseExample();
    console.log('✅ Data received:', result);
    return result;
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

/**
 * Multiple async calls - Promise.all
 */
export async function multipleAsyncExample() {
  try {
    console.log('⏳ Fetching multiple data sources...');
    
    // Kjør alle samtidig
    const [result1, result2, result3] = await Promise.all([
      promiseExample(),
      promiseExample(),
      promiseExample()
    ]);
    
    console.log('✅ All data received');
    return [result1, result2, result3];
  } catch (error) {
    console.error('❌ One or more requests failed:', error);
    throw error;
  }
}

/**
 * ==========================================
 * UTILITY FUNCTIONS
 * ==========================================
 */

/**
 * Debounce - Begrenser hvor ofte en funksjon kjøres
 * Nyttig for search input, scroll events, etc.
 */
export function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Throttle - Sikrer at funksjon kun kjøres én gang per periode
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Deep clone - Lager dyp kopi av objekt
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Random number between min and max
 */
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Shuffle array - Blander array tilfeldig
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Format currency - Formaterer tall som valuta
 */
export function formatCurrency(amount, currency = 'NOK') {
  return new Intl.NumberFormat('no-NO', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

/**
 * ==========================================
 * CONSOLE EXAMPLES
 * ==========================================
 * Kjør disse i browser console for å teste!
 */

console.log('%c📚 Examples.js lastet!', 'color: #7c3aed; font-size: 16px; font-weight: bold;');
console.log('%cPrøv disse funksjonene i console:', 'color: #06b6d4; font-size: 14px;');
console.log(`
  Array Methods:
  - mapExample()
  - filterExample()
  - reduceExample()
  
  Object Methods:
  - destructuringExample()
  - spreadExample()
  
  Async:
  - asyncAwaitExample()
  
  LocalStorage:
  - saveToLocalStorage('test', { hello: 'world' })
  - getFromLocalStorage('test')
`);

/**
 * ============================================
 * SLUTT PÅ EXAMPLES.JS
 * ============================================
 * 
 * Dette er en samling av nyttige eksempler og patterns
 * som kan brukes til læring og referanse.
 * 
 * Konsepter vist:
 * ✅ LocalStorage
 * ✅ Array methods (map, filter, reduce, find, some, every)
 * ✅ Object manipulation (destructuring, spread)
 * ✅ Async patterns (Promise, async/await, Promise.all)
 * ✅ Utility functions (debounce, throttle, etc.)
 * 
 * Bruk disse som inspirasjon for egne prosjekter!
 */
