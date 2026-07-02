// Navbar scroll-effekt
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const mobilMeny = document.querySelector('.mobil-meny');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburgermeny
function lukkMeny() {
  if (!mobilMeny) return;
  mobilMeny.classList.remove('åpen');
  if (hamburger) hamburger.classList.remove('aktiv');
}

function åpneMeny() {
  if (!mobilMeny) return;
  mobilMeny.classList.add('åpen');
  if (hamburger) hamburger.classList.add('aktiv');
}

if (hamburger && mobilMeny) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobilMeny.classList.contains('åpen')) {
      lukkMeny();
    } else {
      åpneMeny();
    }
  });

  // Lukk ved klikk på lenke
  mobilMeny.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', lukkMeny);
  });

  // Lukk ved klikk utenfor
  document.addEventListener('click', (e) => {
    if (mobilMeny.classList.contains('åpen') &&
        !mobilMeny.contains(e.target) &&
        !hamburger.contains(e.target)) {
      lukkMeny();
    }
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
