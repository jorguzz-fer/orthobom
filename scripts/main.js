(() => {
  'use strict';

  // Menu mobile
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu-principal');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const aberto = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(aberto));
      toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  // Carrossel do hero
  const slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  const dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dots button'));
  let atual = 0;
  let timer = null;

  function mostrar(i) {
    atual = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === atual));
    dots.forEach((d, k) => d.classList.toggle('is-active', k === atual));
  }
  function iniciar() {
    clearInterval(timer);
    if (slides.length > 1) timer = setInterval(() => mostrar(atual + 1), 6000);
  }
  dots.forEach((d, i) => d.addEventListener('click', () => { mostrar(i); iniciar(); }));
  if (slides.length) iniciar();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearInterval(timer); else iniciar();
  });

  // FAQ
  document.querySelectorAll('.faq-item').forEach((item) => {
    const botao = item.querySelector('.faq-q');
    const sinal = item.querySelector('.faq-sign');
    if (!botao) return;
    botao.addEventListener('click', () => {
      const aberto = item.classList.toggle('is-open');
      botao.setAttribute('aria-expanded', String(aberto));
      if (sinal) sinal.textContent = aberto ? '–' : '+';
    });
  });

  // Ano no rodapé
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
