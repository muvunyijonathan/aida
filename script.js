// DOM Elements
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');
const navLinks = document.querySelectorAll('.nav-link');

// Menu toggle and close functions
function toggleMenu() {
  const isOpen = siteNav.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  navToggle.classList.toggle('open', isOpen);
}

function closeMenu() {
  siteNav.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.classList.remove('open');
}

// Menu toggle button
navToggle.addEventListener('click', toggleMenu);

// Close menu when clicking a nav link
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close menu on window resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 720) {
    closeMenu();
  }
});

// Form handling
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation
  if (!name || !email || !subject || !message) {
    formResponse.textContent = '⚠️ Veuillez remplir tous les champs obligatoires.';
    formResponse.style.color = '#e74c3c';
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formResponse.textContent = '⚠️ Adresse email invalide.';
    formResponse.style.color = '#e74c3c';
    return;
  }

  // If using Formspree, the form will submit automatically
  // For client-side only, show success message
  formResponse.textContent = '✅ Merci! Votre message a bien été reçu. Nous vous contacterons bientôt.';
  formResponse.style.color = 'var(--secondary)';
  
  // Reset form
  contactForm.reset();
  
  // Optional: Remove success message after 5 seconds
  setTimeout(() => {
    formResponse.textContent = '';
  }, 5000);
});

// Smooth scroll behavior for nav links (bonus enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!navToggle.contains(event.target) && !siteNav.contains(event.target)) {
    closeMenu();
  }
});
