// =========================================
// Tela de carregamento
// =========================================
const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loaderFill');
const loaderPercent = document.getElementById('loaderPercent');

let progress = 0;
const loadInterval = setInterval(() => {
  progress += Math.floor(Math.random() * 12) + 4;
  if (progress >= 100) {
    progress = 100;
    clearInterval(loadInterval);
    setTimeout(() => loader.classList.add('hidden'), 300);
  }
  loaderFill.style.width = progress + '%';
  loaderPercent.textContent = progress + '%';
}, 120);

// =========================================
// Ano automático no rodapé
// =========================================
document.getElementById('year').textContent = new Date().getFullYear();

// =========================================
// Menu mobile
// =========================================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================
// Efeito de máquina de escrever no hero
// =========================================
const roles = [
  'Desenvolvedor Front-end',
  'Freelancer',
  'Criador de Interfaces',
  'Focado em UI & Responsividade'
];
const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typewriterEl.textContent = currentRole.slice(0, charIndex);
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typewriterEl.textContent = currentRole.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// =========================================
// Formulário de contato (sem backend ainda)
// Troque este trecho por um envio real (ex: fetch
// para um serviço como Formspree, EmailJS, etc.)
// =========================================
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();

  if (!form.checkValidity()) {
    status.textContent = 'Preencha todos os campos corretamente.';
    return;
  }

  status.textContent = `Obrigado, ${nome}! Sua mensagem foi registrada (envio real ainda não configurado).`;
  form.reset();
});
