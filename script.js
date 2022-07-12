const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('menu-wrapper');
const menuClose = document.getElementById('menu-close');
const menuLinks = document.querySelectorAll('.menu-link');
const header = document.querySelector('.header-container');

function toggleMobileMenu(element) {
  element.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('display-none');
    header.classList.toggle('display-none');
    header.classList.toggle('position-fixed');
    document.body.classList.toggle('no-scroll');

    e.preventDefault();
  });
}

toggleMobileMenu(hamburgerMenu);
toggleMobileMenu(menuClose);

menuLinks.forEach((link) => {
  toggleMobileMenu(link);
});
