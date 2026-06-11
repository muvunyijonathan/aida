const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

navToggle.addEventListener('click', () => {
  const expanded = siteNav.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', expanded);
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formResponse.textContent = 'Merci de remplir tous les champs avant d’envoyer.';
    formResponse.style.color = 'crimson';
    return;
  }

  formResponse.style.color = 'var(--secondary)';
  formResponse.textContent = 'Merci, votre message a bien été pris en compte. Nous vous contacterons bientôt.';
  contactForm.reset();
});
