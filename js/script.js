// Portafolio - Rodrigo Peña León
document.addEventListener('DOMContentLoaded', () => {
  // Año del footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Navbar con scroll
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');
  const onScroll = () => {
    const top = window.scrollY > 40;
    navbar.classList.toggle('scrolled', top);
    scrollTop.classList.toggle('show', top);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menú hamburguesa móvil
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const toggleMenu = (force) => {
    const open = typeof force === 'boolean' ? force : !navLinks.classList.contains('open');
    navLinks.classList.toggle('open', open);
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };
  navToggle.addEventListener('click', () => toggleMenu());
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Efecto máquina de escribir
  const roles = [
    'Técnico en Programación Computacional',
    'Desarrollador de Software',
    'Desarrollador Web',
    'Especialista en Soporte Técnico',
  ];
  const typed = document.getElementById('typed');
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typed.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
      setTimeout(type, 70);
    } else {
      charIndex--;
      typed.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 35);
    }
  };
  setTimeout(type, 500);

  // Animaciones al hacer scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

  // Scroll suave para anclas (fallback para navegadores sin scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Botón volver arriba
  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});