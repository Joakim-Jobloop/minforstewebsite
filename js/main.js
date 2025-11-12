/**
 * ============================================
 * MAIN.JS
 * ============================================
 * Plassering: /js/main.js
 * 
 * Dette er hovedfilen for all JavaScript.
 * Her koordinerer vi all funksjonalitet på siden.
 * 
 * Konsepter demonstrert:
 * - ES6 Modules (import/export)
 * - Event listeners
 * - DOM manipulation
 * - Async/await
 * - Arrow functions
 */

/**
 * ==========================================
 * IMPORTS
 * ==========================================
 * Importerer funksjoner fra andre filer
 */
import { initCards, filterCards, searchCards } from './cards.js';
import { initPlayground } from './playground.js';
import { initModal } from './modal.js';
import { initForm } from './form.js';
import { initTips } from './tips.js';

/**
 * ==========================================
 * GLOBAL VARIABLES
 * ==========================================
 * Variabler som brukes på tvers av funksjoner
 */

// DOM Elements - Henter referanser til HTML elementer
const scrollToTopBtn = document.getElementById('scrollToTop');
const header = document.querySelector('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

/**
 * ==========================================
 * INITIALIZATION
 * ==========================================
 * Kjører når siden er ferdig lastet
 */

/**
 * DOMContentLoaded event
 * Venter til HTML er ferdig lastet før vi kjører JavaScript
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Min Første Website er lastet!');
  
  // Initialiser alle funksjoner
  initScrollToTop();
  initSmoothScroll();
  initHeaderScroll();
  initMobileMenu();
  initActiveNavLink();
  initCards();
  initPlayground();
  initModal();
  initForm();
  initTips(); // Starter tip system
  
  console.log('✅ Alle funksjoner er initialisert!');
  console.log('💡 Tips: Åpne DevTools (F12) for å se mer info og prøve eksempler!');
});

/**
 * ==========================================
 * SCROLL TO TOP BUTTON
 * ==========================================
 * Viser/skjuler knapp basert på scroll posisjon
 */

function initScrollToTop() {
  /**
   * Sjekker scroll posisjon og viser/skjuler knapp
   */
  function toggleScrollButton() {
    // Hvis bruker har scrollet mer enn 300px, vis knappen
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }
  
  // Lytt til scroll event
  window.addEventListener('scroll', toggleScrollButton);
  
  // Klikk på knappen - scroll til toppen
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  });
}

/**
 * ==========================================
 * SMOOTH SCROLL FOR NAVIGATION
 * ==========================================
 * Smooth scroll når du klikker på nav lenker
 */

function initSmoothScroll() {
  // Hent alle lenker som starter med #
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Hent href attributt (f.eks. "#about")
      const href = link.getAttribute('href');
      
      // Hvis det er en gyldig anchor
      if (href !== '#' && href !== '#top') {
        e.preventDefault(); // Stopp default oppførsel
        
        // Finn elementet
        const target = document.querySelector(href);
        
        if (target) {
          // Scroll til elementet
          const headerHeight = header.offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Lukk mobil menu hvis åpen
          if (navList.classList.contains('open')) {
            navList.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });
}

/**
 * ==========================================
 * HEADER SCROLL EFFECT
 * ==========================================
 * Endrer header styling når bruker scroller
 */

function initHeaderScroll() {
  window.addEventListener('scroll', () => {
    // Hvis scrollet mer enn 50px, legg til "scrolled" klasse
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * ==========================================
 * MOBILE MENU
 * ==========================================
 * Åpner/lukker mobil navigasjon
 */

function initMobileMenu() {
  if (!mobileMenuBtn) return; // Hvis knappen ikke finnes, avslutt
  
  const menuIcon = document.getElementById('menuIcon');
  
  mobileMenuBtn.addEventListener('click', () => {
    // Toggle "open" klasse på nav list
    const isOpen = navList.classList.toggle('open');
    
    // Oppdater aria-expanded for accessibility
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    
    // Bytt ikon
    if (menuIcon) {
      menuIcon.src = isOpen ? '/assets/icons/close.png' : '/assets/icons/menu.png';
    }
    
    // Forhindre scrolling når menu er åpen
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Lukk menu når bruker klikker utenfor
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header') && navList.classList.contains('open')) {
      navList.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      if (menuIcon) {
        menuIcon.src = '/assets/icons/menu.png';
      }
      document.body.style.overflow = '';
    }
  });
}

/**
 * ==========================================
 * ACTIVE NAV LINK
 * ==========================================
 * Highlighter hvilken seksjon du er på
 */

function initActiveNavLink() {
  // Hent alle sections
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      // Hvis vi er i denne seksjonen
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Fjern active fra alle lenker
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Legg til active på riktig lenke
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
    
    // Hvis på toppen, highlight "Hjem"
    if (scrollY < 100) {
      navLinks.forEach(link => link.classList.remove('active'));
      const homeLink = document.querySelector('.nav-link[href="#top"]');
      if (homeLink) {
        homeLink.classList.add('active');
      }
    }
  });
}

/**
 * ==========================================
 * UTILITY FUNCTIONS
 * ==========================================
 * Hjelpefunksjoner som kan brukes overalt
 */

/**
 * Debounce function - Begrenser hvor ofte en funksjon kjøres
 * Nyttig for scroll og resize events
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Format date - Formaterer dato til norsk format
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('no-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * ==========================================
 * CONSOLE STYLING
 * ==========================================
 * Fancy console melding for utviklere 😎
 */

console.log(
  '%c🚀 Min Første Website v2.0 ',
  'background: linear-gradient(135deg, #7c3aed, #06b6d4); color: white; padding: 10px 20px; border-radius: 8px; font-size: 16px; font-weight: bold;'
);

console.log(
  '%cLaget med ❤️ for læring',
  'color: #7c3aed; font-size: 14px; font-style: italic;'
);

console.log(
  '%cTips: Åpne DevTools og utforsk koden! 🔍',
  'color: #06b6d4; font-size: 12px;'
);

/**
 * ============================================
 * SLUTT PÅ MAIN.JS
 * ============================================
 * 
 * Dette er hovedfilen som koordinerer all JavaScript.
 * 
 * Funksjoner implementert:
 * ✅ Scroll to top button
 * ✅ Smooth scroll navigation
 * ✅ Header scroll effect
 * ✅ Mobile menu
 * ✅ Active nav link highlighting
 * ✅ Imports fra andre moduler
 * 
 * Neste filer:
 * - cards.js (people cards med filter/search)
 * - playground.js (interaktiv playground)
 * - modal.js (popup vinduer)
 * - form.js (form validering)
 */
