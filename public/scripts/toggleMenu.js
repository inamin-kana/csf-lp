document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menuButton');

  if(menuButton) {
    menuButton.addEventListener('click', () => {
      document.body.classList.toggle('-navOpen');
    });
  }
});
