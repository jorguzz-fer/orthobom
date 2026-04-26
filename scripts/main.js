(() => {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('menu-principal');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });

    nav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  const yearEl = document.getElementById('ano');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
