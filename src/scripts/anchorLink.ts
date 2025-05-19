document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.header__navLink');
  const offset = 0;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = (link as HTMLAnchorElement).getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });

      document.body.classList.remove('-navOpen');
    });
  });
});
