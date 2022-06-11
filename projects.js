const projectButton = document.querySelectorAll('.project-content .btn');
const closeButton =  document.querySelector('.popup-close');
const popup = document.getElementById('project-popup');

function togglePopup(element) {
  element.addEventListener('click', () => {
    popup.classList.toggle('display-none');
    header.classList.toggle('display-none');
    header.classList.toggle('position-fixed');
  });
}

projectButton.forEach((btn) => {
  togglePopup(btn);
});
togglePopup(closeButton);

