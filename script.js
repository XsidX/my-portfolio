let hamburgerMenu= document.getElementById('hamburger-menu')
let mobileMenu= document.getElementById('menu-wrapper')
let menuClose= document.getElementById('menu-close')

function toggleMobileMenu(element) {
  element.addEventListener('click', e => {
    mobileMenu.classList.toggle('display-none')
  })
}

toggleMobileMenu(hamburgerMenu);
toggleMobileMenu(menuClose)

