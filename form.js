const form = document.getElementById('form');
const buttonWrapper = document.querySelector('.button-wrapper');
const emailValue = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailValue.value !== emailValue.value.toLowerCase()) {
    if (!document.querySelector('.error')) {
      const errorMessage = document.createElement('p');
      errorMessage.innerText = 'Please submit your email in lowercase';
      buttonWrapper.appendChild(errorMessage);
      errorMessage.classList.add('error');
    }
  } else {
    form.submit();
  }
});