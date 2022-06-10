const mainContainer = document.querySelector('.main-container');
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('menu-wrapper');
const menuClose = document.getElementById('menu-close');
const menuLinks = document.querySelectorAll('.menu-link');
const header = document.querySelector('.header-container');

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}

function toggleScroll() {
  if (mainContainer.classList.contains('no-scroll')) {
    mainContainer.addEventListener('wheel', preventScroll);
  }
}

function toggleMobileMenu(element) {
  element.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('display-none');
    header.classList.toggle('display-none');
    header.classList.toggle('position-fixed');
    mainContainer.classList.toggle('no-scroll');
    toggleScroll();
  });
}

toggleMobileMenu(hamburgerMenu);
toggleMobileMenu(menuClose);

menuLinks.forEach((link) => {
  toggleMobileMenu(link);
});
