const form = document.getElementById('form');
const buttonWrapper = document.querySelector('.button-wrapper');
const emailValue = document.getElementById('email');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

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
const formInput = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  message: document.getElementById('message').value,
}

localStorage.setItem(JSON.stringify(formInput));

const isInputChange = (input) => {
  input.addEventListener('change', (e) => {
    formInput[input] = e.target.value;
    console.log('works')
  })
}

isInputChange(nameInput)
console.log(formInput)