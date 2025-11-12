/**
 * ============================================
 * FORM.JS
 * ============================================
 * Plassering: /js/form.js
 * 
 * Håndterer form validering og submission.
 * 
 * Konsepter demonstrert:
 * - Form handling
 * - Input validation
 * - Regular expressions
 * - Event prevention
 * - Error handling
 */

/**
 * ==========================================
 * GLOBAL VARIABLES
 * ==========================================
 */

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('contactName');
const emailInput = document.getElementById('contactEmail');
const messageInput = document.getElementById('contactMessage');
const formSuccess = document.getElementById('formSuccess');

/**
 * ==========================================
 * INITIALIZATION
 * ==========================================
 */

export function initForm() {
  console.log('📝 Initialiserer form...');
  
  if (!contactForm) return;
  
  // Form submit event
  contactForm.addEventListener('submit', handleSubmit);
  
  // Real-time validation
  if (nameInput) {
    nameInput.addEventListener('blur', () => validateName());
    nameInput.addEventListener('input', () => clearError('nameError'));
  }
  
  if (emailInput) {
    emailInput.addEventListener('blur', () => validateEmail());
    emailInput.addEventListener('input', () => clearError('emailError'));
  }
  
  if (messageInput) {
    messageInput.addEventListener('blur', () => validateMessage());
    messageInput.addEventListener('input', () => clearError('messageError'));
  }
  
  console.log('✅ Form klar!');
}

/**
 * ==========================================
 * FORM SUBMISSION
 * ==========================================
 */

/**
 * Håndterer form submission
 * @param {Event} e - Submit event
 */
function handleSubmit(e) {
  // Forhindre default form submission (page reload)
  e.preventDefault();
  
  // Valider alle felt
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();
  
  // Hvis alle felt er valide
  if (isNameValid && isEmailValid && isMessageValid) {
    // Hent verdier
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };
    
    console.log('📧 Form data:', formData);
    
    // Vis success melding
    showSuccess();
    
    // Reset form
    contactForm.reset();
    
    // Fjern validation classes
    nameInput.classList.remove('valid');
    emailInput.classList.remove('valid');
    messageInput.classList.remove('valid');
    
    // I en ekte app ville vi sendt data til server her:
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(formData)
    // });
  } else {
    console.log('❌ Form validation failed');
  }
}

/**
 * ==========================================
 * VALIDATION FUNCTIONS
 * ==========================================
 */

/**
 * Validerer navn
 * @returns {boolean} - True hvis valid
 */
function validateName() {
  const value = nameInput.value.trim();
  const errorElement = document.getElementById('nameError');
  
  if (value.length === 0) {
    showError(nameInput, errorElement, 'Navn er påkrevd');
    return false;
  }
  
  if (value.length < 2) {
    showError(nameInput, errorElement, 'Navn må være minst 2 tegn');
    return false;
  }
  
  // Valid
  showValid(nameInput, errorElement);
  return true;
}

/**
 * Validerer e-post
 * @returns {boolean} - True hvis valid
 */
function validateEmail() {
  const value = emailInput.value.trim();
  const errorElement = document.getElementById('emailError');
  
  if (value.length === 0) {
    showError(emailInput, errorElement, 'E-post er påkrevd');
    return false;
  }
  
  // Regular expression for e-post validering
  // Regex - pattern matching for strings
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(value)) {
    showError(emailInput, errorElement, 'Ugyldig e-postadresse');
    return false;
  }
  
  // Valid
  showValid(emailInput, errorElement);
  return true;
}

/**
 * Validerer melding
 * @returns {boolean} - True hvis valid
 */
function validateMessage() {
  const value = messageInput.value.trim();
  const errorElement = document.getElementById('messageError');
  
  if (value.length === 0) {
    showError(messageInput, errorElement, 'Melding er påkrevd');
    return false;
  }
  
  if (value.length < 10) {
    showError(messageInput, errorElement, 'Melding må være minst 10 tegn');
    return false;
  }
  
  // Valid
  showValid(messageInput, errorElement);
  return true;
}

/**
 * ==========================================
 * UI HELPER FUNCTIONS
 * ==========================================
 */

/**
 * Viser error state
 * @param {HTMLElement} input - Input element
 * @param {HTMLElement} errorElement - Error message element
 * @param {string} message - Error message
 */
function showError(input, errorElement, message) {
  input.classList.add('invalid');
  input.classList.remove('valid');
  errorElement.textContent = message;
}

/**
 * Viser valid state
 * @param {HTMLElement} input - Input element
 * @param {HTMLElement} errorElement - Error message element
 */
function showValid(input, errorElement) {
  input.classList.add('valid');
  input.classList.remove('invalid');
  errorElement.textContent = '';
}

/**
 * Fjerner error
 * @param {string} errorId - ID til error element
 */
function clearError(errorId) {
  const errorElement = document.getElementById(errorId);
  if (errorElement) {
    errorElement.textContent = '';
  }
}

/**
 * Viser success melding
 */
function showSuccess() {
  formSuccess.style.display = 'block';
  
  // Scroll til success melding
  formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Skjul etter 5 sekunder
  setTimeout(() => {
    formSuccess.style.display = 'none';
  }, 5000);
}

/**
 * ============================================
 * SLUTT PÅ FORM.JS
 * ============================================
 * 
 * Funksjoner implementert:
 * ✅ Form submission handling
 * ✅ Real-time validation
 * ✅ Error messages
 * ✅ Success state
 * ✅ Input validation (name, email, message)
 * 
 * Konsepter vist:
 * - Form handling
 * - Event prevention
 * - Regular expressions
 * - Input validation
 * - Error handling
 * - DOM manipulation
 */
