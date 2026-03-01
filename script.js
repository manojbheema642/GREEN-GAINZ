const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

const leadForm = document.getElementById('leadForm');
const formNote = document.getElementById('formNote');

if (leadForm && formNote) {
  leadForm.addEventListener('submit', () => {
    formNote.textContent = 'Thanks! Your email app will open so you can send your request.';
  });
}
