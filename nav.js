// Navbar scroll-effekt
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburgermeny
const hamburger = document.querySelector('.hamburger');
const mobilMeny = document.querySelector('.mobil-meny');
if (hamburger && mobilMeny) {
  hamburger.addEventListener('click', () => {
    mobilMeny.classList.toggle('åpen');
  });
}

// Marker aktiv lenke
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobil-meny a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    a.classList.add('aktiv');
  }
});
