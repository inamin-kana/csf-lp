document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.header__navLink');
  const offset = 0;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });

      document.body.classList.remove('-navOpen');
    });
  });
});
